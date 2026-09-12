const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'thais-mello-decoracoes-final.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const imgDir = path.join(__dirname, 'assets', 'festas-casamento');

// Map each file to title + description
const photos = [
  {
    file: 'WhatsApp Image 2026-09-10 at 19.11.56.jpeg',
    title: 'Mesa de Bolo & Doces',
    desc: 'Cascata de flores brancas sobre mesa ripada — romantismo e sofisticação em cada detalhe.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.13.52.jpeg',
    title: 'Salão Nobre com Aéreo Floral',
    desc: 'Teto de madeira, mesas espelhadas douradas, bolo de 5 andares e aéreo floral com microlâmpadas.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.13.53.jpeg',
    title: 'Mesa Ripada em Madeira Nobre',
    desc: 'Lustres pendentes de palha, arranjos em vasos verde oliva e uma mesa de doces inesquecível.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.15.02.jpeg',
    title: 'Mesa Rústica com Flores Terrosas',
    desc: 'Teto verde natural, lâmpadas filamento e rosas em tons terrosos criam atmosfera intimista e calorosa.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.15.27.jpeg',
    title: 'Mesa Provençal Lilás',
    desc: 'Aéreo floral com flores brancas, bolo em 5 andares e arranjos lilás que evocam pura delicadeza.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.15.28.jpeg',
    title: 'Lounge Chesterfield',
    desc: 'Sofás capitonê brancos, vegetação exuberante e arranjo central criam salão lounge de luxo.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.16.21.jpeg',
    title: 'Mesa Entalhada Dourada',
    desc: 'Mesa com detalhes dourados entalhados, aéreo floral em rose e lâmpadas Edison para um clima encantador.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.18.09.jpeg',
    title: 'Mesa Rústica com Aéreo Branco',
    desc: 'Painel de madeira, aéreo floral em flores brancas pendentes, velas douradas e bolo clássico com lanternas.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.18.09(1).jpeg',
    title: 'Detalhes do Bolo & Escultura',
    desc: 'Close no bolo com renda, flores frescas, escultura de casal em bronze e cristaleira delicada.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.18.10.jpeg',
    title: 'Estante de Lembranças',
    desc: 'Estante em madeira maciça com lembranças personalizadas, fotos e arranjos de samambaias — charme atemporal.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.19.35.jpeg',
    title: 'Mesa Dupla com Aéreo Branco',
    desc: 'Conjunto de mesas em madeira, flores brancas e pink, lanternas rústicas e bolas de vime estruturadas.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.20.31.jpeg',
    title: 'Mesa Espelhada com Copo-de-Leite',
    desc: 'Mesa redonda espelhada, copos-de-leite elegantes, pendentes Edison e aéreo floral em cascata branca.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.20.32.jpeg',
    title: 'Decoração Campestre Intimista',
    desc: 'Ambiente rústico ao ar livre com arranjos coloridos, detalhes em palha e iluminação natural pura.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.21.35.jpeg',
    title: 'Mesa de Bolo em Rosa & Dourado',
    desc: 'Mesa clássica com arranjos exuberantes em tons rosa, dourado e cristal — elegância que encanta.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.21.36.jpeg',
    title: 'Salão com Aéreo & Espelhos',
    desc: 'Grande salão com teto floral suspenso, mesas espelhadas e iluminação âmbar que envolve os convidados.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 19.21.37.jpeg',
    title: 'Recepção com Lustre Floral',
    desc: 'Vista panorâmica do salão com lustre floral central, mesas postas e flores em rosa e branco por toda parte.'
  }
];

// Convert each photo to base64
function toBase64(filePath) {
  const buf = fs.readFileSync(filePath);
  return 'data:image/jpeg;base64,' + buf.toString('base64');
}

console.log('Converting images to base64...');
const photoData = photos.map(p => {
  const fullPath = path.join(imgDir, p.file);
  if (!fs.existsSync(fullPath)) {
    console.warn('  MISSING:', p.file);
    return null;
  }
  const b64 = toBase64(fullPath);
  console.log('  OK:', p.file);
  return { ...p, b64 };
}).filter(Boolean);

// Build gallery items HTML
function galleryItems(items) {
  return items.map((p, i) => `
          <div class="gallery-item${i === 0 ? ' active' : ''}">
            <img src="${p.b64}" alt="${p.title}" loading="lazy">
            <div class="gallery-caption">
              <h4>${p.title}</h4>
              <p>${p.desc}</p>
            </div>
          </div>`).join('');
}

const gallery1Items = photoData.slice(0, 8);
const gallery2Items = photoData.slice(8);

const sectionHtml = `
<!-- ══════════════════════════════════════════════════════════
     FESTAS DE CASAMENTO
══════════════════════════════════════════════════════════ -->
<section id="festas-casamento" class="section">
  <div class="container">

    <p class="section-eyebrow">Recepção & Festa</p>
    <h2 class="section-title">Festas de Casamento</h2>
    <p class="section-sub">
      Cada festa de casamento que criamos é uma obra singular — uma narrativa visual que começa no aéreo floral suspenso,
      passa pela mesa de bolo e doces cuidadosamente composta, percorre os arranjos que conversam com a paleta do casal
      e termina nos pequenos detalhes que os convidados levarão para sempre na memória.
      Atendemos Franca, Ribeirão Preto e toda a região com dedicação exclusiva ao sonho de cada noiva.
    </p>

    <!-- Feature cards -->
    <div class="features-grid" style="margin-bottom:4rem">
      <div class="feature-card">
        <div class="feature-icon">✦</div>
        <h3>Aéreos Florais Suspensos</h3>
        <p>Tetos transformados em jardins etéreos — flores e folhagens penduradas que criam o cenário perfeito para cada foto e cada momento.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">◈</div>
        <h3>Mesas de Bolo & Doces</h3>
        <p>Da mesa rústica ao aparador espelhado, cada composição é pensada para enaltecer o bolo como peça central e acolher os doces com elegância.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">❋</div>
        <h3>Iluminação Cênica</h3>
        <p>Microlâmpadas, pendentes Edison e velas criam temperaturas de luz que transformam o ambiente após o cair da noite em pura magia.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">◆</div>
        <h3>Lounge & Ambientação</h3>
        <p>Sofás capitonê, tapetes e plants tropicais compõem lounges que convidam os convidados a viver o evento — não apenas assisti-lo.</p>
      </div>
    </div>

    <!-- Gallery 1: Mesas de Destaque -->
    <h3 class="gallery-section-label">Mesas de Bolo & Aéreos Florais</h3>
    <div class="gallery" id="gallery-festas-1">
      ${galleryItems(gallery1Items)}
    </div>

    <!-- Gallery 2: Ambientações & Detalhes -->
    <h3 class="gallery-section-label" style="margin-top:4rem">Ambientações, Lounges & Detalhes</h3>
    <div class="gallery" id="gallery-festas-2">
      ${galleryItems(gallery2Items)}
    </div>

    <div class="section-cta" style="margin-top:4rem;text-align:center">
      <p style="color:var(--ink-soft);margin-bottom:1.5rem;font-size:1.05rem">
        Pronta para transformar a sua festa de casamento em uma experiência inesquecível?
      </p>
      <a href="#contato" class="btn-gold">Solicitar Orçamento</a>
    </div>

  </div>
</section>`;

console.log('\nUpdating HTML...');

// 1. Update nav — insert "Festas de Casamento" as first link
// Try to find the nav-links div with the first link being Cerimônia
const navPatterns = [
  // Pattern A: nav-links div with Cerimônia as first item (with various whitespace)
  /(<div[^>]*class="nav-links"[^>]*>[\s\n\r]*?)(<a\s[^>]*#cerimonia[^>]*>)/i,
  // Pattern B: just find the nav and prepend before cerimonia link
  /(<a\s[^>]*href="#cerimonia"[^>]*>)/i
];

let navUpdated = false;
for (const pat of navPatterns) {
  if (pat.test(html)) {
    if (pat.source.includes('nav-links')) {
      html = html.replace(pat, `$1<a href="#festas-casamento">Festas de Casamento</a>\n      $2`);
    } else {
      html = html.replace(pat, `<a href="#festas-casamento">Festas de Casamento</a>\n      $1`);
    }
    navUpdated = true;
    console.log('  Nav updated (pattern matched).');
    break;
  }
}
if (!navUpdated) {
  console.warn('  WARNING: Could not auto-update nav. Please add the nav link manually.');
}

// 2. Insert section right after </header>
const headerTag = '</header>';
const headerPos = html.indexOf(headerTag);
if (headerPos === -1) {
  console.error('ERROR: </header> not found in HTML. Aborting.');
  process.exit(1);
}

// Check it's not already there
if (html.includes('id="festas-casamento"')) {
  console.log('  Section already exists — replacing it...');
  // Remove old section
  html = html.replace(/<!-- ══[^═]*FESTAS DE CASAMENTO[\s\S]*?<\/section>/m, '');
}

const insertAt = html.indexOf(headerTag) + headerTag.length;
html = html.slice(0, insertAt) + '\n' + sectionHtml + '\n' + html.slice(insertAt);

// 3. Inject gallery-section-label style if not present
if (!html.includes('gallery-section-label')) {
  const styleInsert = `
  .gallery-section-label {
    font-family: 'Bodoni Moda', serif;
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    color: var(--gold);
    text-align: center;
    margin-bottom: 1.5rem;
    letter-spacing: .04em;
  }`;
  html = html.replace('</style>', styleInsert + '\n</style>');
}

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('\n✓ Done! thais-mello-decoracoes-final.html updated successfully.');
console.log('  Open http://localhost:3000 to preview.');
