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

console.log("Iniciando Auditoría de Autoridad Externa (Fase 4)...");

const entityConfigPath = path.join(__dirname, '../src/config/entity.ts');
assert(fs.existsSync(entityConfigPath), "Debe existir src/config/entity.ts");

if (fs.existsSync(entityConfigPath)) {
  const content = fs.readFileSync(entityConfigPath, 'utf8');
  assert(content.includes('sameAs'), "El archivo entity.ts debe considerar la propiedad sameAs");
}

const queriesPath = path.join(__dirname, '../tests/ai-presence-queries.json');
assert(fs.existsSync(queriesPath), "Debe existir tests/ai-presence-queries.json");

if (errors > 0) {
  console.error(`\n🚨 Auditoría fallida con ${errors} errores.`);
  process.exit(1);
} else {
  console.log(`\n🎉 Auditoría de autoridad completada con éxito.`);
  process.exit(0);
}
