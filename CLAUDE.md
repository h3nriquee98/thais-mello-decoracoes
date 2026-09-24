# Thaís Mello Decorações · site

Landing page e portfólio de decoração de casamentos (Franca-SP). Objetivo único: levar o visitante a uma conversa no WhatsApp sobre data e local.

## Fontes de verdade

- `PRODUCT.md`: público, promessa, canais e o que **não** pode ser alegado (sem depoimentos, preços, métricas ou parcerias inventados).
- `DESIGN.md`: tokens (cores, tipografia, raio, sombra) e direção visual "branco e dourado", editorial, fotografia protagonista.
- Para trabalho de interface, use a skill `codemakers-design` (`.claude/skills/codemakers-design/`).

## Stack e arquivos

- HTML estático em um único arquivo, com CSS inline em `<style>` e tokens em `:root`. Sem build, sem framework, sem dependências de npm.
- **`index.html` é a página publicada** (Vercel serve a raiz; `vercel.json` só define cache de `/assets/`).
- `thais-mello-decoracoes-final.html` é uma cópia **antiga e desatualizada**; não edite. Para ver o site localmente, rode `node server.js` (serve `index.html` em http://localhost:3000).
- Imagens de produção ficam em `assets/optimized/` (webp numerado, com `width`/`height`, `loading="lazy"` e `alt` descritivo). As pastas com `WhatsApp Image ...` são originais.
- `*.js` na raiz (`insert-festas.js`, `fix-festas-*.js`, `update-centros.js`, `inspect-*.js`) e `temp_style.css` são scripts pontuais de edição/inspeção, não fazem parte do site.

## Convenções

- Textos em português do Brasil, tom próximo e acolhedor. Nome da marca: **Thaís Mello Decorações** (com acento).
- Sem travessões nos textos do site (decisão anterior).
- Toda ação principal aponta para `https://wa.me/5516992438041` com mensagem pré-preenchida; Instagram é secundário.
- Reutilize as variáveis de `:root` (`--bg`, `--ink`, `--gold`...) em vez de cores soltas.
- Dourado como texto sobre fundo claro: `--gold-text`. Sobre fundo escuro: `--gold-soft`. `--gold` é para fundos, bordas e botões.
- Galerias usam o padrão `.coverflow-item` com `<h3 class="coverflow-item__title">`; siga o mesmo markup ao adicionar fotos.

## Verificação

- Contraste: `python3 .claude/skills/codemakers-design/scripts/contrast_check.py '#texto' '#fundo'`.
- Screenshots: Playwright está disponível; confira 1440px e 390px e `scrollWidth` sem overflow horizontal.
