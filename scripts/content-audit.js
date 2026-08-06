import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let errors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    errors++;
  } else {
    console.log(`✅ PASSED: ${message}`);
  }
}

console.log("Iniciando Auditoría de Contenido (Fase 3)...");

const llmsFullPath = path.join(__dirname, '../public/llms-full.txt');
assert(fs.existsSync(llmsFullPath), "Debe existir public/llms-full.txt para resúmenes RAG");

if (fs.existsSync(llmsFullPath)) {
  const content = fs.readFileSync(llmsFullPath, 'utf8');
  assert(content.includes('Glosario'), "llms-full.txt debe incluir el Glosario y FAQ");
}

const testQuestionsPath = path.join(__dirname, '../tests/content-retrieval-questions.json');
assert(fs.existsSync(testQuestionsPath), "Debe existir tests/content-retrieval-questions.json");

const sitemapScriptPath = path.join(__dirname, 'generate-sitemap.js');
if (fs.existsSync(sitemapScriptPath)) {
  const content = fs.readFileSync(sitemapScriptPath, 'utf8');
  assert(content.includes('status=publish'), "generate-sitemap.js debe excluir borradores (status=publish)");
}

if (errors > 0) {
  console.error(`\n🚨 Auditoría fallida con ${errors} errores.`);
  process.exit(1);
} else {
  console.log(`\n🎉 Auditoría de contenido completada con éxito.`);
  process.exit(0);
}
