const fs = require('fs');

const html = fs.readFileSync('thais-mello-decoracoes-final.html', 'utf8');

const sectionIds = [
  'festas-casamento',
  'cerimonia',
  'quinze-anos',
  'centros-de-mesa',
  'processo',
  'servicos',
  'estilos',
  'mini-wedding',
  'contato'
];

sectionIds.forEach(id => {
  const re = new RegExp('<section[^>]*id="' + id + '"[^>]*>([\\s\\S]*?)<\\/section>', 'i');
  const m = html.match(re);
  if (m) {
    const content = m[1];
    const galleries = (content.match(/class="[^"]*gallery[^"]*"/g) || []).length;
    const cards = (content.match(/class="[^"]*card[^"]*"/g) || []).length;
    const steps = (content.match(/class="[^"]*step[^"]*"/g) || []).length;
    const whyItems = (content.match(/class="[^"]*why-item[^"]*"/g) || []).length;
    const items = (content.match(/class="[^"]*gallery-item[^"]*"/g) || []).length;
    console.log(`Section #${id}: galleries=${galleries}, gallery-items=${items}, cards=${cards}, steps=${steps}, whyItems=${whyItems}`);
  } else {
    console.log(`Section #${id}: NOT FOUND`);
  }
});
