---
colors:
  bg:
    raw: "#FAFAF8"
    purpose: "Primary background (canvas)"
  bg-2:
    raw: "#F2EEE7"
    purpose: "Secondary background for cards, contrast areas, and UI surfaces"
  ink:
    raw: "#1A1207"
    purpose: "Primary text, headers, and core high-contrast elements"
  ink-soft:
    raw: "#6B5F47"
    purpose: "Secondary text, descriptive paragraphs, and subdued labels"
  gold:
    raw: "#B8922A"
    purpose: "Primary brand accent, main buttons, and key highlights"
  gold-soft:
    raw: "#D4B97A"
    purpose: "Secondary accents, taglines, un-focused hover states, and borders"
  gold-bright:
    raw: "#9A7520"
    purpose: "High-contrast interaction states (hover), primary callouts, and gallery labels"
  line:
    raw: "#DED5C2"
    purpose: "Structural dividers, borders, and light UI boundaries"

typography:
  fonts:
    body: "'Instrument Sans', sans-serif"
    heading: "'Bodoni Moda', serif"
    mono: "'Geist Mono', monospace"
  scale:
    h1:
      size: "clamp(2.4rem, 5.2vw, 4.8rem)"
      weight: "500"
      lineHeight: "1.1"
      letterSpacing: "-0.02em"
    h2:
      size: "clamp(1.7rem, 2.8vw, 2.3rem)"
      weight: "500"
      lineHeight: "1.1"
    h3:
      size: "24px"
      weight: "500"
    body:
      size: "17px"
      weight: "400"
      lineHeight: "1.6"
    eyebrow:
      size: "12px"
      weight: "500"
      letterSpacing: "0.24em"
      textTransform: "uppercase"

elevation:
  shadow-md:
    raw: "0px 18px 40px -18px rgba(90, 60, 10, 0.18)"
    purpose: "Depth for elevated components like image galleries and floating containers"
  radius:
    raw: "20px"
    purpose: "Default rounding for cards, images, and interactive surfaces"
---

# Visual Direction

## Core Atmosphere
A marca Thaís Mello Decorações comunica luxo afetuoso, classicismo atemporal e atenção profunda aos detalhes. Com a restrição intencional da paleta de cores para um esquema "Branco e Dourado" sobre fundos pálidos quentes, a interface se comporta como um papel timbrado premium ou um convite de casamento luxuoso. A estética afasta-se de interfaces digitais utilitárias para abraçar a paginação editorial, permitindo que a cenografia fotográfica rica respire e tome o protagonismo. Citações e linhas sutis fornecem demarcação estrutural e guiam o ritmo de leitura.

## Typography
- **Heading (`Bodoni Moda`):** Utilizada primariamente em sua variação regular ou em itálicos acentuados (como no hero de assinatura *Decorações*). Traz excelência clássica, alto contraste entre hastes e serifas refinadas. O tracking (letter-spacing) é ligeiramente negativo (`-0.01em` a `-0.02em`) para agrupar visualmente as palavras nas grandes assinaturas.
- **Body (`Instrument Sans`):** Tipografia sem serifa geométrica, porém humanista o suficiente para leituras longas. Fornece uma fundação quase invisível para parágrafos, priorizando a leiturabilidade (17px com line-height 1.6). Mantém o foco sem competir pelo peso dramático do Bodoni.
- **Eyebrow e Utilidades (`Geist Mono`):** Atua como textura tipográfica secundária e voz do "serviço". Com uppercase e um letter-spacing extremamente aberto (`0.24em`), separa seções institucionais de um modo arquitetônico. Introduz linhas douradas (`::before`) que estabelecem uma ancoragem visual imediata em entradas de seções.

## Color Scale
A paleta repudia o preto absoluto e o branco absoluto, substituindo o alto contraste agressivo pelo calor tátil e reflexos terrosos/metálicos:
- **Canvas Tonal:** Não existe o branco digital puro `#FFFFFF`. O canvas começa em `#FAFAF8` (Off-white levemente quente) descendo para a âncora de backgrounds secundários `#F2EEE7`, lembrando o tom de um pergaminho premium.
- **Tintas de Leitura:** Textos não utilizam preto puro, operando em `#1A1207` (Um marrom profundo oxidado) para contraste central, caindo para `#6B5F47` para hierarquias de suporte e parágrafos estruturais maiores, simulando uma impressão sépia luxuosa.
- **Ouro Estrutural:** O sistema gira em volta do Dourado – variando do pálido sutil `#D4B97A` no Hero (Taglines itálicas) ao peso de interação (`#B8922A`) até alcançar contraste alto em hover (`#9A7520`). Esses tons controlam tudo: botões primários, separações de eixo e badges suspensas. Coroando tudo existe o `#DED5C2` (Line) para divisórias físicas delicadas.

## Imagery & Elevation
O impacto imersivo vem dos registros de autoria, e não de manipulação de software em tempo real:
- **Hero Full-Bleed 16:9:** O container hero preenche toda a largura abraçando estritamente o layout cinematográfico 16:9, travando o olhar desde o primeiro instante sem exigir rolagem excessiva. Um overlay dramático linear sobre as bordas escuras assegura contraste sobre a fotografia original, que jamais deve sofrer filtros distorcidos — os espaços, as flores e móveis carregam cor verdadeira.
- **Formato Gráfico e Bordas:** Imagens nos grids e galerias (Mesa de Bolo, Hall de Entrada, Cerimônia) operam com bordas vivas controladas (`20px`) com a presença de `border: 1px solid var(--line)` unificando seu tratamento perimetral como obras emolduradas. Destaque forte na interação: ao focar ativamente numa galeria (`.is-active`), o foco do componente rouba uma fatia flexível (`flex: 5 1 0`), a sombra macia castanha exala seu realismo (`0 20px 48px -26px rgba(90,60,10,.20)`) e o item transborda visualmente seu valor. As demais entram com baixo brilho (`filter: brightness(0.58)`).

## Native Components & Behaviors
- **Botões e CTAs:** Têm curvas totais redondas (`border-radius: 30px;`) e atuam como joias na página. Os primários, em ouro sólido, os secundários "Ghost", em vidros levemente opacos (backdrop-blur) suportando textos dourados pálidos, que mudam imediatamente sua superfície e sobem interativamente num `transform: translateY(-2px)` limpo. Seus ícones (SVGs, WhatsApp etc.) são rigorosamente controlados à perfeição de 20x20px sem colapsos de redimensionamento.
- **Navegação Flutuante:** A Header flutuante desliza com um backdrop blur intenso. Possui paddings compactos, links alinhados no fundo e separadores por traços macios que mantêm a navegação unificada durante as longas galerias.
- **Divisórias Físicas:** Componentes como `foot-grid`, passos ou cartões limitam-se usando *borders* que mimetizam filigranas finas (`1px solid var(--line)`). No final da página, o footer opera debaixo de todos: com a manipulação escura opaca, ele não encerra a página chapado na caixa normal, atua fisicamente *sob* o contato numa estrutura que afunda magicamente no layout, revelando a assinatura do estúdio.
