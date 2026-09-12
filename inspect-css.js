const fs = require('fs');
const html = fs.readFileSync('thais-mello-decoracoes-final.html', 'utf8');

// Check all media queries currently in HTML
const mqMatches = html.match(/@media[^{]+\{/g) || [];
console.log('Current Media Queries in CSS:');
mqMatches.forEach(mq => console.log('  ', mq.trim()));

// Check overflow risk elements (fixed widths, min-widths, tables, nowrap, etc)
const nowrapMatches = html.match(/[^{};]+white-space:\s*nowrap[^{};]*/gi) || [];
console.log('\nNowrap rules count:', nowrapMatches.length);

const widthMatches = html.match(/[^{};]+width:\s*\d+px[^{};]*/gi) || [];
console.log('Fixed width (px) rules count:', widthMatches.length);
console.log('Fixed width examples:', widthMatches.slice(0, 10));
