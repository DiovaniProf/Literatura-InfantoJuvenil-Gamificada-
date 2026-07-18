"use strict";


const TOTAL_CHALLENGES = 10;
const TOTAL_QUESTIONS = 20;
const TOTAL_PAIRS = 10;

const ROOT = new URL("./", document.baseURI);

const EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp"
];

const $ = (id) => document.getElementById(id);


/* ==========================================================
   OBRAS
========================================================== */

const WORKS = [

  {
    id: 1,
    image: "img01",
    title: "O Menino Maluquinho",
    author: "Ziraldo",
    accent: "#2f7df4",
    themes:
      "Infância, criatividade, família, amizade e autenticidade.",
    description:
      "O protagonista vive a infância com intensidade, imaginação e muita energia. " +
      "A panela usada como chapéu tornou-se sua marca visual. A narrativa valoriza " +
      "brincadeiras, vínculos familiares, amizades e as diferentes formas de crescer."
  },

  {
    id: 2,
    image: "img03",
    title: "A Bolsa Amarela",
    author: "Lygia Bojunga",
    accent: "#e4518b",
    themes:
      "Identidade, autonomia, desejos e direito à expressão.",
    description:
      "Raquel guarda na bolsa amarela vontades e sentimentos que nem sempre consegue " +
      "compartilhar. A obra acompanha sua busca por voz, autonomia e reconhecimento, " +
      "convidando o leitor a refletir sobre escuta e identidade na infância."
  },

  {
    id: 3,
    image: "img05",
    title: "Marcelo, Marmelo, Martelo",
    author: "Ruth Rocha",
    accent: "#ef8f2f",
    themes:
      "Linguagem, criatividade, comunicação e construção de sentidos.",
    description:
      "Marcelo questiona os nomes das coisas e inventa novas palavras. A história " +
      "mostra que a linguagem é uma criação humana e coletiva, capaz de despertar " +
      "perguntas e imaginação, mas também necessária para que as pessoas consigam " +
      "se compreender."
  },

  {
    id: 4,
    image: "img07",
    title: "Reinações de Narizinho",
    author: "Monteiro Lobato",
    accent: "#21a36a",
    themes:
      "Fantasia, cultura brasileira, imaginação e aventura.",
    description:
      "No ambiente rural do Sítio do Picapau Amarelo, Narizinho, Emília e seus " +
      "companheiros vivem aventuras que misturam cotidiano, magia e elementos " +
      "do folclore brasileiro. Emília, uma boneca de pano que ganha voz, ocupa " +
      "papel central nesse universo."
  },

  {
    id: 5,
    image: "img09",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    accent: "#d6a21f",
    themes:
      "Amizade, cuidado, vínculos e responsabilidade.",
    description:
      "Durante sua viagem por diferentes planetas, o Pequeno Príncipe encontra " +
      "personagens que o ajudam a compreender relações humanas. A raposa ensina " +
      "sobre criar laços, e a rosa se torna especial pelo tempo, atenção e cuidado " +
      "dedicados a ela."
  },

  {
    id: 6,
    image: "img11",
    title: "Alice no País das Maravilhas",
    author: "Lewis Carroll",
    accent: "#7c4dff",
    themes:
      "Curiosidade, lógica, transformação e questionamento.",
    description:
      "Ao seguir o Coelho Branco, Alice entra em um universo de transformações, " +
      "enigmas e situações que desafiam a lógica. A narrativa estimula a curiosidade " +
      "e convida a questionar regras que parecem naturais ou imutáveis."
  },

  {
    id: 7,
    image: "img13",
    title: "Harry Potter e a Pedra Filosofal",
    author: "J. K. Rowling",
    accent: "#8c3fd1",
    themes:
      "Coragem, amizade, escolhas e cooperação.",
    description:
      "Harry descobre o mundo da magia e inicia seus estudos em Hogwarts. Entre aulas, " +
      "Quadribol e mistérios, ele aprende que a coragem, as escolhas responsáveis e " +
      "a amizade são essenciais para enfrentar desafios."
  },

  {
    id: 8,
    image: "img15",
    title: "Diário de um Banana",
    author: "Jeff Kinney",
    accent: "#e55c4a",
    themes:
      "Vida escolar, popularidade, amizade e imagem social.",
    description:
      "Greg registra sua rotina escolar em forma de diário, combinando relatos e " +
      "desenhos. A obra apresenta situações de amizade, vergonha, popularidade e " +
      "aceitação, mostrando como escolhas pessoais afetam a convivência."
  },

  {
    id: 9,
    image: "img17",
    title: "Matilda",
    author: "Roald Dahl",
    accent: "#168e78",
    themes:
      "Leitura, inteligência, autonomia, proteção e justiça.",
    description:
      "Matilda é uma menina muito inteligente e apaixonada por livros. Diante de " +
      "adultos que não reconhecem suas capacidades, encontra acolhimento na professora " +
      "Miss Honey. A narrativa destaca conhecimento, coragem e proteção da infância."
  },

  {
    id: 10,
    image: "img19",
    title: "O Leão, a Feiticeira e o Guarda-Roupa",
    author: "C. S. Lewis",
    accent: "#3466c2",
    themes:
      "Fantasia, coragem, esperança, lealdade e liberdade.",
    description:
      "Quatro irmãos entram em Nárnia por um guarda-roupa e encontram um mundo " +
      "dominado por um inverno permanente. Aslan representa coragem, esperança " +
      "e liberdade na luta contra a Feiticeira Branca."
  }

];


/* ==========================================================
   PERGUNTAS
========================================================== */

const QUESTIONS = [

  {
    id: 1,
    workId: 1,
    question:
      "Qual objeto se tornou a marca mais conhecida do Menino Maluquinho?",
    a:
      "Uma panela usada como chapéu.",
    b:
      "Uma coroa de papel dourado.",
    correct:
      "A",
    objective:
      "Reconhecer um elemento visual marcante do personagem e relacioná-lo à criatividade infantil."
  },

  {
    id: 2,
    workId: 1,
    question:
      "Qual característica representa melhor o protagonista Menino Maluquinho?",
    a:
      "Ele evita fazer brincadeiras com adultos porque os respeita.",
    b:
      "Ele é criativo, cheio de energia e vive intensamente a infância.",
    correct:
      "B",
    objective:
      "Identificar traços de personalidade do protagonista e refletir sobre diferentes formas de viver a infância."
  },

  {
    id: 3,
    workId: 2,
    question:
      "O que Raquel guarda simbolicamente dentro da bolsa amarela?",
    a:
      "Suas vontades, seus desejos e aquilo que nem sempre consegue dizer.",
    b:
      "Seus livros, lápis de cor, desenhos e outros materiais.",
    correct:
      "A",
    objective:
      "Compreender a bolsa como símbolo da identidade, dos desejos e da necessidade de expressão."
  },

  {
    id: 4,
    workId: 2,
    question:
      "Qual tema está mais presente em A Bolsa Amarela?",
    a:
      "Uma competição esportiva entre escolas.",
    b:
      "A busca pelo direito de expressar desejos e opiniões.",
    correct:
      "B",
    objective:
      "Relacionar a narrativa aos temas de autonomia, identidade e escuta da infância."
  },

  {
    id: 5,
    workId: 3,
    question:
      "Na obra Marcelo, Marmelo, Martelo, por que Marcelo cria palavras e novos nomes para as coisas?",
    a:
      "Porque questiona por que os objetos recebem certos nomes.",
    b:
      "Porque perdeu a capacidade de compreender a língua.",
    correct:
      "A",
    objective:
      "Perceber que o personagem investiga a relação entre palavras, objetos e construção de sentidos."
  },

  {
    id: 6,
    workId: 3,
    question:
      "Na obra Marcelo, Marmelo, Martelo, o que a história ensina sobre a linguagem?",
    a:
      "As pessoas mais velhas inventaram os nomes; por isso não podem ser trocados.",
    b:
      "As palavras são invenções humanas, por isso podem provocar perguntas e despertar a criatividade.",
    correct:
      "B",
    objective:
      "Refletir sobre a linguagem como construção coletiva necessária à comunicação."
  },

  {
    id: 7,
    workId: 4,
    question:
      "Em qual espaço acontecem muitas aventuras de Narizinho e seus companheiros?",
    a:
      "Em um ambiente rural típico com muita magia e folclore brasileiro.",
    b:
      "Em um ambiente da floresta amazônica com muita magia e folclore brasileiro.",
    correct:
      "A",
    objective:
      "Reconhecer o cenário principal da obra e sua importância para a mistura entre cotidiano e fantasia."
  },

  {
    id: 8,
    workId: 4,
    question:
      "Quem é Emília na narrativa da obra Reinações de Narizinho?",
    a:
      "É a personagem principal. Tem sete anos, pele morena e mora no sítio com a avó.",
    b:
      "Uma boneca de pano que ganha voz e participa das aventuras.",
    correct:
      "B",
    objective:
      "Identificar uma personagem central e seu papel criativo no universo da obra."
  },

  {
    id: 9,
    workId: 5,
    question:
      "Qual personagem ensina ao Pequeno Príncipe sobre criar laços e vínculos de amizade?",
    a:
      "A raposa que acompanha o Príncipe.",
    b:
      "O piloto de avião que narra a história.",
    correct:
      "A",
    objective:
      "Reconhecer a relação entre amizade, vínculo, cuidado e responsabilidade."
  },

  {
    id: 10,
    workId: 5,
    question:
      "Por que a rosa se torna especial para o Pequeno Príncipe?",
    a:
      "Porque é a flor mais bonita de todo o universo.",
    b:
      "Porque ele dedicou tempo, atenção e cuidado a ela.",
    correct:
      "B",
    objective:
      "Compreender que os vínculos ganham significado pelo cuidado e pelo tempo compartilhado."
  },

  {
    id: 11,
    workId: 6,
    question:
      "Quem Alice segue antes de entrar no mundo das maravilhas?",
    a:
      "Um Coelho Branco.",
    b:
      "Um Coelho Cinza.",
    correct:
      "A",
    objective:
      "Reconhecer o acontecimento que desencadeia a passagem do cotidiano para o universo fantástico."
  },

  {
    id: 12,
    workId: 6,
    question:
      "Na obra Alice no País das Maravilhas, como é o mundo encontrado por Alice?",
    a:
      "Um lugar extraordinário em que todas as regras funcionam do jeito como Alice deseja.",
    b:
      "Um universo de transformações, enigmas e situações que desafiam a lógica.",
    correct:
      "B",
    objective:
      "Relacionar a obra à curiosidade, à mudança e ao questionamento das regras aparentemente naturais."
  },

  {
    id: 13,
    workId: 7,
    question:
      "No universo de Harry Potter, o Quadribol é um esporte aéreo disputado em vassouras mágicas. Quais são as regras?",
    a:
      "O jogo envolve duas equipes de sete jogadores e quatro bolas.",
    b:
      "O jogo envolve duas equipes de cinco jogadores e quatro bolas.",
    correct:
      "A",
    objective:
      "Reconhecer as regras de um jogo estimula o senso de justiça."
  },

  {
    id: 14,
    workId: 7,
    question:
      "Além da magia, o que ajuda Harry Potter a enfrentar os principais desafios?",
    a:
      "Possuir uma varinha mágica que contém em seu núcleo uma pena de fênix.",
    b:
      "A coragem, as escolhas responsáveis e a amizade.",
    correct:
      "B",
    objective:
      "Valorizar cooperação, coragem e responsabilidade no enfrentamento de dificuldades."
  },

  {
    id: 15,
    workId: 8,
    question:
      "Na obra Diário de um Banana, como a história de Greg é apresentada ao leitor?",
    a:
      "Em forma de diário, com relatos e desenhos.",
    b:
      "Como uma coleção de cartas escritas para seus professores.",
    correct:
      "A",
    objective:
      "Identificar o formato narrativo da obra e a perspectiva pessoal do protagonista."
  },

  {
    id: 16,
    workId: 8,
    question:
      "Na obra Diário de um Banana, qual é a principal preocupação da vida escolar de Greg?",
    a:
      "Evitar o bullying e permanecer quase escondido dos colegas de classe.",
    b:
      "Conseguir popularidade, aceitação e uma boa imagem diante dos colegas.",
    correct:
      "B",
    objective:
      "Refletir sobre popularidade, imagem social, amizade e consequências das escolhas."
  },

  {
    id: 17,
    workId: 9,
    question:
      "Qual habilidade se destaca em Matilda desde muito pequena?",
    a:
      "Sua inteligência e seu grande interesse pela leitura.",
    b:
      "Sua habilidade em competições esportivas.",
    correct:
      "A",
    objective:
      "Relacionar leitura, conhecimento, autonomia e desenvolvimento das capacidades pessoais."
  },

  {
    id: 18,
    workId: 9,
    question:
      "Qual pessoa adulta acolhe Matilda e reconhece suas habilidades de mente genial e telecine?",
    a:
      "A diretora Trunchbull.",
    b:
      "A professora Miss Honey.",
    correct:
      "B",
    objective:
      "Identificar a importância de adultos que escutam, protegem e apoiam as crianças."
  },

  {
    id: 19,
    workId: 10,
    question:
      "Por onde as crianças entram no mundo de Nárnia?",
    a:
      "Por um guarda-roupa.",
    b:
      "Por um elevador mágico escondido na escola.",
    correct:
      "A",
    objective:
      "Reconhecer o elemento de passagem entre o mundo cotidiano e o universo fantástico."
  },

  {
    id: 20,
    workId: 10,
    question:
      "Quem é Aslan na história que se passa em Nárnia?",
    a:
      "Uma feiticeira responsável pelo inverno permanente.",
    b:
      "Um leão associado à coragem, à esperança e à liberdade.",
    correct:
      "B",
    objective:
      "Identificar uma figura central da narrativa e os valores simbolicamente ligados a ela."
  }

];


/* ==========================================================
   SIGNIFICADOS DO JOGO DA MEMÓRIA
========================================================== */

const MEMORY_MEANINGS = [

  {
    id: 1,
    image: "img01",
    work: "O Menino Maluquinho",
    author: "Ziraldo",
    concept: "Imaginação e autenticidade",
    theme:
      "Autenticidade, infância, criatividade e convivência",
    idea:
      "Ser diferente não significa estar errado.",
    question:
      "É possível ser verdadeiramente nós mesmos sem desrespeitar as outras pessoas?",
    meaning:
      "A criatividade permite imaginar novas possibilidades e expressar a própria identidade. " +
      "Entretanto, liberdade e espontaneidade precisam caminhar junto com responsabilidade, " +
      "respeito e cuidado com os demais. A obra ajuda a discutir diferenças de comportamento " +
      "e maneiras diversas de viver a infância.",
    accent: "#2f7df4"
  },

  {
    id: 2,
    image: "img03",
    work: "A Bolsa Amarela",
    author: "Lygia Bojunga",
    concept: "Desejos e identidade",
    theme:
      "Identidade, desejos, autonomia e silenciamento",
    idea:
      "Aquilo que sentimos precisa encontrar formas de expressão.",
    question:
      "Quem decide quais sonhos uma criança pode ter?",
    meaning:
      "Crianças e adolescentes possuem desejos, opiniões e conflitos que nem sempre " +
      "são compreendidos pelos adultos. Desenvolver autonomia significa aprender a " +
      "reconhecer os próprios sentimentos, expressá-los com clareza e também escutar " +
      "limites e perspectivas diferentes.",
    accent: "#e4518b"
  },

  {
    id: 3,
    image: "img05",
    work: "Marcelo, Marmelo, Martelo",
    author: "Ruth Rocha",
    concept:
      "Linguagem e construção de sentidos",
    theme:
      "Linguagem, regras, criatividade e comunicação",
    idea:
      "As palavras ajudam a organizar o mundo.",
    question:
      "Por que utilizamos determinadas palavras para nomear as coisas?",
    meaning:
      "A linguagem é uma criação coletiva. Podemos inventar palavras e novas formas " +
      "de expressão, mas precisamos de sentidos compartilhados para conseguir comunicar " +
      "ideias. A obra possibilita refletir sobre regras da língua, criatividade e " +
      "necessidade de entendimento entre as pessoas.",
    accent: "#ef8f2f"
  },

  {
    id: 4,
    image: "img07",
    work: "Reinações de Narizinho",
    author: "Monteiro Lobato",
    concept:
      "Imaginação, conhecimento e brasilidade",
    theme:
      "Imaginação, conhecimento, realidade e fantasia",
    idea:
      "Imaginar também é uma maneira de conhecer.",
    question:
      "A fantasia pode nos ensinar algo verdadeiro sobre a realidade?",
    meaning:
      "Histórias fantásticas permitem experimentar situações, valores e conflitos que " +
      "não seriam possíveis na vida cotidiana. Imaginação não é o contrário do conhecimento: " +
      "ela pode ajudar a formular perguntas, criar hipóteses e compreender o mundo de maneira " +
      "simbólica. Na utilização pedagógica da obra, também é importante contextualizar " +
      "criticamente representações sociais e raciais presentes em textos produzidos em " +
      "outros períodos históricos.",
    accent: "#21a36a"
  },

  {
    id: 5,
    image: "img09",
    work: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    concept:
      "Amizade e sentido da vida",
    theme:
      "Amizade, cuidado, responsabilidade e sentido da existência",
    idea:
      "Os vínculos se tornam importantes por meio do cuidado.",
    question:
      "Por que algumas pessoas e experiências se tornam especiais para nós?",
    meaning:
      "Amizades e vínculos não surgem apenas da proximidade. Eles são construídos por " +
      "meio de tempo, atenção, confiança e responsabilidade. A obra ajuda a refletir " +
      "sobre aquilo que valorizamos e sobre como nossas escolhas afetam as pessoas " +
      "de quem cuidamos.",
    accent: "#d6a21f"
  },

  {
    id: 6,
    image: "img11",
    work: "Alice no País das Maravilhas",
    author: "Lewis Carroll",
    concept:
      "Curiosidade e transformação",
    theme:
      "Identidade, lógica, curiosidade e mudança",
    idea:
      "Questionar o mundo pode transformar nossa maneira de pensar.",
    question:
      "Continuamos sendo a mesma pessoa quando mudamos nossas ideias e experiências?",
    meaning:
      "A curiosidade ajuda a enfrentar situações desconhecidas e a questionar regras " +
      "que parecem naturais. Mudanças físicas, emocionais e sociais podem produzir dúvidas " +
      "sobre identidade. Crescer envolve aprender a lidar com incertezas sem abandonar " +
      "a capacidade de perguntar.",
    accent: "#7c4dff"
  },

  {
    id: 7,
    image: "img13",
    work: "Harry Potter e a Pedra Filosofal",
    author: "J. K. Rowling",
    concept:
      "Escolhas, coragem e poder",
    theme:
      "Escolhas, coragem, amizade, preconceito e uso do poder",
    idea:
      "O valor de uma pessoa aparece na forma como utiliza suas capacidades.",
    question:
      "O que é mais importante: possuir poder ou saber utilizá-lo com responsabilidade?",
    meaning:
      "Talentos e conhecimentos podem ser utilizados para proteger, colaborar ou dominar " +
      "outras pessoas. Coragem não é ausência de medo, mas disposição para agir de acordo " +
      "com valores mesmo diante de dificuldades. A amizade também aparece como forma de " +
      "apoio e resistência.",
    accent: "#8c3fd1"
  },

  {
    id: 8,
    image: "img15",
    work: "Diário de um Banana",
    author: "Jeff Kinney",
    concept:
      "Imagem social e amadurecimento",
    theme:
      "Identidade social, popularidade, amizade e responsabilidade",
    idea:
      "Nossa imagem sobre nós mesmos nem sempre corresponde à forma como agimos.",
    question:
      "É correto prejudicar outras pessoas para conseguir popularidade?",
    meaning:
      "O desejo de aceitação pode influenciar escolhas e comportamentos. Muitas vezes, " +
      "justificamos nossos erros para preservar uma imagem positiva de nós mesmos. " +
      "Amadurecer envolve reconhecer falhas, assumir consequências e aprender a considerar " +
      "os sentimentos dos outros.",
    accent: "#e55c4a"
  },

  {
    id: 9,
    image: "img17",
    work: "Matilda",
    author: "Roald Dahl",
    concept:
      "Conhecimento e resistência",
    theme:
      "Conhecimento, autoridade, injustiça e autonomia",
    idea:
      "O conhecimento pode fortalecer pessoas diante da injustiça.",
    question:
      "Toda autoridade merece ser obedecida, mesmo quando age de maneira injusta?",
    meaning:
      "Autoridade e respeito não são a mesma coisa. Adultos, professores e instituições " +
      "possuem responsabilidades e limites. A leitura e o conhecimento podem ajudar crianças " +
      "e jovens a compreender situações injustas, argumentar e buscar apoio, sem substituir " +
      "a necessidade de proteção responsável.",
    accent: "#168e78"
  },

  {
    id: 10,
    image: "img19",
    work:
      "O Leão, a Feiticeira e o Guarda-Roupa",
    author:
      "C. S. Lewis",
    concept:
      "Lealdade e responsabilidade coletiva",
    theme:
      "Lealdade, tentação, responsabilidade e reconstrução",
    idea:
      "Escolhas individuais podem afetar toda uma comunidade.",
    question:
      "Como reconstruir a confiança depois de uma traição?",
    meaning:
      "As pessoas podem cometer erros motivados por medo, desejo ou necessidade de " +
      "reconhecimento. Reconhecer o erro é parte importante da mudança. Perdão não significa " +
      "ignorar consequências, mas criar condições para que responsabilidade, reparação e " +
      "confiança possam ser reconstruídas.",
    accent: "#3466c2"
  }

];


/* ==========================================================
   LINKS PARA LEITURA
========================================================== */

const READING_LINKS = [

  {
    id: 1,
    image: "img03",
    title: "A Bolsa Amarela",
    author: "Lygia Bojunga",
    accent: "#e4518b",
    url:
      "https://drive.google.com/file/d/1RaFry1ELwRH0adNA865hsKyUKzhPFV_S/view?usp=sharing"
  },

  {
    id: 2,
    image: "img11",
    title: "Alice no País das Maravilhas",
    author: "Lewis Carroll",
    accent: "#7c4dff",
    url:
      "https://drive.google.com/file/d/1s7Oujw4ZNUaBB0oceTM71mB9fJUZMIF4/view?usp=sharing"
  },

  {
    id: 3,
    image: "img19",
    title: "As Crônicas de Nárnia — Volume Único",
    author: "C. S. Lewis",
    accent: "#3466c2",
    url:
      "https://drive.google.com/file/d/1bHVMLCeZYPNKL9LrRcFpzHDZUd_Can3b/view?usp=sharing"
  },

  {
    id: 4,
    image: "img15",
    title: "Diário de um Banana — Volume 1",
    author: "Jeff Kinney",
    accent: "#e55c4a",
    url:
      "https://drive.google.com/file/d/1mwNO5cL4vS-F8JC3GXx9oqQLmYZHIUOb/view?usp=sharing"
  },

  {
    id: 5,
    image: "img13",
    title: "Harry Potter e a Pedra Filosofal",
    author: "J. K. Rowling",
    accent: "#8c3fd1",
    url:
      "https://drive.google.com/file/d/1nCuIPVRjXPIe5cyAyGt0r7jk2czICTGs/view?usp=sharing"
  },

  {
    id: 6,
    image: "img05",
    title: "Marcelo, Marmelo, Martelo",
    author: "Ruth Rocha",
    accent: "#ef8f2f",
    url:
      "https://drive.google.com/file/d/1moa1SfUJsqN2azZHBowin5jnsqI0yWb9/view?usp=sharing"
  },

  {
    id: 7,
    image: "img17",
    title: "Matilda",
    author: "Roald Dahl",
    accent: "#168e78",
    url:
      "https://drive.google.com/file/d/1Z0_XMP5m7dOpgSglPQuJo0YPdAb052SE/view?usp=sharing"
  },

  {
    id: 8,
    image: "img01",
    title: "O Menino Maluquinho",
    author: "Ziraldo",
    accent: "#2f7df4",
    url:
      "https://drive.google.com/file/d/17Vlpww7qFx9gnUD_95dvFpG1H6Bi-j6J/view?usp=sharing"
  },

  {
    id: 9,
    image: "img09",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    accent: "#d6a21f",
    url:
      "https://drive.google.com/file/d/1y0fulxI7Tp9zAOLqJQzIRBmGPm4_Q3OK/view?usp=sharing"
  },

  {
    id: 10,
    image: "img07",
    title: "Reinações de Narizinho",
    author: "Monteiro Lobato",
    accent: "#21a36a",
    url:
      "https://drive.google.com/file/d/1UxjdYC2TbL5s8qJ-TX82vOuuOJ-srkb6/view?usp=sharing"
  }

];


/* ==========================================================
   CARTAS E RECURSOS
========================================================== */

const CARDS = Array.from(
  {
    length: 20
  },

  (_, index) => {

    const number =
      index + 1;

    const pair =
      Math.ceil(number / 2);

    return {
      id:
        `img${String(number).padStart(2, "0")}`,

      pair,

      work:
        WORKS[pair - 1].title
    };
  }
);


const IMAGE_RESOURCES = [

  ...CARDS.map(
    (card) => ({
      id:
        card.id,

      bases: [
        card.id
      ],

      pair:
        card.pair,

      cover:
        false
    })
  ),

  {
    id:
      "capa",

    bases: [
      "capa",
      "CAPA"
    ],

    pair:
      0,

    cover:
      true
  }

];


const RESOURCE_MAP =
  new Map(
    IMAGE_RESOURCES.map(
      (resource) => [
        resource.id,
        resource
      ]
    )
  );


const ASSETS =
  new Map();


const FALLBACKS =
  new Map();


const SCREENS = [

  "startScreen",
  "worksScreen",
  "resourcesScreen",
  "rulesScreen",
  "quizScreen",
  "quizFinalScreen",
  "quizMeaningsScreen",
  "memoryScreen",
  "memoryMeaningsScreen"

].map($);


/* ==========================================================
   FUNÇÕES GERAIS
========================================================== */

function show(screen) {

  if (!screen) {
    return;
  }


  if (
    screen !==
    $("memoryScreen")
  ) {
    closeInfo();
  }


  SCREENS.forEach(
    (item) => {

      if (item) {
        item.hidden =
          item !== screen;
      }

    }
  );


  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
}


function shuffle(list) {

  const result = [
    ...list
  ];


  for (
    let index = result.length - 1;
    index > 0;
    index -= 1
  ) {

    const randomIndex =
      Math.floor(
        Math.random() *
        (index + 1)
      );


    [
      result[index],
      result[randomIndex]
    ] = [
      result[randomIndex],
      result[index]
    ];
  }


  return result;
}


function timeText(total) {

  const minutes =
    String(
      Math.floor(total / 60)
    ).padStart(
      2,
      "0"
    );


  const seconds =
    String(
      total % 60
    ).padStart(
      2,
      "0"
    );


  return `${minutes}:${seconds}`;
}


function announce(text) {

  $("liveRegion").textContent =
    text;
}


/* ==========================================================
   IMAGENS PROVISÓRIAS
========================================================== */

function fallback(id) {

  const resource =
    RESOURCE_MAP.get(id) || {
      id: "capa",
      pair: 0,
      cover: true
    };


  const key =
    resource.cover
      ? "cover"
      : `pair-${resource.pair}`;


  if (
    FALLBACKS.has(key)
  ) {
    return FALLBACKS.get(key);
  }


  const work =
    resource.pair
      ? WORKS[resource.pair - 1]
      : null;


  const accent =
    work
      ? work.accent
      : "#42d9ff";


  const label =
    resource.cover
      ? "CAPA"
      : String(
          resource.pair
        ).padStart(
          2,
          "0"
        );


  const title =
    resource.cover
      ? "LITERATURA E FILOSOFIA"
      : work.title;


  const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1280"
      height="720"
      viewBox="0 0 1280 720"
    >

      <defs>

        <linearGradient
          id="g"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >

          <stop
            stop-color="#071426"
          />

          <stop
            offset=".55"
            stop-color="${accent}"
          />

          <stop
            offset="1"
            stop-color="#42d9ff"
          />

        </linearGradient>

      </defs>


      <rect
        width="1280"
        height="720"
        rx="30"
        fill="url(#g)"
      />


      <rect
        x="24"
        y="24"
        width="1232"
        height="672"
        rx="24"
        fill="none"
        stroke="#ffc857"
        stroke-width="8"
      />


      <circle
        cx="640"
        cy="305"
        r="210"
        fill="#ffffff"
        fill-opacity=".1"
      />


      <text
        x="640"
        y="350"
        text-anchor="middle"
        font-family="Georgia"
        font-size="130"
        font-weight="900"
        fill="#fff4bc"
      >
        ${label}
      </text>


      <rect
        x="130"
        y="520"
        width="1020"
        height="100"
        rx="18"
        fill="#071426"
        fill-opacity=".82"
      />


      <text
        x="640"
        y="583"
        text-anchor="middle"
        font-family="Arial"
        font-size="38"
        font-weight="800"
        fill="#ffffff"
      >
        ${title}
      </text>

    </svg>
  `;


  const url =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(svg);


  FALLBACKS.set(
    key,
    url
  );


  return url;
}


function asset(id) {

  return (
    ASSETS.get(id) ||
    fallback(id)
  );
}


function createImage(
  id,
  alt
) {

  const image =
    document.createElement(
      "img"
    );


  image.dataset.asset =
    id;


  image.src =
    asset(id);


  image.alt =
    alt;


  image.draggable =
    false;


  return image;
}


function refreshImages(id) {

  document
    .querySelectorAll(
      `img[data-asset="${id}"]`
    )
    .forEach(
      (image) => {

        image.src =
          asset(id);

      }
    );
}


/* ==========================================================
   CARREGAMENTO DAS IMAGENS
========================================================== */

function tryUrl(
  url,
  timeout = 1600
) {

  return new Promise(
    (
      resolve,
      reject
    ) => {

      const image =
        new Image();


      let completed =
        false;


      const finish = (
        callback,
        value
      ) => {

        if (completed) {
          return;
        }


        completed =
          true;


        clearTimeout(
          timeoutId
        );


        image.onload =
          null;


        image.onerror =
          null;


        callback(
          value
        );
      };


      const timeoutId =
        setTimeout(
          () => {

            finish(
              reject,
              new Error("timeout")
            );

          },

          timeout
        );


      image.onload =
        () => {

          finish(
            resolve,
            url
          );

        };


      image.onerror =
        () => {

          finish(
            reject,
            new Error("error")
          );

        };


      image.src =
        url;
    }
  );
}


async function findAsset(resource) {

  for (
    const base
    of resource.bases
  ) {

    for (
      const extension
      of EXTENSIONS
    ) {

      try {

        return await tryUrl(
          new URL(
            base + extension,
            ROOT
          ).href
        );

      } catch (error) {

        /*
          Tenta o próximo formato.
        */

      }
    }
  }


  return null;
}


async function preload() {

  let complete =
    0;


  let missing =
    0;


  const updateLoading = () => {

    const percent =
      Math.round(
        (
          complete /
          IMAGE_RESOURCES.length
        ) * 100
      );


    $("loadingPercent").textContent =
      `${percent}%`;


    $("loadingBar").style.width =
      `${percent}%`;


    $("loadingDetails").textContent =
      `${complete} de ${IMAGE_RESOURCES.length} recursos preparados`;
  };


  await Promise.allSettled(

    IMAGE_RESOURCES.map(

      async (resource) => {

        const url =
          await findAsset(resource);


        if (!url) {
          missing += 1;
        }


        ASSETS.set(
          resource.id,

          url ||
          fallback(resource.id)
        );


        refreshImages(
          resource.id
        );


        complete += 1;


        updateLoading();
      }
    )
  );


  $("loadingMessage").textContent =
    missing
      ? "Jogo pronto com imagens provisórias onde faltaram arquivos."
      : "Todas as imagens estão prontas.";


  $("loadingDetails").textContent =
    missing
      ? "Mantenha capa e img01 até img20 na raiz. Os botões permanecem ativos."
      : "Escolha uma experiência para começar.";


  $("loadingPercent").textContent =
    "100%";


  $("loadingBar").style.width =
    "100%";
}


/* ==========================================================
   TELA INICIAL
========================================================== */

function renderHome() {

  const container =
    $("homeGallery");


  container.innerHTML =
    "";


  WORKS.forEach(
    (work) => {

      const figure =
        document.createElement(
          "figure"
        );


      figure.className =
        "home-card";


      figure.append(
        createImage(
          work.image,
          `${work.title}, de ${work.author}`
        )
      );


      const caption =
        document.createElement(
          "figcaption"
        );


      caption.textContent =
        `${work.title} — ${work.author}`;


      figure.append(
        caption
      );


      container.append(
        figure
      );
    }
  );
}


/* ==========================================================
   CONHECER AS OBRAS
========================================================== */

function renderWorks() {

  const container =
    $("worksList");


  if (
    container.childElementCount
  ) {
    return;
  }


  WORKS.forEach(
    (
      work,
      index
    ) => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "work-card";


      article.style.setProperty(
        "--accent",
        work.accent
      );


      const picture =
        document.createElement(
          "div"
        );


      picture.className =
        "work-image";


      picture.append(
        createImage(
          work.image,
          work.title
        )
      );


      const copy =
        document.createElement(
          "div"
        );


      copy.className =
        "work-copy";


      copy.innerHTML = `
        <small>
          OBRA ${String(index + 1).padStart(2, "0")}
        </small>

        <h3>
          ${work.title}
        </h3>

        <p class="work-author">
          ${work.author}
        </p>

        <p class="work-description">
          ${work.description}
        </p>

        <p class="work-themes">
          <strong>Temas:</strong>
          ${work.themes}
        </p>
      `;


      article.append(
        picture,
        copy
      );


      container.append(
        article
      );
    }
  );
}


/* ==========================================================
   QUERO SABER +
========================================================== */

function renderResources() {

  const container =
    $("resourcesList");


  if (
    !container ||
    container.childElementCount
  ) {
    return;
  }


  READING_LINKS.forEach(
    (item) => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "resource-card";


      article.style.setProperty(
        "--resource-accent",
        item.accent
      );


      const visual =
        document.createElement(
          "div"
        );


      visual.className =
        "resource-visual";


      visual.append(
        createImage(
          item.image,
          item.title
        )
      );


      const copy =
        document.createElement(
          "div"
        );


      copy.className =
        "resource-copy";


      copy.innerHTML = `
        <span class="resource-number">
          OBRA ${String(item.id).padStart(2, "0")}
        </span>

        <p class="resource-format">
          LEITURA NO PDF
        </p>

        <h3>
          ${item.title}
        </h3>

        <p class="resource-author">
          ${item.author}
        </p>

        <p class="resource-description">
          Acesse o texto integral ou o material disponibilizado
          para ampliar a leitura e conhecer melhor esta obra.
        </p>

        <a
          class="resource-link"
          href="${item.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir PDF de ${item.title}"
        >
          <span>
            ABRIR PDF
          </span>

          <strong aria-hidden="true">
            ↗
          </strong>
        </a>
      `;


      article.append(
        visual,
        copy
      );


      container.append(
        article
      );
    }
  );
}


/* ==========================================================
   SIGNIFICADOS DAS QUESTÕES
========================================================== */

function renderQuizMeanings() {

  const container =
    $("quizMeaningsList");


  if (
    container.childElementCount
  ) {
    return;
  }


  QUESTIONS.forEach(
    (question) => {

      const work =
        WORKS[question.workId - 1];


      const correctText =
        question.correct === "A"
          ? question.a
          : question.b;


      const article =
        document.createElement(
          "article"
        );


      article.className =
        "meaning-card";


      article.style.setProperty(
        "--accent",
        work.accent
      );


      article.innerHTML = `
        <p class="meaning-work">
          QUESTÃO ${String(question.id).padStart(2, "0")}
          ·
          ${work.title}
        </p>

        <h3>
          ${question.question}
        </h3>

        <p class="meaning-answer">
          <strong>Resposta correta:</strong>
          Alternativa ${question.correct}
          —
          ${correctText}
        </p>

        <p class="meaning-objective">
          <strong>Objetivo pedagógico:</strong>
          ${question.objective}
        </p>
      `;


      container.append(
        article
      );
    }
  );
}


/* ==========================================================
   SIGNIFICADOS DA MEMÓRIA
========================================================== */

function renderMemoryMeanings() {

  const container =
    $("memoryMeaningsList");


  if (
    container.childElementCount
  ) {
    return;
  }


  MEMORY_MEANINGS.forEach(
    (item) => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "memory-meaning";


      article.style.setProperty(
        "--accent",
        item.accent
      );


      const picture =
        document.createElement(
          "div"
        );


      picture.className =
        "memory-meaning-image";


      picture.append(
        createImage(
          item.image,
          item.work
        )
      );


      const copy =
        document.createElement(
          "div"
        );


      copy.innerHTML = `
        <small>
          PAR ${String(item.id).padStart(2, "0")}
        </small>

        <h3>
          ${item.work}
        </h3>

        <p class="memory-author">
          ${item.author}
        </p>

        <p class="memory-concept">
          ${item.concept}
        </p>

        <p class="memory-theme">
          ${item.theme}
        </p>

        <p class="memory-idea">
          <strong>Ideia central:</strong>
          ${item.idea}
        </p>

        <div class="memory-question">
          “${item.question}”
        </div>

        <p class="memory-body">
          ${item.meaning}
        </p>
      `;


      article.append(
        picture,
        copy
      );


      container.append(
        article
      );
    }
  );
}


/* ==========================================================
   AMARELINHA — ESTADO
========================================================== */

let questionQueue =
  [];


let currentQuestion =
  null;


let stageIndex =
  0;


let hits =
  0;


let errors =
  0;


let usedQuestions =
  0;


let quizSeconds =
  0;


let quizTimer =
  null;


let quizActive =
  false;


let lastCorrect =
  false;


let lastWork =
  null;


/* ==========================================================
   FILA DAS PERGUNTAS
========================================================== */

function buildQuestionQueue() {

  const firstRound =
    [];


  const secondRound =
    [];


  WORKS.forEach(
    (work) => {

      const questions =
        shuffle(
          QUESTIONS.filter(
            (question) =>
              question.workId === work.id
          )
        );


      firstRound.push(
        questions[0]
      );


      secondRound.push(
        questions[1]
      );
    }
  );


  return [
    ...shuffle(firstRound),
    ...shuffle(secondRound)
  ];
}


/* ==========================================================
   STATUS DA AMARELINHA
========================================================== */

function updateQuiz() {

  $("quizTime").textContent =
    timeText(quizSeconds);


  $("quizHits").textContent =
    `${hits}/10`;


  $("quizErrors").textContent =
    String(errors);


  $("quizUsed").textContent =
    `${usedQuestions}/20`;


  $("quizProgress").style.width =
    `${hits * 10}%`;
}


function stopQuizTimer() {

  if (
    quizTimer !== null
  ) {

    clearInterval(
      quizTimer
    );
  }


  quizTimer =
    null;
}


function startQuizTimer() {

  if (
    quizTimer !== null
  ) {
    return;
  }


  quizTimer =
    setInterval(
      () => {

        quizSeconds += 1;


        updateQuiz();
      },

      1000
    );
}


/* ==========================================================
   REINICIAR AMARELINHA
========================================================== */

function resetQuiz() {

  stopQuizTimer();


  questionQueue =
    [];


  currentQuestion =
    null;


  stageIndex =
    0;


  hits =
    0;


  errors =
    0;


  usedQuestions =
    0;


  quizSeconds =
    0;


  quizActive =
    false;


  lastCorrect =
    false;


  lastWork =
    null;


  updateQuiz();


  $("quizMessage").textContent =
    "Toque na casa ativa para abrir a primeira pergunta.";


  closeQuestion();
}


/* ==========================================================
   CRIAR TABULEIRO
========================================================== */

function renderBoard() {

  const board =
    $("hopscotchBoard");


  board.innerHTML =
    "";


  for (
    let index = 0;
    index < TOTAL_CHALLENGES;
    index += 1
  ) {

    const stage =
      document.createElement(
        "section"
      );


    stage.className =
      "stage";


    stage.dataset.stage =
      String(index);


    const questionHouse =
      document.createElement(
        "button"
      );


    questionHouse.type =
      "button";


    questionHouse.className =
      "question-house locked";


    questionHouse.innerHTML =
      index === 0

        ? `
          <strong>
            Pergunta 1
          </strong>

          <small>
            Iniciar Desafio
          </small>
        `

        : `
          <strong>
            Pergunta ${index + 1}
          </strong>

          <small>
            Continuar
          </small>
        `;


    questionHouse.addEventListener(
      "click",

      () => {

        openQuestion(
          index
        );
      }
    );


    const choices =
      document.createElement(
        "div"
      );


    choices.className =
      "choices";


    choices.innerHTML = `
      <div
        class="choice"
        data-side="A"
      >
        A
      </div>

      <div
        class="choice"
        data-side="B"
      >
        B
      </div>
    `;


    stage.append(
      questionHouse,
      choices
    );


    board.append(
      stage
    );


    if (
      index <
      TOTAL_CHALLENGES - 1
    ) {

      const connector =
        document.createElement(
          "div"
        );


      connector.className =
        "connector";


      board.append(
        connector
      );
    }
  }


  const finalConnector =
    document.createElement(
      "div"
    );


  finalConnector.className =
    "connector";


  board.append(
    finalConnector
  );


  const arrival =
    document.createElement(
      "div"
    );


  arrival.id =
    "arrival";


  arrival.className =
    "arrival";


  arrival.textContent =
    "CHEGADA — 10 DESAFIOS CONCLUÍDOS";


  board.append(
    arrival
  );


  updateBoard();
}


/* ==========================================================
   ATUALIZAR TABULEIRO
========================================================== */

function updateBoard() {

  document
    .querySelectorAll(
      ".stage"
    )
    .forEach(
      (
        stage,
        index
      ) => {

        const house =
          stage.querySelector(
            ".question-house"
          );


        house.classList.remove(
          "active",
          "complete",
          "locked"
        );


        if (
          index < stageIndex
        ) {

          house.classList.add(
            "complete"
          );

        } else if (
          index === stageIndex &&
          quizActive
        ) {

          house.classList.add(
            "active"
          );

        } else {

          house.classList.add(
            "locked"
          );
        }
      }
    );


  updateQuiz();
}


function markChoice(side) {

  const stage =
    document.querySelector(
      `.stage[data-stage="${stageIndex}"]`
    );


  if (!stage) {
    return;
  }


  const selected =
    stage.querySelector(
      `[data-side="${side}"]`
    );


  const opposite =
    side === "A"
      ? "B"
      : "A";


  const other =
    stage.querySelector(
      `[data-side="${opposite}"]`
    );


  selected.classList.add(
    "correct"
  );


  other.classList.add(
    "unused"
  );
}


/* ==========================================================
   INICIAR AMARELINHA
========================================================== */

function startQuiz() {

  resetQuiz();


  questionQueue =
    buildQuestionQueue();


  quizActive =
    true;


  renderBoard();


  show(
    $("quizScreen")
  );


  setTimeout(
    () => {

      document
        .querySelector(
          ".question-house.active"
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
    },

    100
  );
}


/* ==========================================================
   ABRIR PERGUNTA
========================================================== */

function openQuestion(index) {

  if (
    !quizActive ||
    index !== stageIndex ||
    currentQuestion
  ) {
    return;
  }


  if (
    usedQuestions >= TOTAL_QUESTIONS ||
    questionQueue.length === 0
  ) {

    finishQuiz(
      false
    );

    return;
  }


  startQuizTimer();


  currentQuestion =
    questionQueue.shift();


  usedQuestions += 1;


  updateQuiz();


  $("questionStep").textContent =
    `DESAFIO ${stageIndex + 1} DE 10 · PERGUNTA ${usedQuestions} DE 20`;


  $("questionText").textContent =
    currentQuestion.question;


  $("answerAText").textContent =
    currentQuestion.a;


  $("answerBText").textContent =
    currentQuestion.b;


  $("questionView").hidden =
    false;


  $("feedbackView").hidden =
    true;


  $("answerAButton").disabled =
    false;


  $("answerBButton").disabled =
    false;


  $("questionModal").hidden =
    false;


  document.body.classList.add(
    "modal-open"
  );
}


function closeQuestion() {

  $("questionModal").hidden =
    true;


  document.body.classList.remove(
    "modal-open"
  );
}


/* ==========================================================
   RESPONDER
========================================================== */

function answer(side) {

  if (!currentQuestion) {
    return;
  }


  $("answerAButton").disabled =
    true;


  $("answerBButton").disabled =
    true;


  lastCorrect =
    side === currentQuestion.correct;


  lastWork =
    WORKS[currentQuestion.workId - 1];


  if (lastCorrect) {

    hits += 1;


    markChoice(
      side
    );


    showCorrect();

  } else {

    errors += 1;


    showWrong();
  }


  updateQuiz();
}


/* ==========================================================
   ACERTO
========================================================== */

function showCorrect() {

  $("questionView").hidden =
    true;


  $("feedbackView").hidden =
    false;


  $("feedbackKicker").textContent =
    "RESPOSTA CORRETA";


  $("feedbackTitle").textContent =
    "Muito bem!";


  $("feedbackImageBox").classList.remove(
    "error"
  );


  $("feedbackImage").dataset.asset =
    lastWork.image;


  $("feedbackImage").src =
    asset(lastWork.image);


  $("feedbackImage").alt =
    lastWork.title;


  $("feedbackWork").textContent =
    lastWork.title;


  $("feedbackText").textContent =
    "O quadrinho escolhido ficará verde e a próxima casa será liberada.";


  $("feedbackContinueButton").textContent =
    "CONTINUAR";


  announce(
    "Resposta correta."
  );
}


/* ==========================================================
   ERRO
========================================================== */

function showWrong() {

  $("questionView").hidden =
    true;


  $("feedbackView").hidden =
    false;


  $("feedbackKicker").textContent =
    "TENTE NOVAMENTE";


  $("feedbackTitle").textContent =
    "A alternativa escolhida não está correta.";


  $("feedbackImageBox").classList.add(
    "error"
  );


  $("feedbackWork").textContent =
    "Você permanece no mesmo desafio.";


  $("feedbackText").textContent =
    usedQuestions >= TOTAL_QUESTIONS

      ? "Todas as questões foram utilizadas. O percurso será encerrado."

      : "Volte ao tabuleiro e toque novamente na casa ativa para receber outra pergunta.";


  $("feedbackContinueButton").textContent =
    usedQuestions >= TOTAL_QUESTIONS

      ? "VER RESULTADO"

      : "VOLTAR AO TABULEIRO";


  announce(
    "Tente novamente."
  );
}


/* ==========================================================
   CONTINUAR APÓS O FEEDBACK
========================================================== */

function continueFeedback() {

  const correct =
    lastCorrect;


  currentQuestion =
    null;


  closeQuestion();


  if (correct) {

    stageIndex += 1;


    if (
      hits === TOTAL_CHALLENGES
    ) {

      $("arrival")
        ?.classList
        .add(
          "reached"
        );


      finishQuiz(
        true
      );


      return;
    }


    if (
      usedQuestions >= TOTAL_QUESTIONS ||
      questionQueue.length === 0
    ) {

      finishQuiz(
        false
      );


      return;
    }


    updateBoard();


    $("quizMessage").textContent =
      `Desafio ${hits} concluído. Toque na próxima casa ativa.`;

  } else {

    if (
      usedQuestions >= TOTAL_QUESTIONS ||
      questionQueue.length === 0
    ) {

      finishQuiz(
        false
      );


      return;
    }


    $("quizMessage").textContent =
      "Tente novamente: toque na casa ativa para abrir uma nova pergunta.";
  }


  setTimeout(
    () => {

      document
        .querySelector(
          ".question-house.active"
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
    },

    100
  );
}


/* ==========================================================
   RESULTADO DA AMARELINHA
========================================================== */

function finishQuiz(success) {

  stopQuizTimer();


  quizActive =
    false;


  currentQuestion =
    null;


  closeQuestion();


  $("quizFinalKicker").textContent =
    success

      ? "PERCURSO CONCLUÍDO"

      : "BANCO DE QUESTÕES ESGOTADO";


  $("quizFinalTitle").textContent =
    success

      ? "CHEGADA ALCANÇADA!"

      : "TODAS AS QUESTÕES FORAM UTILIZADAS";


  $("quizFinalMessage").textContent =
    success

      ? "Você concluiu os dez desafios da Amarelinha Literária."

      : `Você chegou ao desafio ${Math.min(stageIndex + 1, 10)} e precisa reiniciar o percurso.`;


  $("quizFinalTime").textContent =
    timeText(quizSeconds);


  $("quizFinalHits").textContent =
    String(hits);


  $("quizFinalErrors").textContent =
    String(errors);


  $("quizFinalUsed").textContent =
    String(usedQuestions);


  $("quizEvaluation").textContent =
    success

      ? (
        usedQuestions <= 12

          ? "Leitor explorador: excelente aproveitamento."

          : usedQuestions <= 16

            ? "Leitor atento: jornada concluída."

            : "Leitor perseverante: você continuou até a chegada."
      )

      : "Reinicie o jogo para tentar novamente.";


  $("openQuizMeaningsButton").hidden =
    !success;


  show(
    $("quizFinalScreen")
  );
}


function leaveQuiz() {

  return (
    !quizActive ||
    window.confirm(
      "Ao sair, o percurso atual será encerrado. Deseja continuar?"
    )
  );
}


/* ==========================================================
   JOGO DA MEMÓRIA — ESTADO
========================================================== */

let firstCard =
  null;


let secondCard =
  null;


let memoryLock =
  false;


let memoryMoves =
  0;


let memoryPairs =
  0;


let memorySeconds =
  0;


let memoryTimer =
  null;


let memoryActive =
  false;


let memoryDone =
  false;


let memorySession =
  0;


const MEMORY_TIMEOUTS =
  new Set();


/* ==========================================================
   CONTROLE DE ESPERAS
========================================================== */

function scheduleMemory(
  callback,
  delay
) {

  const session =
    memorySession;


  const timeoutId =
    setTimeout(
      () => {

        MEMORY_TIMEOUTS.delete(
          timeoutId
        );


        if (
          session === memorySession
        ) {

          callback();
        }
      },

      delay
    );


  MEMORY_TIMEOUTS.add(
    timeoutId
  );
}


function clearMemoryTimeouts() {

  MEMORY_TIMEOUTS.forEach(
    clearTimeout
  );


  MEMORY_TIMEOUTS.clear();
}


/* ==========================================================
   CRONÔMETRO DA MEMÓRIA
========================================================== */

function stopMemoryTimer() {

  if (
    memoryTimer !== null
  ) {

    clearInterval(
      memoryTimer
    );
  }


  memoryTimer =
    null;
}


function startMemoryTimer() {

  if (
    memoryTimer !== null
  ) {
    return;
  }


  memoryTimer =
    setInterval(
      () => {

        memorySeconds += 1;


        updateMemory();
      },

      1000
    );
}


/* ==========================================================
   STATUS DA MEMÓRIA
========================================================== */

function updateMemory() {

  $("memoryMoves").textContent =
    String(memoryMoves);


  $("memoryTime").textContent =
    timeText(memorySeconds);


  $("memoryPairs").textContent =
    `${memoryPairs}/10`;


  $("memoryProgress").style.width =
    `${memoryPairs * 10}%`;
}


/* ==========================================================
   PAINEL DE INFORMAÇÕES
========================================================== */

function openInfo() {

  $("memoryInfoPanel").hidden =
    false;


  $("memoryInfoButton").setAttribute(
    "aria-expanded",
    "true"
  );
}


function closeInfo() {

  const panel =
    $("memoryInfoPanel");


  if (!panel) {
    return;
  }


  panel.hidden =
    true;


  $("memoryInfoButton")
    ?.setAttribute(
      "aria-expanded",
      "false"
    );
}


function toggleInfo() {

  if (
    $("memoryInfoPanel").hidden
  ) {

    openInfo();

  } else {

    closeInfo();
  }
}


/* ==========================================================
   REINICIAR MEMÓRIA
========================================================== */

function resetMemory() {

  clearMemoryTimeouts();


  memorySession += 1;


  stopMemoryTimer();


  firstCard =
    null;


  secondCard =
    null;


  memoryLock =
    false;


  memoryMoves =
    0;


  memoryPairs =
    0;


  memorySeconds =
    0;


  memoryActive =
    false;


  memoryDone =
    false;


  closeInfo();


  $("memoryMessage").textContent =
    "Encontre os dez pares formados por imagens iguais.";


  $("memoryFinish").hidden =
    true;


  $("openMemoryMeaningsButton").disabled =
    true;


  updateMemory();
}


/* ==========================================================
   CRIAR CARTA
========================================================== */

function createMemoryCard(
  data,
  position
) {

  const button =
    document.createElement(
      "button"
    );


  button.type =
    "button";


  button.className =
    "memory-card";


  button.dataset.pair =
    String(data.pair);


  button.dataset.work =
    data.work;


  button.dataset.position =
    String(position);


  button.setAttribute(
    "aria-label",
    `Carta ${position}, fechada`
  );


  const inner =
    document.createElement(
      "span"
    );


  inner.className =
    "card-inner";


  const back =
    document.createElement(
      "span"
    );


  back.className =
    "card-face";


  back.append(
    createImage(
      "capa",
      "Face fechada da carta"
    )
  );


  const front =
    document.createElement(
      "span"
    );


  front.className =
    "card-face card-front";


  front.append(
    createImage(
      data.id,
      data.work
    )
  );


  inner.append(
    back,
    front
  );


  button.append(
    inner
  );


  button.addEventListener(
    "click",

    () => {

      flipCard(
        button
      );
    }
  );


  return button;
}


/* ==========================================================
   TABULEIRO DA MEMÓRIA
========================================================== */

function renderMemoryBoard() {

  const board =
    $("memoryBoard");


  board.innerHTML =
    "";


  shuffle(CARDS).forEach(
    (
      card,
      index
    ) => {

      board.append(
        createMemoryCard(
          card,
          index + 1
        )
      );
    }
  );
}


function startMemory() {

  resetMemory();


  memoryActive =
    true;


  renderMemoryBoard();


  show(
    $("memoryScreen")
  );
}


/* ==========================================================
   VIRAR CARTA
========================================================== */

function flipCard(card) {

  if (
    !memoryActive ||
    memoryLock ||
    card.classList.contains("flipped") ||
    card.classList.contains("matched")
  ) {
    return;
  }


  startMemoryTimer();


  card.classList.add(
    "flipped"
  );


  if (!firstCard) {

    firstCard =
      card;


    $("memoryMessage").textContent =
      "Agora escolha a segunda carta.";


    return;
  }


  secondCard =
    card;


  memoryMoves += 1;


  updateMemory();


  if (
    firstCard.dataset.pair ===
    secondCard.dataset.pair
  ) {

    memoryMatch();

  } else {

    memoryMismatch();
  }
}


/* ==========================================================
   PAR CORRETO
========================================================== */

function memoryMatch() {

  memoryLock =
    true;


  [
    firstCard,
    secondCard
  ].forEach(
    (card) => {

      card.classList.add(
        "matched"
      );


      card.disabled =
        true;
    }
  );


  memoryPairs += 1;


  updateMemory();


  $("memoryMessage").textContent =
    `Par encontrado: ${firstCard.dataset.work}.`;


  scheduleMemory(
    () => {

      firstCard =
        null;


      secondCard =
        null;


      memoryLock =
        false;


      if (
        memoryPairs === TOTAL_PAIRS
      ) {

        finishMemory();
      }
    },

    600
  );
}


/* ==========================================================
   PAR INCORRETO
========================================================== */

function memoryMismatch() {

  memoryLock =
    true;


  const cards = [
    firstCard,
    secondCard
  ];


  cards.forEach(
    (card) => {

      card.classList.add(
        "wrong"
      );
    }
  );


  $("memoryMessage").textContent =
    "As imagens são diferentes. Observe e tente novamente.";


  scheduleMemory(
    () => {

      cards.forEach(
        (card) => {

          card.classList.remove(
            "flipped",
            "wrong"
          );
        }
      );


      firstCard =
        null;


      secondCard =
        null;


      memoryLock =
        false;


      $("memoryMessage").textContent =
        "Escolha duas novas cartas.";
    },

    1000
  );
}


/* ==========================================================
   FINAL DA MEMÓRIA
========================================================== */

function finishMemory() {

  stopMemoryTimer();


  memoryActive =
    false;


  memoryDone =
    true;


  $("memoryMessage").textContent =
    "Parabéns! Você encontrou todos os pares.";


  $("memorySummary").textContent =
    `Você concluiu o jogo em ${memoryMoves} jogadas e ${timeText(memorySeconds)}.`;


  $("memoryFinish").hidden =
    false;


  $("openMemoryMeaningsButton").disabled =
    false;


  announce(
    "O botão Acessar Significado foi liberado."
  );


  scheduleMemory(
    () => {

      $("memoryFinish").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    },

    250
  );
}


function leaveMemory() {

  return (
    !memoryActive ||
    window.confirm(
      "Ao sair, a partida será encerrada. Deseja continuar?"
    )
  );
}


/* ==========================================================
   EVENTOS
========================================================== */

function bind(
  id,
  callback
) {

  const element =
    $(id);


  if (element) {

    element.addEventListener(
      "click",
      callback
    );
  }
}


/* Tela inicial */

bind(
  "startChallengeButton",
  startQuiz
);


bind(
  "openMemoryButton",
  startMemory
);


bind(
  "openWorksButton",

  () => {

    renderWorks();


    show(
      $("worksScreen")
    );
  }
);


bind(
  "openRulesButton",

  () => {

    show(
      $("rulesScreen")
    );
  }
);


bind(
  "openResourcesButton",

  () => {

    renderResources();


    show(
      $("resourcesScreen")
    );
  }
);


/* Voltar e tela inicial */

[
  "backWorksButton",
  "homeWorksButton",
  "backResourcesButton",
  "homeResourcesButton",
  "backRulesButton",
  "homeRulesButton"

].forEach(
  (id) => {

    bind(
      id,

      () => {

        show(
          $("startScreen")
        );
      }
    );
  }
);


/* Amarelinha */

bind(
  "backQuizButton",

  () => {

    if (
      leaveQuiz()
    ) {

      resetQuiz();


      show(
        $("startScreen")
      );
    }
  }
);


bind(
  "homeQuizButton",

  () => {

    if (
      leaveQuiz()
    ) {

      resetQuiz();


      show(
        $("startScreen")
      );
    }
  }
);


bind(
  "answerAButton",

  () => {

    answer(
      "A"
    );
  }
);


bind(
  "answerBButton",

  () => {

    answer(
      "B"
    );
  }
);


bind(
  "feedbackContinueButton",
  continueFeedback
);


bind(
  "feedbackHomeButton",

  () => {

    if (
      leaveQuiz()
    ) {

      resetQuiz();


      show(
        $("startScreen")
      );
    }
  }
);


bind(
  "backQuizFinalButton",

  () => {

    show(
      $("quizScreen")
    );
  }
);


bind(
  "homeQuizFinalButton",

  () => {

    resetQuiz();


    show(
      $("startScreen")
    );
  }
);


bind(
  "playQuizAgainButton",
  startQuiz
);


bind(
  "openQuizMeaningsButton",

  () => {

    renderQuizMeanings();


    show(
      $("quizMeaningsScreen")
    );
  }
);


bind(
  "backQuizMeaningsButton",

  () => {

    show(
      $("quizFinalScreen")
    );
  }
);


bind(
  "homeQuizMeaningsButton",

  () => {

    resetQuiz();


    show(
      $("startScreen")
    );
  }
);


/* Painel de informações */

bind(
  "memoryInfoButton",
  toggleInfo
);


bind(
  "closeMemoryInfoButton",
  closeInfo
);


$("memoryInfoPanel").addEventListener(
  "click",

  (event) => {

    if (
      event.target ===
      $("memoryInfoPanel")
    ) {

      closeInfo();
    }
  }
);


/* Jogo da memória */

bind(
  "restartMemoryButton",
  startMemory
);


bind(
  "backMemoryButton",

  () => {

    if (
      leaveMemory()
    ) {

      resetMemory();


      show(
        $("startScreen")
      );
    }
  }
);


bind(
  "homeMemoryButton",

  () => {

    if (
      leaveMemory()
    ) {

      resetMemory();


      show(
        $("startScreen")
      );
    }
  }
);


bind(
  "playMemoryAgainButton",
  startMemory
);


bind(
  "openMemoryMeaningsButton",

  () => {

    if (
      memoryDone
    ) {

      renderMemoryMeanings();


      show(
        $("memoryMeaningsScreen")
      );
    }
  }
);


bind(
  "backMemoryMeaningsButton",

  () => {

    show(
      $("memoryScreen")
    );
  }
);


bind(
  "homeMemoryMeaningsButton",

  () => {

    resetMemory();


    show(
      $("startScreen")
    );
  }
);


/* Tecla ESC */

document.addEventListener(
  "keydown",

  (event) => {

    if (
      event.key === "Escape" &&
      !$("memoryInfoPanel").hidden
    ) {

      closeInfo();
    }
  }
);


/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

renderHome();

renderWorks();


preload().catch(
  (error) => {

    console.error(
      error
    );


    $("loadingMessage").textContent =
      "O jogo está disponível com imagens provisórias.";


    $("loadingPercent").textContent =
      "100%";


    $("loadingBar").style.width =
      "100%";
  }
);