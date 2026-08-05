import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

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
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`RAUVIA Server running on http://localhost:${PORT}`);
  });
}

startServer();
