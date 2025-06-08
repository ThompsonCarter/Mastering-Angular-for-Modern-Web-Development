const fs = require('fs');
const tokens = JSON.parse(fs.readFileSync('tokens.json', 'utf8'));
let scss = ':root {\n';
Object.entries(tokens.color).forEach(([key, value]) => {
  scss += `  --color-${key}: ${value};\n`;
});
scss += '}';
fs.writeFileSync('src/_tokens.scss', scss);