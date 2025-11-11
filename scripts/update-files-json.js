const fs = require('fs');
const path = require('path');

// Update files.json for EN folder
const enPath = './en';
const enFiles = fs.readdirSync(enPath).filter(file => file.endsWith('.txt'));
const enJson = JSON.stringify({ files: enFiles }, null, 2);
fs.writeFileSync(path.join(enPath, 'files.json'), enJson);
console.log('en/files.json updated successfully.');

// Update files.json for CN folder
const cnPath = './cn';
const cnFiles = fs.readdirSync(cnPath).filter(file => file.endsWith('.txt'));
const cnJson = JSON.stringify({ files: cnFiles }, null, 2);
fs.writeFileSync(path.join(cnPath, 'files.json'), cnJson);
console.log('cn/files.json updated successfully.');

// Update files.json for TW folder
const twPath = './tw';
const twFiles = fs.readdirSync(twPath).filter(file => file.endsWith('.txt'));
const twJson = JSON.stringify({ files: twFiles }, null, 2);
fs.writeFileSync(path.join(twPath, 'files.json'), twJson);
console.log('tw/files.json updated successfully.');
