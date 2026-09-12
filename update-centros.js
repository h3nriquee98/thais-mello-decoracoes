const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'thais-mello-decoracoes-final.html');
const originalHtml = fs.readFileSync(htmlPath, 'utf8');

const assetsDir = path.join(__dirname, 'assets', 'centros-de-mesa');

function getBase64(filename) {
  const filePath = path.join(assetsDir, filename);
  const data = fs.readFileSync(filePath);
  return `data:image/jpeg;base64,${data.toString('base64')}`;
}

const gallery1Data = [
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.26 (2).jpeg',
    badge: 'Candelabro Imperial',
    title: 'Candelabro Dourado & Cristais',
    desc: 'Pedestal clássico em ouro nobre com cúpula floral exuberante de rosas e folhagens, pingentes de cristal e sousplats perolados.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.25.jpeg',
    badge: 'Copos-de-Leite',
    title: 'Copos-de-Leite em Vaso Flauta',
    desc: 'Linhas puras e esguias sobre base de espelho trabalhado, criando sofisticação e leveza visual na mesa dos convidados.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.27.jpeg',
    badge: 'Design Escultural',
    title: 'Orquídeas Phalaenopsis & Galhos',
    desc: 'Composição vertical contemporânea com orquídeas brancas esculturais e galhos naturais, trazendo modernidade e presença marcante.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.25 (3).jpeg',
    badge: 'Mesa Clássica',
    title: 'Flauta Floral & Cadeiras Tiffany',
    desc: 'Harmonia perfeita entre cadeiras Tiffany douradas, sousplats com borda de pérolas, taças de cristal e numeração personalizada.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.28.jpeg',
    badge: 'Cristal & Arabescos',
    title: 'Vaso Escultural & Alstroemérias',
    desc: 'Taça de vidro trabalhado com alstroemérias brancas, espelho floral com arabescos, sousplats prateados e taças bico de jaca.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.27 (3).jpeg',
    badge: 'Moderno & Orgânico',
    title: 'Eucalipto & Boca-de-Leão',
    desc: 'Hastes verdes frescas de eucalipto e flores brancas em vaso pedestal sobre toalha em jacquard escuro, criando contraste refinado.'
  }
];

const gallery2Data = [
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.26.jpeg',
    badge: 'Jardim ao Ar Livre',
    title: 'Banquete ao Ar Livre & Rattan',
    desc: 'Base em tronco rústico, sousplats trançados em fibra natural, pratos com filete dourado, talheres dourados e menu personalizado.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.25 (2).jpeg',
    badge: 'Frescor Natural',
    title: 'Cilindro com Copos-de-Leite em Água',
    desc: 'Transparência e elegância minimalista com sousplats artesanais de palha, guardanapos de tecido com anel dourado e taças caneladas.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.26 (1).jpeg',
    badge: 'Rústico Chic',
    title: 'Tora de Madeira & Rosa Branca',
    desc: 'Disco de madeira maciça com garrafa de vidro, rosa branca aveludada e folhagens, perfeito para celebrações acolhedoras no campo.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.26 (3).jpeg',
    badge: 'Mesa dos Noivos',
    title: 'Mesa dos Noivos Intimista',
    desc: 'Arranjo exclusivo de alstroemérias brancas e gipsófilas sobre espelho circular, toalha adamascada e papelaria personalizada.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.27 (1).jpeg',
    badge: 'Romântico',
    title: 'Nuvem de Gipsófilas (Mosquitinho)',
    desc: 'Composição com cilindro de vidro e vaso auxiliar repletos de mosquitinho sobre base dourada, criando volume leve e romântico.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.27 (2).jpeg',
    badge: 'Delicadeza',
    title: 'Aquário Floral de Margaridas',
    desc: 'Vaso esférico de vidro com margaridas brancas frescas sobre espelho redondo, proporcionando charme e luminosidade à mesa.'
  },
  {
    file: 'WhatsApp Image 2026-09-10 at 15.02.25 (1).jpeg',
    badge: 'Luz do Dia',
    title: 'Copos-de-Leite & Vista Panorâmica',
    desc: 'Arranjo esguio de copos-de-leite refletindo a luz natural do salão envidraçado, integrando a decoração ao jardim externo.'
  }
];

function buildGalleryItems(data) {
  return data.map(item => {
    const b64 = getBase64(item.file);
    return `        <div class="gallery-item">
          <img src="${b64}" alt="${item.title}">
          <div class="badge">${item.badge}</div>
          <div class="cap"><b>${item.title}</b>${item.desc}</div>
        </div>`;
  }).join('\n');
}

const sectionHtml = `
  <!-- CENTROS DE MESA -->
  <section id="centros-de-mesa">
    <div class="wrap">
      <div class="sec-head reveal">
        <span class="eyebrow">Centros de Mesa & Mesa Posta</span>
        <h2>Onde seus convidados celebram — beleza, afeto e sofisticação em cada lugar.</h2>
        <p>Mais do que um arranjo sobre a toalha, o centro de mesa é o coração visual da recepção. Criamos composições sob medida que equilibram altura, flores naturais selecionadas, sousplats artesanais, cristais e iluminação acolhedora — valorizando o salão e permitindo conversas fluidas sem barreiras visuais.</p>
      </div>

      <div class="table-features reveal">
        <div class="card">
          <div class="card-mark">I</div>
          <h3>Harmonia & Conforto Visual</h3>
          <p>Arranjos projetados na proporção exata do ambiente: peças altas e imponentes que preenchem o pé-direito ou baixas e intimistas, sempre mantendo o contato visual livre entre os convidados.</p>
        </div>
        <div class="card">
          <div class="card-mark">II</div>
          <h3>Flores Naturais Selecionadas</h3>
          <p>Curadoria rigorosa de flores frescas montadas no dia: copos-de-leite nobres, orquídeas phalaenopsis, rosas clássicas, alstroemérias, gipsófilas aéreas e folhagens de eucalipto.</p>
        </div>
        <div class="card">
          <div class="card-mark">III</div>
          <h3>Mesa Posta Completa</h3>
          <p>Composição completa com sousplats em rattan natural ou metal perolado, espelhos bisotados trabalhados, taças de cristal lapidado, castiçais e guardanapos com anéis sofisticados.</p>
        </div>
      </div>

      <div class="gallery-subhead reveal" style="margin-top:48px; margin-bottom:20px;">
        <span class="chip" style="display:inline-block; margin-bottom:10px;">Coleção Clássica & Alta Estatura</span>
        <h3 style="font-family:'Bodoni Moda', serif; font-size:24px; color:var(--gold-bright); font-weight:500; margin-bottom:6px;">Arranjos Altos, Candelabros & Design Escultural</h3>
        <p style="font-size:14.5px; color:var(--ink-soft); line-height:1.5;">Imponência de peças nobres em ouro envelhecido, brilho de cristais, orquídeas e copos-de-leite alongados para recepções marcantes.</p>
      </div>

      <div class="gallery reveal" style="margin-bottom:56px;">
${buildGalleryItems(gallery1Data)}
      </div>

      <div class="gallery-subhead reveal" style="margin-bottom:20px;">
        <span class="chip" style="display:inline-block; margin-bottom:10px;">Coleção Rústico Chic & Intimista</span>
        <h3 style="font-family:'Bodoni Moda', serif; font-size:24px; color:var(--gold-bright); font-weight:500; margin-bottom:6px;">Mesas ao Ar Livre, Madeira Nobre & Delicadeza</h3>
        <p style="font-size:14.5px; color:var(--ink-soft); line-height:1.5;">Bases em toras de madeira maciça, sousplats de fibra trançada, arranjos aquário esféricos, nuvens de mosquitinho e a mesa dos noivos.</p>
      </div>

      <div class="gallery reveal">
${buildGalleryItems(gallery2Data)}
      </div>
    </div>
  </section>
`;

let updatedHtml = originalHtml;

// 1. Update CSS if .table-features not present
if (!updatedHtml.includes('.table-features')) {
  const cssInsert = `
  .table-features{ display:grid; grid-template-columns:repeat(3,1fr); gap:22px; margin-top:28px; }
  @media (max-width:860px){ .table-features{ grid-template-columns:1fr; } }
`;
  updatedHtml = updatedHtml.replace('/* SERVICES */', `${cssInsert}\n  /* SERVICES */`);
}

// 2. Update Nav links
const oldNav = `<div class="nav-links">
      <a href="#cerimonia">Cerimônia</a>
      <a href="#detalhes">Detalhes</a>`;

const newNav = `<div class="nav-links">
      <a href="#cerimonia">Cerimônia</a>
      <a href="#centros-de-mesa">Centros de Mesa</a>
      <a href="#detalhes">Detalhes</a>`;

if (updatedHtml.includes(oldNav)) {
  updatedHtml = updatedHtml.replace(oldNav, newNav);
} else {
  console.log('Warning: oldNav pattern not found exactly, searching alternatives');
  updatedHtml = updatedHtml.replace('<a href="#cerimonia">Cerimônia</a>', '<a href="#cerimonia">Cerimônia</a>\n      <a href="#centros-de-mesa">Centros de Mesa</a>');
}

// 3. Insert the section right after </section> of cerimonia
const cerimoniaEndTag = '</section>';
const cerimoniaPos = updatedHtml.indexOf('<section id="cerimonia">');
if (cerimoniaPos !== -1) {
  const endCerimoniaPos = updatedHtml.indexOf(cerimoniaEndTag, cerimoniaPos) + cerimoniaEndTag.length;
  updatedHtml = updatedHtml.substring(0, endCerimoniaPos) + '\n' + sectionHtml + updatedHtml.substring(endCerimoniaPos);
  console.log('Successfully inserted #centros-de-mesa section after #cerimonia!');
} else {
  console.error('Error: <section id="cerimonia"> not found!');
  process.exit(1);
}

fs.writeFileSync(htmlPath, updatedHtml, 'utf8');
console.log('Updated', htmlPath, 'successfully! Total bytes:', updatedHtml.length);
