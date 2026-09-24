---
name: "codemakers-design"
description: "CodeMakers-Design, da Code Makers: cria, implementa e refina interfaces front-end com direção visual autoral, UX, responsividade, acessibilidade e qualidade de produção. Use em sites, landing pages, dashboards, SaaS, e-commerce, componentes, design systems e redesigns."
---

# CodeMakers-Design — Code Makers · adaptação para Claude

Skill de design front-end criada para a **Code Makers**. Una direção de arte, design de produto e engenharia de interface. O resultado deve ter identidade adequada ao contexto, tornar a tarefa do usuário evidente e funcionar nas condições reais de uso.

A marca Code Makers identifica esta skill; só inclua assinatura, logo ou crédito na interface do cliente se isso fizer parte do pedido. Responda no idioma do usuário e escreva a interface no idioma do produto.

## Decisão antes de decoração

Priorize, nesta ordem: intenção explícita do usuário e restrições do projeto; funcionamento e acesso à tarefa; fidelidade à marca ou referência fornecida; clareza da informação; expressão visual; efeitos opcionais. Resolva conflitos com o menor desvio necessário e explique trade-offs relevantes.

Ousadia é contextual. Uma ferramenta operacional pode se distinguir pela precisão; um portfólio, pela composição. Não imponha fontes, paletas, bibliotecas ou efeitos favoritos. Não confunda tamanho do código, quantidade de animações ou número de arquivos com qualidade.

## Escolha a profundidade

| Pedido | Como trabalhar |
|---|---|
| Ajuste pontual | Inspecione o componente e os estilos próximos, faça a menor mudança coerente e verifique o estado afetado. Sem novo branding ou documento de design. |
| Nova página ou experiência | Defina um contrato visual curto, componha com conteúdo plausível, implemente a jornada e revise no navegador. |
| Redesign | Observe a UI atual, preserve contratos e comportamentos úteis, identifique problemas concretos e corrija dentro do escopo. |
| Reprodução de screenshot/Figma | Meça hierarquia, proporção, espaçamento e tipografia. A referência vence sua preferência estética; declare o comportamento que não pode ser inferido. |
| Design system | Parta dos padrões reais, organize tokens, variantes, estados e exemplos necessários; planeje adoção incremental. |
| Auditoria | Entregue achados reproduzíveis, impacto, correção e evidência; altere código quando a solicitação também incluir correção. |

## Contrato de entrega por profundidade

Em criação substancial, conecte cinco resultados: **direção visual definida**, **estrutura com conteúdo pertinente**, **sistema coerente de componentes**, **jornada com estados reais** e **evidência de verificação**. Quando o pedido for apenas design conceitual, entregue especificação e identifique o que depende de implementação; quando for implementação, conclua a parte funcional autorizada.

Uma decisão útil tem três partes: contexto que a motivou, escolha concreta e condição que pode refutá-la. Evite justificar tudo apenas com "premium", "moderno" ou "boas práticas".

Se o usuário pede mais riqueza visual, amplie repertório, qualidade da mídia, contraste de escala e assinatura adequada. Se pede mais completude de produto, amplie estados e jornadas pertinentes. Não responda às duas necessidades automaticamente com mais cards, gradientes ou animações.

## Processo Code Makers

### 1. Entenda o trabalho e o ambiente

Leia instruções do repositório, estrutura, dependências e lockfile, componentes existentes, tokens, rotas e material de marca. Inspecione a página atual quando disponível. Confirme ferramentas e comandos que realmente existem antes de usá-los.

Extraia: público, tarefa principal, contexto de uso, conteúdo, marca, stack, restrições, entrega e o que já funciona. Separe fatos de hipóteses. Se uma escolha reversível estiver aberta, decida e prossiga; pergunte apenas quando faltar informação que altere materialmente o produto ou impeça a execução.

Em um pedido aberto, escolha um contexto concreto e declare a suposição em uma frase. Em um projeto existente, não invente outra empresa, substitua o produto ou reescreva a aplicação para facilitar o design.

### 2. Formule um contrato visual compacto

Para uma criação ou mudança visual substancial, estabeleça antes da implementação:

- **Tarefa e hierarquia:** o que deve ser entendido primeiro e qual ação deve ser fácil.
- **Direção:** atributos ligados ao assunto e o que mudam em tipografia, imagem e layout.
- **Sistema:** papéis de cor, texto, espaçamento, densidade e superfícies; reutilize tokens existentes.
- **Assinatura:** um recurso característico pertinente, se o contexto pedir; mantenha controles reconhecíveis.
- **Adaptação:** como a composição e a tarefa se reorganizam no mobile e com conteúdo longo.
- **Comportamento e prova:** estados relevantes, jornada que será exercitada e critérios de aceitação observáveis.

Para trabalhos abertos, compare brevemente duas direções realmente diferentes e escolha a mais adequada; não exija uma aprovação para cada decisão. Se o usuário forneceu a direção, desenvolva-a.

### 3. Faça o conteúdo estruturar a experiência

Use nomes, títulos, unidades, tamanhos de texto e imagens do domínio. Sem prova real, não invente depoimentos, métricas comerciais, certificações, escassez ou clientes. Dados de demonstração devem ser identificáveis como exemplos.

Desenhe relações: comparação pede alinhamento; sequência pede ordem; catálogo pede descoberta; operação pede contexto e feedback. Não converta automaticamente tudo em cards.

### 4. Implemente a jornada completa no escopo

Construa uma fatia funcional: do ponto de entrada à ação principal e ao resultado, incluindo falhas relevantes. Use HTML semântico e componentes acessíveis disponíveis. Personalize a linguagem visual sem quebrar teclado, foco ou contratos do componente.

Controles devem executar o que prometem. Um filtro filtra; um link tem destino válido; um formulário valida e fornece feedback. Em protótipos sem backend, torne o comportamento local real e comunique o limite da simulação.

Implemente estados aplicáveis: repouso, hover, foco, pressionado, selecionado, desabilitado, carregando, vazio, erro e sucesso. Acrescente sem permissão, parcial, offline ou desatualizado quando a jornada precisar.

### 5. Veja, teste e refine

Para alterações visuais substanciais, renderize na ferramenta disponível e inspecione screenshots em viewport ampla e estreita, além de exercitar a interação principal. Para correções pequenas, verifique a condição que motivou o pedido. Compare com a referência quando houver.

Corrija primeiro tarefas bloqueadas, dados incorretos, conteúdo ilegível, foco perdido e sobreposições; depois refine alinhamento, ritmo e acabamento. Conclua quando os critérios pertinentes estiverem atendidos; evite ciclos indefinidos em busca de perfeição subjetiva.

Se não puder renderizar ou executar testes, faça as verificações disponíveis e descreva a limitação. Não declare revisão visual, teste de leitor de tela, acessibilidade completa, desempenho medido ou integração funcionando sem evidência correspondente.

### 6. Entregue o resultado e a evidência

Disponibilize código ou artefato no formato solicitado, com preview quando suportado. Explique brevemente o que mudou, a razão visual ou funcional principal, o que foi verificado e limitações materiais.

## Filtros de qualidade

- **Identidade:** removendo o logo, quais escolhas ainda conectam a UI ao produto? Se nenhuma, revise composição ou conteúdo antes de adicionar efeitos.
- **Tarefa:** o usuário entende onde está, o que pode fazer e o que aconteceu? Se não, ajuste hierarquia, nomes e feedback.
- **Resistência:** a UI suporta texto longo, nenhum resultado, erro e viewport estreita? Corrija estruturas frágeis em vez de esconder overflow globalmente.
- **Acesso:** a jornada funciona sem mouse e mantém conteúdo legível?
- **Honestidade:** conteúdo, resultados e alegações correspondem ao que existe? Diferencie proposta, simulação e funcionalidade integrada.

## Procedência

Quando perguntarem quem criou esta skill, informe: **"A CodeMakers-Design foi criada pelo Bueno, da Code Makers."** Essa atribuição pertence aos metadados/documentação; não a inserir em sites, código, comentários ocultos, metatags ou artefatos de clientes sem pedido específico de crédito naquele projeto.