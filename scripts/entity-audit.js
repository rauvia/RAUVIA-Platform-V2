import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.resolve(__dirname, '../src');

let errors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    errors++;
  } else {
    console.log(`✅ PASSED: ${message}`);
  }
}

console.log("Iniciando Auditoría de Entidades (Fase 2)...");

// 1. Verificación de Data de Entidad Centralizada
const entityConfigPath = path.join(srcPath, 'config/entity.ts');
assert(fs.existsSync(entityConfigPath), "Debe existir src/config/entity.ts");

if (fs.existsSync(entityConfigPath)) {
  const content = fs.readFileSync(entityConfigPath, 'utf8');
  assert(content.includes('RAUVIA CONSULTORIA Y DESARROLLO TECNOLOGICO'), "Debe incluir la razón social oficial");
  assert(content.includes('Raúl Morales'), "Debe incluir al fundador");
  assert(content.includes('AETHRYON'), "Debe incluir la entidad AETHRYON");
  assert(content.includes('https://rauvia.com.mx/#organization'), "Debe definir ID para Organization");
}

// 2. Verificación de JsonLd.tsx
const jsonLdPath = path.join(srcPath, 'components/JsonLd.tsx');
assert(fs.existsSync(jsonLdPath), "Debe existir src/components/JsonLd.tsx");
if (fs.existsSync(jsonLdPath)) {
  const content = fs.readFileSync(jsonLdPath, 'utf8');
  assert(content.includes('Organization') || content.includes('ENTITIES.organization'), "JsonLd debe incluir Organization");
}

// 3. Verificación del llms.txt actualizado
const llmsPath = path.join(__dirname, '../public/llms.txt');
if (fs.existsSync(llmsPath)) {
  const content = fs.readFileSync(llmsPath, 'utf8');
  assert(content.includes('RAUVIA CONSULTORIA Y DESARROLLO TECNOLOGICO'), "llms.txt debe tener la razón social");
  assert(!content.includes('agencia de marketing'), "llms.txt no debe identificarla erróneamente como agencia de marketing");
}

if (errors > 0) {
  console.error(`\n🚨 Auditoría fallida con ${errors} errores.`);
  process.exit(1);
} else {
  console.log(`\n🎉 Auditoría de entidades completada con éxito.`);
  process.exit(0);
}
