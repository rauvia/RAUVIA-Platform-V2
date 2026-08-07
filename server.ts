import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { FALLBACK_POSTS } from './src/data/fallbackPosts';

let cachedPosts: any[] = FALLBACK_POSTS;
let lastFetchTime = 0;
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes cache

async function fetchWPPosts(slug?: string) {
  const wpBase = process.env.VITE_WORDPRESS_API_URL || 'https://blog.rauvia.com.mx/wp-json/wp/v2';
  const wpUrl = slug
    ? `${wpBase}/posts?slug=${encodeURIComponent(slug)}&_embed&status=publish`
    : `${wpBase}/posts?_embed&status=publish`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const wpRes = await fetch(wpUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (wpRes.ok) {
      const data = await wpRes.json();
      if (Array.isArray(data) && data.length > 0) {
        if (!slug) {
          cachedPosts = data;
          lastFetchTime = Date.now();
        }
        return data;
      }
    }
  } catch (err: any) {
    // Quietly catch network / DNS resolution errors without throwing
  }

  // Fallback to cache or hardcoded fallback
  if (slug) {
    const match = cachedPosts.find((p: any) => p.slug === slug);
    return match ? [match] : [];
  }
  return cachedPosts;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // WP Posts Proxy Route
  app.get('/api/wp/posts', async (req, res) => {
    const slug = req.query.slug as string | undefined;
    const posts = await fetchWPPosts(slug);
    res.json(posts);
  });

  // LLM / LLMO API Endpoint
  // Prepared for Gemini API integration with RAUVIA context
  app.post('/api/llm', async (req, res) => {
    try {
      const { prompt } = req.body;
      
      // In a real implementation, you would:
      // 1. Initialize GoogleGenAI with process.env.GEMINI_API_KEY
      // 2. Inject RAUVIA's business context as system instructions
      // 3. Call the model and return the response

      const mockResponse = {
        status: "success",
        message: "RAUVIA Consulting LLM Endpoint active.",
        received_prompt: prompt,
        injected_context: "Consultoría & Desarrollo Tecnológico. Especialistas en activos digitales, sistemas comerciales y automatización.",
        action: "Connect Gemini SDK here to process prompt with context."
      };

      res.json(mockResponse);
    } catch (error) {
      console.error('LLM API Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    
    // Serve static files
    app.use(express.static(distPath, { extensions: ['html'] }));
    
    // Serve prerendered routes if they exist, or fallback to index
    const knownRoutes = ['/', '/nosotros', '/soluciones', '/aethryon', '/recursos'];
    app.get('*', (req, res) => {
      if (knownRoutes.includes(req.path) || req.path.startsWith('/recursos/')) {
        res.sendFile(path.join(distPath, 'index.html'));
      } else {
        res.status(404).sendFile(path.join(distPath, '404.html'), (err) => {
          if (err) res.status(404).sendFile(path.join(distPath, 'index.html'));
        });
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`RAUVIA Server running on http://localhost:${PORT}`);
  });
}

startServer();
