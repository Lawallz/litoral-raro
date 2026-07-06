import { Sneaker, Testimonial, ProcessStep, FAQItem } from './types';

export const sneakersData: Sneaker[] = [
  {
    id: '1',
    name: "Air Max 95 'Neon'",
    brand: 'Nike',
    silhouette: 'Low Top', // Já estava certo
    price: 1890,
    image: '/assets/img/Air Max 95 Neon 3.jpg',
    tag: 'ÚLTIMAS UNIDADES',
    colors: 'Gray/Neon',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    description: 'Um ícone imortalizado do streetwear. Lançado originalmente em 1995, este modelo traz os icônicos painéis em degradê cinza combinados com detalhes vibrantes em verde Neon.'
  },
  {
    id: '2',
    name: "Air Max 95 'Solar Red'",
    brand: 'Nike',
    silhouette: 'Low Top', // Já estava certo
    price: 1750,
    image: '/assets/img/Air Max 95 Solar Red 1.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Gray/Solar Red',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    description: 'A icônica colorway Solar Red do Air Max 95 apresenta painéis gradientes cinza com pops marcantes de vermelho solar nos passadores e nas icônicas unidades de amortecimento Air.'
  },
  {
    id: '3',
    name: "Air Max 95 x Corteiz Black Honey 1",
    brand: 'Nike',
    silhouette: 'Low Top', // Já estava certo
    price: 1290,
    image: '/assets/img/Air Max 95 x Corteiz Black Honey 3.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Black/Honey/Green Camo',
    sizes: [38, 40, 41, 42, 44],
    description: 'A aguardada colaboração com a marca londrina Corteiz. Esta edição traz uma base preta premium com detalhes em tom mel e um forro interno camuflado que exala a estética utilitária das ruas de Londres.'
  },
  {
    id: '4',
    name: "ASICS Gel-NYC Cream Arctic Sky",
    brand: 'Asics',
    silhouette: 'Low Top', // Já estava certo
    price: 1750,
    image: '/assets/img/ASICS Gel Nyc - Cream Arctic Sky 1.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Cream/Arctic Sky',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    description: 'Combinando referências de design do GEL-NIMBUS 3 e GEL-MC PLUS V, o GEL-NYC traz um cabedal texturizado em tons de creme com detalhes sutis em azul Arctic Sky, oferecendo o ápice do conforto com tecnologia GEL.'
  },
  {
    id: '5',
    name: "Air Max Dn 'White/Metallic Silver'",
    brand: 'Nike',
    silhouette: 'Low Top', // Corrigido de Mid Top para Low Top
    price: 3450,
    image: '/assets/img/Air Max DN Branco WhiteMetallic Silver 1.jpg',
    tag: 'DISPONÍVEL',
    colors: 'White/Metallic Silver',
    sizes: [39, 40, 41, 42, 43],
    description: 'Dando início à próxima geração de tecnologia de amortecimento, o Air Max Dn apresenta o inovador sistema Dynamic Air com tubos de dupla pressão, entregando uma pisada reativa em um visual futurista totalmente branco.'
  },
  {
    id: '6',
    name: "Air Max 95 x Corteiz 'Black'",
    brand: 'Nike',
    silhouette: 'Low Top', // Corrigido de Mid Top para Low Top
    price: 3450,
    image: '/assets/img/Air Max 95 x Corteiz Black 1.jpg',
    tag: 'DISPONÍVEL',
    colors: 'Black/Khaki/Camo',
    sizes: [39, 40, 41, 42, 43],
    description: 'Mais um capítulo da icônica collab com a Corteiz. O clássico design de anatomia humana do Air Max 95 ganha uma roupagem totalmente escura em mesh balístico e couro texturizado de alta resistência.'
  },
  {
    id: '7',
    name: "Air Max Tn 'Triple White'",
    brand: 'Nike',
    silhouette: 'Low Top', // Corrigido de High Top para Low Top
    price: 4200,
    image: '/assets/img/Air Max Tn Triple White 2.jpg',
    tag: 'ÚLTIMAS UNIDADES',
    colors: 'Triple White',
    sizes: [40, 41, 42, 43, 44],
    description: 'O famoso "Tubarão" em sua versão mais limpa e imponente. Cabedal em mesh estruturado por sobreposições onduladas em TPU polido e o tradicional amortecimento Tuned Air sob os pés.'
  },
  {
    id: '8',
    name: "ASICS Gel Nyc 'Oyster Grey 1'",
    brand: 'Asics',
    silhouette: 'Low Top', // Já estava certo
    price: 1750,
    image: '/assets/img/ASICS Gel Nyc - Oyster Grey 1.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Oyster Grey/Silver',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    description: 'Com uma paleta de cores neutra e versátil, o GEL-NYC Oyster Grey resgata a estética de corrida do final dos anos 2000. Perfeito para o streetwear urbano graças às suas sobreposições de camurça e malha metálica.'
  },
  {
    id: '9',
    name: "Air Force 1 'White'",
    brand: 'Nike',
    silhouette: 'Low Top', // Já estava certo
    price: 890,
    image: '/assets/img/Air Force 1 2.jpg',
    tag: 'DISPONÍVEL',
    colors: 'White/White',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    description: 'O clássico absoluto. O Air Force 1 Low em couro premium todo branco é a tela definitiva de estilo, combinando conforto lendário e durabilidade incomparável dentro e fora das quadras.'
  },
  {
    id: '10',
    name: "Nike Shox TL 'Triple Black'",
    brand: 'Nike',
    silhouette: 'Low Top', // Já estava certo
    price: 1650,
    image: '/assets/img/Nike Shox TL Triple Black 1.jpg',
    tag: 'DISPONÍVEL',
    colors: 'Triple Black',
    sizes: [39, 40, 41, 42, 43, 44],
    description: 'O lendário design de colunas mecânicas de amortecimento em toda a extensão do solado. A versão Triple Black traz um visual agressivo, futurista e totalmente camuflado na escuridão.'
  },
    {
    id: '11',
    name: "Asics Gel-NYC Graphite Grey Black",
    brand: 'Asics',
    silhouette: 'Low Top', // Já estava certo
    price: 1100,
    image: '/assets/img/Asics Gel-NYC Graphite Grey Black 2.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Graphite Grey/Black',
    sizes: [39, 40, 41, 42, 43, 44],
    description: 'O GEL-NYC em sua colorway Graphite Grey combina perfeitamente a malha mesh leve com sobreposições robustas escuras, garantindo tração, estabilidad e uma estética utilitária pesada para o dia a dia.'
  },
  {
    id: '12',
    name: "Shox TL / R4 'Triple White'",
    brand: 'Nike',
    silhouette: 'Low Top', // Já estava certo
    price: 1990,
    image: '/assets/img/Nike Shox R4 Triple White 2.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Triple White/Silver',
    sizes: [39, 40, 41, 42, 43, 44],
    description: 'Famoso por redefinir o mercado dos anos 2000, o Shox R4 traz as quatro colunas de amortecimento no calcanhar aliadas a um cabedal estruturado em couro sintético liso e detalhes prateados.'
  },
  {
    id: '13',
    name: "Air Max Dn Black 'Black Dark Smoke Grey'",
    brand: 'Nike',
    silhouette: 'Low Top', // Já estava certo
    price: 1290,
    image: '/assets/img/Air Max Dn Black 1.jpg',
    tag: 'DISPONÍVEL',
    colors: 'Black/Dark Smoke Grey',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    description: 'Carregando a nova tecnologia Dynamic Air com quatro câmaras de ar cilíndricas, a versão Dark Smoke Grey une tons escuros e foscos para um visual discreto e altamente tecnológico.'
  },
  {
    id: '14',
    name: 'Air Force 1 Low x Cactus Plant Flea Market (CPFM) "Black White"',
    brand: 'Nike',
    silhouette: 'Low Top',
    price: 2490,
    image: '/assets/img/Air Force 1 Low x Cactus Plant Flea Market (CPFM) Black White.png',
    tag: 'DISPONÍVEL',
    colors: 'Black/White',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    description: 'Fruto da colaboração icônica com a Cactus Plant Flea Market, esta edição eleva o clássico Air Force 1 trazendo letras gigantes em couro com contornos refletivos inspiradas no Air More Uptempo, garantindo um visual maximalista e exclusivo.'
  },
  {
    id: '15',
    name: 'Air Max Tailwind V x Skepta "Bloody Chrome"',
    brand: 'Nike',
    silhouette: 'Low Top',
    price: 1890,
    image: '/assets/img/Air Max Tailwind V x Skepta Bloody Chrome (Red).png',
    tag: 'DISPONÍVEL',
    colors: 'Black/Chrome/University Red',
    sizes: [39, 40, 41, 42, 43, 44],
    description: 'Criado em parceria com o ícone do grime britânico Skepta, o "Bloody Chrome" apresenta uma estampa sublimada vermelha que imita asas de borboleta, combinada com detalhes cromados e calcanhar iridescente para um visual futurista agressivo.'
  },
  {
    id: '16',
    name: 'Air Max Tailwind V x Skepta "Bright Blue"',
    brand: 'Nike',
    silhouette: 'Low Top',
    price: 1890,
    image: '/assets/img/Air Max Tailwind V x Skepta Bright Blue.png',
    tag: 'DISPONÍVEL',
    colors: 'Black/Chrome/Bright Blue',
    sizes: [38, 39, 40, 41, 42, 43, 44],
    description: 'Segunda colorway da aclamada collab com Skepta, este par traz o padrão de asa de borboleta em um azul elétrico vibrante. Os detalhes em TPU preto estruturado e as placas cromadas na lateral completam essa relíquia da linha Air Max.'
  },
  {
    id: '17',
    name: 'Shox TL "White Metallic Silver Pink"',
    brand: 'Nike',
    silhouette: 'Low Top',
    price: 1390,
    image: '/assets/img/Shox TL White Metallic Silver Pink (ou Pink Gradient).png',
    tag: 'DISPONÍVEL',
    colors: 'White/Metallic Silver/Pink',
    sizes: [36, 37, 38, 39, 40, 41, 42],
    description: 'O lendário "Doze Molas" em uma de suas combinações mais limpas e desejadas. Com cabedal em mesh respirável branco, o modelo conta com sobreposições em degradê rosa e prata metalizado sobre o icônico sistema de amortecimento mecânico completo.'
  }
];

// O restante do arquivo (testimonialsData, processStepsData, faqData) permanece idêntico ao anterior.
export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Ricardo Santos',
    stars: 5,
    comment: '"Atendimento impecável e o tênis chegou exatamente como prometido. A curadoria é realmente diferenciada. Toda a jornada foi premium e transparente."',
    role: 'CLIENTE VERIFICADO'
  },
  {
    id: '2',
    name: 'Mariana Costa',
    stars: 5,
    comment: '"Encontrei um modelo que não achava em lugar nenhum do Brasil. O processo de importação foi super transparente e acompanhado em cada etapa."',
    role: 'CLIENTE VERIFICADO'
  },
  {
    id: '3',
    name: 'Lucas Oliveira',
    stars: 5,
    comment: '"Qualidade absurda. Dá pra ver que os produtos são selecionados com muito critério e passam por um crivo rigoroso. Recomendo demais!"',
    role: 'CLIENTE VERIFICADO'
  }
];

export const processStepsData: ProcessStep[] = [
  {
    id: '1',
    number: '01',
    title: 'O Garimpo',
    description: 'Nossa banca acompanha o que tá rodando de mais forte nas pistas e nos blocos mundiais. Selecionamos só as estéticas mais pesadas e os modelos que realmente fazem a diferença no visual.',
    image: '/assets/img/O GARIMPO.png'
  },
  {
    id: '2',
    number: '02',
    title: 'O Desenrolo',
    description: 'Sem burocracia. Você encosta no nosso WhatsApp, a gente alinha a sua numeração ideal e fecha o valor do kit com base no mercado atual. Atendimento direto de parceiro para parceiro.',
    image: '/assets/img/O DESENROLO.png'
  },
  {
    id: '3',
    number: '03',
    title: 'O Envio ',
    description: 'Fazemos o corre da importação direto com os nossos contatos. Cada par passa por um crivo manual rigoroso onde checamos a fidelidade dos materiais, costuras e o visual final antes de despachar.',
    image: '/assets/img/O ENVIO.png'
  },
  {
    id: '4',
    number: '04',
    title: 'A Entrega',
    description: 'Seu sneaker chega embalado no capricho, protegido e rastreado até a sua porta. É só receber, lançar no pé e sair com a banca mais pesada da sua quebrada.',
    image: '/assets/img/A ENTREGA.png'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'f1',
    question: 'Como funciona a encomenda dos sneakers?',
    answer: 'Você escolhe o modelo desejado no nosso catálogo ou nos envia a referência do tênis que procura. Em seguida, iniciamos a busca nos maiores hubs de streetwear para oferecer um orçamento personalizado baseado no seu tamanho e na cotação atual.'
  },
  {
    id: 'f2',
    question: 'Como funciona a entrega dos produtos?',
    answer: 'Todas as nossas entregas são realizadas via Correios (com opções de SEDEX ou PAC). O produto sai direto do nosso centro de distribuição nacional protegido por uma caixa dupla (double box), garantindo que a caixa original do seu sneaker chegue impecável, sem amassados.'
  },
  {
    id: 'f3',
    question: 'Qual é o prazo médio de entrega?',
    answer: 'O prazo médio de entrega para qualquer região do Brasil é de 5 a 10 dias úteis após a confirmação do pagamento do pedido e postagem do produto.'
  },
  {
    id: 'f4',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos pagamento via Pix, cartão de débito e cartão de crédito com possibilidade de parcelamento em até 12x.'
  },
  {
    id: 'f5',
    question: 'Eu recebo código de rastreamento do meu pedido?',
    answer: 'Com certeza. Assim que o seu sneaker for postado nos Correios, você receberá automaticamente o código de rastreio por e-mail ou WhatsApp para acompanhar cada passo da entrega até a sua casa.'
  }
];