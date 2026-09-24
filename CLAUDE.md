# Thaís Mello Decorações · site

Landing page e portfólio de decoração de casamentos (Franca-SP). Objetivo único: levar o visitante a uma conversa no WhatsApp sobre data e local.

## Fontes de verdade

- `PRODUCT.md`: público, promessa, canais e o que **não** pode ser alegado (sem depoimentos, preços, métricas ou parcerias inventados).
- `DESIGN.md`: tokens (cores, tipografia, raio, sombra) e direção visual "branco e dourado", editorial, fotografia protagonista.
- Para trabalho de interface, use a skill `codemakers-design` (`.claude/skills/codemakers-design/`).

## Stack e arquivos

- HTML estático em um único arquivo, com CSS inline em `<style>` e tokens em `:root`. Sem build, sem framework, sem dependências de npm.
- **`index.html` é a página publicada** (Vercel serve a raiz; `vercel.json` só define cache de `/assets/`).
- `thais-mello-decoracoes-final.html` é uma cópia **desatualizada** (faltam as fotos 73 a 77). `server.js` ainda serve essa cópia em `/`; para ver a versão real localmente, abra `/index.html` ou rode `python3 -m http.server`.
- Imagens de produção ficam em `assets/optimized/` (webp numerado, com `width`/`height`, `loading="lazy"` e `alt` descritivo). As pastas com `WhatsApp Image ...` são originais.
- `*.js` na raiz (`insert-festas.js`, `fix-festas-*.js`, `update-centros.js`, `inspect-*.js`) e `temp_style.css` são scripts pontuais de edição/inspeção, não fazem parte do site.

## Convenções

- Textos em português do Brasil, tom próximo e acolhedor. Nome da marca: **Thaís Mello Decorações** (com acento).
- Sem travessões nos textos do site (decisão anterior).
- Toda ação principal aponta para `https://wa.me/5516992438041` com mensagem pré-preenchida; Instagram é secundário.
- Reutilize as variáveis de `:root` (`--bg`, `--ink`, `--gold`...) em vez de cores soltas.
- Galerias usam o padrão `.coverflow-item` com `<h3 class="coverflow-item__title">`; siga o mesmo markup ao adicionar fotos.

## Verificação

- Contraste: `python3 .claude/skills/codemakers-design/scripts/contrast_check.py '#texto' '#fundo'`.
- Screenshots: Playwright está disponível; confira 1440px e 390px e `scrollWidth` sem overflow horizontal.

## Pendências conhecidas (levantamento de 24/09/2026)

- `--gold` (#B8922A) usado como **cor de texto** sobre `--bg` tem contraste 2,8:1, abaixo do mínimo mesmo para texto grande (eyebrows de 12px, `.step-num`, `.why-num`, `.logo em`, hovers de links). `--gold-bright` fica em 4,07:1. Como fundo de botão com texto `#12100B`, o dourado passa (6,5:1); no hover (`--gold-bright`) cai para 4,47:1.
- O H1 do hero escreve "Thais Mello" sem acento; o resto do site usa "Thaís".
- No hero desktop, `.cta-row` usa `justify-content:flex-end`, e os botões ficam desalinhados da coluna de texto alinhada à esquerda.
