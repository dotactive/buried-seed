const OpenCC = require('opencc-js');
const fs = require('fs');
const path = require('path');

const converter = OpenCC.Converter({ from: 'cn', to: 'tw' });

const cnDir = path.join(__dirname, '..', 'cn');
const twDir = path.join(__dirname, '..', 'tw');

// Ensure tw directory exists
if (!fs.existsSync(twDir)) {
  fs.mkdirSync(twDir, { recursive: true });
}

// Get all txt files from cn directory
const cnFiles = fs.readdirSync(cnDir).filter(file => file.endsWith('.txt'));

// Convert cn files to tw
cnFiles.forEach(file => {
  const inputPath = path.join(cnDir, file);
  const outputPath = path.join(twDir, file);

  const content = fs.readFileSync(inputPath, 'utf8');
  const converted = converter(content);

  fs.writeFileSync(outputPath, converted, 'utf8');
  console.log(`Converted: ${file}`);
});

// Remove files in tw that don't exist in cn
const twFiles = fs.readdirSync(twDir).filter(file => file.endsWith('.txt'));
twFiles.forEach(file => {
  if (!cnFiles.includes(file)) {
    const filePath = path.join(twDir, file);
    fs.unlinkSync(filePath);
    console.log(`Removed: ${file}`);
  }
});

console.log('All files synced successfully!');
