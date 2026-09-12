const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'thais-mello-decoracoes-final.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// ── Find the festas section opening ───────────────────────────────────────────
const festasOpen = html.indexOf('<section id="festas-casamento"');
if (festasOpen === -1) { console.error('festas section not found'); process.exit(1); }

// The block to replace runs from the <section ...> tag through the closing </div>
// of the features-grid block and its following gallery-section-label.
// Strategy: replace from after <section id="festas-casamento" class="section">
// through the end of </div><!-- features-grid -->, keeping everything after.

// Find where the old inner content starts (right after the opening section tag)
const sectionTagEnd = html.indexOf('>', festasOpen) + 1; // end of <section ...>

// Find the end of the features-grid div — find </div> that closes .features-grid
// The features-grid starts with: <div class="features-grid"
const featGridStart = html.indexOf('<div class="features-grid"', festasOpen);
if (featGridStart === -1) { console.error('features-grid not found'); process.exit(1); }

// Walk forward to find its closing </div> (4 child divs + 1 wrapper = depth 1 here)
let depth = 0;
let pos = featGridStart;
let featGridEnd = -1;
while (pos < html.length) {
  const openIdx  = html.indexOf('<div', pos + 1);
  const closeIdx = html.indexOf('</div>', pos + 1);
  if (closeIdx === -1) break;
  if (openIdx !== -1 && openIdx < closeIdx) { depth++; pos = openIdx; }
  else {
    if (depth === 0) { featGridEnd = closeIdx + '</div>'.length; break; }
    depth--;
    pos = closeIdx;
  }
}
if (featGridEnd === -1) { console.error('features-grid close not found'); process.exit(1); }

console.log('features-grid ends at:', featGridEnd);
console.log('Context after features-grid:', html.slice(featGridEnd, featGridEnd + 120));

// ── New header block matching site pattern ────────────────────────────────────
const newHeader = `<section id="festas-casamento">
    <div class="wrap">
      <div class="sec-head reveal">
        <span class="eyebrow">Recepção &amp; Festa</span>
        <h2>Mesas, aéreos florais e ambientes que fazem a festa virar memória.</h2>
        <p>Cada recepção que assinamos é uma narrativa singular — do aéreo floral suspenso à mesa de bolo cuidadosamente composta, dos arranjos que conversam com a paleta do casal aos detalhes que os convidados levam para sempre. Atendemos Franca, Ribeirão Preto e toda a região com dedicação exclusiva ao sonho de cada noiva.</p>
      </div>`;

// Replace: old section open tag + old inner header (eyebrows, h2, section-sub, features-grid)
// with the new header block up through the sec-head close
const oldBlock = html.slice(festasOpen, featGridEnd);
html = html.slice(0, festasOpen) + newHeader + html.slice(featGridEnd);

// ── Now fix the gallery-section-label h3s to match site style ─────────────────
// Replace class="gallery-section-label" headings with <div class="gallery-subhead reveal">
// pattern matching centros section

// Replace first gallery-section-label (Mesas de Bolo...)
html = html.replace(
  '<h3 class="gallery-section-label">Mesas de Bolo &amp; Aéreos Florais</h3>',
  `<div class="gallery-subhead reveal" style="margin-top:48px; margin-bottom:20px;">
        <span class="chip" style="display:inline-block; margin-bottom:10px;">Galeria I</span>
        <h3 style="font-family:'Bodoni Moda', serif; font-size:24px; color:var(--gold-bright); font-weight:500; margin-bottom:6px;">Mesas de Bolo &amp; Aéreos Florais</h3>
      </div>`
);

// Replace second gallery-section-label (Ambientações...)
html = html.replace(
  '<h3 class="gallery-section-label" style="margin-top:4rem">Ambientações, Lounges &amp; Detalhes</h3>',
  `<div class="gallery-subhead reveal" style="margin-top:48px; margin-bottom:20px;">
        <span class="chip" style="display:inline-block; margin-bottom:10px;">Galeria II</span>
        <h3 style="font-family:'Bodoni Moda', serif; font-size:24px; color:var(--gold-bright); font-weight:500; margin-bottom:6px;">Ambientações, Lounges &amp; Detalhes</h3>
      </div>`
);

// ── Fix the CTA block to use wrap consistently ─────────────────────────────────
// Replace the section-cta div style with site-matching wrap closer
html = html.replace(
  `<div class="section-cta" style="margin-top:4rem;text-align:center">
      <p style="color:var(--ink-soft);margin-bottom:1.5rem;font-size:1.05rem">
        Pronta para transformar a sua festa de casamento em uma experiência inesquecível?
      </p>
      <a href="#contato" class="btn-gold">Solicitar Orçamento</a>
    </div>`,
  `<div class="cta-row reveal" style="margin-top:4rem;text-align:center">
        <p style="color:var(--ink-soft);margin-bottom:1.5rem;font-size:1.05rem">
          Pronta para transformar a sua festa de casamento em uma experiência inesquecível?
        </p>
        <a href="#contato" class="btn btn-primary">Solicitar Orçamento</a>
      </div>`
);

// ── Fix closing tags: old section used <div class="container"> ─────────────────
// The container close div that we left behind after the CTA needs to become the wrap close
// Find the </div>\n</section> right after the CTA row inside festas
// The old structure was: container > [header] + [galleries] + [cta] + </div></section>
// New structure should be: [section] > wrap > sec-head + galleries + cta + </div></section>

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('\n✓ Festas section header updated to match site typography pattern.');
console.log('File size:', (html.length / 1024).toFixed(0), 'KB');
