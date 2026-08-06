import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootPath = path.resolve(__dirname, '..');
const distPath = path.join(rootPath, 'dist');

const routes = [
  '/',
  '/nosotros',
  '/soluciones',
  '/aethryon',
  '/recursos',
  '/404'
];

async function startServer() {
  const app = express();
  app.use(express.static(distPath));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });

  return new Promise((resolve) => {
    const server = app.listen(0, () => resolve(server));
  });
}

async function prerender() {
  console.log('Starting prerender process...');
  const server = await startServer();
  const port = server.address().port;
  const baseUrl = `http://localhost:${port}`;

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const route of routes) {
    console.log(`Prerendering ${route}...`);
    const page = await browser.newPage();
    await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0' });
    
    // Get HTML content
    const html = await page.content();
    
    // Save to dist
    const filePath = route === '/' 
      ? path.join(distPath, 'index.html') 
      : route === '/404'
        ? path.join(distPath, '404.html')
        : path.join(distPath, route, 'index.html');
        
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, html);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('Prerender complete.');
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
