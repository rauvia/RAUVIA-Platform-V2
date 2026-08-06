import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');
const publicPath = path.resolve(__dirname, '../public');

let errors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    errors++;
  } else {
    console.log(`✅ PASSED: ${message}`);
  }
}

console.log("Iniciando Auditoría SEO local...");

// 1. Robots.txt
const robotsExists = fs.existsSync(path.join(publicPath, 'robots.txt'));
assert(robotsExists, "robots.txt debe existir en public/");

if (robotsExists) {
  const content = fs.readFileSync(path.join(publicPath, 'robots.txt'), 'utf8');
  assert(content.includes('User-agent: OAI-SearchBot'), "robots.txt debe permitir OAI-SearchBot");
  assert(content.includes('Sitemap:'), "robots.txt debe declarar el Sitemap");
}

// 2. Sitemap XML (revisar si existe el script y si se ejecutará en build)
const sitemapScriptExists = fs.existsSync(path.join(__dirname, 'generate-sitemap.js'));
assert(sitemapScriptExists, "El script generador de sitemap debe existir");

// 3. LLMs.txt
const llmsExists = fs.existsSync(path.join(publicPath, 'llms.txt'));
assert(llmsExists, "llms.txt debe existir en public/");

// 4. Prerendering y 404 setup en package.json y server.ts
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
assert(pkg.scripts.build.includes('prerender.js'), "El build debe incluir el prerender");

const serverTs = fs.readFileSync(path.join(__dirname, '../server.ts'), 'utf8');
assert(serverTs.includes('404.html'), "server.ts debe enviar status 404 para rutas desconocidas");

if (errors > 0) {
  console.error(`\n🚨 Auditoría fallida con ${errors} errores.`);
  process.exit(1);
} else {
  console.log(`\n🎉 Auditoría completada con éxito. Listo para Fase 2.`);
  process.exit(0);
}
