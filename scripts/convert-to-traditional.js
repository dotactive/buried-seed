const OpenCC = require('opencc-js');
const fs = require('fs');
const path = require('path');

const converter = OpenCC.Converter({ from: 'cn', to: 'tw' });

const txtFiles = [
  '01-潘多拉魔盒.txt',
  '02-屠牛老师.txt',
  '03-梦境.txt',
  '04-深渊的凝望.txt',
  '05-铃声.txt',
  '06-穿越.txt',
  '07-梦的解析.txt',
  '08-两个虱子.txt',
  '09-停了吧.txt',
  '10-木头箱子.txt',
  '11-债.txt'
];

txtFiles.forEach(file => {
  const inputPath = path.join(__dirname, file);
  const outputPath = path.join(__dirname, 'tn', file);

  const content = fs.readFileSync(inputPath, 'utf8');
  const converted = converter(content);

  fs.writeFileSync(outputPath, converted, 'utf8');
  console.log(`Converted: ${file}`);
});

console.log('All files converted successfully!');
