const fs = require('fs');
const path = require('path');

// Função para verificar se Sharp está disponível
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ Sharp não está instalado. Execute: npm install sharp');
  process.exit(1);
}

// Configurações
const QUALITY = 80;
const INPUT_DIR = path.join(__dirname, '../public/images');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

// Função para converter imagem para WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ 
        quality: QUALITY, 
        effort: 6,
        lossless: false 
      })
      .toFile(outputPath);
    
    console.log(`✅ Convertido: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    
    // Mostra economia de espaço
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    console.log(`   📊 Economia: ${savings}% (${(originalSize/1024).toFixed(1)}KB -> ${(webpSize/1024).toFixed(1)}KB)`);
    
  } catch (error) {
    console.error(`❌ Erro ao converter ${inputPath}:`, error.message);
  }
}

// Função para processar diretório recursivamente
async function processDirectory(dir) {
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      
      if (!fs.existsSync(fullPath)) {
        continue;
      }
      
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Processar subdiretório
        await processDirectory(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        
        if (SUPPORTED_FORMATS.includes(ext)) {
          const webpPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          
          // Só converte se o WebP não existir ou se for mais antigo
          if (!fs.existsSync(webpPath) || stat.mtime > fs.statSync(webpPath).mtime) {
            await convertToWebP(fullPath, webpPath);
          } else {
            console.log(`⏭️  Pulando: ${item} (WebP já existe e está atualizado)`);
          }
        }
      }
    }
  } catch (error) {
    console.error(`❌ Erro ao processar diretório ${dir}:`, error.message);
  }
}

// Função principal
async function main() {
  console.log('🚀 Iniciando conversão para WebP...\n');
  console.log(`📁 Diretório: ${INPUT_DIR}`);
  console.log(`🎯 Qualidade: ${QUALITY}`);
  console.log(`📝 Formatos suportados: ${SUPPORTED_FORMATS.join(', ')}\n`);
  
  if (!fs.existsSync(INPUT_DIR)) {
    console.error(`❌ Diretório não encontrado: ${INPUT_DIR}`);
    console.log('💡 Criando diretório de imagens...');
    fs.mkdirSync(INPUT_DIR, { recursive: true });
    console.log('📁 Diretório criado! Adicione suas imagens em:', INPUT_DIR);
    return;
  }
  
  const startTime = Date.now();
  
  try {
    await processDirectory(INPUT_DIR);
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log(`\n✨ Conversão concluída em ${duration}s`);
    console.log('💡 Dica: Use o componente OptimizedImage para aproveitar as imagens WebP!');
    
  } catch (error) {
    console.error('❌ Erro durante a conversão:', error);
    process.exit(1);
  }
}

main();