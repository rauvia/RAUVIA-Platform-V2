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

console.log("Iniciando Auditoría de Observabilidad y Experimentos (Fase 5)...");

const dataFiles = [
  'llmo-citations.json',
  'entity-errors.json',
  'llmo-experiments.json',
  'llmo-change-log.json'
];

dataFiles.forEach(file => {
  const filePath = path.join(__dirname, '../data', file);
  assert(fs.existsSync(filePath), `Debe existir data/${file}`);
  
  if (fs.existsSync(filePath)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      assert(Array.isArray(parsed), `El archivo ${file} debe ser un array JSON válido`);
    } catch (e) {
      assert(false, `El archivo ${file} contiene JSON inválido: ${e.message}`);
    }
  }
});

const queriesPath = path.join(__dirname, '../tests/ai-presence-queries.json');
assert(fs.existsSync(queriesPath), "Debe existir tests/ai-presence-queries.json");

if (errors > 0) {
  console.error(`\n🚨 Auditoría fallida con ${errors} errores.`);
  process.exit(1);
} else {
  console.log(`\n🎉 Auditoría LLMO completada con éxito.`);
  process.exit(0);
}
