// Services catalog

// Fotos reais da clínica — substituir null pela path quando a cliente enviar
const IMG = {
  fisioterapia: '/assets/fotos/servico-fisioterapia-rita.jpg?v=20260715f',
  'fisioterapia-tecar-dupla': '/assets/fotos/servico-fisioterapia-tecar-dupla.jpg?v=20260715f',
  'fisioterapia-manual': '/assets/fotos/servico-fisioterapia-manual.jpg',
  acupuntura: '/assets/fotos/servico-acupuntura.jpg?v=20260715f',
  mesoterapia: '/assets/fotos/servico-mesoterapia.jpg?v=20260714c',
  // Foto certa enviada pela cliente ("Fotos clinica Rita Guerreiro/Fisioterapia ATM.jpg").
  'fisioterapia-atm': '/assets/fotos/servico-fisioterapia-atm.jpg?v=20260715h',
  // A cliente indicou que estas 2 fotos não correspondem ao serviço. Até enviar as
  // certas ficam a null — o <Photo> cai no placeholder da marca (ui.jsx).
  'fisioterapia-pediatrica': null,
  'fisioterapia-vestibular': null,
  'fisioterapia-oncologica': '/assets/fotos/servico-fisioterapia-oncologica.jpg?v=20260714c',
  psicologia: '/assets/fotos/servico-psicologia.jpg?v=20260715b',
  nutricao: '/assets/fotos/servico-nutricao.jpg',
  'terapia-bowen': '/assets/fotos/servico-terapia-bowen.jpg?v=20260715f',
  'drenagem-linfatica': '/assets/fotos/servico-drenagem-linfatica.jpg',
  'massagem-relaxamento': '/assets/fotos/servico-massagem-relaxamento.jpg?v=20260715',
  // Foto que estava na Fisioterapia Pediátrica — é mesmo de massagem a criança.
  'massagem-criancas': '/assets/fotos/servico-massagem-criancas.jpg?v=20260715g',
  'massagem-assinatura-rg': '/assets/fotos/servico-massagem-assinatura-rg.jpg?v=20260715f',
  'massagem-profunda': '/assets/fotos/servico-massagem-profunda.jpg',
  'massagem-pre-pos-natal': '/assets/fotos/servico-massagem-pre-pos-natal.jpg?v=20260714c',
  'massagem-sacro-craniana': '/assets/fotos/servico-massagem-sacro-craniana.jpg',
  'massagem-terapeutica': '/assets/fotos/servico-massagem-terapeutica.jpg',
  'massagens-maos': '/assets/fotos/servico-massagens-maos.jpg?v=20260715',
  reflexologia: '/assets/fotos/servico-reflexologia.jpg?v=20260715h',
  shiatsu: '/assets/fotos/servico-shiatsu.jpg?v=20260715f',
  'massagem-indiana': '/assets/fotos/servico-massagem-indiana.jpg',
  // Foto nova enviada pela cliente ("Fotos clinica Rita Guerreiro/Head Spa.jpg").
  'head-spa': '/assets/fotos/servico-head-spa.jpg?v=20260715i',
  facial: '/assets/fotos/servico-facial.jpg?v=20260715f',
  'depilacao-laser': '/assets/fotos/servico-depilacao-laser.jpg?v=20260714c',
  'pilates-clinico': '/assets/pilates.jpg',
  'tecarterapia-winback': '/assets/fotos/servico-tecarterapia.jpg?v=20260715f',
  // Genéricos — fotos reais da clínica
  clinicInterior: '/assets/fotos/rita-rececao.jpg',
  clinicDetail: '/assets/fotos/rita-retrato.jpg',
  clinicRoom: '/assets/fotos/sala-tratamento.jpg',
  teamWork: '/assets/fotos/equipa-trabalho.jpg',
  comunidade: '/assets/comunidade.png',
  ritaRetrato: '/assets/fotos/rita-retrato.jpg',
};

const SERVICES = {
  fisioterapia: {
    label: 'Fisioterapia',
    intro: 'Avaliação e tratamento individual de dor, lesão e disfunção.',
    items: [
      { slug: 'fisioterapia-geral', name: 'Fisioterapia Clínica', img: IMG['fisioterapia-manual'], blurb: 'Quando a dor ou a lesão limitam o dia-a-dia, ajudamos a recuperar — com avaliação rigorosa e um plano feito a pensar em si.', price: '50€' },
      { slug: 'fisioterapia-pediatrica', name: 'Fisioterapia Pediátrica', img: IMG['fisioterapia-pediatrica'], blurb: 'Fisioterapia adaptada às diferentes fases do crescimento — para bebés, crianças e adolescentes, num ambiente seguro e adequado a cada idade.', price: '50€' },
      { slug: 'fisioterapia-atm', name: 'Fisioterapia ATM', img: IMG['fisioterapia-atm'], blurb: 'Dor, bloqueio ou cliques na mandíbula? Tratamos a articulação temporomandibular com técnica manual especializada.', price: '60€' },
      { slug: 'mesoterapia', name: 'Mesoterapia', img: IMG.mesoterapia, blurb: 'Microinjeções com substâncias ativas para chegar à zona exata da dor, contratura ou preocupação estética — com rigor clínico.', price: '55€' },
      { slug: 'fisioterapia-vestibular', name: 'Fisioterapia Vestibular', img: IMG['fisioterapia-vestibular'], blurb: 'Tonturas, vertigens e desequilíbrios têm tratamento — com manobras específicas e exercícios que recuperam a sua estabilidade.', price: '50€ / Pack 5: 225€' },
      { slug: 'fisioterapia-oncologica', name: 'Fisioterapia Oncológica', img: IMG['fisioterapia-oncologica'], blurb: 'Prevenir, minimizar e tratar as sequelas físicas do cancro e dos seus tratamentos — preservando a funcionalidade, a autonomia e a qualidade de vida em todas as fases.', price: '50€ / Pack 5: 225€' },
    ],
  },
  saude: {
    label: 'Cuidados de Saúde',
    intro: 'Cuidados clínicos com tempo e atenção a cada pessoa.',
    items: [
      { slug: 'nutricao', name: 'Nutrição', img: IMG.nutricao, blurb: 'Um plano alimentar pensado para a sua vida real — sem dietas restritivas, com objetivos claros e acompanhamento próximo.', price: '45€ / 40€' },
      { slug: 'terapia-bowen', name: 'Terapia de Bowen', img: IMG['terapia-bowen'], blurb: 'Técnica neuromuscular suave com resultados frequentemente profundos — segura para crianças e adultos.', price: '20€ / 30€ / 60€' },
      { slug: 'psicologia', name: 'Psicologia', img: IMG.psicologia, blurb: 'Um espaço seguro e confidencial para falar do que mais preocupa — para crianças, adolescentes e adultos.', price: '45€' },
    ],
  },
  massagens: {
    label: 'Massagens',
    intro: 'Terapias manuais para libertar tensão e devolver equilíbrio.',
    items: [
      { slug: 'massagem-relaxamento', name: 'Massagem de Relaxamento', img: IMG['massagem-relaxamento'], blurb: 'Um espaço para parar — massagem de corpo inteiro que liberta tensão acumulada e devolve equilíbrio.', price: '40€ / 65€' },
      { slug: 'massagem-criancas', name: 'Massagem para Crianças', img: IMG['massagem-criancas'], blurb: 'Massagem suave e adaptada aos mais novos — para promover sono, calma e bem-estar.', price: '30€' },
      { slug: 'massagem-assinatura-rg', name: 'Massagem Assinatura RG', img: IMG['massagem-assinatura-rg'], blurb: 'A massagem de excelência da clínica — 80 minutos para combinar relaxamento profundo e trabalho muscular.', price: '75€' },
      { slug: 'massagem-profunda', name: 'Massagem Profunda / Desportiva', img: IMG['massagem-profunda'], blurb: 'Deep tissue e sport massage — trabalho muscular profundo para quem exige mais do corpo, no treino ou no dia-a-dia.', price: '45€ / 75€' },
      { slug: 'massagem-pre-pos-natal', name: 'Massagem Pré/Pós Natal', img: IMG['massagem-pre-pos-natal'], blurb: 'Adaptada às mudanças do corpo durante a gravidez e à recuperação no pós-parto — com conforto e posicionamento seguro.', price: '45€' },
      { slug: 'massagem-sacro-craniana', name: 'Massagem Sacro-Craniana', img: IMG['massagem-sacro-craniana'], blurb: 'Técnica de toque suave sobre o sistema sacro-craniano — alivia tensão, cefaleias e stress sem esforço.', price: '40€' },
      { slug: 'drenagem-linfatica', name: 'Drenagem Pós-Operatório', img: IMG['drenagem-linfatica'], blurb: 'Drenagem linfática especializada para a recuperação após cirurgia — reduz edema, hematomas e acelera a cicatrização.', price: '60€ / 80€' },
      { slug: 'massagem-terapeutica', name: 'Drenagem Linfática / Terapêutica', img: IMG['massagem-terapeutica'], blurb: 'Drenagem Linfática Manual (Método Vodder) e massagem terapêutica — leveza, circulação e alívio de tensão muscular.', price: '45€ / 80€' },
    ],
  },
  holisticas: {
    label: 'Holísticas',
    intro: 'Técnicas com séculos de prática para reequilibrar corpo e mente.',
    items: [
      { slug: 'reflexologia', name: 'Reflexologia', img: IMG.reflexologia, blurb: 'Estimulação precisa de pontos reflexos nos pés para reequilibrar os sistemas do organismo.', price: '45€' },
      { slug: 'shiatsu', name: 'Shiatsu', img: IMG.shiatsu, blurb: 'Técnica japonesa de pressão sobre os meridianos energéticos — para devolver equilíbrio e vitalidade.', price: '45€' },
      { slug: 'massagem-indiana', name: 'Massagem Indiana', img: IMG['massagem-indiana'], blurb: 'Indian Head Massage — relaxamento profundo da cabeça, pescoço e ombros, com raízes ayurvédicas.', price: '35€' },
      { slug: 'head-spa', name: 'Head Spa', img: IMG['head-spa'], blurb: 'Tratamento profundo do couro cabeludo — limpeza, nutrição e um relaxamento que se sente em todo o corpo.', price: '80€' },
      { slug: 'acupuntura', name: 'Acupuntura', img: IMG.acupuntura, blurb: 'Medicina Tradicional Chinesa para gerir dor, stress, ansiedade, insónia e bem-estar geral — com evidência crescente.', price: '45€' },
    ],
  },
  estetica: {
    label: 'Estética & Tratamentos',
    intro: 'Tecnologia avançada, avaliação prévia e protocolo personalizado.',
    items: [
      { slug: 'facial', name: 'Faciais', img: IMG.facial, blurb: 'Limpeza de pele, extração e facial personalizado — para uma pele saudável e equilibrada.', price: '10€ – 55€' },
      { slug: 'depilacao-laser', name: 'Depilação a Laser', img: IMG['depilacao-laser'], blurb: 'Depilação definitiva com tecnologia de última geração — para mulher e homem, todas as zonas.', price: 'Desde 20€/zona' },
      { slug: 'pilates-clinico', name: 'Pilates Clínico', img: IMG['pilates-clinico'], blurb: 'Pilates supervisionado por fisioterapeuta — exercício adaptado a lesões, dor crónica ou reabilitação.', price: '35€ – 60€/mês' },
    ],
  },
};

const SERVICE_DETAIL = {
  'fisioterapia-geral': {
    tagline: 'Avaliação cuidada, plano à sua medida — para voltar a mover-se com confiança.',
    description: 'A fisioterapia é uma ciência da saúde focada no estudo, prevenção, diagnóstico e tratamento de distúrbios relacionados com o movimento, a biomecânica e a capacidade funcional humana. O objetivo é restaurar, desenvolver e manter a máxima autonomia, mobilidade e qualidade de vida dos pacientes.',
    prices: [
      { label: 'Sessão (50min)', value: '50€' },
    ],
    sub: [
      { t: 'Dor lombar e cervical', d: 'Avaliação postural, terapia manual e exercício progressivo para dor da coluna — aguda ou crónica.' },
      { t: 'Recuperação pós-lesão', d: 'Acompanhamos cada pessoa desde a fase aguda até ao regresso à atividade — desporto, trabalho ou rotina diária.' },
      { t: 'Fisioterapia desportiva', d: 'Tratamento da lesão e preparação do regresso seguro à prática desportiva.' },
      { t: 'Pós-operatório', d: 'Redução de edema, ganho de mobilidade e recuperação de força após cirurgia ortopédica.' },
      { t: 'Gravidez e pós-parto', d: 'Acompanhamento das mudanças do corpo durante a gravidez e recuperação do pavimento pélvico após o parto.' },
      { t: 'Dor crónica', d: 'Abordagem integrada com terapia manual, exercício e educação em dor — para uma vida com mais autonomia.' },
    ],
    tech: {
      name: 'Winback',
      eyebrow: 'Tecnologia',
      tagline: 'Tecarterapia de última geração para acelerar a recuperação.',
      description: 'Integramos nas sessões de fisioterapia a tecnologia Winback — um equipamento de tecarterapia (diatermia capacitiva e resistiva) que combina alta frequência (300 kHz a 1 MHz) com neuromodulação Hi-TENS e Hi-EMS. Ativa o metabolismo dos tecidos em profundidade, reduz dor e inflamação, acelera a regeneração e devolve mobilidade em menos tempo. Particularmente eficaz em lesões músculo-esqueléticas agudas e crónicas, recuperação pós-lesão, pós-cirurgia e dor desportiva.',
      img: '/assets/winback-back3.jpg',
      link: '/servico/tecarterapia-winback',
      benefits: [
        'Alívio rápido da dor e da inflamação',
        'Aceleração da regeneração de tecidos',
        'Recuperação muscular pós-esforço',
        'Tratamento de tendinopatias e contraturas',
      ],
    },
  },
  'tecarterapia-winback': {
    tagline: 'Tecarterapia de última geração — a tecnologia que acelera cada sessão de fisioterapia.',
    description: 'A Winback é um equipamento de tecarterapia (diatermia capacitiva e resistiva) que combina alta frequência (300 kHz a 1 MHz) com neuromodulação Hi-TENS e Hi-EMS. Ao aquecer os tecidos em profundidade, ativa a circulação sanguínea e o metabolismo celular na zona tratada, acelerando os processos naturais de recuperação do organismo. É integrada pela fisioterapeuta nas sessões de tratamento, adaptada a cada caso — sem agulhas, sem dor, sem tempo de paragem.',
    prices: [
      { label: 'Sessão de fisioterapia com Winback (50min)', value: '50€' },
      { label: 'Pack 5 sessões', value: '225€' },
    ],
    sub: [
      { t: 'Alívio rápido da dor', d: 'Ação analgésica imediata através da neuromodulação Hi-TENS, sentida já durante a sessão.' },
      { t: 'Redução da inflamação', d: 'O calor profundo (diatermia) estimula a microcirculação local e ajuda a drenar o edema.' },
      { t: 'Recuperação muscular pós-esforço', d: 'Acelera a eliminação de ácido láctico e a regeneração de tecido muscular após esforço intenso.' },
      { t: 'Tendinopatias e contraturas', d: 'Trabalho em profundidade sobre tendões e músculos contraturados, difícil de alcançar só com terapia manual.' },
      { t: 'Recuperação pós-cirúrgica', d: 'Acelera a cicatrização de tecidos e recupera mobilidade após cirurgia ortopédica.' },
      { t: 'Lesões desportivas agudas e crónicas', d: 'Reduz o tempo de recuperação em entorses, roturas musculares e sobrecargas de treino.' },
    ],
    equipment: {
      eyebrow: 'O EQUIPAMENTO',
      heading: 'Tecnologia Winback, oficial e certificada',
      text: 'O Winback é operado diretamente pela fisioterapeuta através de um ecrã tátil, que permite ajustar em tempo real o modo, a intensidade e a combinação de correntes ao caso de cada pessoa. A sonda desliza sobre a pele com creme condutor específico — sem agulhas, sem preparação especial e sem tempo de paragem entre a sessão e o dia a dia.',
      badge: 'Certificado Winback Expert Center',
      bullets: [
        { t: '300 kHz – 1 MHz', d: 'Alta frequência regulável consoante a profundidade do tecido a tratar.' },
        { t: 'Capacitivo e resistivo', d: 'Dois modos de diatermia, para tecido superficial ou mais profundo.' },
        { t: 'Hi-TENS + Hi-EMS', d: 'Neuromodulação combinada com o calor, para alívio da dor e ativação muscular.' },
        { t: 'Sonda monopolar', d: 'Aplicada diretamente pela fisioterapeuta, com controlo total sobre a zona tratada.' },
      ],
    },
    process: {
      eyebrow: 'DURANTE A SESSÃO',
      heading: 'Como é feita a aplicação',
      steps: [
        { t: 'Avaliação e ajuste', d: 'A fisioterapeuta escolhe o modo, a intensidade e a sonda de acordo com a zona e o objetivo do tratamento.' },
        { t: 'Aplicação direta', d: 'A sonda desliza sobre a pele com creme condutor, sem agulhas nem desconforto.' },
        { t: 'Calor e neuromodulação', d: 'Sente-se calor profundo e uma estimulação elétrica suave já nos primeiros minutos.' },
        { t: 'Integração na sessão', d: 'O Winback é combinado com terapia manual, potenciando o resultado de cada sessão de fisioterapia.' },
      ],
    },
  },
  'fisioterapia-pediatrica': {
    tagline: 'Fisioterapia adaptada a cada fase do crescimento — com cuidado, segurança e tempo para cada criança.',
    description: 'A Fisioterapia Pediátrica acompanha bebés, crianças e adolescentes em diferentes fases do desenvolvimento. Avaliamos e tratamos atrasos no desenvolvimento motor, alterações posturais, lesões músculo-esqueléticas e condições neurológicas — sempre num ambiente seguro, adaptado e adequado à idade. Cada sessão é desenhada para o ritmo da criança, com envolvimento da família sempre que faz sentido.',
    prices: [
      { label: 'Sessão (50min)', value: '50€' },
    ],
    sub: [
      { t: 'Desenvolvimento motor', d: 'Avaliação e estimulação do desenvolvimento motor em bebés e crianças com atraso ou alterações.' },
      { t: 'Alterações posturais', d: 'Escoliose, cifose, pés planos e outras alterações posturais da infância e adolescência.' },
      { t: 'Lesões músculo-esqueléticas', d: 'Recuperação de lesões desportivas, traumáticas ou por sobrecarga em crianças e jovens.' },
      { t: 'Torcicolo congénito', d: 'Tratamento manual e exercícios específicos para torcicolo muscular do bebé.' },
      { t: 'Plagiocefalia', d: 'Apoio na correção de assimetrias do crânio em bebés através de posicionamento e mobilização.' },
      { t: 'Condições neurológicas', d: 'Acompanhamento de crianças com paralisia cerebral, atraso global ou outras condições neurológicas.' },
    ],
  },
  'fisioterapia-atm': {
    tagline: 'Para quando a mandíbula dói, bloqueia ou faz cliques — tratamos a ATM na sua raiz.',
    description: 'A fisioterapia para a articulação temporomandibular (ATM) trata a disfunção (DTM) através de terapias manuais e exercícios. O objetivo é aliviar dores de cabeça ou na face, eliminar estalidos, reduzir a tensão e restaurar a mobilidade, sendo muitas vezes integrada num acompanhamento médico multidisciplinar.',
    prices: [
      { label: 'Fisioterapia ATM (50min)', value: '60€' },
    ],
    sub: [
      { t: 'Dor na mandíbula', d: 'Alívio de dor articular, muscular ou ao mastigar através de terapia manual especializada.' },
      { t: 'Cliques e rangido', d: 'Avaliação e tratamento dos estalidos, cliques ou crepitações na articulação ao abrir ou fechar a boca.' },
      { t: 'Bloqueio articular', d: 'Recuperação da amplitude de movimento da mandíbula em casos de bloqueio ou limitação de abertura.' },
      { t: 'Cefaleias e tensão cervical', d: 'Abordagem integrada entre ATM, cervical e cefaleias — muitas vezes interligadas.' },
      { t: 'Bruxismo', d: 'Gestão da tensão muscular e proteção articular em casos de bruxismo diurno ou noturno.' },
      { t: 'Pós-ortodontia ou pós-cirurgia', d: 'Recuperação funcional da ATM após tratamentos dentários, ortodônticos ou cirúrgicos.' },
    ],
  },
  mesoterapia: {
    tagline: 'Ação localizada onde mais precisa — para dor, inflamação ou cuidado estético.',
    description: 'A Mesoterapia consiste na aplicação de microinjeções de substâncias ativas diretamente nas camadas superficiais da pele ou tecido subcutâneo. Permite uma ação altamente localizada — chega à zona exata da dor, contratura ou da preocupação estética, com pouca difusão sistémica. Aplicada por fisioterapeuta com formação específica, é uma técnica versátil tanto em contexto clínico (dor articular, contraturas) como estético (celulite, flacidez, rejuvenescimento).',
    prices: [
      { label: 'Sessão (50min)', value: '55€' },
    ],
    sub: [
      { t: 'Dor e inflamação articular', d: 'Aplicação localizada de anti-inflamatórios para alívio rápido em joelhos, ombros ou coluna.' },
      { t: 'Contraturas musculares', d: 'Libertação de pontos de tensão muscular persistentes resistentes a outras técnicas.' },
      { t: 'Celulite e gordura localizada', d: 'Melhoria da circulação local e redução de acumulações de gordura em zonas específicas.' },
      { t: 'Flacidez cutânea', d: 'Estimulação da produção de colagénio para firmeza e tonicidade da pele.' },
      { t: 'Rejuvenescimento facial', d: 'Hidratação profunda e revitalização da pele do rosto com ácido hialurónico e vitaminas.' },
      { t: 'Queda de cabelo', d: 'Estimulação do couro cabeludo para fortalecimento capilar e travagem da queda.' },
    ],
  },
  'fisioterapia-vestibular': {
    tagline: 'Recuperar a estabilidade — e voltar a confiar no equilíbrio do seu corpo.',
    description: 'A Fisioterapia Vestibular é uma área especializada da fisioterapia que trata tonturas, vertigens e desequilíbrios. Através de avaliação rigorosa, manobras de reposicionamento (eficazes em VPPB) e exercícios específicos de habituação e estabilização do olhar, ajudamos o sistema vestibular a recuperar ou compensar. Os resultados são frequentemente rápidos — em muitos casos, com alívio significativo logo na primeira sessão.',
    prices: [
      { label: 'Sessão (50min)', value: '50€' },
      { label: 'Pack 5 sessões', value: '225€' },
    ],
    sub: [
      { t: 'Vertigem Posicional (VPPB)', d: 'Manobras de reposicionamento de otólitos — resolução frequente em 1 a 3 sessões.' },
      { t: 'Tonturas crónicas', d: 'Exercícios de habituação e estabilização do olhar para reduzir tonturas persistentes.' },
      { t: 'Neurite vestibular', d: 'Reabilitação após inflamação do nervo vestibular para recuperar equilíbrio e estabilidade.' },
      { t: 'Doença de Ménière', d: 'Apoio na gestão de crises vertiginosas e melhoria do equilíbrio entre episódios.' },
      { t: 'Desequilíbrio no idoso', d: 'Treino de equilíbrio e prevenção de quedas em populações com risco aumentado.' },
      { t: 'Tonturas pós-traumáticas', d: 'Recuperação após traumatismo craniano ou cervical com sintomas vestibulares.' },
    ],
  },
  'fisioterapia-oncologica': {
    tagline: 'Recuperar funcionalidade, autonomia e qualidade de vida — em todas as fases.',
    description: 'A fisioterapia oncológica é a especialidade focada em prevenir, minimizar e tratar as sequelas físicas causadas pelo cancro e pelos seus tratamentos agressivos, como cirurgias, quimioterapia e radioterapia. O objetivo principal é preservar a funcionalidade, devolver a autonomia e garantir qualidade de vida ao doente em todas as fases da patologia.',
    prices: [
      { label: 'Sessão (50min)', value: '50€' },
      { label: 'Pack 5 sessões', value: '225€' },
    ],
    sub: [
      { t: 'Linfedema pós-oncológico', d: 'Drenagem linfática manual e ligaduras para controlo do edema após esvaziamento ganglionar ou radioterapia.' },
      { t: 'Recuperação pós-mastectomia', d: 'Ganho de mobilidade do ombro e do braço e tratamento da cicatriz após cirurgia da mama.' },
      { t: 'Sequelas de radioterapia', d: 'Tratamento de fibroses, aderências e perda de mobilidade provocadas pela radioterapia.' },
      { t: 'Fadiga e descondicionamento', d: 'Exercício adaptado e progressivo para combater a fadiga oncológica e recuperar a condição física.' },
      { t: 'Mobilidade e cicatrizes', d: 'Mobilização de tecidos, alívio de aderências e recuperação da amplitude de movimento.' },
      { t: 'Reabilitação durante o tratamento', d: 'Acompanhamento ativo ao longo da quimioterapia e radioterapia para preservar a funcionalidade.' },
    ],
  },
  acupuntura: {
    tagline: 'Uma medicina com séculos de prática — e evidência crescente para o seu bem-estar.',
    description: 'A acupuntura é uma técnica terapêutica milenar, originária da Medicina Tradicional Chinesa, que consiste na inserção de agulhas finas em pontos específicos do corpo. O seu objetivo é estimular respostas naturais do organismo, promovendo o equilíbrio físico e emocional e o alívio de sintomas.',
    prices: [
      { label: 'Por sessão (50min)', value: '45€' },
    ],
    sub: [
      { t: 'Dor crónica', d: 'Lombalgias, cervicalgias, cefaleias e dores articulares com resposta comprovada à acupuntura.' },
      { t: 'Stress e ansiedade', d: 'Regulação do sistema nervoso autónomo para reduzir tensão, irritabilidade e fadiga mental.' },
      { t: 'Insónia', d: 'Tratamento das causas subjacentes ao sono perturbado através do equilíbrio energético.' },
      { t: 'Saúde digestiva', d: 'Colon irritável, refluxo e outros desequilíbrios do sistema digestivo.' },
      { t: 'Fertilidade e ciclo menstrual', d: 'Regulação hormonal e apoio em processos de fertilidade ou desconfortos menstruais.' },
      { t: 'Bem-estar geral', d: 'Equilíbrio energético e bem-estar global como prática preventiva e de saúde.' },
    ],
  },
  nutricao: {
    tagline: 'Alimentação real para a vida real — sem dietas restritivas nem soluções genéricas.',
    description: 'A nutrição é a ciência que estuda a relação entre os alimentos ingeridos, a sua composição e o impacto direto no funcionamento do corpo, na saúde e na prevenção de doenças. O processo biológico envolve a ingestão, absorção e utilização de nutrientes para o crescimento, energia e manutenção da vida.',
    prices: [
      { label: '1ª consulta (até 50min)', value: '45€' },
      { label: 'Seguintes (30min)', value: '40€' },
    ],
    sub: [
      { t: 'Perda de peso sustentável', d: 'Plano alimentar real e adaptado ao seu estilo de vida — para perder e manter.' },
      { t: 'Nutrição desportiva', d: 'Otimização da alimentação para performance, recuperação e composição corporal.' },
      { t: 'Saúde digestiva', d: 'Apoio nutricional em colon irritável, intolerâncias, refluxo e outros desequilíbrios.' },
      { t: 'Diabetes e colesterol', d: 'Gestão nutricional de patologias metabólicas com acompanhamento regular.' },
      { t: 'Gravidez e amamentação', d: 'Alimentação adaptada a cada fase, para a saúde da mãe e do bebé.' },
      { t: 'Alimentação vegetariana e vegana', d: 'Garantia de equilíbrio nutricional em dietas plant-based sem défices.' },
    ],
  },
  'terapia-bowen': {
    tagline: 'Suave no toque, eficaz no resultado — para todas as idades.',
    description: 'A terapia de Bowen é uma técnica manual holística e não invasiva que utiliza toques suaves e precisos sobre músculos, tendões e ligamentos. O seu principal objetivo é estimular os mecanismos naturais de autocura do corpo e restaurar o equilíbrio do sistema nervoso, promovendo o alívio da dor e o relaxamento.',
    prices: [
      { label: 'Crianças até 5 anos (60min)', value: '20€' },
      { label: 'Crianças 5-12 anos (60min)', value: '30€' },
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
    tagline: 'Um espaço seguro para falar do que o(a) preocupa — para criança, adolescente e adulto.',
    description: 'A psicologia é a ciência que estuda o comportamento humano, os processos mentais e a forma como as emoções, os pensamentos e o ambiente interagem. O seu principal objetivo é compreender, explicar e promover a saúde mental e o bem-estar, ajudando as pessoas a lidar com desafios e a melhorar a sua qualidade de vida.',
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
    tagline: 'Tempo de desacelerar. O seu momento de bem-estar absoluto;',
    description: 'A massagem de relaxamento é uma terapia manual que utiliza movimentos suaves, rítmicos e contínuos em todo o corpo, com o auxílio de óleos ou cremes. O seu objetivo principal é aliviar tensões musculares, reduzir o stress e promover um estado de bem-estar físico e mental profundo.',
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
    tagline: 'Toque suave e seguro — para o bem-estar dos mais novos.',
    description: 'A massagem de relaxamento para crianças é uma prática suave que alia técnicas terapêuticas adaptadas à idade infantil. Ajuda a reduzir o stress e a ansiedade, melhora a qualidade do sono, diminui dores de crescimento e promove um forte desenvolvimento emocional e segurança.',
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
    tagline: 'Relaxamento profundo da cabeça aos pés. A nossa massagem exclusiva.',
    description: 'A Massagem de assinatura RG representa uma jornada exclusiva de bem-estar criada por nós. Combina técnicas personalizadas com o conforto do ritual de toalhas quentes e os benefícios terapêuticos da aromaterapia para um relaxamento profundo e multissensorial.',
    prices: [
      { label: 'Sessão completa (80min)', value: '75€' },
    ],
    sub: [
      { t: 'Relaxamento total', d: 'Combinação de técnicas suaves para induzir um estado de calma profunda.' },
      { t: 'Trabalho muscular', d: 'Libertação de tensões acumuladas com técnicas adaptadas a cada zona do corpo.' },
      { t: 'Bem-estar global', d: 'Abordagem holística que cuida do corpo e da mente em simultâneo.' },
      { t: 'Experiência personalizada', d: 'Cada sessão é adaptada às preferências e necessidades do cliente.' },
      { t: 'Momento único', d: '80 minutos de dedicação exclusiva ao seu bem-estar.' },
      { t: 'Ideal para oferta', d: 'A escolha perfeita para uma prenda especial ou um momento de autocuidado.' },
    ],
  },
  'massagem-profunda': {
    tagline: 'Trabalho muscular profundo — para quem exige mais do corpo, no treino ou no dia-a-dia.',
    description: 'A massagem deep tissue (ou massagem de tecido profundo) é uma técnica terapêutica focada nas camadas mais profundas dos músculos e do tecido conjuntivo. Utiliza movimentos lentos e pressão firme para aliviar dores crónicas, nós musculares (aderências) e recuperar a mobilidade.',
    prices: [
      { label: '50 minutos', value: '45€' },
      { label: '80 minutos', value: '75€' },
    ],
    sub: [
      { t: 'Contraturas e espasmos musculares', d: 'Libertação de nós musculares e zonas de tensão profunda resistentes ao relaxamento espontâneo.' },
      { t: 'Recuperação pós-treino', d: 'Aceleração da regeneração muscular, redução de DOMS e eliminação de resíduos metabólicos após esforço intenso.' },
      { t: 'Preparação pré-competição', d: 'Ativação muscular e mobilização dos tecidos para otimizar o rendimento desportivo antes da prova ou treino.' },
      { t: 'Síndrome do piriforme e ciática', d: 'Trabalho específico sobre a musculatura glútea profunda para alívio da dor ciática e libertação do nervo.' },
      { t: 'Tensão cervical e ombros', d: 'Abordagem profunda na zona mais afetada por stress, trabalho sedentário e postura anterior.' },
      { t: 'Tendinites e sobrecargas', d: 'Tratamento de tendinites crónicas e lesões por esforço repetitivo em atletas e não-atletas.' },
    ],
  },
  'massagem-pre-pos-natal': {
    tagline: 'Acompanhamento e conforto na gravidez e no pós-parto — adaptado a cada fase.',
    description: 'A massagem pré e pós-natal é um tratamento terapêutico focado no alívio de dores musculares, inchaço e stress, adaptado às transformações do corpo da mulher. Na pré-natal (gravidez), melhora a circulação e reduz o desconforto; na pós-natal, ajuda a recuperar o tónus muscular e o equilíbrio emocional.',
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
    tagline: 'Um toque quase imperceptível com efeitos profundos no sistema nervoso.',
    description: 'A terapia craniana (ou terapia craniossacral/sacro-craniana) é uma técnica manual suave e não invasiva que atua no sistema craniossacral, o qual inclui os ossos do crânio, a coluna, o sacro e o líquido cefalorraquidiano. Através de toques muito leves (cerca de 5 gramas), o terapeuta liberta bloqueios e tensões, promovendo o auto-equilíbrio do corpo e o relaxamento profundo do sistema nervoso central.',
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
    tagline: 'Para recuperar depois da cirurgia — uma drenagem suave que acelera a cicatrização.',
    description: 'A drenagem linfática pós-operatória é uma massagem suave e terapêutica essencial para a recuperação de cirurgias plásticas ou clínicas. Ela reduz o inchaço (edema), diminui hematomas, alivia dores e previne complicações como fibroses e seromas, acelerando a cicatrização e melhorando a qualidade dos resultados finais.',
    prices: [
      { label: 'Pós-Operatório 50min', value: '60€' },
      { label: 'Pós-Operatório 90min', value: '80€' },
    ],
    sub: [
      { t: 'Recuperação pós-cirurgia', d: 'Redução de edema e melhoria da qualidade das cicatrizes após intervenção cirúrgica.' },
      { t: 'Cirurgia plástica e estética', d: 'Drenagem essencial após lipoaspiração, abdominoplastia e outras cirurgias plásticas.' },
      { t: 'Prevenção de complicações', d: 'Prevenção de fibroses, seromas e aderências que comprometem o resultado final.' },
      { t: 'Redução de hematomas', d: 'Reabsorção mais rápida de hematomas e equimoses na zona operada.' },
      { t: 'Cicatrização acelerada', d: 'Estímulo da circulação local para uma cicatrização mais rápida e saudável.' },
      { t: 'Conforto pós-operatório', d: 'Alívio do desconforto e da sensação de peso nas primeiras semanas de recuperação.' },
    ],
  },
  'massagem-terapeutica': {
    tagline: 'Drenagem linfática e massagem terapêutica — leveza, circulação e alívio da tensão que não passa.',
    description: 'A drenagem linfática manual (DLM) é uma técnica de massagem terapêutica especializada que utiliza movimentos rítmicos, suaves e lentos. O seu principal objetivo é estimular o sistema linfático, acelerando a eliminação de líquidos, toxinas e resíduos metabólicos através da urina. A massagem terapêutica é uma técnica manual focada no tratamento de disfunções musculares, articulares e dores localizadas. Utiliza movimentos específicos e com mais pressão para aliviar tensões, melhorar a mobilidade e promover a recuperação física. Diferencia-se da massagem de relaxamento por ter um objetivo clínico e curativo, e não apenas de bem-estar geral.',
    prices: [
      { label: 'Drenagem Manual (50min)', value: '50€ / 45€ (Pack 5)' },
      { label: 'Massagem Terapêutica 50min', value: '60€' },
      { label: 'Massagem Terapêutica 90min', value: '80€' },
    ],
    sub: [
      { t: 'Retenção de líquidos', d: 'Redução do inchaço nas pernas, tornozelos e barriga causado por retenção hídrica.' },
      { t: 'Linfedema', d: 'Gestão do linfedema primário ou secundário com técnica especializada Método Vodder.' },
      { t: 'Celulite e leveza', d: 'Melhoria da aparência da pele, da microcirculação local e sensação de corpo mais leve.' },
      { t: 'Contraturas e espasmos', d: 'Libertação de nós musculares e zonas de tensão profunda resistentes ao relaxamento.' },
      { t: 'Tensão cervical e ombros', d: 'Abordagem profunda na zona mais afetada por trabalho sedentário e stress.' },
      { t: 'Recuperação desportiva', d: 'Protocolo específico para atletas — antes ou depois da competição ou treino.' },
    ],
  },
  reflexologia: {
    tagline: 'O corpo todo nos pés — uma terapia não invasiva com efeitos profundos.',
    description: 'A reflexologia é uma técnica terapêutica não invasiva que consiste na aplicação de pressão em áreas específicas dos pés, mãos ou orelhas. Baseia-se no princípio de que estas zonas correspondem a reflexos diretos de diferentes órgãos, glândulas e partes do corpo.',
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
    tagline: 'Pressão precisa sobre os meridianos — para devolver equilíbrio e vitalidade.',
    description: 'O shiatsu é uma terapia corporal e massagem terapêutica de origem japonesa cujo nome significa literalmente "pressão com os dedos" (shi = dedos + atsu = pressão). A técnica foca no reequilíbrio físico e energético.',
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
    tagline: '"Viagem ao relaxamento profundo." Alivie a carga dos ombros, cabeça e pescoço, e sinta a leveza de uma mente perfeitamente tranquila e revigorada.',
    description: 'A massagem indiana envolve movimentos ritmados, lentos e profundos, aplicados em pontos específicos do corpo para liberar tensões, melhorar a circulação sanguínea e eliminar toxinas.',
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
    tagline: 'Cuidar do couro cabeludo é cuidar do cabelo — e relaxar como há muito não relaxava.',
    description: 'O head spa japonês é uma terapia capilar e holística de relaxamento profundo. Originária do Japão, foca na saúde do couro cabeludo através de limpeza, esfoliação e massagens estimulantes na cabeça, pescoço e ombros. O tratamento alivia o stresse, melhora a circulação sanguínea e promove o bem-estar geral.',
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
    tagline: 'Cuidado profissional para cada tipo de pele — para resultados visíveis e duradouros.',
    description: 'A limpeza de pele é um procedimento estético fundamental para remover impurezas, células mortas, excesso de oleosidade. O processo desobstrui os poros, melhora a oxigenação e potencializa a absorção de produtos de cuidado diário. A limpeza de pele com extração é um procedimento estético profissional essencial para desobstruir os poros, eliminar pontos negros (comedões), brancos (miliuns) e células mortas. O processo devolve o viço e a saúde à pele, sendo realizado através de etapas rigorosas de higiene, emoliência e hidratação.',
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
  'depilacao-laser': {
    tagline: 'Acaba com a depilação semanal — laser definitivo, para mulher e homem.',
    description: 'A depilação a laser é um procedimento estético que utiliza feixes de luz concentrada para destruir a raiz do pelo (folículo piloso), retardando e reduzindo o seu crescimento de forma prolongada.',
    prices: [
      { label: 'Mulher — 1 zona', value: '20€' },
      { label: 'Mulher — Combi 3 zonas', value: '50€' },
      { label: 'Mulher — Zona extra', value: '10€' },
      { label: 'Homem — 1 zona', value: '20€' },
      { label: 'Homem — Combi 3 zonas', value: '60€' },
      { label: 'Homem — Zona extra', value: '10€' },
    ],
    sub: [
      { t: 'Virilha e linha do biquíni', d: 'Tratamento completo ou parcial, com opções adaptadas às suas preferências.' },
      { t: 'Pernas e coxas', d: 'Depilação de zonas extensas com eficácia e conforto máximos.' },
      { t: 'Axilas', d: 'Uma das zonas com resultado mais rápido — frequentemente eficaz em poucas sessões.' },
      { t: 'Rosto e pescoço', d: 'Lábio superior, queixo, bochechas e zona do pescoço, com extrema precisão.' },
      { t: 'Costas e peito', d: 'Tratamento de zonas extensas no corpo masculino, com equipamento adequado.' },
      { t: 'Braços e antebraços', d: 'Resultados graduais e permanentes nesta zona com elevada densidade de pelo.' },
    ],
  },
  'pilates-clinico': {
    tagline: 'Pilates com supervisão de fisioterapeuta — exercício adaptado, sempre seguro.',
    description: 'O pilates clínico é uma modalidade de exercício terapêutico, focado na prevenção e reabilitação de lesões músculo-esqueléticas. Distingue-se do pilates tradicional por ser ministrado exclusivamente por fisioterapeutas, que adaptam os exercícios à condição clínica e às necessidades específicas de cada pessoa.',
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
