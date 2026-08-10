import { Sneaker, Testimonial, ProcessStep, FAQItem } from './types';

export const sneakersData: Sneaker[] = [
  {
    id: '1',
    name: "Air Max 95 'Neon'",
    brand: 'Nike',
    model: 'Air Max 95',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Air Max 95 Neon 3.jpg',
    tag: 'ÚLTIMAS UNIDADES',
    colors: 'Gray/Neon',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Um ícone imortalizado do streetwear. Lançado originalmente em 1995, este modelo traz os icônicos painéis em degradê cinza combinados com detalhes vibrantes em verde Neon.'
  },
  {
    id: '2',
    name: "Air Max 95 'Solar Red'",
    brand: 'Nike',
    model: 'Air Max 95',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Air Max 95 Solar Red 1.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Gray/Solar Red',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'A icônica colorway Solar Red do Air Max 95 apresenta painéis gradientes cinza com pops marcantes de vermelho solar nos passadores e nas icônicas unidades de amortecimento Air.'
  },
  {
    id: '3',
    name: "Air Max 95 x Corteiz Black Honey 1",
    brand: 'Nike',
    model: 'Air Max 95',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Air Max 95 x Corteiz Black Honey 3.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Black/Honey/Green Camo',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'A aguardada colaboração com a marca londrina Corteiz. Esta edição traz uma base preta premium com detalhes em tom mel e um forro interno camuflado que exala a estética utilitária das ruas de Londres.'
  },
  {
    id: '4',
    name: "ASICS Gel-NYC Cream Arctic Sky",
    brand: 'Asics',
    model: 'ASICS Gel-NYC',
    silhouette: 'Low Top',
    price: 299.99,
    image: '/assets/img/ASICS Gel Nyc - Cream Arctic Sky 1.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Cream/Arctic Sky',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Combinando referências de design do GEL-NIMBUS 3 e GEL-MC PLUS V, o GEL-NYC traz um cabedal texturizado em tons de creme com detalhes sutis em azul Arctic Sky, oferecendo o ápice do conforto com tecnologia GEL.'
  },
  {
    id: '5',
    name: "Air Max Dn 'White/Metallic Silver'",
    brand: 'Nike',
    model: 'Air Max Dn',
    silhouette: 'Low Top',
    price: 379.99,
    image: '/assets/img/Air Max DN Branco WhiteMetallic Silver 1.jpg',
    tag: 'DISPONÍVEL',
    colors: 'White/Metallic Silver',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Dando início à próxima geração de tecnologia de amortecimento, o Air Max Dn apresenta o inovador sistema Dynamic Air com tubos de dupla pressão, entregando uma pisada reativa em um visual futurista totalmente branco.'
  },
  {
    id: '6',
    name: "Air Max 95 x Corteiz 'Black'",
    brand: 'Nike',
    model: 'Air Max 95',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Air Max 95 x Corteiz Black 1.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Black/Khaki/Camo',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Mais um capítulo da icônica collab com a Corteiz. O clássico design de anatomia humana do Air Max 95 ganha uma roupagem totalmente escura em mesh balístico e couro texturizado de alta resistência.'
  },
  {
    id: '7',
    name: "Air Max Tn 'Triple White'",
    brand: 'Nike',
    model: 'Air Max Tn',
    silhouette: 'Low Top',
    price: 329.90,
    image: '/assets/img/Air Max Tn Triple White 2.jpg',
    tag: 'ÚLTIMAS UNIDADES',
    colors: 'Triple White',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'O famoso "Tubarão" em sua versão mais limpa e imponente. Cabedal em mesh estruturado por sobreposições onduladas em TPU polido e o tradicional amortecimento Tuned Air sob os pés.'
  },
  {
    id: '8',
    name: "ASICS Gel Nyc 'Oyster Grey 1'",
    brand: 'Asics',
    model: 'ASICS Gel-NYC',
    silhouette: 'Low Top',
    price: 299.90,
    image: '/assets/img/ASICS Gel Nyc - Oyster Grey 1.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Oyster Grey/Silver',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Com uma paleta de cores neutra e versátil, o GEL-NYC Oyster Grey resgata a estética de corrida do final dos anos 2000. Perfeito para o streetwear urbano graças às suas sobreposições de camurça e malha metálica.'
  },
  {
    id: '9',
    name: "Air Force 1 'White'",
    brand: 'Nike',
    model: 'Air Force 1',
    silhouette: 'Low Top',
    price: 199.99,
    image: '/assets/img/Air Force 1 2.jpg',
    tag: 'DISPONÍVEL',
    colors: 'White/White',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'O clássico absoluto. O Air Force 1 Low em couro premium todo branco é a tela definitiva de style, combinando conforto lendário e durabilidade incomparável dentro e fora das quadras.'
  },
  {
    id: '10',
    name: "Nike Shox TL 'Triple Black'",
    brand: 'Nike',
    model: 'Nike Shox TL',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Nike Shox TL Triple Black 1.jpg',
    tag: 'DISPONÍVEL',
    colors: 'Triple Black',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'O lendário design de colunas mecânicas de amortecimento em toda a extensão do solado. A versão Triple Black traz um visual agressivo, futurista e totalmente camuflado na escuridão.'
  },
  {
    id: '11',
    name: "Asics Gel-NYC Graphite Grey Black",
    brand: 'Asics',
    model: 'ASICS Gel-NYC',
    silhouette: 'Low Top',
    price: 299.90,
    image: '/assets/img/Asics Gel-NYC Graphite Grey Black 2.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Graphite Grey/Black',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'O GEL-NYC em sua colorway Graphite Grey combina perfeitamente a malha mesh leve com sobreposições robustas escuras, garantindo tração, estabilidade e uma estética utilitária pesada para o dia a dia.'
  },
  {
    id: '12',
    name: "Shox TL / R4 'Triple White'",
    brand: 'Nike',
    model: 'Nike Shox R4',
    silhouette: 'Low Top',
    price: 249.90,
    image: '/assets/img/Nike Shox R4 Triple White 2.jpg',
    tag: 'SOB ENCOMENDA',
    colors: 'Triple White/Silver',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Famoso por redefinir o mercado dos anos 2000, o Shox R4 traz as quatro colunas de amortecimento no calcanhar aliadas a um cabedal estruturado em couro sintético liso e detalhes prateados.'
  },
  {
    id: '13',
    name: "Air Max Dn Black 'Black Dark Smoke Grey'",
    brand: 'Nike',
    model: 'Air Max Dn',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Air Max Dn Black 1.jpg',
    tag: 'DISPONÍVEL',
    colors: 'Black/Dark Smoke Grey',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Carregando a nova tecnologia Dynamic Air com quatro câmaras de ar cilíndricas, a versão Dark Smoke Grey une tons escuros e foscos para um visual discreto e altamente tecnológico.'
  },
  {
    id: '14',
    name: 'Air Force 1 Low x Cactus Plant Flea Market (CPFM) "Black White"',
    brand: 'Nike',
    model: 'Air Force 1',
    silhouette: 'Low Top',
    price: 479.90,
    image: '/assets/img/Air Force 1 Low x Cactus Plant Flea Market (CPFM) Black White.png',
    tag: 'DISPONÍVEL',
    colors: 'Black/White',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Fruto da colaboração icônica com a Cactus Plant Flea Market, esta edição eleva o clássico Air Force 1 trazendo letras gigantes em couro com contornos refletivos inspiradas no Air More Uptempo, garantindo um visual maximalista e exclusivo.'
  },
  {
    id: '15',
    name: 'Air Max Tailwind V x Skepta "Bloody Chrome"',
    brand: 'Nike',
    model: 'Air Max Tailwind V',
    silhouette: 'Low Top',
    price: 479.90,
    image: '/assets/img/Air Max Tailwind V x Skepta Bloody Chrome (Red).png',
    tag: 'DISPONÍVEL',
    colors: 'Black/Chrome/University Red',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Criado em parceria com o ícone do grime britânico Skepta, o "Bloody Chrome" apresenta uma estampa sublimada vermelha que imita asas de borboleta, combinada com detalhes cromados e calcanhar iridescente para um visual futurista agressivo.'
  },
  {
    id: '16',
    name: 'Air Max Tailwind V x Skepta "Bright Blue"',
    brand: 'Nike',
    model: 'Air Max Tailwind V',
    silhouette: 'Low Top',
    price: 479.90,
    image: '/assets/img/Air Max Tailwind V x Skepta Bright Blue.png',
    tag: 'DISPONÍVEL',
    colors: 'Black/Chrome/Bright Blue',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Segunda colorway da aclamada collab com Skepta, este par traz o padrão de asa de borboleta em um azul elétrico vibrante. Os detalhes em TPU preto estruturado e as placas cromadas na lateral completam essa relíquia da linha Air Max.'
  },
  {
    id: '17',
    name: 'Shox TL "White Metallic Silver Pink"',
    brand: 'Nike',
    model: 'Nike Shox TL',
    silhouette: 'Low Top',
    price: 479.90,
    image: '/assets/img/Shox TL White Metallic Silver Pink (ou Pink Gradient).png',
    tag: 'DISPONÍVEL',
    colors: 'White/Metallic Silver/Pink',
    sizes: [34, 35, 36, 37, 38, 39],
    description: 'O lendário "Doze Molas" em uma de suas combinações mais limpas e desejadas. Com cabedal inmesh respirável branco, o modelo conta com sobreposições em degradê rosa e prata metalizado sobre o icônico sistema de amortecimento mecânico completo.'
  },
  {
    id: '18',
    name: 'Air Max Plus TN "Sunset"',
    brand: 'Nike',
    model: 'Air Max Tn',
    silhouette: 'Low Top',
    price: 329.90,
    image: '/assets/img/Air Max Plus TN Sunset.png',
    tag: 'DISPONÍVEL',
    colors: 'Orange/Yellow/Black',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Um dos colorways mais icônicos da história do Air Max Plus. O famoso "Sunset" traz um cabedal em mesh com degradê do amarelo ao laranja inspirado no pôr do sol, detalhes em preto e a clássica estrutura em TPU que marcou gerações. O amortecimento Tuned Air oferece conforto excepcional e um visual inconfundível.'
  },
  {
    id: '19',
    name: 'Shox TL "Pure Platinum And Metallic Silver"',
    brand: 'Nike',
    model: 'Nike Shox TL',
    silhouette: 'Low Top',
    price: 479.90,
    image: '/assets/img/Shox TL Pure Platinum And Metallic Silver.png',
    tag: 'DISPONÍVEL',
    colors: 'Pure Platinum/Metallic Silver',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Com visual totalmente prateado e acabamento premium, o Nike Shox TL "Pure Platinum And Metallic Silver" combina um cabedal em mesh respirável com sobreposições metálicas e o icônico sistema de amortecimento Shox em toda a extensão do solado. Um modelo que une conforto, tecnologia e um estilo futurista marcante.'
  },
  {
    id: '20',
    name: 'Shox TL "White Black"',
    brand: 'Nike',
    model: 'Nike Shox TL',
    silhouette: 'Low Top',
    price: 479.90,
    image: '/assets/img/Shox TL White Black.jpg',
    tag: 'DISPONÍVEL',
    colors: 'White/Black/Metallic Silver',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Uma das combinações mais clássicas do Nike Shox TL. O cabedal em mesh branco recebe sobreposições em prata metálica, Swoosh preto e contraforte preto brilhante, contrastando com o icônico sistema de amortecimento Shox em toda a extensão do solado. Um modelo que une conforto, tecnologia e um visual atemporal.'
  },
  {
    id: '21',
    name: 'Air Max Dn8 "Black Bright Crimson"',
    brand: 'Nike',
    model: 'Air Max Dn8',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Air Max Dn8 Black Bright Crimson.jpg',
    tag: 'DISPONÍVEL',
    colors: 'Black/Bright Crimson',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'O Nike Air Max Dn8 "Black Bright Crimson" combina um visual agressivo com a mais recente tecnologia Dynamic Air da Nike. O cabedal totalmente preto recebe detalhes em Bright Crimson que destacam sua silhueta futurista, enquanto o sistema de amortecimento proporciona conforto e estabilidade para o uso diário.'
  },
  {
    id: '22',
    name: 'Air Max 95 "Triple White"',
    brand: 'Nike',
    model: 'Air Max 95',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Air Max 95 Triple White.jpg',
    tag: 'DISPONÍVEL',
    colors: 'Triple White',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Um dos clássicos absolutos da linha Air Max, o Air Max 95 "Triple White" aposta em um visual totalmente branco que destaca as icônicas camadas inspiradas na anatomia humana. Equipado com unidades Air visíveis no antepé e calcanhar, oferece conforto, estilo atemporal e versatilidade para qualquer ocasião.'
  },
  {
    id: '23',
    name: 'Nike Mind "001"',
    brand: 'Nike',
    model: 'Nike Mind',
    silhouette: 'Low Top',
    price: 249.90,
    image: '/assets/img/Nike Mind 001.png',
    tag: 'DISPONÍVEL',
    colors: 'White/Orange',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Desenvolvido com foco no bem-estar e recuperação, o Nike Mind "001" apresenta um design estilo mule/clog com um sistema inovador de nós articulados na sola que massageiam a planta dos pés, proporcionando estímulo sensorial e conforto máximo pós-treino.'
  },
  {
    id: '24',
    name: 'Nike Shox R4 "Brasil"',
    brand: 'Nike',
    model: 'Nike Shox R4',
    silhouette: 'Low Top',
    price: 299.90,
    image: '/assets/img/Nike Shox R4 Brasil.png',
    tag: 'DISPONÍVEL',
    colors: 'White/Comet Blue-Chrome-Green',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Um ícone da cultura urbana brasileira, o Nike Shox R4 "Brasil" traz de volta o clássico cabedal com detalhes metalizados e as famosas quatro colunas de amortecimento Shox, destacando-se pelas cores inspiradas na bandeira nacional.'
  },
  {
    id: '25',
    name: 'Central Cee x Nike Air Max 95 "Syna World"',
    brand: 'Nike',
    model: 'Air Max 95',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Central Cee x Nike Air Max 95 Syna World.png',
    tag: 'DISPONÍVEL',
    colors: 'Black/Rose Gold',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Uma colaboração exclusiva com o rapper britânico Central Cee e sua marca Syna World. Este Air Max 95 combina tons escuros premium com detalhes contrastantes e acabamento personalizado que reflete a estética do Tech Fleece e da cultura de rua de Londres.'
  },
  {
    id: '26',
    name: 'Nike Air Max Tn "Triple Black"',
    brand: 'Nike',
    model: 'Air Max Tn',
    silhouette: 'Low Top',
    price: 329.90,
    image: '/assets/img/Nike Air Max Tn Triple Black.png',
    tag: 'DISPONÍVEL',
    colors: 'Triple Black',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Também conhecido como Air Max Plus, a versão "Triple Black" traz a agressividade das veias de TPU sobrepostas em um cabedal inteiramente preto. Equipado com a tecnologia Tuned Air, oferece estabilidade e um visual marcante para o dia a dia.'
  },
  {
    id: '27',
    name: 'Nike Air Max 95 "Triple Black"',
    brand: 'Nike',
    model: 'Air Max 95',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Nike Air Max 95 Triple Black.png',
    tag: 'DISPONÍVEL',
    colors: 'Triple Black',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'O clássico design inspirado na anatomia humana em uma versão completamente preta stealth. Combinando mesh, couro e camurça sintética, o Air Max 95 "Triple Black" une durabilidade com o conforto inconfundível de suas cápsulas de ar visíveis.'
  },
  {
    id: '28',
    name: 'Corteiz x Nike Air Max 95 SP "Rules the World"',
    brand: 'Nike',
    model: 'Air Max 95',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Corteiz x Nike Air Max 95 SP Rules the World.png',
    tag: 'DISPONÍVEL',
    colors: 'Olive/Black-Camo',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Nascido da colaboração com a marca londrina Corteiz, este modelo traz um visual utilitário e militar com cabedal in tons de verde oliva, forro interno com estampa camuflada e o logotipo da Alcatraz bordado, consolidando a mensagem "Rules the World".'
  },
  {
    id: '29',
    name: 'Nike Air Max Dn "All Night"',
    brand: 'Nike',
    model: 'Air Max Dn',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Nike Air Max Dn All Night.png',
    tag: 'DISPONÍVEL',
    colors: 'Black/Dark Smoke Grey/Light Crimson',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Apresentando a nova geração de amortecimento da Nike, o Air Max Dn "All Night" conta com o sistema Dynamic Air de tubos de pressão dupla. O design futurista oferece uma transição suave a cada passo e um visual moderno e disruptivo.'
  },
  {
    id: '30',
    name: 'Nike x Nocta "Glide White"',
    brand: 'Nike',
    model: 'Nike x Nocta',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Nike x Nocta Glide White.png',
    tag: 'DISPONÍVEL',
    colors: 'White/Chrome',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Criado em parceria com a sub-linha NOCTA do Drake, o Nike Glide é inspirado no clássico Zoom Flight 95. A versão "White" traz um cabedal todo branco texturizado com detalhes cromados na entressola que remetem a "olhos de mosca", unindo o retrô do basquete ao estilo urbano.'
  },
  {
    id: '31',
    name: 'Nike Air Max Tn "Hyper Blue"',
    brand: 'Nike',
    model: 'Air Max Tn',
    silhouette: 'Low Top',
    price: 329.90,
    image: '/assets/img/Nike Air Max Tn Hyper Blue.png',
    tag: 'DISPONÍVEL',
    colors: 'Hyper Blue/Black-Chamois',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Uma das colorways OG mais famosas do Air Max Plus (Tn). O cabedal em mesh apresenta um degradê marcante que vai do azul claro ao escuro, contrastado pelas veias pretas de TPU e o icônico mini Swoosh amarelo (Chamois), finalizado com o amortecimento Tuned Air.'
  },
  {
    id: '32',
    name: 'Nike Air Max 95 SE Big Bubble 211 Silver Black',
    brand: 'Nike',
    model: 'Air Max 95',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Nike Air Max 95 SE Big Bubble 211 Silver Black.png',
    tag: 'DISPONÍVEL',
    colors: 'Metallic Silver/Black',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Com design inspirado no futebol dos anos 2000, esta versão traz um cabedal totalmente prateado metálico reflexivo sobre uma entressola preta. Conta com o sistema Big Bubble de cápsulas de ar aumentadas e o marcante detalhe ✔️AMOS na lateral.'
  },
  {
    id: '33',
    name: 'Nike Air Max 95 Gunsmoke Pink Foam',
    brand: 'Nike',
    model: 'Air Max 95',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Nike Air Max 95 Gunsmoke Pink Foam.png',
    tag: 'DISPONÍVEL',
    colors: 'Gunsmoke/Grey/Pink Foam',
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    description: 'Apresentando as clássicas camadas em degradê de tons cinzas "Gunsmoke", este modelo ganha destaque com detalhes contrastantes em rosa pastel nos passadores e logos, combinando a robustez do Air Max 95 clássico com um toque sutil de cor.'
  },
  {
    id: '34',
    name: 'Nike Air Max 95 SE Big Bubble Total 90 Black',
    brand: 'Nike',
    model: 'Air Max 95',
    silhouette: 'Low Top',
    price: 379.90,
    image: '/assets/img/Nike Air Max 95 SE Big Bubble Total 90 Black⁠.png',
    tag: 'DISPONÍVEL',
    colors: 'Black/Anthracite/Gold',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Unindo a cultura de corrida com a herança dos gramados, a versão "Total 90 Black" aposta em um visual inteiramente preto "stealth" com texturas em mesh e couro premium, finalizado com as bolsas de ar ampliadas e a inscrição ✔️AMOS em branco na entressola.'
  },
  {
    id: '35',
    name: "Nike Air Max Plus Tn 'Metallic Silver'",
    brand: 'Nike',
    model: 'Air Max Tn',
    silhouette: 'Low Top',
    price: 329.90,
    image: '/assets/img/Nike Air Max Plus Tn \'Metallic Silver\'.png',
    tag: 'DISPONÍVEL',
    colors: 'Metallic Silver/White/Black',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Apresentando uma estética futurista industrial, o Air Max Plus "Metallic Silver" destaca-se pelo seu cabedal em mesh prata metálico com as clássicas nervuras de TPU brilhantes. Equipado com amortecimento Tuned Air, une conforto urbano e um design robótico polido de alto impacto.'
  },
  {
    id: '36',
    name: "Nike Air Max Plus Tn 'Dragon'",
    brand: 'Nike',
    model: 'Air Max Tn',
    silhouette: 'Low Top',
    price: 329.90,
    image: '/assets/img/Nike Air Max Plus Tn \'Dragon\'.png',
    tag: 'DISPONÍVEL',
    colors: 'Red/Black/Yellow',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Com um visual agressivo inspirado no fogo e na mística oriental, a colorway "Dragon" traz um degradê quente e impactante no cabedal. As linhas pretas de TPU reforçam a estrutura do tênis, enquanto o amortecimento Tuned Air garante a pisada firme e o conforto lendário deste ícone das ruas.'
  },
  {
    id: '37',
    name: "Nike Air Max Plus Tn 'Reverse Venom'",
    brand: 'Nike',
    model: 'Air Max Tn',
    silhouette: 'Low Top',
    price: 329.90,
    image: '/assets/img/Nike Air Max Plus Tn \'Reverse Venom\'.png',
    tag: 'DISPONÍVEL',
    colors: 'Black/White/Red',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Invertendo uma das combinações mais agressivas da linha, o "Reverse Venom" traz um cabedal com base escura contrastado por veias de TPU brancas e detalhes em vermelho vibrante nos logos e na bolha de ar. Uma estética intimidadora que evoca a pele do simbionte, aliada ao clássico suporte Tuned Air.'
  },
  {
    id: '38',
    name: "Nike TN Air Max Plus Black University Blue",
    brand: 'Nike',
    model: 'Air Max Tn',
    silhouette: 'Low Top',
    price: 329.90,
    image: '/assets/img/Nike TN Air Max Plus Black University Blue.jpg',
    tag: 'DISPONÍVEL',
    colors: 'Black/University Blue',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Combinando a base escura clássica com o destaque eletrizante do azul celeste (University Blue) nas veias de TPU e nos detalhes, esta colorway traz um contraste limpo e moderno. O amortecimento Tuned Air garante estabilidade e conforto supremo para o corre do dia a dia.'
  },
  {
    id: '39',
    name: "Nike Air Max TN Pink Rise",
    brand: 'Nike',
    model: 'Air Max Tn',
    silhouette: 'Low Top',
    price: 329.90,
    image: '/assets/img/Nike Air Max TN Pink Rise.jpg',
    tag: 'DISPONÍVEL',
    colors: 'Pink Rise/Black',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Ousado e cheio de atitude, o "Pink Rise" aposta em um tom de rosa vibrante que domina o visual do cabedal com muita personalidade. As linhas características do Air Max Plus contrapõem o design, entregando um estilo exclusivo nas ruas sem abrir mão do amortecimento icônico.'
  },
  {
    id: '40',
    name: "Nike Air Max DN All Night",
    brand: 'Nike',
    model: 'Air Max Dn',
    silhouette: 'Low Top',
    price: 349.90,
    image: '/assets/img/Nike Air Max DN All Night.jpg',
    tag: 'DISPONÍVEL',
    colors: 'Black/Dark Smoke Grey',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'O futuro do amortecimento chegou com a tecnologia Dynamic Air. A edição "All Night" apresenta uma estética furtiva toda em tons escuros, ideal para quem busca inovação tecnológica de ponta combinada com um design futurista e discreto para qualquer ocasião.'
  },
  {
    id: '41',
    name: "Nike Air Max 95 'Grey Jewel'",
    brand: 'Nike',
    model: 'Air Max 95',
    silhouette: 'Low Top',
    price: 349.90,
    image: '/assets/img/Nike Air Max 95 _Grey Jewel_ .jpg',
    tag: 'DISPONÍVEL',
    colors: 'Grey/Silver',
    sizes: [38, 39, 40, 41, 42, 43],
    description: 'Inspirado na anatomia humana e nas camadas geológicas, o clássico Air Max 95 ganha a sofisticação da edição "Grey Jewel". Com sobreposições em tons de cinza degradê e o sutil detalhe do Swoosh em formato de joia, é uma verdadeira obra-prima do streetwear.'
  }
];

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

export const availableModels = [
  // --- NIKE MODELS ---
  { name: "Air Force 1", brand: "Nike" },
  { name: "Air Max 95", brand: "Nike" },
  { name: "Air Max Dn", brand: "Nike" },
  { name: "Air Max Dn8", brand: "Nike" },
  { name: "Air Max Tn", brand: "Nike" },
  { name: "Air Max Tailwind V", brand: "Nike" },
  { name: "Nike Shox TL", brand: "Nike" },
  { name: "Nike Shox R4", brand: "Nike" },
  { name: "Nike Mind", brand: "Nike" },
  { name: "Nike x Nocta", brand: "Nike" },

  // --- ASICS MODELS ---
  { name: "ASICS Gel-NYC", brand: "Asics" }
];