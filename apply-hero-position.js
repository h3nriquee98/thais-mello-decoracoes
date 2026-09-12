const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'thais-mello-decoracoes-final.html');
let content = fs.readFileSync(file, 'utf8');

// Check current hero rule
const heroRegex = /\.hero\s*\{[\s\S]*?justify-content:\s*flex-start;/;
if (!heroRegex.test(content)) {
  console.log('Notice: hero with justify-content: flex-start not found or already changed.');
} else {
  content = content.replace(heroRegex, (match) => {
    return match.replace('justify-content:flex-start;', 'justify-content:flex-end;');
  });
  console.log('Updated .hero to justify-content: flex-end');
}

// Check hero-content margin
const contentRegex = /\.hero-content\s*\{([\s\S]*?)margin:\s*0;/;
if (contentRegex.test(content)) {
  content = content.replace(contentRegex, (match, p1) => {
    return `.hero-content {${p1}margin: 0 0 0 auto;`;
  });
  console.log('Updated .hero-content to margin: 0 0 0 auto');
}

fs.writeFileSync(file, content, 'utf8');
console.log('Hero position updated to the RIGHT.');
