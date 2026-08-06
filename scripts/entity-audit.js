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

console.log("Iniciando Auditoría de Entidades y JSON-LD...");

const entityConfigPath = path.join(__dirname, '../src/config/entity.ts');
assert(fs.existsSync(entityConfigPath), "Debe existir src/config/entity.ts");

const homePagePath = path.join(__dirname, '../src/pages/HomePage.tsx');
const nosotrosPagePath = path.join(__dirname, '../src/pages/NosotrosPage.tsx');
const solucionesPagePath = path.join(__dirname, '../src/pages/SolucionesPage.tsx');
const aethryonPagePath = path.join(__dirname, '../src/pages/AethryonPage.tsx');
const llmsPath = path.join(__dirname, '../public/llms.txt');

if (fs.existsSync(homePagePath)) {
  const content = fs.readFileSync(homePagePath, 'utf8');
  assert(content.includes('RAUVIA_ENTITY'), "HomePage debe importar RAUVIA_ENTITY");
  assert(content.includes('https://rauvia.com.mx/#organization'), "HomePage debe definir el ID estable de Organization");
}

if (fs.existsSync(nosotrosPagePath)) {
  const content = fs.readFileSync(nosotrosPagePath, 'utf8');
  assert(content.includes('AboutPage'), "NosotrosPage debe definir AboutPage");
}

if (fs.existsSync(solucionesPagePath)) {
  const content = fs.readFileSync(solucionesPagePath, 'utf8');
  assert(content.includes('CollectionPage'), "SolucionesPage debe definir CollectionPage");
}

if (fs.existsSync(aethryonPagePath)) {
  const content = fs.readFileSync(aethryonPagePath, 'utf8');
  assert(content.includes('https://rauvia.com.mx/aethryon/#entity'), "AethryonPage debe definir el Thing AETHRYON de forma estable");
}

if (fs.existsSync(llmsPath)) {
  const content = fs.readFileSync(llmsPath, 'utf8');
  assert(content.includes('Raúl Morales'), "llms.txt debe mencionar a Raúl Morales como fundador");
}

if (errors > 0) {
  console.error(`\n🚨 Auditoría fallida con ${errors} errores.`);
  process.exit(1);
} else {
  console.log(`\n🎉 Auditoría de entidades completada con éxito.`);
  process.exit(0);
}
