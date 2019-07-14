const fs = require('fs');

let content = fs.readFileSync('./src/bookmarklet.js', 'utf8');
content = content.replace(/\r?\n\s*/g, '');

fs.writeFileSync('./build/bookmarklet.build.js', content, 'utf8');