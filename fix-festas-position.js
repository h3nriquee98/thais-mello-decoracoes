const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'thais-mello-decoracoes-final.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Step 1: Extract the full Festas de Casamento section (currently before <main>)
const festasCommentStart = html.indexOf('<!-- ══════════════════════════════════════════════════════════\n     FESTAS DE CASAMENTO');
if (festasCommentStart === -1) {
  console.error('ERROR: Festas section comment not found');
  process.exit(1);
}

// Find the </section> that closes the festas section
let depth = 0;
let pos = festasCommentStart;
const sectionOpenIdx = html.indexOf('<section', festasCommentStart);
let festasEnd = -1;

pos = sectionOpenIdx;
while (pos < html.length) {
  const openIdx = html.indexOf('<section', pos + 1);
  const closeIdx = html.indexOf('</section>', pos + 1);
  if (closeIdx === -1) break;
  if (openIdx !== -1 && openIdx < closeIdx) {
    depth++;
    pos = openIdx;
  } else {
    if (depth === 0) {
      festasEnd = closeIdx + '</section>'.length;
      break;
    }
    depth--;
    pos = closeIdx;
  }
}

if (festasEnd === -1) {
  console.error('ERROR: Could not find end of Festas section');
  process.exit(1);
}

console.log(`Festas section: chars ${festasCommentStart} → ${festasEnd}`);

// Extract the festas section HTML (trim surrounding newlines)
const festasHtml = html.slice(festasCommentStart, festasEnd);

// Remove festas section and any surrounding blank lines from its current position
// Include the leading \n before the comment
let removeFrom = festasCommentStart;
while (removeFrom > 0 && html[removeFrom - 1] === '\n') removeFrom--;
html = html.slice(0, removeFrom) + html.slice(festasEnd);

console.log('Removed Festas section from before <main>');

// Step 2: Find the end of the hero section in the updated html
const heroSectionStart = html.indexOf('<section class="hero">');
if (heroSectionStart === -1) {
  console.error('ERROR: hero section not found');
  process.exit(1);
}

// Find closing </section> of hero
depth = 0;
pos = heroSectionStart;
let heroEnd = -1;

while (pos < html.length) {
  const openIdx = html.indexOf('<section', pos + 1);
  const closeIdx = html.indexOf('</section>', pos + 1);
  if (closeIdx === -1) break;
  if (openIdx !== -1 && openIdx < closeIdx) {
    depth++;
    pos = openIdx;
  } else {
    if (depth === 0) {
      heroEnd = closeIdx + '</section>'.length;
      break;
    }
    depth--;
    pos = closeIdx;
  }
}

if (heroEnd === -1) {
  console.error('ERROR: Could not find end of hero section');
  process.exit(1);
}

console.log(`Hero section ends at char: ${heroEnd}`);
console.log('Context after hero:', html.slice(heroEnd, heroEnd + 80));

// Step 3: Insert festas section right after hero's </section>
html = html.slice(0, heroEnd) + '\n\n' + festasHtml + '\n' + html.slice(heroEnd);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('\n✓ Done! Festas de Casamento now appears right after the hero section.');
console.log('File size:', (html.length / 1024).toFixed(0), 'KB');
