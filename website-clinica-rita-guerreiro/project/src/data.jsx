// Services catalog

// Photos — Unsplash (free, no attribution required for display)
const IMG = {
  fisioterapia: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
  acupuntura: 'https://images.unsplash.com/photo-1611073615830-9f114b2f0fa7?w=800&q=80',
  mesoterapia: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
  psicologia: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80',
  nutricao: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
  'terapia-bowen': 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80',
  'drenagem-linfatica': 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
  'massagem-relaxamento': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  'massagem-criancas': 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
  'massagem-assinatura-rg': 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
  'massagem-profunda': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  'massagem-pre-pos-natal': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=800&q=80',
  'massagem-sacro-craniana': 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80',
  'massagem-terapeutica': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  reflexologia: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&q=80',
  shiatsu: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  'massagem-indiana': 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
  'head-spa': 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
  facial: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  'pacotes-tratamento': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
  'depilacao-laser': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  'pilates-clinico': 'assets/pilates.jpg',
  // Genéricos — fotos reais da clínica
  clinicInterior: 'assets/equipa-recepcao.png',
  clinicDetail: 'assets/rita-retrato.png',
  clinicRoom: 'assets/sala-tratamento.png',
  teamWork: 'assets/equipa-4.png',
  comunidade: 'assets/comunidade.png',
  ritaRetrato: 'assets/rita-retrato.png',
};

const SERVICES = {
  fisioterapia: {
    label: 'Fisioterapia',
    intro: 'Avaliação e tratamento individual de dor, lesão e disfunção — para crianças e adultos.',
    items: [
      { slug: 'fisioterapia', name: 'Fisioterapia Geral', img: IMG.fisioterapia, blurb: 'Fisioterapia para crianças e adultos — avaliação e tratamento de dor, lesão ou disfunção músculo-esquelética.', price: '50€ / 45€ / 85€' },
      { slug: 'mesoterapia', name: 'Fisioterapia ATM / Mesoterapia', img: IMG.mesoterapia, blurb: 'Tratamento especializado da articulação temporomandibular e mesoterapia para dor e inflamação localizada.', price: '60€ / 55€ / 50€' },
      { slug: 'acupuntura', name: 'Fisioterapia Vestibular / Acupuntura', img: IMG.acupuntura, blurb: 'Reabilitação vestibular para tonturas e vertigens, e acupuntura para dor, stress e bem-estar geral.', price: '45€' },
    ],
  },
  saude: {
    label: 'Cuidados de Saúde',
    intro: 'Tratamentos clínicos especializados para saúde e bem-estar.',
    items: [
      { slug: 'nutricao', name: 'Nutrição', img: IMG.nutricao, blurb: 'Consulta nutricional personalizada para perda de peso, performance ou saúde geral.', price: '40€ / 45€' },
      { slug: 'terapia-bowen', name: 'Terapia de Bowen', img: IMG['terapia-bowen'], blurb: 'Técnica neuromuscular suave para crianças e adultos — dor crónica, tensão e equilíbrio.', price: '20€ / 30€ / 60€' },
      { slug: 'psicologia', name: 'Psicologia', img: IMG.psicologia, blurb: 'Acompanhamento psicológico para crianças, adolescentes e adultos.', price: '45€' },
    ],
  },
  massagens: {
    label: 'Massagens',
    intro: 'Terapias manuais para libertar tensão, recuperar e devolver equilíbrio.',
    items: [
      { slug: 'massagem-relaxamento', name: 'Massagem de Relaxamento', img: IMG['massagem-relaxamento'], blurb: 'Massagem de corpo inteiro para aliviar tensão acumulada e restabelecer o equilíbrio.', price: '40€ / 65€' },
      { slug: 'massagem-criancas', name: 'Massagem para Crianças', img: IMG['massagem-criancas'], blurb: 'Massagem suave e adaptada para os mais novos — relaxamento, sono e bem-estar infantil.', price: '30€' },
      { slug: 'massagem-assinatura-rg', name: 'Massagem Assinatura RG', img: IMG['massagem-assinatura-rg'], blurb: 'A massagem de excelência da clínica Rita Guerreiro — 80 minutos de experiência única.', price: '75€' },
      { slug: 'massagem-profunda', name: 'Massagem Profunda', img: IMG['massagem-profunda'], blurb: 'Deep tissue e sport massage — trabalho muscular profundo para recuperação e performance.', price: '45€ / 75€' },
      { slug: 'massagem-pre-pos-natal', name: 'Massagem Pré/Pós Natal', img: IMG['massagem-pre-pos-natal'], blurb: 'Massagem adaptada para grávidas e mães recentes — conforto, relaxamento e recuperação.', price: '45€' },
      { slug: 'massagem-sacro-craniana', name: 'Massagem Sacro-Craniana', img: IMG['massagem-sacro-craniana'], blurb: 'Técnica suave sobre o sistema sacro-craniano — alívio de tensão, cefaleias e stress.', price: '40€' },
      { slug: 'drenagem-linfatica', name: 'Drenagem Linfática Manual', img: IMG['drenagem-linfatica'], blurb: 'Método Vodder para reduzir inchaço, melhorar circulação e desintoxicar o organismo.', price: '45€ / 50€' },
      { slug: 'massagem-terapeutica', name: 'Drenagem Pós-Operatório / Terapêutica', img: IMG['massagem-terapeutica'], blurb: 'Drenagem linfática pós-operatória e massagem terapêutica para recuperação e dor muscular.', price: '60€ / 80€' },
    ],
  },
  holisticas: {
    label: 'Holísticas',
    intro: 'Terapias holísticas para o equilíbrio do corpo e da mente.',
    items: [
      { slug: 'reflexologia', name: 'Reflexologia', img: IMG.reflexologia, blurb: 'Estimulação de pontos reflexos nos pés para reequilíbrio dos sistemas do organismo.', price: '45€' },
      { slug: 'shiatsu', name: 'Shiatsu', img: IMG.shiatsu, blurb: 'Técnica japonesa de pressão sobre meridianos energéticos — equilíbrio e vitalidade.', price: '45€' },
      { slug: 'massagem-indiana', name: 'Massagem Indiana', img: IMG['massagem-indiana'], blurb: 'Indian Head Massage — massagem na cabeça, pescoço e ombros para stress e tensão.', price: '35€' },
      { slug: 'head-spa', name: 'Head Spa', img: IMG['head-spa'], blurb: 'Tratamento profundo do couro cabeludo — limpeza, nutrição e relaxamento total.', price: '80€' },
    ],
  },
  estetica: {
    label: 'Estética & Tratamentos',
    intro: 'Cuidados estéticos e pacotes de tratamento com tecnologia avançada.',
    items: [
      { slug: 'facial', name: 'Faciais', img: IMG.facial, blurb: 'Limpeza de pele, extração e facial personalizado para uma pele saudável e radiante.', price: '10€ – 55€' },
      { slug: 'pacotes-tratamento', name: 'Pacotes de Tratamento', img: IMG['pacotes-tratamento'], blurb: 'Cavitação, radiofrequência, lipolaser, electroestimulação e pressoterapia.', price: '25€ – 450€' },
      { slug: 'depilacao-laser', name: 'Depilação a Laser', img: IMG['depilacao-laser'], blurb: 'Depilação definitiva com laser — mulher e homem, todas as zonas corporais.', price: 'Desde 20€/zona' },
      { slug: 'pilates-clinico', name: 'Pilates Clínico', img: IMG['pilates-clinico'], blurb: 'Pilates supervisionado por fisioterapeuta, adaptado a lesões e reabilitação.', price: '35€ – 60€/mês' },
    ],
  },
};

const SERVICE_DETAIL = {
  fisioterapia: {
    tagline: 'Avaliação, tratamento e recuperação para dor ou lesão — para crianças e adultos.',
    description: 'A nossa fisioterapia é pensada pessoa a pessoa. Começamos por uma avaliação cuidada — ouvimos a tua história, percebemos a origem da dor ou disfunção e, a partir daí, construímos um plano realista para a tua recuperação. Trabalhamos com crianças e adultos, em sessões de 50 a 80 minutos, combinando terapia manual, exercício terapêutico e, sempre que fizer sentido, a integração com outros serviços do centro.',
    prices: [
      { label: 'Crianças (50min)', value: '50€' },
      { label: 'Adultos (50min)', value: '45€' },
      { label: 'Pack 10 sessões', value: '85€/sessão' },
    ],
    sub: [
      { t: 'Dor lombar e cervical', d: 'Avaliação postural, terapia manual e exercício progressivo para dor crónica ou aguda da coluna.' },
      { t: 'Recuperação pós-lesão', d: 'Acompanhamento desde a fase aguda até ao retorno à atividade normal, desportiva ou laboral.' },
      { t: 'Fisioterapia desportiva', d: 'Prevenção e tratamento de lesões associadas ao desporto, com foco no retorno seguro à prática.' },
      { t: 'Pós-operatório', d: 'Redução de edema, ganho de mobilidade e recuperação de força após cirurgia ortopédica ou outra.' },
      { t: 'Gravidez e pós-parto', d: 'Prevenção e alívio de desconfortos durante a gravidez e recuperação do pavimento pélvico após o parto.' },
      { t: 'Fisioterapia pediátrica', d: 'Tratamento adaptado para crianças em diferentes fases do desenvolvimento.' },
    ],
  },
  mesoterapia: {
    tagline: 'Tratamento especializado da ATM e mesoterapia para dor e inflamação localizada.',
    description: 'A Fisioterapia ATM trata as disfunções da articulação temporomandibular — dor, bloqueio, cliques ou rangido na mandíbula — com abordagem manual especializada. A Mesoterapia consiste na aplicação de microinjeções de substâncias ativas diretamente nas camadas superficiais da pele ou tecido subcutâneo, com ação localizada para dor articular, contraturas e tratamentos estéticos.',
    prices: [
      { label: 'Fisioterapia ATM (50min)', value: '60€' },
      { label: 'Mesoterapia (50min)', value: '55€ / 50€' },
    ],
    sub: [
      { t: 'ATM — Articulação Temporomandibular', d: 'Tratamento de dor, bloqueio, cliques ou rangido na mandíbula e alívio de cefaleias associadas.' },
      { t: 'Dor e inflamação articular', d: 'Aplicação localizada de anti-inflamatórios para alívio rápido em joelhos, ombros ou coluna.' },
      { t: 'Contraturas musculares', d: 'Libertação de pontos de tensão muscular persistentes resistentes a outras técnicas.' },
      { t: 'Celulite e gordura localizada', d: 'Melhoria da circulação local e redução de acumulações de gordura em zonas específicas.' },
      { t: 'Flacidez cutânea', d: 'Estimulação da produção de colagénio para firmeza e tonicidade da pele.' },
      { t: 'Rejuvenescimento facial', d: 'Hidratação profunda e revitalização da pele do rosto com ácido hialurónico e vitaminas.' },
    ],
  },
  acupuntura: {
    tagline: 'Reabilitação vestibular e acupuntura — equilíbrio, dor e bem-estar em cada sessão.',
    description: 'A Fisioterapia Vestibular trata tonturas, vertigens e desequilíbrios através de manobras específicas e exercícios de reabilitação. A Acupuntura é um dos pilares da Medicina Tradicional Chinesa com evidência crescente na gestão da dor, stress, ansiedade e insónia. Na Rita Guerreiro, cada sessão é precedida de avaliação do estado de saúde global para uma intervenção verdadeiramente personalizada.',
    prices: [
      { label: 'Por sessão (50min)', value: '45€' },
    ],
    sub: [
      { t: 'Vertigens e tonturas', d: 'Manobras de reposicionamento e exercícios de reabilitação vestibular para equilíbrio.' },
      { t: 'Dor crónica', d: 'Lombalgias, cervicalgias, cefaleias e dores articulares com resposta comprovada à acupuntura.' },
      { t: 'Stress e ansiedade', d: 'Regulação do sistema nervoso autónomo para reduzir tensão, irritabilidade e fadiga mental.' },
      { t: 'Insónia', d: 'Tratamento das causas subjacentes ao sono perturbado através do equilíbrio energético.' },
      { t: 'Saúde digestiva', d: 'Colon irritável, refluxo e outros desequilíbrios do sistema digestivo.' },
      { t: 'Fertilidade e ciclo menstrual', d: 'Regulação hormonal e apoio em processos de fertilidade ou desconfortos menstruais.' },
    ],
  },
  nutricao: {
    tagline: 'Alimentação que funciona para a tua vida — sem dietas restritivas nem soluções de prateleira.',
    description: 'A consulta de nutrição na Rita Guerreiro começa por perceber quem és: os teus hábitos, o teu ritmo, o que funciona e o que não funciona. A partir daí, criamos um plano alimentar personalizado, realista e sustentável. Trabalhamos perda de peso, ganho de massa muscular, saúde digestiva, nutrição desportiva e alimentação adaptada a condições clínicas específicas.',
    prices: [
      { label: 'Consulta 30-50min', value: '40€ / 45€' },
    ],
    sub: [
      { t: 'Perda de peso sustentável', d: 'Plano alimentar real e adaptado ao teu estilo de vida — para perder e manter.' },
      { t: 'Nutrição desportiva', d: 'Otimização da alimentação para performance, recuperação e composição corporal.' },
      { t: 'Saúde digestiva', d: 'Apoio nutricional em colon irritável, intolerâncias, refluxo e outros desequilíbrios.' },
      { t: 'Diabetes e colesterol', d: 'Gestão nutricional de patologias metabólicas com acompanhamento regular.' },
      { t: 'Gravidez e amamentação', d: 'Alimentação adaptada a cada fase, para a saúde da mãe e do bebé.' },
      { t: 'Alimentação vegetariana e vegana', d: 'Garantia de equilíbrio nutricional em dietas plant-based sem défices.' },
    ],
  },
  'terapia-bowen': {
    tagline: 'Uma técnica suave com resultados surpreendentes — para crianças e adultos.',
    description: 'A Terapia Bowen é uma abordagem holística e não invasiva que trabalha sobre o sistema neuromuscular através de movimentos precisos sobre músculos, tendões e fáscia. O toque é suave — sem força nem manipulação — e os efeitos são frequentemente profundos e duradouros. Indicada para todas as idades, incluindo crianças a partir dos 5 anos.',
    prices: [
      { label: 'Crianças 5-12 anos (60min)', value: '20€ / 30€' },
      { label: 'Adultos +12 anos (60min)', value: '60€' },
    ],
    sub: [
      { t: 'Dor lombar e cervical', d: 'Libertação de tensões profundas na coluna com uma técnica completamente suave.' },
      { t: 'Fibromialgia', d: 'Abordagem eficaz para a gestão da dor difusa e da fadiga crónica associadas à fibromialgia.' },
      { t: 'Tensão e stress crónico', d: 'Ativação do sistema nervoso parassimpático para um estado de calma e regeneração.' },
      { t: 'Lesões desportivas', d: 'Recuperação de lesões musculares e tendinosas com menor tempo de paragem.' },
      { t: 'Enxaqueca e cefaleia tensional', d: 'Redução da frequência e intensidade das crises através do equilíbrio muscular e fascial.' },
      { t: 'Crianças', d: 'Técnica completamente segura e suave, indicada a partir dos 5 anos de idade.' },
    ],
  },
  psicologia: {
    tagline: 'Acompanhamento psicológico especializado para criança, adolescente e adulto.',
    description: 'A saúde mental é tão importante quanto a física — e merece a mesma atenção e cuidado. Na Rita Guerreiro, a consulta de psicologia é um espaço seguro, confidencial e sem julgamentos, onde podes explorar o que te preocupa com o apoio de um profissional especializado. Trabalhamos com crianças, adolescentes e adultos em diferentes momentos da vida.',
    prices: [
      { label: 'Consulta (60min)', value: '45€' },
    ],
    sub: [
      { t: 'Ansiedade e stress', d: 'Ferramentas práticas para gerir preocupação excessiva, tensão e sintomas físicos associados.' },
      { t: 'Depressão e humor', d: 'Acompanhamento de estados depressivos, tristeza persistente e perda de motivação.' },
      { t: 'Psicologia infantil', d: 'Apoio a crianças com dificuldades de comportamento, atenção, aprendizagem ou adaptação.' },
      { t: 'Adolescência', d: 'Suporte em processos de identidade, pressão social, autoestima e gestão emocional.' },
      { t: 'Luto e perda', d: 'Acompanhamento em processos de perda — de pessoas, relações, saúde ou projetos de vida.' },
      { t: 'Relações e comunicação', d: 'Trabalho sobre padrões relacionais, assertividade e dinâmicas interpessoais.' },
    ],
  },
  'massagem-relaxamento': {
    tagline: 'Para quando o corpo pede para parar — e a mente precisa de respirar.',
    description: 'A Massagem de Relaxamento é um espaço de paragem total. Num ritmo suave e contínuo, trabalhamos todo o corpo para libertar a tensão acumulada, aliviar a sobrecarga muscular e induzir um estado de profundo bem-estar. Os efeitos vão muito além da sensação imediata — a massagem regular reduz o cortisol, melhora o sono e tem impacto positivo no sistema imunitário.',
    prices: [
      { label: '50 minutos', value: '40€' },
      { label: '80 minutos', value: '65€' },
    ],
    sub: [
      { t: 'Tensão muscular generalizada', d: 'Libertação de contraturas e pontos de tensão acumulados no dia-a-dia.' },
      { t: 'Stress e sobrecarga mental', d: 'Ativação do sistema nervoso parassimpático para uma resposta de calma profunda.' },
      { t: 'Distúrbios do sono', d: 'A massagem regular melhora a qualidade do sono e facilita o adormecer.' },
      { t: 'Dores de cabeça tensionais', d: 'Trabalho sobre pescoço, ombros e couro cabeludo para aliviar cefaleias de tensão.' },
      { t: 'Circulação e drenagem', d: 'Melhoria do fluxo sanguíneo e linfático para um corpo mais leve e vital.' },
      { t: 'Bem-estar preventivo', d: 'Uma sessão regular é um investimento na saúde — não um luxo.' },
    ],
  },
  'massagem-criancas': {
    tagline: 'Massagem suave e adaptada para os mais novos — relaxamento, sono e bem-estar infantil.',
    description: 'A massagem para crianças é uma técnica suave, segura e adaptada às necessidades dos mais novos. Promove relaxamento, melhora o sono, reduz a ansiedade e fortalece o vínculo afetivo. Realizada por profissionais com formação específica em massagem pediátrica, cada sessão é adaptada à idade e necessidades da criança.',
    prices: [
      { label: 'Por sessão (40min)', value: '30€' },
    ],
    sub: [
      { t: 'Relaxamento e sono', d: 'Técnica suave para promover um sono mais tranquilo e profundo nas crianças.' },
      { t: 'Ansiedade infantil', d: 'Redução do stress e ansiedade com toque terapêutico e ambiente seguro.' },
      { t: 'Cólicas e digestão', d: 'Massagem abdominal suave para alívio de cólicas e desconforto digestivo.' },
      { t: 'Desenvolvimento motor', d: 'Estimulação sensorial e motora para o desenvolvimento saudável da criança.' },
      { t: 'Tensão muscular', d: 'Libertação de tensão acumulada em crianças ativas ou com postura inadequada.' },
      { t: 'Bem-estar geral', d: 'Sessão de bem-estar para crianças que simplesmente precisam de um momento de cuidado.' },
    ],
  },
  'massagem-assinatura-rg': {
    tagline: 'A experiência de massagem de excelência da clínica Rita Guerreiro — 80 minutos únicos.',
    description: 'A Massagem Assinatura RG é a experiência máxima que a clínica Rita Guerreiro tem para oferecer. Uma sessão de 80 minutos cuidadosamente desenhada para combinar as melhores técnicas de relaxamento profundo, trabalho muscular e bem-estar global. Uma experiência personalizada, do início ao fim.',
    prices: [
      { label: 'Sessão completa (80min)', value: '75€' },
    ],
    sub: [
      { t: 'Relaxamento total', d: 'Combinação de técnicas suaves para induzir um estado de calma profunda.' },
      { t: 'Trabalho muscular', d: 'Libertação de tensões acumuladas com técnicas adaptadas a cada zona do corpo.' },
      { t: 'Bem-estar global', d: 'Abordagem holística que cuida do corpo e da mente em simultâneo.' },
      { t: 'Experiência personalizada', d: 'Cada sessão é adaptada às preferências e necessidades do cliente.' },
      { t: 'Momento único', d: '80 minutos de dedicação exclusiva ao teu bem-estar.' },
      { t: 'Ideal para oferta', d: 'A escolha perfeita para uma prenda especial ou um momento de autocuidado.' },
    ],
  },
  'massagem-profunda': {
    tagline: 'Deep tissue e sport massage — trabalho muscular profundo para recuperação real.',
    description: 'A Massagem Profunda vai ao âmago da tensão muscular. Com técnicas de deep tissue e sport massage, trabalhamos as camadas mais profundas do músculo para libertar contraturas crónicas, acelerar a recuperação após exercício intenso e tratar dor persistente. Indicada para desportistas e para quem tem tensão muscular profunda resistente a outras abordagens.',
    prices: [
      { label: '50 minutos', value: '45€' },
      { label: '80 minutos', value: '75€' },
    ],
    sub: [
      { t: 'Contraturas e espasmos', d: 'Libertação de nós musculares e zonas de tensão profunda resistentes ao relaxamento espontâneo.' },
      { t: 'Dor pós-exercício', d: 'Aceleração da recuperação muscular e redução da inflamação após treino intenso.' },
      { t: 'Síndrome do piriforme e ciática', d: 'Trabalho específico sobre musculatura glútea e profunda para alívio da dor ciática.' },
      { t: 'Tensão cervical e ombros', d: 'Zona mais afetada por trabalho sedentário — abordagem profunda e eficaz.' },
      { t: 'Tendinites e sobrecargas', d: 'Tratamento de tendinites crónicas e sobrecargas por esforço repetitivo.' },
      { t: 'Recuperação desportiva', d: 'Protocolo específico para atletas — antes ou depois da competição ou treino.' },
    ],
  },
  'massagem-pre-pos-natal': {
    tagline: 'Cuidado e conforto para grávidas e mães recentes — um momento só para ti.',
    description: 'A Massagem Pré/Pós Natal é especialmente adaptada às transformações do corpo durante a gravidez e após o parto. Alivia dores lombares, inchaços e tensão muscular acumulada durante a gestação. No pós-parto, ajuda na recuperação física e emocional da mãe, num momento de tantas mudanças e exigências.',
    prices: [
      { label: 'Por sessão (50min)', value: '45€' },
    ],
    sub: [
      { t: 'Dor lombar na gravidez', d: 'Alívio das dores lombares e pélvicas típicas da gestação, com posicionamento seguro.' },
      { t: 'Inchaço e retenção', d: 'Melhoria da circulação e redução do inchaço nas pernas e tornozelos durante a gravidez.' },
      { t: 'Tensão muscular', d: 'Libertação de tensões no pescoço, ombros e costas acumuladas com o peso da barriga.' },
      { t: 'Recuperação pós-parto', d: 'Apoio na recuperação física após o parto — dor muscular, tensão e bem-estar geral.' },
      { t: 'Equilíbrio emocional', d: 'Momento de cuidado e relaxamento num período de tantas mudanças emocionais.' },
      { t: 'Sono e descanso', d: 'Técnicas para melhorar a qualidade do sono — tão difícil durante a gravidez e após o parto.' },
    ],
  },
  'massagem-sacro-craniana': {
    tagline: 'Técnica suave sobre o sistema sacro-craniano — alívio profundo sem esforço.',
    description: 'A Massagem Sacro-Craniana é uma técnica manual extremamente suave que trabalha sobre o sistema sacro-craniano — a ligação entre o sacro e o crânio, passando pela coluna. Com toque quase imperceptível, liberta restrições nas membranas e fluido cerebrospinal, promovendo o equilíbrio do sistema nervoso central e alívio de tensão acumulada.',
    prices: [
      { label: 'Por sessão (50min)', value: '40€' },
    ],
    sub: [
      { t: 'Cefaleias e enxaquecas', d: 'Libertação de tensões craniossacrais que contribuem para dores de cabeça recorrentes.' },
      { t: 'Stress e ansiedade', d: 'Ativação profunda do sistema nervoso parassimpático para equilíbrio emocional.' },
      { t: 'Disfunções da ATM', d: 'Alívio de dores e tensões na articulação temporomandibular e face.' },
      { t: 'Dor cervical', d: 'Libertação de tensões na região cervical e base do crânio.' },
      { t: 'Insónia', d: 'Promoção de um estado de descanso profundo que melhora a qualidade do sono.' },
      { t: 'Bebés e crianças', d: 'Técnica completamente segura para os mais novos, indicada para cólicas e tensões do parto.' },
    ],
  },
  'drenagem-linfatica': {
    tagline: 'Desintoxica, desinchaça e revitaliza — com a técnica manual Método Vodder.',
    description: 'A Drenagem Linfática Manual segundo o Método Vodder é a técnica de referência internacional para estimular o sistema linfático. Através de movimentos suaves, rítmicos e precisos sobre a pele, ativa a circulação linfática, reduz o edema e favorece a eliminação de toxinas. Indicada tanto em contexto clínico como de bem-estar.',
    prices: [
      { label: 'Manual (50min)', value: '50€ / 45€ (Pack 10)' },
      { label: 'Pós-Operatório 50min', value: '60€' },
      { label: 'Pós-Operatório 80min', value: '80€' },
    ],
    sub: [
      { t: 'Retenção de líquidos', d: 'Redução do inchaço nas pernas, tornozelos e barriga causado por retenção hídrica.' },
      { t: 'Pós-cirurgia e cicatrização', d: 'Aceleração da recuperação, redução de edema e melhoria da qualidade das cicatrizes.' },
      { t: 'Linfedema', d: 'Gestão do linfedema primário ou secundário com técnica especializada Método Vodder.' },
      { t: 'Celulite', d: 'Melhoria da aparência da pele e da microcirculação local em zonas afetadas por celulite.' },
      { t: 'Sistema imunitário', d: 'Estimulação das defesas naturais do organismo e eliminação de resíduos metabólicos.' },
      { t: 'Bem-estar e leveza', d: 'Sensação de corpo mais leve, pernas cansadas aliviadas e mente mais relaxada.' },
    ],
  },
  'massagem-terapeutica': {
    tagline: 'Drenagem pós-operatória e massagem terapêutica — recuperação e alívio da dor.',
    description: 'A Drenagem Linfática Pós-Operatória é essencial para uma recuperação rápida e sem complicações após cirurgia — reduz edema, melhora cicatrizes e restaura a circulação. A Massagem Terapêutica trabalha zonas de tensão crónica, contraturas e dor muscular persistente, com técnicas adaptadas à condição de cada pessoa.',
    prices: [
      { label: 'Terapêutica 30-50min', value: '30€ – 45€ / 40€' },
      { label: 'Drenagem Pós-Op 50min', value: '60€' },
      { label: 'Drenagem Pós-Op 80min', value: '80€' },
    ],
    sub: [
      { t: 'Recuperação pós-cirurgia', d: 'Redução de edema e melhoria da qualidade das cicatrizes após intervenção cirúrgica.' },
      { t: 'Contraturas e espasmos', d: 'Libertação de nós musculares e zonas de tensão profunda resistentes ao relaxamento.' },
      { t: 'Dor pós-exercício', d: 'Aceleração da recuperação muscular e redução da inflamação após treino intenso.' },
      { t: 'Tensão cervical e ombros', d: 'Abordagem profunda na zona mais afetada por trabalho sedentário e stress.' },
      { t: 'Tendinites e sobrecargas', d: 'Tratamento de tendinites crónicas e sobrecargas por esforço repetitivo.' },
      { t: 'Recuperação desportiva', d: 'Protocolo específico para atletas — antes ou depois da competição ou treino.' },
    ],
  },
  reflexologia: {
    tagline: 'Estimulação de pontos reflexos nos pés para reequilíbrio dos sistemas do organismo.',
    description: 'A Reflexologia é uma terapia natural que trabalha sobre pontos reflexos localizados nos pés, mãos ou orelhas, correspondentes a diferentes órgãos e sistemas do corpo. Através de pressão precisa e rítmica, estimula o reequilíbrio orgânico, alivia tensão e promove bem-estar geral. Uma técnica não invasiva com efeitos profundos.',
    prices: [
      { label: 'Por sessão (50min)', value: '45€' },
    ],
    sub: [
      { t: 'Stress e ansiedade', d: 'Estimulação do sistema nervoso parassimpático para redução da tensão e ansiedade.' },
      { t: 'Insónia', d: 'Regulação do sono através do equilíbrio dos sistemas do organismo.' },
      { t: 'Dores de cabeça', d: 'Trabalho sobre os pontos reflexos correspondentes à cabeça e sistema nervoso.' },
      { t: 'Saúde digestiva', d: 'Estimulação dos reflexos do sistema digestivo para melhoria da função intestinal.' },
      { t: 'Circulação', d: 'Melhoria da circulação sanguínea e linfática através da estimulação reflexa.' },
      { t: 'Bem-estar geral', d: 'Sessão de equilíbrio e relaxamento profundo para corpo e mente.' },
    ],
  },
  shiatsu: {
    tagline: 'Técnica japonesa de pressão sobre meridianos energéticos — equilíbrio e vitalidade.',
    description: 'O Shiatsu é uma terapia japonesa que aplica pressão com os polegares, palmas e cotovelos sobre os meridianos energéticos do corpo. Baseada nos princípios da Medicina Tradicional Chinesa, promove o fluxo de energia vital (Ki), alivia tensão e dor, e restaura o equilíbrio físico e emocional. Realizado sobre roupa confortável, sem óleos.',
    prices: [
      { label: 'Por sessão (50min)', value: '45€' },
    ],
    sub: [
      { t: 'Dor muscular e articular', d: 'Alívio de dores e tensões musculares através da pressão nos meridianos energéticos.' },
      { t: 'Fadiga e falta de energia', d: 'Estimulação do fluxo de energia vital para recuperação da vitalidade.' },
      { t: 'Stress e ansiedade', d: 'Equilíbrio do sistema nervoso para redução do stress e promoção do bem-estar.' },
      { t: 'Dores de cabeça', d: 'Libertação de tensões no pescoço, ombros e cabeça que provocam cefaleias.' },
      { t: 'Problemas digestivos', d: 'Estimulação dos meridianos relacionados com o sistema digestivo.' },
      { t: 'Equilíbrio emocional', d: 'Harmonia entre o físico e o emocional através da regulação energética.' },
    ],
  },
  'massagem-indiana': {
    tagline: 'Indian Head Massage — relaxamento profundo da cabeça, pescoço e ombros.',
    description: 'A Massagem Indiana, ou Indian Head Massage, é uma técnica de origem ayurvédica focada na cabeça, pescoço, ombros e face. Trabalha sobre os chakras da parte superior do corpo para libertar tensão acumulada, aliviar cefaleias, melhorar a circulação no couro cabeludo e induzir um estado de relaxamento profundo. Realizada sentado, sem necessidade de se despir.',
    prices: [
      { label: 'Por sessão (40min)', value: '35€' },
    ],
    sub: [
      { t: 'Cefaleias e tensão craniana', d: 'Libertação de tensão acumulada no couro cabeludo, pescoço e ombros.' },
      { t: 'Stress e sobrecarga mental', d: 'Indução de estado de relaxamento profundo com técnicas de raiz ayurvédica.' },
      { t: 'Circulação no couro cabeludo', d: 'Melhoria da circulação local, benéfica para a saúde e crescimento do cabelo.' },
      { t: 'Tensão cervical', d: 'Trabalho específico sobre a região cervical, pescoço e ombros.' },
      { t: 'Fadiga visual', d: 'Técnicas suaves sobre a face e área orbital para alívio da fadiga ocular.' },
      { t: 'Equilíbrio energético', d: 'Trabalho sobre os chakras superiores para harmonia física e emocional.' },
    ],
  },
  'head-spa': {
    tagline: 'Tratamento profundo do couro cabeludo — limpeza, nutrição e relaxamento total.',
    description: 'O Head Spa é um tratamento de luxo para o couro cabeludo que combina limpeza profunda, nutrição intensiva e massagem relaxante. Remove o excesso de sebo e impurezas, equilibra o pH do couro cabeludo, fortalece os folículos capilares e proporciona uma sensação de frescura e leveza incomparável. O resultado visível no cabelo vem acompanhado de um estado de relaxamento profundo.',
    prices: [
      { label: 'Sessão completa (90min)', value: '80€' },
    ],
    sub: [
      { t: 'Limpeza profunda', d: 'Remoção do excesso de sebo, células mortas e impurezas do couro cabeludo.' },
      { t: 'Nutrição e hidratação', d: 'Aplicação de ativos nutritivos para fortalecer os folículos e revitalizar o cabelo.' },
      { t: 'Queda de cabelo', d: 'Estimulação da circulação no couro cabeludo para fortalecer os folículos capilares.' },
      { t: 'Couro cabeludo sensível', d: 'Tratamento suave e equilibrante para couro cabeludo irritado ou com caspa.' },
      { t: 'Massagem relaxante', d: 'Massagem profunda do couro cabeludo para libertação de tensão e promoção do bem-estar.' },
      { t: 'Brilho e vitalidade', d: 'Resultados visíveis no aspeto do cabelo — mais brilhante, leve e saudável.' },
    ],
  },
  facial: {
    tagline: 'Limpeza de pele, extração e facial personalizado para uma pele saudável e radiante.',
    description: 'Os nossos tratamentos faciais são realizados por profissionais especializados, com produtos de alta qualidade adaptados ao tipo de pele de cada cliente. Desde a limpeza de pele mais simples ao facial personalizado mais completo — cada sessão é pensada para maximizar os resultados visíveis e o bem-estar da pele.',
    prices: [
      { label: 'Limpeza de Pele', value: '50€' },
      { label: 'Extração', value: '10€' },
      { label: 'Facial Personalizado', value: '55€' },
    ],
    sub: [
      { t: 'Limpeza de pele', d: 'Tratamento completo de limpeza para remover impurezas, sebo e células mortas.' },
      { t: 'Extração', d: 'Remoção profissional de comedões e impurezas de forma segura e eficaz.' },
      { t: 'Facial personalizado', d: 'Tratamento adaptado ao tipo de pele — hidratação, anti-age, luminosidade ou controlo de oleosidade.' },
      { t: 'Pele acneica', d: 'Protocolo específico para peles com tendência acneica e excesso de oleosidade.' },
      { t: 'Anti-age', d: 'Tratamentos com ativos que estimulam o colagénio e reduzem os sinais do envelhecimento.' },
      { t: 'Hidratação profunda', d: 'Reposição intensiva de hidratação para peles secas, desidratadas ou sensíveis.' },
    ],
  },
  'pacotes-tratamento': {
    tagline: 'Tecnologia avançada para o teu corpo — cavitação, radiofrequência, lipolaser e mais.',
    description: 'Os nossos pacotes de tratamento combinam as tecnologias mais avançadas de estética corporal: cavitação, radiofrequência, lipolaser, electroestimulação e pressoterapia. Cada tratamento é realizado por profissionais certificados, com avaliação prévia e protocolo personalizado para maximizar os resultados.',
    prices: [
      { label: 'Cav./Radiofrequência/Lipolaser/Eletroestim. (50min)', value: '50€' },
      { label: 'Pacote 10 sessões', value: '450€' },
      { label: 'Pressoterapia 30-50min', value: '25€ / 35€' },
    ],
    sub: [
      { t: 'Cavitação', d: 'Ultrassons focados para destruição de células adiposas em zonas localizadas.' },
      { t: 'Radiofrequência', d: 'Estimulação do colagénio e elastina para firmeza da pele e redução da flacidez.' },
      { t: 'Lipolaser', d: 'Laser de baixa intensidade para mobilização de gordura localizada e modelação corporal.' },
      { t: 'Electroestimulação', d: 'Contração muscular passiva para tonificação e recuperação de zonas específicas.' },
      { t: 'Pressoterapia', d: 'Drenagem linfática mecânica por pressão sequencial — inchaço, circulação e recuperação.' },
      { t: 'Pacote 10 sessões', d: 'Poupa com o pacote de 10 sessões — ideal para resultados progressivos e duradouros.' },
    ],
  },
  'depilacao-laser': {
    tagline: 'Depilação definitiva com tecnologia de última geração — para mulher e homem.',
    description: 'A depilação a laser é hoje a solução mais eficaz e duradoura para a eliminação do pelo indesejado. Na Rita Guerreiro utilizamos equipamento de última geração, com tecnologia que se adapta a diferentes tons de pele e tipos de pelo. O processo é progressivo — em cada sessão o pelo fica mais fino e esparso, até à eliminação permanente.',
    prices: [
      { label: 'Mulher — 1 zona', value: '20€' },
      { label: 'Mulher — Combi 3 zonas', value: '50€' },
      { label: 'Mulher — Zona extra', value: '10€' },
      { label: 'Homem — 1 zona', value: '20€' },
      { label: 'Homem — Combi 3 zonas', value: '60€' },
      { label: 'Homem — Zona extra', value: '10€' },
    ],
    sub: [
      { t: 'Virilha e linha do biquíni', d: 'Tratamento completo ou parcial, com opções adaptadas às tuas preferências.' },
      { t: 'Pernas e coxas', d: 'Depilação de zonas extensas com eficácia e conforto máximos.' },
      { t: 'Axilas', d: 'Uma das zonas com resultado mais rápido — frequentemente eficaz em poucas sessões.' },
      { t: 'Rosto e pescoço', d: 'Lábio superior, queixo, bochechas e zona do pescoço, com extrema precisão.' },
      { t: 'Costas e peito', d: 'Tratamento de zonas extensas no corpo masculino, com equipamento adequado.' },
      { t: 'Braços e antebraços', d: 'Resultados graduais e permanentes nesta zona com elevada densidade de pelo.' },
    ],
  },
  'pilates-clinico': {
    tagline: 'Movimento consciente supervisionado por fisioterapeuta — corpo forte e livre de dor.',
    description: 'O Pilates Clínico distingue-se do Pilates convencional por ser supervisionado por um fisioterapeuta e adaptado a condições clínicas específicas — dor lombar, hérnias, pós-operatório, gravidez, osteoporose ou qualquer outra limitação. Na Rita Guerreiro, cada programa é desenhado individualmente com exercícios progressivos.',
    prices: [
      { label: 'Mensalidade', value: '35€ / 60€' },
      { label: 'Seguro Anual', value: '10€' },
      { label: 'Personalizado (50min)', value: '45€' },
    ],
    sub: [
      { t: 'Dor lombar e hérnias', d: 'Fortalecimento do core profundo para estabilizar a coluna e reduzir a dor crónica.' },
      { t: 'Pós-operatório', d: 'Reintegração progressiva do movimento após cirurgia ortopédica, abdominal ou outra.' },
      { t: 'Gravidez e pós-parto', d: 'Exercícios adaptados para cada fase — preparação para o parto e recuperação após.' },
      { t: 'Osteoporose', d: 'Treino de força e equilíbrio com baixo impacto articular, para prevenir quedas e fraturas.' },
      { t: 'Escoliose e desvios posturais', d: 'Correção progressiva dos padrões posturais alterados com exercício supervisionado.' },
      { t: 'Performance e prevenção', d: 'Para quem quer melhorar a consciência corporal e prevenir lesões na prática desportiva.' },
    ],
  },
};

Object.assign(window, { SERVICES, SERVICE_DETAIL, IMG });
