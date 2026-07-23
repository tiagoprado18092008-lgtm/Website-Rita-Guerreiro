// i18n overlay for SERVICES and SERVICE_DETAIL — EN/FR/ES translations.
// PT comes from data.jsx; this file provides EN/FR/ES strings keyed by slug/category id.
// getServices(lang) / getServiceDetail(lang) return localized clones of the catalog.

const SERVICES_I18N = {
  EN: {
    fisioterapia: {
      label: 'Physiotherapy',
      intro: 'Individual assessment and treatment of pain, injury and dysfunction',
      items: {
        'fisioterapia-geral': { name: 'Clinical Physiotherapy', blurb: 'When pain or injury limits your daily life, we help you recover — with rigorous assessment and a plan tailored to you' },
        'fisioterapia-pediatrica': { name: 'Paediatric Physiotherapy', blurb: 'Physiotherapy adapted to each stage of growth — for babies, children and adolescents, in a safe, age-appropriate setting' },
        'fisioterapia-atm': { name: 'TMJ Physiotherapy', blurb: 'Pain, locking or clicking in your jaw? We treat the temporomandibular joint with specialised manual technique' },
        'fisioterapia-vestibular': { name: 'Vestibular Physiotherapy', blurb: 'Dizziness, vertigo and imbalance can be treated — with specific manoeuvres and exercises that restore your stability' },
        'fisioterapia-oncologica': { name: 'Oncology Physiotherapy', blurb: 'Preventing, minimising and treating the physical after-effects of cancer and its treatments — preserving function, autonomy and quality of life at every stage' },
      },
    },
    saude: {
      label: 'Health Care',
      intro: 'Clinical care with time and attention for each person',
      items: {
        nutricao: { name: 'Nutrition', blurb: 'A nutrition plan built for your real life — no restrictive diets, clear goals and close follow-up' },
        'terapia-bowen': { name: 'Bowen Therapy', blurb: 'A gentle neuromuscular technique with often profound results — safe for children and adults' },
        psicologia: { name: 'Psychology', blurb: 'A safe, confidential space to talk about what concerns you — for children, adolescents and adults' },
      },
    },
    massagens: {
      label: 'Massages',
      intro: 'Manual therapies to release tension and restore balance',
      items: {
        'massagem-relaxamento': { name: 'Relaxation Massage', blurb: 'A space to pause — full-body massage that releases built-up tension and restores balance' },
        'massagem-criancas': { name: "Children's Massage", blurb: 'A gentle massage tailored to the youngest — to promote sleep, calm and wellbeing' },
        'massagem-assinatura-rg': { name: 'RG Signature Massage', blurb: 'The flagship massage of the clinic — 80 minutes combining deep relaxation and muscle work' },
        'massagem-profunda': { name: 'Deep Tissue / Sports Massage', blurb: 'Deep tissue and sport massage — deep muscular work for those who demand more from their body, in training or everyday life' },
        'massagem-pre-pos-natal': { name: 'Pre/Post-Natal Massage', blurb: 'Adapted to the body changes of pregnancy and postpartum recovery — with comfort and safe positioning' },
        'massagem-sacro-craniana': { name: 'Craniosacral Massage', blurb: 'A gentle touch on the craniosacral system — relieves tension, headaches and stress effortlessly' },
        'drenagem-linfatica': { name: 'Post-Operative Drainage', blurb: 'Specialised lymphatic drainage for recovery after surgery — reduces oedema and bruising and speeds up healing' },
        'drenagem-linfatica-manual': { name: 'Manual Lymphatic Drainage', blurb: 'Manual Lymphatic Drainage (Vodder Method) — gentle, rhythmic movements that stimulate circulation and reduce fluid retention' },
        'massagem-terapeutica': { name: 'Therapeutic Massage', blurb: 'Manual work focused on muscular and joint dysfunction — relieves tension, improves mobility and promotes physical recovery' },
      },
    },
    holisticas: {
      label: 'Holistic',
      intro: 'Centuries-old techniques to rebalance body and mind',
      items: {
        reflexologia: { name: 'Reflexology', blurb: "Precise stimulation of reflex points on the feet to rebalance the body's systems" },
        shiatsu: { name: 'Shiatsu', blurb: 'A Japanese technique of pressure along energy meridians — to restore balance and vitality' },
        'massagem-indiana': { name: 'Indian Massage', blurb: 'Indian Head Massage — deep relaxation of head, neck and shoulders, with Ayurvedic roots' },
        'head-spa': { name: 'Head Spa', blurb: 'Deep scalp treatment — cleansing, nourishment and a sense of relaxation felt throughout the body' },
        acupuntura: { name: 'Acupuncture', blurb: 'Traditional Chinese Medicine for pain, stress, anxiety, insomnia and general wellbeing — with growing evidence' },
      },
    },
    estetica: {
      label: 'Aesthetics & Treatments',
      intro: 'Advanced technology, prior assessment and a personalised protocol',
      items: {
        facial: { name: 'Facials', blurb: 'Skin cleansing, extraction and personalised facials — for healthy, balanced skin' },
        mesoterapia: { name: 'Mesotherapy', blurb: 'Micro-injections with active substances to reach the exact area of pain, contracture or aesthetic concern — with clinical precision' },
        'depilacao-laser': { name: 'Laser Hair Removal', blurb: 'Permanent hair removal with state-of-the-art technology — for women and men, all body areas' },
      },
    },
    exercicio: {
      label: 'Wellness Exercise',
      intro: 'Supervised movement tailored to you — to prevent, rehabilitate and improve quality of life',
      items: {
        'pilates-clinico': { name: 'Clinical Pilates', blurb: 'Pilates supervised by a physiotherapist — exercise adapted to injuries, chronic pain or rehabilitation' },
        hipopressivos: { name: 'Hypopressives', blurb: 'Hypopressive abdominal exercise — a breathing and postural technique that strengthens the core and pelvic floor' },
        'personal-trainer': { name: 'Personal Trainer', blurb: 'Personalised, supervised training — plans tailored to you for strength, mobility and fitness' },
      },
    },
  },
  FR: {
    fisioterapia: {
      label: 'Physiothérapie',
      intro: 'Évaluation et traitement individuel de la douleur et des blessures',
      items: {
        'fisioterapia-geral': { name: 'Physiothérapie clinique', blurb: 'Quand la douleur ou la blessure limite votre quotidien, nous vous aidons à récupérer — avec une évaluation rigoureuse et un plan pensé pour vous' },
        'fisioterapia-pediatrica': { name: 'Physiothérapie pédiatrique', blurb: 'Physiothérapie adaptée à chaque étape de la croissance — pour bébés, enfants et adolescents, dans un environnement sûr et adapté à chaque âge' },
        'fisioterapia-atm': { name: 'Physiothérapie ATM', blurb: 'Douleur, blocage ou claquements de la mâchoire ? Nous traitons l’articulation temporo-mandibulaire avec une technique manuelle spécialisée' },
        'fisioterapia-vestibular': { name: 'Physiothérapie vestibulaire', blurb: 'Vertiges, étourdissements et troubles de l’équilibre peuvent être traités — avec des manœuvres spécifiques et des exercices qui rétablissent votre stabilité' },
        'fisioterapia-oncologica': { name: 'Physiothérapie oncologique', blurb: 'Prévenir, réduire et traiter les séquelles physiques du cancer et de ses traitements — en préservant la fonction, l’autonomie et la qualité de vie à chaque étape' },
      },
    },
    saude: {
      label: 'Soins de santé',
      intro: 'Des soins cliniques avec du temps et de l’attention pour chacun',
      items: {
        nutricao: { name: 'Nutrition', blurb: 'Un plan alimentaire conçu pour votre vie réelle — sans régimes restrictifs, avec des objectifs clairs et un suivi rapproché' },
        'terapia-bowen': { name: 'Thérapie Bowen', blurb: 'Une technique neuromusculaire douce aux résultats souvent profonds — sûre pour enfants et adultes' },
        psicologia: { name: 'Psychologie', blurb: 'Un espace sûr et confidentiel pour parler de ce qui vous préoccupe — pour enfants, adolescents et adultes' },
      },
    },
    massagens: {
      label: 'Massages',
      intro: 'Thérapies manuelles pour libérer les tensions et retrouver l’équilibre',
      items: {
        'massagem-relaxamento': { name: 'Massage relaxant', blurb: 'Un espace pour faire une pause — massage du corps entier qui libère les tensions accumulées et restaure l’équilibre' },
        'massagem-criancas': { name: 'Massage pour enfants', blurb: 'Massage doux et adapté aux plus petits — pour favoriser le sommeil, le calme et le bien-être' },
        'massagem-assinatura-rg': { name: 'Massage Signature RG', blurb: 'Le massage phare de la clinique — 80 minutes combinant détente profonde et travail musculaire' },
        'massagem-profunda': { name: 'Massage Profond / Sportif', blurb: 'Deep tissue et sport massage — travail musculaire profond pour ceux qui exigent davantage de leur corps, à l’entraînement ou au quotidien' },
        'massagem-pre-pos-natal': { name: 'Massage pré/post-natal', blurb: 'Adapté aux changements du corps pendant la grossesse et à la récupération post-partum — avec confort et positionnement sûr' },
        'massagem-sacro-craniana': { name: 'Massage crânio-sacré', blurb: 'Un toucher doux sur le système crânio-sacré — soulage tensions, céphalées et stress sans effort' },
        'drenagem-linfatica': { name: 'Drainage post-opératoire', blurb: 'Drainage lymphatique spécialisé pour la récupération après une chirurgie — réduit l’œdème, les hématomes et accélère la cicatrisation' },
        'drenagem-linfatica-manual': { name: 'Drainage Lymphatique Manuel', blurb: 'Drainage Lymphatique Manuel (Méthode Vodder) — mouvements doux et rythmiques qui stimulent la circulation et réduisent la rétention d’eau' },
        'massagem-terapeutica': { name: 'Massage thérapeutique', blurb: 'Travail manuel axé sur les dysfonctions musculaires et articulaires — soulage la tension, améliore la mobilité et favorise la récupération physique' },
      },
    },
    holisticas: {
      label: 'Holistique',
      intro: 'Des techniques séculaires pour rééquilibrer le corps et l’esprit',
      items: {
        reflexologia: { name: 'Réflexologie', blurb: 'Stimulation précise des points réflexes des pieds pour rééquilibrer les systèmes de l’organisme' },
        shiatsu: { name: 'Shiatsu', blurb: 'Technique japonaise de pression sur les méridiens énergétiques — pour retrouver équilibre et vitalité' },
        'massagem-indiana': { name: 'Massage indien', blurb: 'Indian Head Massage — détente profonde de la tête, du cou et des épaules, aux racines ayurvédiques' },
        'head-spa': { name: 'Head Spa', blurb: 'Traitement profond du cuir chevelu — nettoyage, nutrition et une détente ressentie dans tout le corps' },
        acupuntura: { name: 'Acupuncture', blurb: 'Médecine traditionnelle chinoise pour la douleur, le stress, l’anxiété, l’insomnie et le bien-être général — avec des preuves croissantes' },
      },
    },
    estetica: {
      label: 'Esthétique & Traitements',
      intro: 'Technologie avancée, évaluation préalable et protocole personnalisé',
      items: {
        facial: { name: 'Soins du visage', blurb: 'Nettoyage de peau, extraction et soin facial personnalisé — pour une peau saine et équilibrée' },
        mesoterapia: { name: 'Mésothérapie', blurb: 'Micro-injections de substances actives pour atteindre la zone exacte de la douleur, contracture ou préoccupation esthétique — avec rigueur clinique' },
        'depilacao-laser': { name: 'Épilation au laser', blurb: 'Épilation définitive avec une technologie de dernière génération — pour femme et homme, toutes les zones du corps' },
      },
    },
    exercicio: {
      label: 'Exercices de bien-être',
      intro: 'Mouvement supervisé et adapté à vous — pour prévenir, rééduquer et gagner en qualité de vie',
      items: {
        'pilates-clinico': { name: 'Pilates clinique', blurb: 'Pilates supervisé par un physiothérapeute — exercice adapté aux blessures, douleur chronique ou réadaptation' },
        hipopressivos: { name: 'Hypopressifs', blurb: 'Gymnastique abdominale hypopressive — une technique respiratoire et posturale qui renforce le core et le plancher pelvien' },
        'personal-trainer': { name: 'Coach sportif', blurb: 'Entraînement personnalisé et encadré — des plans sur mesure pour la force, la mobilité et la condition physique' },
      },
    },
  },
  ES: {
    fisioterapia: {
      label: 'Fisioterapia',
      intro: 'Evaluación y tratamiento individual del dolor, lesión y disfunción',
      items: {
        'fisioterapia-geral': { name: 'Fisioterapia Clínica', blurb: 'Cuando el dolor o la lesión le limitan el día a día, le ayudamos a recuperarse — con evaluación rigurosa y un plan pensado para usted' },
        'fisioterapia-pediatrica': { name: 'Fisioterapia Pediátrica', blurb: 'Fisioterapia adaptada a cada etapa del crecimiento — para bebés, niños y adolescentes, en un entorno seguro y adecuado a cada edad' },
        'fisioterapia-atm': { name: 'Fisioterapia ATM', blurb: '¿Dolor, bloqueo o chasquidos en la mandíbula? Tratamos la articulación temporomandibular con técnica manual especializada' },
        'fisioterapia-vestibular': { name: 'Fisioterapia Vestibular', blurb: 'Mareos, vértigos y desequilibrios tienen tratamiento — con maniobras específicas y ejercicios que recuperan su estabilidad' },
        'fisioterapia-oncologica': { name: 'Fisioterapia Oncológica', blurb: 'Prevenir, minimizar y tratar las secuelas físicas del cáncer y de sus tratamientos — preservando la función, la autonomía y la calidad de vida en todas las fases' },
      },
    },
    saude: {
      label: 'Salud y Bienestar',
      intro: 'Cuidados clínicos con tiempo y atención a cada persona',
      items: {
        nutricao: { name: 'Nutrición', blurb: 'Un plan alimentario pensado para su vida real — sin dietas restrictivas, con objetivos claros y seguimiento cercano' },
        'terapia-bowen': { name: 'Terapia Bowen', blurb: 'Técnica neuromuscular suave con resultados a menudo profundos — segura para niños y adultos' },
        psicologia: { name: 'Psicología', blurb: 'Un espacio seguro y confidencial para hablar de lo que le preocupa — para niños, adolescentes y adultos' },
      },
    },
    massagens: {
      label: 'Masajes',
      intro: 'Terapias manuales para liberar tensiones y restaurar el equilibrio',
      items: {
        'massagem-relaxamento': { name: 'Masaje Relajante', blurb: 'Un espacio para parar — masaje de cuerpo entero que libera la tensión acumulada y devuelve el equilibrio' },
        'massagem-criancas': { name: 'Masaje Infantil', blurb: 'Masaje suave adaptado a los más pequeños — para promover sueño, calma y bienestar' },
        'massagem-assinatura-rg': { name: 'Masaje Firma RG', blurb: 'El masaje insignia de la clínica — 80 minutos para combinar relajación profunda y trabajo muscular' },
        'massagem-profunda': { name: 'Masaje Profundo / Deportivo', blurb: 'Deep tissue y sport massage — trabajo muscular profundo para quien exige más de su cuerpo, en el entrenamiento o el día a día' },
        'massagem-pre-pos-natal': { name: 'Masaje Pre/Postnatal', blurb: 'Adaptado a los cambios del cuerpo durante el embarazo y a la recuperación posparto — con confort y posicionamiento seguro' },
        'massagem-sacro-craniana': { name: 'Masaje Sacrocraneal', blurb: 'Técnica de toque suave sobre el sistema sacrocraneal — alivia tensiones, cefaleas y estrés sin esfuerzo' },
        'drenagem-linfatica': { name: 'Drenaje Postoperatorio', blurb: 'Drenaje linfático especializado para la recuperación tras la cirugía — reduce el edema, los hematomas y acelera la cicatrización' },
        'drenagem-linfatica-manual': { name: 'Drenaje Linfático Manual', blurb: 'Drenaje Linfático Manual (Método Vodder) — movimientos suaves y rítmicos que estimulan la circulación y reducen la retención de líquidos' },
        'massagem-terapeutica': { name: 'Masaje Terapéutico', blurb: 'Trabajo manual centrado en disfunciones musculares y articulares — alivia la tensión, mejora la movilidad y promueve la recuperación física' },
      },
    },
    holisticas: {
      label: 'Holísticas',
      intro: 'Técnicas con siglos de práctica para reequilibrar cuerpo y mente',
      items: {
        reflexologia: { name: 'Reflexología', blurb: 'Estimulación precisa de puntos reflejos en los pies para reequilibrar los sistemas del organismo' },
        shiatsu: { name: 'Shiatsu', blurb: 'Técnica japonesa de presión sobre los meridianos energéticos — para devolver equilibrio y vitalidad' },
        'massagem-indiana': { name: 'Masaje Indio', blurb: 'Indian Head Massage — relajación profunda de cabeza, cuello y hombros, con raíces ayurvédicas' },
        'head-spa': { name: 'Head Spa', blurb: 'Tratamiento profundo del cuero cabelludo — limpieza, nutrición y una relajación que se siente en todo el cuerpo' },
        acupuntura: { name: 'Acupuntura', blurb: 'Medicina Tradicional China para gestionar dolor, estrés, ansiedad, insomnio y bienestar general — con evidencia creciente' },
      },
    },
    estetica: {
      label: 'Estética & Tratamientos',
      intro: 'Tecnología avanzada, evaluación previa y protocolo personalizado',
      items: {
        facial: { name: 'Faciales', blurb: 'Limpieza de cutis, extracción y facial personalizado — para una piel sana y equilibrada' },
        mesoterapia: { name: 'Mesoterapia', blurb: 'Microinyecciones con sustancias activas para llegar a la zona exacta del dolor, contractura o preocupación estética — con rigor clínico' },
        'depilacao-laser': { name: 'Depilación Láser', blurb: 'Depilación definitiva con tecnología de última generación — para mujer y hombre, todas las zonas' },
      },
    },
    exercicio: {
      label: 'Ejercicios de Bienestar',
      intro: 'Movimiento supervisado y adaptado a usted — para prevenir, rehabilitar y ganar calidad de vida',
      items: {
        'pilates-clinico': { name: 'Pilates Clínico', blurb: 'Pilates supervisado por un fisioterapeuta — ejercicio adaptado a lesiones, dolor crónico o rehabilitación' },
        hipopressivos: { name: 'Hipopresivos', blurb: 'Gimnasia abdominal hipopresiva — técnica respiratoria y postural que fortalece el core y el suelo pélvico' },
        'personal-trainer': { name: 'Entrenador Personal', blurb: 'Entrenamiento personalizado y supervisado — planes a su medida para fuerza, movilidad y condición física' },
      },
    },
  },
};

const SERVICE_DETAIL_I18N = {
  EN: {
    'fisioterapia-geral': {
      tagline: 'Careful assessment, a plan tailored to you — to move with confidence again',
      description: 'Physiotherapy is a health science focused on the study, prevention, diagnosis and treatment of disorders related to movement, biomechanics and human functional capacity. The goal is to restore, develop and maintain patients’ maximum autonomy, mobility and quality of life.',
      prices: [
        { label: 'Session (50min)', value: '50€' },
      ],
      sub: [
        { t: 'Lower back and neck pain', d: 'Postural assessment, manual therapy and progressive exercise for chronic or acute spinal pain' },
        { t: 'Post-injury recovery', d: 'Support from the acute phase through to return to normal, sporting or work activity' },
        { t: 'Sports physiotherapy', d: 'Prevention and treatment of sport-related injuries, with a focus on safe return to practice' },
        { t: 'Post-operative', d: 'Reduction of swelling, mobility gains and strength recovery after orthopaedic or other surgery' },
        { t: 'Pregnancy and postpartum', d: 'Prevention and relief of discomfort during pregnancy and pelvic floor recovery after birth' },
        { t: 'Chronic pain', d: 'Integrated approach to persistent pain with manual therapy, exercise and pain education' },
        { t: 'Oncology physiotherapy', d: 'Preventing, minimising and treating the physical effects of cancer and its treatments — surgery, chemotherapy and radiotherapy — preserving function, autonomy and quality of life at every stage' },
      ],
    },
    'fisioterapia-pediatrica': {
      tagline: 'Physiotherapy adapted to each stage of growth — with care, safety and time for every child',
      description: 'Paediatric Physiotherapy supports babies, children and adolescents at different stages of development. We assess and treat delays in motor development, postural changes, musculoskeletal injuries and neurological conditions — always in a safe environment, adapted to the age of each child. Every session is designed around the pace of the child, with family involvement whenever it makes sense.',
      prices: [
        { label: 'Session (50min)', value: '50€' },
      ],
      sub: [
        { t: 'Motor development', d: 'Assessment and stimulation of motor development in babies and children with delay or alterations' },
        { t: 'Postural changes', d: 'Scoliosis, kyphosis, flat feet and other postural changes in childhood and adolescence' },
        { t: 'Musculoskeletal injuries', d: 'Recovery from sports, traumatic or overuse injuries in children and young people' },
        { t: 'Congenital torticollis', d: 'Manual treatment and specific exercises for muscular torticollis in babies' },
        { t: 'Plagiocephaly', d: 'Support in correcting skull asymmetries in babies through positioning and mobilisation' },
        { t: 'Neurological conditions', d: 'Follow-up of children with cerebral palsy, global delay or other neurological conditions' },
      ],
    },
    'fisioterapia-atm': {
      tagline: 'When your jaw hurts, locks or clicks — we treat the TMJ at its root',
      description: 'Physiotherapy for the temporomandibular joint (TMJ) treats the dysfunction (TMD) through manual therapies and exercises. The aim is to relieve headaches or facial pain, eliminate clicking, reduce tension and restore mobility, and it is often integrated into multidisciplinary medical care.',
      prices: [{ label: 'TMJ Physiotherapy (50min)', value: '55€' }],
      sub: [
        { t: 'Jaw pain', d: 'Relief of joint, muscular or chewing pain through specialised manual therapy' },
        { t: 'Clicks and grinding', d: 'Assessment and treatment of clicking or crackling in the joint when opening or closing the mouth' },
        { t: 'Joint locking', d: 'Recovery of jaw range of motion in cases of locking or limited opening' },
        { t: 'Headaches and neck tension', d: 'Integrated approach to TMJ, neck and headache — often interlinked' },
        { t: 'Bruxism', d: 'Management of muscle tension and joint protection in cases of daytime or nighttime bruxism' },
        { t: 'Post-orthodontics or post-surgery', d: 'Functional TMJ recovery after dental, orthodontic or surgical treatments' },
      ],
    },
    mesoterapia: {
      tagline: 'Targeted action where you need it most — for pain, inflammation or aesthetic care',
      description: 'Mesotherapy consists of applying micro-injections of active substances directly into the superficial layers of the skin or subcutaneous tissue. It allows highly localised action — reaching the exact area of pain, contracture or aesthetic concern, with little systemic diffusion. Administered by a physiotherapist with specific training, it is a versatile technique both in clinical contexts (joint pain, contractures) and aesthetic ones (cellulite, laxity, rejuvenation).',
      prices: [
        { label: 'Session (50min)', value: '55€' },
      ],
      sub: [
        { t: 'Joint pain and inflammation', d: 'Localised application of anti-inflammatories for quick relief in knees, shoulders or spine' },
        { t: 'Muscle contractures', d: 'Release of persistent tension points resistant to other techniques' },
        { t: 'Cellulite and localised fat', d: 'Improvement of local circulation and reduction of fat accumulation in specific areas' },
        { t: 'Skin laxity', d: 'Stimulation of collagen production for firmness and skin tone' },
        { t: 'Facial rejuvenation', d: 'Deep hydration and skin revitalisation with hyaluronic acid and vitamins' },
        { t: 'Hair loss', d: 'Scalp stimulation for hair strengthening and slowing hair loss' },
      ],
    },
    'fisioterapia-vestibular': {
      tagline: 'Regain stability — and trust your body’s balance again',
      description: 'Vestibular Physiotherapy is a specialised area of physiotherapy that treats dizziness, vertigo and imbalance. Through rigorous assessment, repositioning manoeuvres (effective in BPPV) and specific habituation and gaze stabilisation exercises, we help the vestibular system recover or compensate. Results are often quick — in many cases, with significant relief from the very first session.',
      prices: [
        { label: 'Session (50min)', value: '50€' },
        { label: '5-session pack', value: '225€' },
      ],
      sub: [
        { t: 'Positional vertigo (BPPV)', d: 'Otolith repositioning manoeuvres — frequent resolution in 1 to 3 sessions' },
        { t: 'Chronic dizziness', d: 'Habituation and gaze stabilisation exercises to reduce persistent dizziness' },
        { t: 'Vestibular neuritis', d: 'Rehabilitation after inflammation of the vestibular nerve to recover balance and stability' },
        { t: "Ménière's disease", d: 'Support in managing vertigo crises and improving balance between episodes' },
        { t: 'Imbalance in the elderly', d: 'Balance training and fall prevention in populations at increased risk' },
        { t: 'Post-traumatic dizziness', d: 'Recovery after head or neck trauma with vestibular symptoms' },
      ],
    },
    'fisioterapia-oncologica': {
      tagline: 'Restoring function, autonomy and quality of life — at every stage',
      description: 'Oncology physiotherapy is the speciality focused on preventing, minimising and treating the physical after-effects caused by cancer and its aggressive treatments, such as surgery, chemotherapy and radiotherapy. Its main goal is to preserve function, restore autonomy and ensure quality of life for the patient at every stage of the disease.',
      prices: [
        { label: 'Session (50min)', value: '50€' },
        { label: '5-session pack', value: '225€' },
      ],
      sub: [
        { t: 'Post-oncology lymphoedema', d: 'Manual lymphatic drainage and bandaging to control oedema after lymph node clearance or radiotherapy' },
        { t: 'Post-mastectomy recovery', d: 'Restoring shoulder and arm mobility and scar treatment after breast surgery' },
        { t: 'Radiotherapy after-effects', d: 'Treatment of fibrosis, adhesions and loss of mobility caused by radiotherapy' },
        { t: 'Fatigue and deconditioning', d: 'Adapted, progressive exercise to combat cancer-related fatigue and rebuild physical condition' },
        { t: 'Mobility and scars', d: 'Tissue mobilisation, relief of adhesions and recovery of range of motion' },
        { t: 'Rehabilitation during treatment', d: 'Active support throughout chemotherapy and radiotherapy to preserve function' },
      ],
    },
    'tecarterapia-winback': {
      tagline: 'State-of-the-art tecar therapy — the technology that speeds up every physiotherapy session',
      description: 'The Winback is a tecar therapy device (capacitive and resistive diathermy) combining high frequency (300 kHz to 1 MHz) with Hi-TENS and Hi-EMS neuromodulation. By heating tissue in depth, it boosts blood flow and cellular metabolism in the treated area, accelerating the body’s natural recovery processes. It is integrated by the physiotherapist into treatment sessions, adapted to each case — no needles, no pain, no downtime.',
      prices: [
        { label: 'Physiotherapy session with Winback (50min)', value: '50€' },
        { label: '5-session pack', value: '225€' },
      ],
      sub: [
        { t: 'Fast pain relief', d: 'Immediate analgesic effect through Hi-TENS neuromodulation, felt during the session itself' },
        { t: 'Reduced inflammation', d: 'Deep heat (diathermy) stimulates local microcirculation and helps drain oedema' },
        { t: 'Post-exercise muscle recovery', d: 'Speeds up lactic acid clearance and muscle tissue regeneration after intense effort' },
        { t: 'Tendinopathies and contractures', d: 'Deep work on tendons and contracted muscles, hard to reach with manual therapy alone' },
        { t: 'Post-surgical recovery', d: 'Speeds up tissue healing and restores mobility after orthopaedic surgery' },
        { t: 'Acute and chronic sports injuries', d: 'Reduces recovery time in sprains, muscle tears and training overload' },
      ],
      equipment: {
        eyebrow: 'THE EQUIPMENT',
        heading: 'Official, certified Winback technology',
        text: 'The Winback is operated directly by the physiotherapist through a touchscreen, adjusting mode, intensity and current combination in real time to each case. The electrode glides over the skin with a specific conductive cream — no needles, no special preparation and no downtime between the session and everyday life.',
        badge: 'Winback Expert Center certified',
        bullets: [
          { t: '300 kHz – 1 MHz', d: 'Adjustable high frequency depending on the depth of tissue being treated.' },
          { t: 'Capacitive and resistive', d: 'Two diathermy modes, for surface or deeper tissue.' },
          { t: 'Hi-TENS + Hi-EMS', d: 'Neuromodulation combined with heat, for pain relief and muscle activation.' },
          { t: 'Monopolar electrode', d: 'Applied directly by the physiotherapist, with full control over the treated area.' },
        ],
      },
      process: {
        eyebrow: 'DURING THE SESSION',
        heading: 'How the treatment is applied',
        steps: [
          { t: 'Assessment and setup', d: 'The physiotherapist chooses the mode, intensity and electrode according to the area and the goal of the treatment.' },
          { t: 'Direct application', d: 'The electrode glides over the skin with conductive cream, with no needles and no discomfort.' },
          { t: 'Heat and neuromodulation', d: 'You feel deep heat and gentle electrical stimulation from the first few minutes.' },
          { t: 'Integrated into the session', d: 'Winback is combined with manual therapy, boosting the result of every physiotherapy session.' },
        ],
      },
    },
    acupuntura: {
      tagline: 'A medicine refined over centuries — and growing evidence for your wellbeing',
      description: 'Acupuncture is an age-old therapeutic technique, originating in Traditional Chinese Medicine, that consists of inserting fine needles at specific points of the body. Its aim is to stimulate the body’s natural responses, promoting physical and emotional balance and the relief of symptoms.',
      prices: [{ label: 'Per session (50min)', value: '45€' }],
      sub: [
        { t: 'Chronic pain', d: 'Lower back pain, neck pain, headaches and joint pain with proven response to acupuncture' },
        { t: 'Stress and anxiety', d: 'Regulation of the autonomic nervous system to reduce tension, irritability and mental fatigue' },
        { t: 'Insomnia', d: 'Treatment of the underlying causes of disturbed sleep through energy balance' },
        { t: 'Digestive health', d: 'Irritable bowel, reflux and other imbalances of the digestive system' },
        { t: 'Fertility and menstrual cycle', d: 'Hormonal regulation and support in fertility processes or menstrual discomfort' },
        { t: 'General wellbeing', d: 'Energy balance and overall wellbeing as a preventive and health practice' },
      ],
    },
    nutricao: {
      tagline: 'Real nutrition for real life — no restrictive diets, no generic solutions',
      description: 'Nutrition is the science that studies the relationship between the food we eat, its composition and the direct impact on how the body works, on health and on disease prevention. The biological process involves the intake, absorption and use of nutrients for growth, energy and the maintenance of life.',
      prices: [
        { label: '1st consultation (up to 50min)', value: '45€' },
        { label: 'Follow-up (30min)', value: '40€' },
      ],
      sub: [
        { t: 'Sustainable weight loss', d: 'A real meal plan adapted to your lifestyle — to lose weight and keep it off' },
        { t: 'Sports nutrition', d: 'Optimising nutrition for performance, recovery and body composition' },
        { t: 'Digestive health', d: 'Nutritional support for irritable bowel, intolerances, reflux and other imbalances' },
        { t: 'Diabetes and cholesterol', d: 'Nutritional management of metabolic conditions with regular follow-up' },
        { t: 'Pregnancy and breastfeeding', d: 'Nutrition adapted to each phase, for the health of mother and baby' },
        { t: 'Vegetarian and vegan eating', d: 'Ensuring nutritional balance in plant-based diets without deficiencies' },
      ],
    },
    'terapia-bowen': {
      tagline: 'Gentle in touch, effective in result — for all ages',
      description: 'Bowen Therapy is a holistic, non-invasive manual technique that uses gentle, precise moves over muscles, tendons and ligaments. Its main goal is to stimulate the body’s natural self-healing mechanisms and restore the balance of the nervous system, promoting pain relief and relaxation.',
      prices: [
        { label: 'Children up to 5 (60min)', value: '20€' },
        { label: 'Children 5-12 (60min)', value: '30€' },
        { label: 'Adults 12+ (60min)', value: '60€' },
      ],
      sub: [
        { t: 'Lower back and neck pain', d: 'Release of deep tension in the spine with a completely gentle technique' },
        { t: 'Fibromyalgia', d: 'Effective approach to managing the diffuse pain and chronic fatigue of fibromyalgia' },
        { t: 'Chronic tension and stress', d: 'Activation of the parasympathetic nervous system for a state of calm and regeneration' },
        { t: 'Sports injuries', d: 'Recovery from muscle and tendon injuries with reduced downtime' },
        { t: 'Migraine and tension headache', d: 'Reduction in frequency and intensity of episodes through muscle and fascial balance' },
        { t: 'Children', d: 'Completely safe and gentle technique, suitable from age 5' },
      ],
    },
    psicologia: {
      tagline: 'A safe space to talk about what concerns you — for children, adolescents and adults',
      description: 'Psychology is the science that studies human behaviour, mental processes and the way emotions, thoughts and the environment interact. Its main aim is to understand, explain and promote mental health and wellbeing, helping people cope with challenges and improve their quality of life.',
      prices: [{ label: 'Consultation (60min)', value: '45€' }],
      sub: [
        { t: 'Anxiety and stress', d: 'Practical tools for managing excessive worry, tension and associated physical symptoms' },
        { t: 'Depression and mood', d: 'Support with depressive states, persistent sadness and loss of motivation' },
        { t: 'Child psychology', d: 'Support for children with behaviour, attention, learning or adjustment difficulties' },
        { t: 'Adolescence', d: 'Support with identity, social pressure, self-esteem and emotional regulation' },
        { t: 'Grief and loss', d: 'Support through processes of loss — of people, relationships, health or life projects' },
        { t: 'Relationships and communication', d: 'Work on relational patterns, assertiveness and interpersonal dynamics' },
      ],
    },
    'massagem-relaxamento': {
      tagline: 'Time to slow down. Your moment of absolute wellbeing;',
      description: 'Relaxation massage is a manual therapy that uses gentle, rhythmic and continuous movements over the whole body, with the help of oils or creams. Its main goal is to relieve muscle tension, reduce stress and promote a state of deep physical and mental wellbeing.',
      prices: [
        { label: '50 minutes', value: '40€' },
        { label: '80 minutes', value: '65€' },
      ],
      sub: [
        { t: 'General muscle tension', d: 'Release of contractures and tension points accumulated in daily life' },
        { t: 'Stress and mental overload', d: 'Activation of the parasympathetic nervous system for a deep calm response' },
        { t: 'Sleep disorders', d: 'Regular massage improves sleep quality and makes it easier to fall asleep' },
        { t: 'Tension headaches', d: 'Work on neck, shoulders and scalp to relieve tension headaches' },
        { t: 'Circulation and drainage', d: 'Improvement of blood and lymphatic flow for a lighter, more vital body' },
        { t: 'Preventive wellbeing', d: 'A regular session is an investment in health — not a luxury' },
      ],
    },
    'massagem-criancas': {
      tagline: 'A gentle, safe touch — for the wellbeing of the youngest',
      description: 'Relaxation massage for children is a gentle practice that combines therapeutic techniques adapted to childhood. It helps reduce stress and anxiety, improves sleep quality, eases growing pains and promotes strong emotional development and a sense of security.',
      prices: [{ label: 'Per session (40min)', value: '30€' }],
      sub: [
        { t: 'Relaxation and sleep', d: 'Gentle technique to promote more peaceful and deeper sleep in children' },
        { t: 'Childhood anxiety', d: 'Reduction of stress and anxiety with therapeutic touch and a safe environment' },
        { t: 'Colic and digestion', d: 'Gentle abdominal massage to relieve colic and digestive discomfort' },
        { t: 'Motor development', d: 'Sensory and motor stimulation for healthy child development' },
        { t: 'Muscle tension', d: 'Release of tension in active children or those with poor posture' },
        { t: 'General wellbeing', d: 'A wellbeing session for children who simply need a moment of care' },
      ],
    },
    'massagem-assinatura-rg': {
      tagline: 'Deep relaxation from head to toe. Our exclusive massage.',
      description: 'The RG Signature Massage is an exclusive wellbeing journey created by us. It combines personalised techniques with the comfort of the hot towel ritual and the therapeutic benefits of aromatherapy for a deep, multisensory relaxation.',
      prices: [{ label: 'Full session (80min)', value: '75€' }],
      sub: [
        { t: 'Total relaxation', d: 'A combination of gentle techniques to induce a state of deep calm' },
        { t: 'Muscle work', d: 'Release of accumulated tension with techniques adapted to each area of the body' },
        { t: 'Overall wellbeing', d: 'A holistic approach that takes care of body and mind together' },
        { t: 'Personalised experience', d: "Each session is adapted to the client's preferences and needs" },
        { t: 'A unique moment', d: '80 minutes of dedicated focus on your wellbeing' },
        { t: 'Ideal as a gift', d: 'The perfect choice for a special gift or a moment of self-care' },
      ],
    },
    'massagem-profunda': {
      tagline: 'Deep muscular work — for those who demand more from their body, in training or everyday life',
      description: 'Deep tissue massage is a therapeutic technique focused on the deepest layers of the muscles and connective tissue. It uses slow movements and firm pressure to relieve chronic pain, muscle knots (adhesions) and recover mobility.',
      prices: [
        { label: '50 minutes', value: '45€' },
        { label: '80 minutes', value: '75€' },
      ],
      sub: [
        { t: 'Contractures and muscle spasms', d: 'Release of muscle knots and deep tension zones resistant to spontaneous relaxation' },
        { t: 'Post-training recovery', d: 'Accelerated muscle regeneration, reduction of DOMS and elimination of metabolic waste after intense effort' },
        { t: 'Pre-competition preparation', d: 'Muscle activation and tissue mobilisation to optimise sports performance before a race or training session' },
        { t: 'Piriformis syndrome and sciatica', d: 'Specific work on deep gluteal musculature to relieve sciatic pain and release the nerve' },
        { t: 'Neck and shoulder tension', d: 'Deep approach to the area most affected by stress, sedentary work and forward posture' },
        { t: 'Tendinitis and overuse injuries', d: 'Treatment of chronic tendinitis and repetitive strain injuries in athletes and non-athletes alike' },
      ],
    },
    'massagem-pre-pos-natal': {
      tagline: 'Support and comfort during pregnancy and postpartum — adapted to each phase',
      description: 'Pre- and post-natal massage is a therapeutic treatment focused on relieving muscle pain, swelling and stress, adapted to the changes in a woman’s body. During pregnancy (pre-natal) it improves circulation and reduces discomfort; post-natal, it helps recover muscle tone and emotional balance.',
      prices: [{ label: 'Per session (50min)', value: '45€' }],
      sub: [
        { t: 'Lower back pain in pregnancy', d: 'Relief of lower back and pelvic pain typical of pregnancy, with safe positioning' },
        { t: 'Swelling and water retention', d: 'Improved circulation and reduced swelling in legs and ankles during pregnancy' },
        { t: 'Muscle tension', d: 'Release of tension in neck, shoulders and back built up under the weight of the bump' },
        { t: 'Post-partum recovery', d: 'Support with physical recovery after birth — muscle soreness, tension and general wellbeing' },
        { t: 'Emotional balance', d: 'A moment of care and relaxation during a period of major emotional change' },
        { t: 'Sleep and rest', d: 'Techniques to improve sleep quality — so difficult during pregnancy and postpartum' },
      ],
    },
    'massagem-sacro-craniana': {
      tagline: 'An almost imperceptible touch with deep effects on the nervous system',
      description: 'Cranial therapy (or craniosacral therapy) is a gentle, non-invasive manual technique that works on the craniosacral system, which includes the bones of the skull, the spine, the sacrum and the cerebrospinal fluid. Through very light touches (around 5 grams), the therapist releases blockages and tension, promoting the body’s self-balance and deep relaxation of the central nervous system.',
      prices: [{ label: 'Per session (50min)', value: '40€' }],
      sub: [
        { t: 'Headaches and migraines', d: 'Release of craniosacral tension that contributes to recurring headaches' },
        { t: 'Stress and anxiety', d: 'Deep activation of the parasympathetic nervous system for emotional balance' },
        { t: 'TMJ dysfunction', d: 'Relief of pain and tension in the temporomandibular joint and face' },
        { t: 'Neck pain', d: 'Release of tension in the neck and base of the skull' },
        { t: 'Insomnia', d: 'Promotes a deep state of rest that improves sleep quality' },
        { t: 'Babies and children', d: 'A completely safe technique for the youngest, suitable for colic and birth-related tension' },
      ],
    },
    'drenagem-linfatica': {
      tagline: 'To recover after surgery — a gentle drainage that speeds up healing',
      description: 'Post-operative lymphatic drainage is a gentle, therapeutic massage essential for recovery from plastic or clinical surgery. It reduces swelling (oedema), lessens bruising, relieves pain and prevents complications such as fibrosis and seromas, speeding up healing and improving the quality of the final results.',
      prices: [
        { label: 'Post-Op 50min', value: '60€' },
        { label: 'Post-Op 90min', value: '80€' },
      ],
      sub: [
        { t: 'Post-surgery recovery', d: 'Reduction of oedema and improvement of scar quality after surgical intervention' },
        { t: 'Plastic and cosmetic surgery', d: 'Essential drainage after liposuction, abdominoplasty and other plastic surgeries' },
        { t: 'Complication prevention', d: 'Prevention of fibrosis, seromas and adhesions that compromise the final result' },
        { t: 'Bruise reduction', d: 'Faster reabsorption of haematomas and bruising in the operated area' },
        { t: 'Accelerated healing', d: 'Stimulation of local circulation for faster, healthier healing' },
        { t: 'Post-operative comfort', d: 'Relief from discomfort and the feeling of heaviness in the first weeks of recovery' },
      ],
    },
    'drenagem-linfatica-manual': {
      tagline: 'Manual Lymphatic Drainage (Vodder Method) — lightness, circulation and wellbeing',
      description: 'Manual lymphatic drainage (MLD) is a specialised therapeutic massage technique that uses rhythmic, gentle and slow movements. Its main goal is to stimulate the lymphatic system, speeding up the elimination of fluids, toxins and metabolic waste through urine.',
      prices: [
        { label: 'Session 50min', value: '50€' },
        { label: 'Session 80min', value: '80€' },
      ],
      sub: [
        { t: 'Fluid retention', d: 'Reduction of swelling in legs, ankles and belly caused by water retention' },
        { t: 'Lymphoedema', d: 'Management of primary or secondary lymphoedema with specialised Vodder Method technique' },
        { t: 'Cellulite and lightness', d: 'Improved skin appearance, local microcirculation and a feeling of a lighter body' },
        { t: 'Heavy, tired legs', d: 'Relief from the feeling of heaviness and fatigue in the legs, common at the end of the day or after long trips' },
      ],
    },
    'massagem-terapeutica': {
      tagline: 'Therapeutic massage — deep muscular work to relieve tension that won’t go away',
      description: 'Therapeutic massage is a manual technique focused on treating muscular and joint dysfunction and localised pain. It uses specific movements with greater pressure to relieve tension, improve mobility and promote physical recovery. It differs from relaxation massage in having a clinical, curative goal rather than just general wellbeing.',
      prices: [
        { label: 'Session 50min', value: '45€' },
      ],
      sub: [
        { t: 'Contractures and spasms', d: 'Release of muscle knots and zones of deep tension resistant to relaxation' },
        { t: 'Neck and shoulder tension', d: 'Deep approach to the area most affected by sedentary work and stress' },
        { t: 'Sports recovery', d: 'Specific protocol for athletes — before or after competition or training' },
      ],
    },
    reflexologia: {
      tagline: 'The whole body in your feet — a non-invasive therapy with deep effects',
      description: 'Reflexology is a non-invasive therapeutic technique that consists of applying pressure to specific areas of the feet, hands or ears. It is based on the principle that these zones correspond to direct reflexes of different organs, glands and parts of the body.',
      prices: [{ label: 'Per session (50min)', value: '45€' }],
      sub: [
        { t: 'Stress and anxiety', d: 'Stimulation of the parasympathetic nervous system to reduce tension and anxiety' },
        { t: 'Insomnia', d: "Sleep regulation through the balance of the body's systems" },
        { t: 'Headaches', d: 'Work on reflex points corresponding to the head and nervous system' },
        { t: 'Digestive health', d: 'Stimulation of digestive system reflexes to improve intestinal function' },
        { t: 'Circulation', d: 'Improvement of blood and lymphatic circulation through reflex stimulation' },
        { t: 'General wellbeing', d: 'A session of deep balance and relaxation for body and mind' },
      ],
    },
    shiatsu: {
      tagline: 'Precise pressure on the meridians — to restore balance and vitality',
      description: 'Shiatsu is a Japanese body therapy and therapeutic massage whose name literally means “finger pressure” (shi = fingers + atsu = pressure). The technique focuses on physical and energetic rebalancing.',
      prices: [{ label: 'Per session (50min)', value: '45€' }],
      sub: [
        { t: 'Muscle and joint pain', d: 'Relief of muscular pain and tension through pressure on energy meridians' },
        { t: 'Fatigue and low energy', d: 'Stimulation of vital energy flow for restored vitality' },
        { t: 'Stress and anxiety', d: 'Balancing the nervous system to reduce stress and promote wellbeing' },
        { t: 'Headaches', d: 'Release of tension in the neck, shoulders and head that triggers headaches' },
        { t: 'Digestive problems', d: 'Stimulation of meridians related to the digestive system' },
        { t: 'Emotional balance', d: 'Harmony between the physical and the emotional through energy regulation' },
      ],
    },
    'massagem-indiana': {
      tagline: '"A journey into deep relaxation." Relieve the burden on your shoulders, head and neck, and feel the lightness of a perfectly calm and revitalized mind.',
      description: 'Indian massage involves rhythmic, slow and deep movements applied to specific points of the body to release tension, improve blood circulation and eliminate toxins.',
      prices: [{ label: 'Per session (40min)', value: '35€' }],
      sub: [
        { t: 'Headaches and cranial tension', d: 'Release of tension built up in the scalp, neck and shoulders' },
        { t: 'Stress and mental overload', d: 'Induction of deep relaxation with techniques rooted in Ayurveda' },
        { t: 'Scalp circulation', d: 'Improvement of local circulation, beneficial for hair health and growth' },
        { t: 'Neck tension', d: 'Specific work on the cervical region, neck and shoulders' },
        { t: 'Eye fatigue', d: 'Gentle techniques on the face and orbital area to relieve eye strain' },
        { t: 'Energy balance', d: 'Work on the upper chakras for physical and emotional harmony' },
      ],
    },
    'head-spa': {
      tagline: 'Caring for the scalp is caring for the hair — and relaxing like you haven’t in a long time',
      description: 'The Japanese head spa is a holistic hair and deep-relaxation therapy. Originating in Japan, it focuses on scalp health through cleansing, exfoliation and stimulating massages of the head, neck and shoulders. The treatment relieves stress, improves blood circulation and promotes overall wellbeing.',
      prices: [{ label: 'Full session (90min)', value: '75€' }],
      sub: [
        { t: 'Deep cleansing', d: 'Removal of excess sebum, dead cells and impurities from the scalp' },
        { t: 'Nutrition and hydration', d: 'Application of nourishing actives to strengthen follicles and revitalise the hair' },
        { t: 'Hair loss', d: 'Stimulation of scalp circulation to strengthen hair follicles' },
        { t: 'Sensitive scalp', d: 'Gentle, balancing treatment for irritated scalp or dandruff' },
        { t: 'Relaxing massage', d: 'Deep scalp massage to release tension and promote wellbeing' },
        { t: 'Shine and vitality', d: 'Visible results in the look of the hair — shinier, lighter and healthier' },
      ],
    },
    facial: {
      tagline: 'Professional care for every skin type — for visible, lasting results',
      description: 'Skin cleansing is a fundamental aesthetic procedure to remove impurities, dead cells and excess oil. The process unclogs the pores, improves oxygenation and enhances the absorption of daily care products. Skin cleansing with extraction is an essential professional aesthetic procedure to unclog the pores and remove blackheads (comedones), whiteheads (milia) and dead cells. The process restores radiance and health to the skin, carried out through rigorous steps of hygiene, emollience and hydration.',
      prices: [
        { label: 'Skin cleansing', value: '50€' },
        { label: 'Extraction', value: '10€' },
        { label: 'Personalised facial', value: '55€' },
      ],
      sub: [
        { t: 'Skin cleansing', d: 'A complete cleansing treatment to remove impurities, sebum and dead cells' },
        { t: 'Extraction', d: 'Professional removal of comedones and impurities in a safe and effective way' },
        { t: 'Personalised facial', d: 'Treatment adapted to skin type — hydration, anti-ageing, luminosity or oil control' },
        { t: 'Acne-prone skin', d: 'Specific protocol for skin with a tendency to acne and excess oil' },
        { t: 'Anti-ageing', d: 'Treatments with actives that stimulate collagen and reduce signs of ageing' },
        { t: 'Deep hydration', d: 'Intensive moisture replenishment for dry, dehydrated or sensitive skin' },
      ],
    },
    'depilacao-laser': {
      tagline: 'No more weekly shaving — definitive laser, for women and men',
      description: 'Laser hair removal is an aesthetic procedure that uses concentrated beams of light to destroy the hair root (the follicle), slowing and reducing its growth over the long term.',
      prices: [
        { label: 'Women — 1 area', value: '20€' },
        { label: 'Women — Combi 3 areas', value: '50€' },
        { label: 'Women — Extra area', value: '10€' },
        { label: 'Men — 1 area', value: '20€' },
        { label: 'Men — Combi 3 areas', value: '60€' },
        { label: 'Men — Extra area', value: '10€' },
      ],
      sub: [
        { t: 'Bikini line and groin', d: 'Full or partial treatment, with options adapted to your preferences' },
        { t: 'Legs and thighs', d: 'Hair removal for extensive areas with maximum efficiency and comfort' },
        { t: 'Underarms', d: 'One of the areas with the fastest result — often effective in just a few sessions' },
        { t: 'Face and neck', d: 'Upper lip, chin, cheeks and neck area, with extreme precision' },
        { t: 'Back and chest', d: 'Treatment of extensive areas on the male body, with suitable equipment' },
        { t: 'Arms and forearms', d: 'Gradual and permanent results in this area of high hair density' },
      ],
    },
    'pilates-clinico': {
      tagline: 'Pilates with physiotherapist supervision — exercise that is adapted, always safe',
      description: 'Clinical Pilates is a form of therapeutic exercise focused on the prevention and rehabilitation of musculoskeletal injuries. It differs from traditional Pilates in being delivered exclusively by physiotherapists, who adapt the exercises to the clinical condition and specific needs of each person.',
      prices: [
        { label: 'Monthly fee (1x/week)', value: '35€' },
        { label: 'Monthly fee (2x/week)', value: '60€' },
        { label: 'Personalised (50min)', value: '45€' },
      ],
      sub: [
        { t: 'Lower back pain and hernias', d: 'Strengthening the deep core to stabilise the spine and reduce chronic pain' },
        { t: 'Post-operative', d: 'Progressive reintegration of movement after orthopaedic, abdominal or other surgery' },
        { t: 'Pregnancy and postpartum', d: 'Exercises adapted to each phase — preparation for birth and recovery after' },
        { t: 'Osteoporosis', d: 'Strength and balance training with low joint impact, to prevent falls and fractures' },
        { t: 'Scoliosis and postural deviations', d: 'Progressive correction of altered postural patterns with supervised exercise' },
        { t: 'Performance and prevention', d: 'For those who want to improve body awareness and prevent injuries in sport' },
      ],
    },
    'hipopressivos': {
      tagline: 'Hypopressive abdominal exercise — strengthening the core and pelvic floor from the inside out',
      description: 'Hypopressives are a set of postural and breathing techniques that reduce the pressure inside the abdominal cavity. Unlike traditional crunches, they reflexively activate the deep core and pelvic floor muscles, making them especially suitable postpartum, for preventing hernias and for improving posture.',
      prices: [
        { label: 'Monthly fee (1x/week)', value: '35€' },
        { label: 'Monthly fee (2x/week)', value: '60€' },
      ],
      sub: [
        { t: 'Postpartum', d: 'Recovery of the abdominal wall and pelvic floor after pregnancy, with safe progression' },
        { t: 'Pelvic floor', d: 'Reflexive strengthening that helps prevent and control urinary incontinence' },
        { t: 'Abdominal diastasis', d: 'Re-education of the abdominal wall to bring the rectus muscles closer and reduce diastasis' },
        { t: 'Posture and core', d: 'Improved posture, body awareness and central trunk stability' },
        { t: 'Hernia prevention', d: 'Reduced intra-abdominal pressure to prevent hernias and prolapse' },
        { t: 'Training complement', d: 'A deep stability base that boosts performance in other physical activities' },
      ],
    },
    'personal-trainer': {
      tagline: 'Personalised, supervised training — your goals, a plan built for you',
      description: 'Working with a personal trainer ensures an individualised training plan, tailored to your fitness level, goals and availability. With close supervision in every session, exercise is performed with correct technique and appropriate progression — safely, motivating and effectively.',
      prices: [
        { label: 'Session', value: '45€' },
        { label: 'Pack (per session)', value: '40€' },
      ],
      sub: [
        { t: 'Weight loss', d: 'Plans that combine training and energy expenditure for healthy, sustainable weight loss' },
        { t: 'Strength and toning', d: 'Muscle-building programmes adapted to your level, from beginner to advanced' },
        { t: 'General fitness', d: 'Improved endurance, mobility and energy for everyday life' },
        { t: 'Return to activity', d: 'Gradual reintroduction of exercise for those who have been inactive or are recovering from injury' },
        { t: 'Sports preparation', d: 'Specific training to improve performance in a sport or goal' },
        { t: 'Motivation and support', d: 'Close supervision and accountability to keep consistency and results' },
      ],
    },
  },
  FR: {
    'fisioterapia-geral': {
      tagline: 'Évaluation soignée, plan adapté à vous — pour bouger à nouveau en confiance',
      description: "La physiothérapie est une science de la santé centrée sur l'étude, la prévention, le diagnostic et le traitement des troubles liés au mouvement, à la biomécanique et à la capacité fonctionnelle humaine. L'objectif est de restaurer, développer et maintenir le maximum d'autonomie, de mobilité et de qualité de vie des patients.",
      prices: [
        { label: 'Séance (50min)', value: '50€' },
      ],
      sub: [
        { t: 'Douleur lombaire et cervicale', d: 'Évaluation posturale, thérapie manuelle et exercice progressif pour la douleur chronique ou aiguë du dos' },
        { t: 'Récupération post-blessure', d: "Accompagnement de la phase aiguë jusqu'au retour à l'activité normale, sportive ou professionnelle" },
        { t: 'Physiothérapie sportive', d: 'Prévention et traitement des blessures liées au sport, avec un accent sur le retour sûr à la pratique' },
        { t: 'Post-opératoire', d: "Réduction de l'œdème, gain de mobilité et récupération de la force après chirurgie orthopédique ou autre" },
        { t: 'Grossesse et post-partum', d: "Prévention et soulagement des inconforts pendant la grossesse et récupération du plancher pelvien après l'accouchement" },
        { t: 'Douleur chronique', d: 'Approche intégrée de la douleur persistante avec thérapie manuelle, exercice et éducation à la douleur' },
        { t: 'Physiothérapie oncologique', d: "Prévenir, minimiser et traiter les séquelles physiques du cancer et de ses traitements — chirurgie, chimiothérapie et radiothérapie — en préservant la fonctionnalité, l'autonomie et la qualité de vie à toutes les étapes" },
      ],
    },
    'fisioterapia-pediatrica': {
      tagline: 'Physiothérapie adaptée à chaque étape de la croissance — avec soin, sécurité et du temps pour chaque enfant',
      description: "La Physiothérapie Pédiatrique accompagne bébés, enfants et adolescents à différentes étapes du développement. Nous évaluons et traitons les retards de développement moteur, les altérations posturales, les blessures musculo-squelettiques et les conditions neurologiques — toujours dans un environnement sûr, adapté à l'âge de chaque enfant. Chaque séance est conçue pour le rythme de l'enfant, avec l'implication de la famille lorsque cela a du sens.",
      prices: [
        { label: 'Séance (50min)', value: '50€' },
      ],
      sub: [
        { t: 'Développement moteur', d: 'Évaluation et stimulation du développement moteur chez les bébés et enfants avec retard ou altérations' },
        { t: 'Altérations posturales', d: "Scoliose, cyphose, pieds plats et autres altérations posturales de l'enfance et de l'adolescence" },
        { t: 'Blessures musculo-squelettiques', d: 'Récupération des blessures sportives, traumatiques ou de surutilisation chez les enfants et les jeunes' },
        { t: 'Torticolis congénital', d: 'Traitement manuel et exercices spécifiques pour le torticolis musculaire du bébé' },
        { t: 'Plagiocéphalie', d: 'Aide à la correction des asymétries du crâne chez les bébés par le positionnement et la mobilisation' },
        { t: 'Conditions neurologiques', d: 'Suivi des enfants avec paralysie cérébrale, retard global ou autres conditions neurologiques' },
      ],
    },
    'fisioterapia-atm': {
      tagline: 'Quand la mâchoire fait mal, se bloque ou craque — nous traitons l’ATM à sa racine',
      description: "La physiothérapie de l'articulation temporo-mandibulaire (ATM) traite le dysfonctionnement (DTM) au moyen de thérapies manuelles et d'exercices. L'objectif est de soulager les maux de tête ou les douleurs du visage, d'éliminer les claquements, de réduire la tension et de restaurer la mobilité, et elle s'intègre souvent dans une prise en charge médicale pluridisciplinaire.",
      prices: [{ label: 'Physiothérapie ATM (50min)', value: '55€' }],
      sub: [
        { t: 'Douleur à la mâchoire', d: 'Soulagement de la douleur articulaire, musculaire ou à la mastication grâce à une thérapie manuelle spécialisée' },
        { t: 'Claquements et grincements', d: "Évaluation et traitement des claquements ou crépitations dans l'articulation lors de l'ouverture ou fermeture de la bouche" },
        { t: 'Blocage articulaire', d: "Récupération de l'amplitude de mouvement de la mâchoire en cas de blocage ou limitation d'ouverture" },
        { t: 'Céphalées et tension cervicale', d: "Approche intégrée de l'ATM, du cou et des céphalées — souvent liés" },
        { t: 'Bruxisme', d: 'Gestion de la tension musculaire et protection articulaire en cas de bruxisme diurne ou nocturne' },
        { t: 'Post-orthodontie ou post-chirurgie', d: "Récupération fonctionnelle de l'ATM après traitements dentaires, orthodontiques ou chirurgicaux" },
      ],
    },
    mesoterapia: {
      tagline: 'Action ciblée là où vous en avez le plus besoin — douleur, inflammation ou soin esthétique',
      description: "La Mésothérapie consiste en l'application de micro-injections de substances actives directement dans les couches superficielles de la peau ou du tissu sous-cutané. Elle permet une action très localisée — atteignant la zone exacte de douleur, contracture ou préoccupation esthétique, avec peu de diffusion systémique. Appliquée par un physiothérapeute avec formation spécifique, c'est une technique polyvalente tant en contexte clinique (douleur articulaire, contractures) qu'esthétique (cellulite, relâchement, rajeunissement).",
      prices: [
        { label: 'Séance (50min)', value: '55€' },
      ],
      sub: [
        { t: 'Douleur et inflammation articulaire', d: "Application localisée d'anti-inflammatoires pour un soulagement rapide des genoux, épaules ou colonne" },
        { t: 'Contractures musculaires', d: 'Libération de points de tension persistants résistants aux autres techniques' },
        { t: 'Cellulite et graisse localisée', d: 'Amélioration de la circulation locale et réduction des accumulations de graisse dans des zones spécifiques' },
        { t: 'Relâchement cutané', d: 'Stimulation de la production de collagène pour la fermeté et la tonicité de la peau' },
        { t: 'Rajeunissement facial', d: 'Hydratation profonde et revitalisation de la peau du visage avec acide hyaluronique et vitamines' },
        { t: 'Chute de cheveux', d: 'Stimulation du cuir chevelu pour renforcer les cheveux et freiner la chute' },
      ],
    },
    'fisioterapia-vestibular': {
      tagline: 'Retrouver la stabilité — et faire à nouveau confiance à l’équilibre de votre corps',
      description: "La Physiothérapie Vestibulaire est un domaine spécialisé de la physiothérapie qui traite les vertiges, étourdissements et déséquilibres. Par une évaluation rigoureuse, des manœuvres de repositionnement (efficaces dans le VPPB) et des exercices spécifiques d'habituation et de stabilisation du regard, nous aidons le système vestibulaire à récupérer ou compenser. Les résultats sont souvent rapides — dans de nombreux cas, avec un soulagement significatif dès la première séance.",
      prices: [
        { label: 'Séance (50min)', value: '50€' },
        { label: 'Pack 5 séances', value: '225€' },
      ],
      sub: [
        { t: 'Vertige positionnel (VPPB)', d: 'Manœuvres de repositionnement des otolithes — résolution fréquente en 1 à 3 séances' },
        { t: 'Étourdissements chroniques', d: "Exercices d'habituation et de stabilisation du regard pour réduire les étourdissements persistants" },
        { t: 'Névrite vestibulaire', d: 'Réadaptation après inflammation du nerf vestibulaire pour retrouver équilibre et stabilité' },
        { t: 'Maladie de Ménière', d: "Soutien dans la gestion des crises vertigineuses et amélioration de l'équilibre entre les épisodes" },
        { t: 'Déséquilibre chez la personne âgée', d: "Entraînement de l'équilibre et prévention des chutes chez les populations à risque accru" },
        { t: 'Étourdissements post-traumatiques', d: 'Récupération après traumatisme crânien ou cervical avec symptômes vestibulaires' },
      ],
    },
    'fisioterapia-oncologica': {
      tagline: 'Retrouver fonction, autonomie et qualité de vie — à chaque étape',
      description: "La physiothérapie oncologique est la spécialité axée sur la prévention, la réduction et le traitement des séquelles physiques causées par le cancer et ses traitements agressifs, tels que la chirurgie, la chimiothérapie et la radiothérapie. Son objectif principal est de préserver la fonction, de redonner l'autonomie et de garantir la qualité de vie du patient à chaque étape de la maladie.",
      prices: [
        { label: 'Séance (50min)', value: '50€' },
        { label: 'Pack 5 séances', value: '225€' },
      ],
      sub: [
        { t: 'Lymphœdème post-oncologique', d: 'Drainage lymphatique manuel et bandages pour contrôler l’œdème après curage ganglionnaire ou radiothérapie' },
        { t: 'Récupération post-mastectomie', d: 'Récupération de la mobilité de l’épaule et du bras et traitement de la cicatrice après chirurgie du sein' },
        { t: 'Séquelles de radiothérapie', d: 'Traitement des fibroses, adhérences et pertes de mobilité provoquées par la radiothérapie' },
        { t: 'Fatigue et déconditionnement', d: 'Exercice adapté et progressif pour lutter contre la fatigue liée au cancer et retrouver la condition physique' },
        { t: 'Mobilité et cicatrices', d: 'Mobilisation des tissus, soulagement des adhérences et récupération de l’amplitude de mouvement' },
        { t: 'Réadaptation pendant le traitement', d: 'Accompagnement actif tout au long de la chimiothérapie et de la radiothérapie pour préserver la fonction' },
      ],
    },
    'tecarterapia-winback': {
      tagline: 'Tecarthérapie de dernière génération — la technologie qui accélère chaque séance de physiothérapie',
      description: 'La Winback est un équipement de tecarthérapie (diathermie capacitive et résistive) qui combine haute fréquence (300 kHz à 1 MHz) et neuromodulation Hi-TENS et Hi-EMS. En chauffant les tissus en profondeur, elle active la circulation sanguine et le métabolisme cellulaire dans la zone traitée, accélérant les processus naturels de récupération de l’organisme. Elle est intégrée par le physiothérapeute dans les séances de traitement, adaptée à chaque cas — sans aiguilles, sans douleur, sans temps d’arrêt.',
      prices: [
        { label: 'Séance de physiothérapie avec Winback (50min)', value: '50€' },
        { label: 'Pack 5 séances', value: '225€' },
      ],
      sub: [
        { t: 'Soulagement rapide de la douleur', d: 'Effet analgésique immédiat grâce à la neuromodulation Hi-TENS, ressenti dès la séance' },
        { t: 'Réduction de l’inflammation', d: 'La chaleur profonde (diathermie) stimule la microcirculation locale et aide à drainer l’œdème' },
        { t: 'Récupération musculaire post-effort', d: 'Accélère l’élimination de l’acide lactique et la régénération du tissu musculaire après un effort intense' },
        { t: 'Tendinopathies et contractures', d: 'Travail en profondeur sur les tendons et muscles contracturés, difficile à atteindre avec la seule thérapie manuelle' },
        { t: 'Récupération post-chirurgicale', d: 'Accélère la cicatrisation des tissus et la récupération de la mobilité après une chirurgie orthopédique' },
        { t: 'Blessures sportives aiguës et chroniques', d: 'Réduit le temps de récupération des entorses, déchirures musculaires et surcharges d’entraînement' },
      ],
      equipment: {
        eyebrow: 'L’ÉQUIPEMENT',
        heading: 'Une technologie Winback officielle et certifiée',
        text: 'Le Winback est piloté directement par votre physiothérapeute à l’aide d’un écran tactile, qui permet d’ajuster en temps réel le mode, l’intensité et la combinaison de courants à votre cas. L’électrode glisse sur la peau avec une crème conductrice spécifique — sans aiguilles, sans préparation particulière et sans temps d’arrêt entre la séance et votre quotidien.',
        badge: 'Certifié Winback Expert Center',
        bullets: [
          { t: '300 kHz – 1 MHz', d: 'Haute fréquence réglable selon la profondeur du tissu à traiter.' },
          { t: 'Capacitif et résistif', d: 'Deux modes de diathermie, pour un tissu superficiel ou plus profond.' },
          { t: 'Hi-TENS + Hi-EMS', d: 'Neuromodulation combinée à la chaleur, pour soulager la douleur et activer les muscles.' },
          { t: 'Électrode monopolaire', d: 'Appliquée directement par votre physiothérapeute, avec un contrôle total de la zone traitée.' },
        ],
      },
      process: {
        eyebrow: 'PENDANT LA SÉANCE',
        heading: 'Comment se déroule l’application',
        steps: [
          { t: 'Évaluation et réglage', d: 'Votre physiothérapeute choisit le mode, l’intensité et l’électrode selon la zone et l’objectif du traitement.' },
          { t: 'Application directe', d: 'L’électrode glisse sur la peau avec une crème conductrice, sans aiguilles ni inconfort.' },
          { t: 'Chaleur et neuromodulation', d: 'Vous ressentez une chaleur profonde et une stimulation électrique douce dès les premières minutes.' },
          { t: 'Intégré à la séance', d: 'Le Winback est combiné à la thérapie manuelle, pour renforcer le résultat de chaque séance de physiothérapie.' },
        ],
      },
    },
    acupuntura: {
      tagline: 'Une médecine affinée au fil des siècles — et des preuves croissantes pour votre bien-être',
      description: "L'acupuncture est une technique thérapeutique millénaire, originaire de la Médecine Traditionnelle Chinoise, qui consiste à insérer de fines aiguilles en des points spécifiques du corps. Son but est de stimuler les réponses naturelles de l'organisme, favorisant l'équilibre physique et émotionnel et le soulagement des symptômes.",
      prices: [{ label: 'Par séance (50min)', value: '45€' }],
      sub: [
        { t: 'Douleur chronique', d: "Lombalgies, cervicalgies, céphalées et douleurs articulaires avec réponse prouvée à l'acupuncture" },
        { t: 'Stress et anxiété', d: "Régulation du système nerveux autonome pour réduire la tension, l'irritabilité et la fatigue mentale" },
        { t: 'Insomnie', d: "Traitement des causes sous-jacentes du sommeil perturbé par l'équilibre énergétique" },
        { t: 'Santé digestive', d: 'Colon irritable, reflux et autres déséquilibres du système digestif' },
        { t: 'Fertilité et cycle menstruel', d: 'Régulation hormonale et soutien dans les processus de fertilité ou inconforts menstruels' },
        { t: 'Bien-être général', d: 'Équilibre énergétique et bien-être global comme pratique préventive et de santé' },
      ],
    },
    nutricao: {
      tagline: 'Une alimentation réelle pour la vie réelle — sans régimes restrictifs ni solutions génériques',
      description: "La nutrition est la science qui étudie la relation entre les aliments ingérés, leur composition et leur impact direct sur le fonctionnement du corps, sur la santé et sur la prévention des maladies. Le processus biologique implique l'ingestion, l'absorption et l'utilisation des nutriments pour la croissance, l'énergie et le maintien de la vie.",
      prices: [
        { label: "1ʳᵉ consultation (jusqu'à 50min)", value: '45€' },
        { label: 'Suivantes (30min)', value: '40€' },
      ],
      sub: [
        { t: 'Perte de poids durable', d: 'Un plan alimentaire réel adapté à votre style de vie — pour perdre et maintenir' },
        { t: 'Nutrition sportive', d: "Optimisation de l'alimentation pour la performance, la récupération et la composition corporelle" },
        { t: 'Santé digestive', d: 'Soutien nutritionnel pour le colon irritable, intolérances, reflux et autres déséquilibres' },
        { t: 'Diabète et cholestérol', d: 'Gestion nutritionnelle des pathologies métaboliques avec suivi régulier' },
        { t: 'Grossesse et allaitement', d: 'Alimentation adaptée à chaque phase, pour la santé de la mère et du bébé' },
        { t: 'Alimentation végétarienne et végane', d: "Garantie d'équilibre nutritionnel dans les régimes à base de plantes sans carences" },
      ],
    },
    'terapia-bowen': {
      tagline: 'Douce au toucher, efficace dans le résultat — pour tous les âges',
      description: "La thérapie Bowen est une technique manuelle holistique et non invasive qui utilise des touchers doux et précis sur les muscles, les tendons et les ligaments. Son principal objectif est de stimuler les mécanismes naturels d'auto-guérison du corps et de restaurer l'équilibre du système nerveux, favorisant le soulagement de la douleur et la relaxation.",
      prices: [
        { label: 'Enfants jusqu\'à 5 ans (60min)', value: '20€' },
        { label: 'Enfants 5-12 ans (60min)', value: '30€' },
        { label: 'Adultes +12 ans (60min)', value: '60€' },
      ],
      sub: [
        { t: 'Douleur lombaire et cervicale', d: 'Libération des tensions profondes de la colonne avec une technique entièrement douce' },
        { t: 'Fibromyalgie', d: 'Approche efficace pour la gestion de la douleur diffuse et de la fatigue chronique liées à la fibromyalgie' },
        { t: 'Tension et stress chronique', d: 'Activation du système nerveux parasympathique pour un état de calme et de régénération' },
        { t: 'Blessures sportives', d: "Récupération des lésions musculaires et tendineuses avec un temps d'arrêt réduit" },
        { t: 'Migraine et céphalée de tension', d: "Réduction de la fréquence et de l'intensité des crises par l'équilibre musculaire et fascial" },
        { t: 'Enfants', d: 'Technique parfaitement sûre et douce, indiquée à partir de 5 ans' },
      ],
    },
    psicologia: {
      tagline: 'Un espace sûr pour parler de ce qui vous préoccupe — pour enfants, adolescents et adultes',
      description: "La psychologie est la science qui étudie le comportement humain, les processus mentaux et la façon dont les émotions, les pensées et l'environnement interagissent. Son principal objectif est de comprendre, d'expliquer et de promouvoir la santé mentale et le bien-être, en aidant les personnes à faire face aux défis et à améliorer leur qualité de vie.",
      prices: [{ label: 'Consultation (60min)', value: '45€' }],
      sub: [
        { t: 'Anxiété et stress', d: "Outils pratiques pour gérer l'inquiétude excessive, la tension et les symptômes physiques associés" },
        { t: 'Dépression et humeur', d: 'Accompagnement des états dépressifs, tristesse persistante et perte de motivation' },
        { t: 'Psychologie infantile', d: "Soutien aux enfants ayant des difficultés de comportement, d'attention, d'apprentissage ou d'adaptation" },
        { t: 'Adolescence', d: "Soutien dans les processus d'identité, pression sociale, estime de soi et gestion émotionnelle" },
        { t: 'Deuil et perte', d: 'Accompagnement dans les processus de perte — de personnes, relations, santé ou projets de vie' },
        { t: 'Relations et communication', d: "Travail sur les schémas relationnels, l'assertivité et les dynamiques interpersonnelles" },
      ],
    },
    'massagem-relaxamento': {
      tagline: 'Le temps de ralentir. Votre moment de bien-être absolu;',
      description: "Le massage relaxant est une thérapie manuelle qui utilise des mouvements doux, rythmiques et continus sur tout le corps, à l'aide d'huiles ou de crèmes. Son objectif principal est de soulager les tensions musculaires, de réduire le stress et de favoriser un état de bien-être physique et mental profond.",
      prices: [
        { label: '50 minutes', value: '40€' },
        { label: '80 minutes', value: '65€' },
      ],
      sub: [
        { t: 'Tension musculaire généralisée', d: 'Libération des contractures et points de tension accumulés au quotidien' },
        { t: 'Stress et surcharge mentale', d: 'Activation du système nerveux parasympathique pour une réponse de calme profond' },
        { t: 'Troubles du sommeil', d: "Le massage régulier améliore la qualité du sommeil et facilite l'endormissement" },
        { t: 'Céphalées de tension', d: 'Travail sur le cou, les épaules et le cuir chevelu pour soulager les céphalées de tension' },
        { t: 'Circulation et drainage', d: 'Amélioration du flux sanguin et lymphatique pour un corps plus léger et vital' },
        { t: 'Bien-être préventif', d: 'Une séance régulière est un investissement en santé — pas un luxe' },
      ],
    },
    'massagem-criancas': {
      tagline: 'Un toucher doux et sûr — pour le bien-être des plus jeunes',
      description: "Le massage relaxant pour enfants est une pratique douce qui allie des techniques thérapeutiques adaptées à l'âge de l'enfant. Il aide à réduire le stress et l'anxiété, améliore la qualité du sommeil, diminue les douleurs de croissance et favorise un fort développement émotionnel et un sentiment de sécurité.",
      prices: [{ label: 'Par séance (40min)', value: '30€' }],
      sub: [
        { t: 'Relaxation et sommeil', d: 'Technique douce pour favoriser un sommeil plus calme et profond chez les enfants' },
        { t: 'Anxiété infantile', d: "Réduction du stress et de l'anxiété avec un toucher thérapeutique et un environnement sûr" },
        { t: 'Coliques et digestion', d: "Massage abdominal doux pour soulager les coliques et l'inconfort digestif" },
        { t: 'Développement moteur', d: "Stimulation sensorielle et motrice pour le développement sain de l'enfant" },
        { t: 'Tension musculaire', d: 'Libération des tensions accumulées chez les enfants actifs ou à la posture inadéquate' },
        { t: 'Bien-être général', d: "Une séance de bien-être pour les enfants qui ont simplement besoin d'un moment de soin" },
      ],
    },
    'massagem-assinatura-rg': {
      tagline: 'Relaxation profonde de la tête aux pieds. Notre massage exclusif.',
      description: "Le Massage Signature RG représente un voyage de bien-être exclusif que nous avons créé. Il associe des techniques personnalisées au confort du rituel des serviettes chaudes et aux bienfaits thérapeutiques de l'aromathérapie, pour une relaxation profonde et multisensorielle.",
      prices: [{ label: 'Séance complète (80min)', value: '75€' }],
      sub: [
        { t: 'Relaxation totale', d: 'Combinaison de techniques douces pour induire un état de calme profond' },
        { t: 'Travail musculaire', d: 'Libération des tensions accumulées avec des techniques adaptées à chaque zone du corps' },
        { t: 'Bien-être global', d: "Une approche holistique qui prend soin du corps et de l'esprit simultanément" },
        { t: 'Expérience personnalisée', d: 'Chaque séance est adaptée aux préférences et aux besoins du client' },
        { t: 'Un moment unique', d: '80 minutes de dédicace exclusive à votre bien-être' },
        { t: 'Idéal à offrir', d: 'Le choix parfait pour un cadeau spécial ou un moment de soin de soi' },
      ],
    },
    'massagem-profunda': {
      tagline: 'Travail musculaire profond — pour ceux qui exigent davantage de leur corps, à l’entraînement ou au quotidien',
      description: "Le massage deep tissue (ou massage des tissus profonds) est une technique thérapeutique centrée sur les couches les plus profondes des muscles et du tissu conjonctif. Il utilise des mouvements lents et une pression ferme pour soulager les douleurs chroniques, les nœuds musculaires (adhérences) et retrouver la mobilité.",
      prices: [
        { label: '50 minutes', value: '45€' },
        { label: '80 minutes', value: '75€' },
      ],
      sub: [
        { t: 'Contractures et spasmes musculaires', d: 'Libération des nœuds musculaires et zones de tension profonde résistantes à la détente spontanée' },
        { t: 'Récupération post-entraînement', d: 'Régénération musculaire accélérée, réduction des courbatures et élimination des déchets métaboliques après un effort intense' },
        { t: 'Préparation pré-compétition', d: "Activation musculaire et mobilisation des tissus pour optimiser la performance sportive avant la compétition ou l'entraînement" },
        { t: 'Syndrome du piriforme et sciatique', d: 'Travail spécifique sur la musculature fessière profonde pour soulager la douleur sciatique et libérer le nerf' },
        { t: 'Tension cervicale et épaules', d: 'Approche profonde de la zone la plus affectée par le stress, le travail sédentaire et la posture antérieure' },
        { t: 'Tendinites et blessures de surmenage', d: 'Traitement des tendinites chroniques et des blessures par effort répétitif chez les athlètes et les non-athlètes' },
      ],
    },
    'massagem-pre-pos-natal': {
      tagline: 'Accompagnement et confort pendant la grossesse et le post-partum — adapté à chaque phase',
      description: "Le massage pré et post-natal est un traitement thérapeutique axé sur le soulagement des douleurs musculaires, du gonflement et du stress, adapté aux transformations du corps de la femme. En pré-natal (grossesse), il améliore la circulation et réduit l'inconfort ; en post-natal, il aide à récupérer le tonus musculaire et l'équilibre émotionnel.",
      prices: [{ label: 'Par séance (50min)', value: '45€' }],
      sub: [
        { t: 'Douleur lombaire pendant la grossesse', d: 'Soulagement des douleurs lombaires et pelviennes typiques de la gestation, avec positionnement sûr' },
        { t: 'Gonflement et rétention', d: 'Amélioration de la circulation et réduction du gonflement des jambes et chevilles pendant la grossesse' },
        { t: 'Tension musculaire', d: 'Libération des tensions dans le cou, les épaules et le dos accumulées avec le poids du ventre' },
        { t: 'Récupération post-partum', d: "Soutien à la récupération physique après l'accouchement — douleur musculaire, tension et bien-être général" },
        { t: 'Équilibre émotionnel', d: 'Un moment de soin et de relaxation dans une période de tant de changements émotionnels' },
        { t: 'Sommeil et repos', d: "Techniques pour améliorer la qualité du sommeil — si difficile pendant la grossesse et après l'accouchement" },
      ],
    },
    'massagem-sacro-craniana': {
      tagline: 'Un toucher presque imperceptible aux effets profonds sur le système nerveux',
      description: "La thérapie crânienne (ou thérapie crânio-sacrée) est une technique manuelle douce et non invasive qui agit sur le système crânio-sacré, lequel comprend les os du crâne, la colonne vertébrale, le sacrum et le liquide céphalo-rachidien. Au moyen de touchers très légers (environ 5 grammes), le thérapeute libère blocages et tensions, favorisant l'auto-équilibre du corps et la relaxation profonde du système nerveux central.",
      prices: [{ label: 'Par séance (50min)', value: '40€' }],
      sub: [
        { t: 'Céphalées et migraines', d: 'Libération des tensions crânio-sacrées qui contribuent aux maux de tête récurrents' },
        { t: 'Stress et anxiété', d: "Activation profonde du système nerveux parasympathique pour l'équilibre émotionnel" },
        { t: "Dysfonctions de l'ATM", d: "Soulagement des douleurs et tensions de l'articulation temporo-mandibulaire et du visage" },
        { t: 'Douleur cervicale', d: 'Libération des tensions dans la région cervicale et la base du crâne' },
        { t: 'Insomnie', d: "Promotion d'un état de repos profond qui améliore la qualité du sommeil" },
        { t: 'Bébés et enfants', d: "Technique parfaitement sûre pour les plus petits, indiquée pour les coliques et tensions de l'accouchement" },
      ],
    },
    'drenagem-linfatica': {
      tagline: 'Pour récupérer après une chirurgie — un drainage doux qui accélère la cicatrisation',
      description: "Le drainage lymphatique post-opératoire est un massage doux et thérapeutique essentiel à la récupération après une chirurgie plastique ou clinique. Il réduit le gonflement (œdème), atténue les hématomes, soulage les douleurs et prévient des complications telles que les fibroses et les séromes, accélérant la cicatrisation et améliorant la qualité des résultats finaux.",
      prices: [
        { label: 'Post-Op 50min', value: '60€' },
        { label: 'Post-Op 90min', value: '80€' },
      ],
      sub: [
        { t: 'Récupération post-chirurgie', d: "Réduction de l'œdème et amélioration de la qualité des cicatrices après intervention chirurgicale" },
        { t: 'Chirurgie plastique et esthétique', d: "Drainage essentiel après liposuccion, abdominoplastie et autres chirurgies plastiques" },
        { t: 'Prévention des complications', d: 'Prévention des fibroses, séromes et adhérences qui compromettent le résultat final' },
        { t: 'Réduction des hématomes', d: "Réabsorption plus rapide des hématomes et ecchymoses dans la zone opérée" },
        { t: 'Cicatrisation accélérée', d: 'Stimulation de la circulation locale pour une cicatrisation plus rapide et plus saine' },
        { t: 'Confort post-opératoire', d: "Soulagement de l'inconfort et de la sensation de lourdeur durant les premières semaines de récupération" },
      ],
    },
    'drenagem-linfatica-manual': {
      tagline: 'Drainage Lymphatique Manuel (Méthode Vodder) — légèreté, circulation et bien-être',
      description: "Le drainage lymphatique manuel (DLM) est une technique de massage thérapeutique spécialisée qui utilise des mouvements rythmiques, doux et lents. Son principal objectif est de stimuler le système lymphatique, en accélérant l'élimination des liquides, des toxines et des déchets métaboliques par l'urine.",
      prices: [
        { label: 'Séance 50min', value: '50€' },
        { label: 'Séance 80min', value: '80€' },
      ],
      sub: [
        { t: 'Rétention de liquides', d: "Réduction du gonflement des jambes, chevilles et ventre causé par la rétention d'eau" },
        { t: 'Lymphœdème', d: 'Gestion du lymphœdème primaire ou secondaire avec une technique spécialisée Méthode Vodder' },
        { t: 'Cellulite et légèreté', d: "Amélioration de l'aspect de la peau, de la microcirculation locale et sensation de corps plus léger" },
        { t: 'Jambes lourdes et fatiguées', d: 'Soulagement de la sensation de lourdeur et de fatigue dans les jambes, fréquente en fin de journée ou après un long trajet' },
      ],
    },
    'massagem-terapeutica': {
      tagline: 'Massage thérapeutique — travail musculaire profond pour soulager la tension qui ne s’en va pas',
      description: "Le massage thérapeutique est une technique manuelle axée sur le traitement des dysfonctions musculaires et articulaires et des douleurs localisées. Il utilise des mouvements spécifiques et plus de pression pour soulager les tensions, améliorer la mobilité et favoriser la récupération physique. Il se distingue du massage relaxant par son objectif clinique et curatif, et non seulement de bien-être général.",
      prices: [
        { label: 'Séance 50min', value: '45€' },
      ],
      sub: [
        { t: 'Contractures et spasmes', d: 'Libération des nœuds musculaires et zones de tension profonde résistantes à la détente' },
        { t: 'Tension cervicale et épaules', d: 'Approche profonde dans la zone la plus affectée par le travail sédentaire et le stress' },
        { t: 'Récupération sportive', d: "Protocole spécifique pour athlètes — avant ou après la compétition ou l'entraînement" },
      ],
    },
    reflexologia: {
      tagline: 'Tout le corps dans les pieds — une thérapie non invasive aux effets profonds',
      description: "La réflexologie est une technique thérapeutique non invasive qui consiste à appliquer une pression sur des zones spécifiques des pieds, des mains ou des oreilles. Elle repose sur le principe que ces zones correspondent à des réflexes directs de différents organes, glandes et parties du corps.",
      prices: [{ label: 'Par séance (50min)', value: '45€' }],
      sub: [
        { t: 'Stress et anxiété', d: "Stimulation du système nerveux parasympathique pour réduire la tension et l'anxiété" },
        { t: 'Insomnie', d: "Régulation du sommeil par l'équilibre des systèmes de l'organisme" },
        { t: 'Maux de tête', d: 'Travail sur les points réflexes correspondant à la tête et au système nerveux' },
        { t: 'Santé digestive', d: 'Stimulation des réflexes du système digestif pour améliorer la fonction intestinale' },
        { t: 'Circulation', d: 'Amélioration de la circulation sanguine et lymphatique par la stimulation réflexe' },
        { t: 'Bien-être général', d: "Une séance d'équilibre et de relaxation profonde pour le corps et l'esprit" },
      ],
    },
    shiatsu: {
      tagline: 'Une pression précise sur les méridiens — pour retrouver équilibre et vitalité',
      description: "Le shiatsu est une thérapie corporelle et un massage thérapeutique d'origine japonaise dont le nom signifie littéralement « pression des doigts » (shi = doigts + atsu = pression). La technique est axée sur le rééquilibrage physique et énergétique.",
      prices: [{ label: 'Par séance (50min)', value: '45€' }],
      sub: [
        { t: 'Douleur musculaire et articulaire', d: 'Soulagement des douleurs et tensions musculaires par la pression sur les méridiens énergétiques' },
        { t: "Fatigue et manque d'énergie", d: "Stimulation du flux d'énergie vitale pour la récupération de la vitalité" },
        { t: 'Stress et anxiété', d: 'Équilibre du système nerveux pour réduire le stress et promouvoir le bien-être' },
        { t: 'Maux de tête', d: 'Libération des tensions dans le cou, les épaules et la tête qui provoquent des céphalées' },
        { t: 'Problèmes digestifs', d: 'Stimulation des méridiens liés au système digestif' },
        { t: 'Équilibre émotionnel', d: "Harmonie entre le physique et l'émotionnel par la régulation énergétique" },
      ],
    },
    'massagem-indiana': {
      tagline: '« Un voyage vers la détente profonde. » Soulagez la charge des épaules, de la tête et du cou, et ressentez la légèreté d\'un esprit parfaitement calme et revigoré.',
      description: "Le massage indien comprend des mouvements rythmés, lents et profonds, appliqués sur des points spécifiques du corps pour libérer les tensions, améliorer la circulation sanguine et éliminer les toxines.",
      prices: [{ label: 'Par séance (40min)', value: '35€' }],
      sub: [
        { t: 'Céphalées et tension crânienne', d: 'Libération de la tension accumulée dans le cuir chevelu, le cou et les épaules' },
        { t: 'Stress et surcharge mentale', d: "Induction d'un état de relaxation profonde avec des techniques d'origine ayurvédique" },
        { t: 'Circulation du cuir chevelu', d: 'Amélioration de la circulation locale, bénéfique pour la santé et la croissance du cheveu' },
        { t: 'Tension cervicale', d: 'Travail spécifique sur la région cervicale, le cou et les épaules' },
        { t: 'Fatigue visuelle', d: 'Techniques douces sur le visage et la zone orbitaire pour soulager la fatigue oculaire' },
        { t: 'Équilibre énergétique', d: "Travail sur les chakras supérieurs pour l'harmonie physique et émotionnelle" },
      ],
    },
    'head-spa': {
      tagline: 'Prendre soin du cuir chevelu, c’est prendre soin du cheveu — et se détendre comme rarement',
      description: "Le head spa japonais est une thérapie capillaire et holistique de relaxation profonde. Originaire du Japon, il se concentre sur la santé du cuir chevelu par le nettoyage, l'exfoliation et des massages stimulants de la tête, du cou et des épaules. Le traitement soulage le stress, améliore la circulation sanguine et favorise le bien-être général.",
      prices: [{ label: 'Séance complète (90min)', value: '75€' }],
      sub: [
        { t: 'Nettoyage en profondeur', d: "Élimination de l'excès de sébum, cellules mortes et impuretés du cuir chevelu" },
        { t: 'Nutrition et hydratation', d: "Application d'actifs nutritifs pour renforcer les follicules et revitaliser le cheveu" },
        { t: 'Chute de cheveux', d: 'Stimulation de la circulation du cuir chevelu pour renforcer les follicules capillaires' },
        { t: 'Cuir chevelu sensible', d: 'Traitement doux et équilibrant pour cuir chevelu irrité ou avec pellicules' },
        { t: 'Massage relaxant', d: 'Massage profond du cuir chevelu pour libérer la tension et favoriser le bien-être' },
        { t: 'Brillance et vitalité', d: "Résultats visibles sur l'aspect du cheveu — plus brillant, léger et sain" },
      ],
    },
    facial: {
      tagline: 'Soin professionnel pour chaque type de peau — pour des résultats visibles et durables',
      description: "Le nettoyage de peau est un soin esthétique fondamental pour éliminer les impuretés, les cellules mortes et l'excès de sébum. Le processus désobstrue les pores, améliore l'oxygénation et optimise l'absorption des produits de soin quotidien. Le nettoyage de peau avec extraction est un soin esthétique professionnel essentiel pour désobstruer les pores et éliminer les points noirs (comédons), les points blancs (milia) et les cellules mortes. Le processus redonne éclat et santé à la peau, réalisé au moyen d'étapes rigoureuses d'hygiène, d'émollience et d'hydratation.",
      prices: [
        { label: 'Nettoyage de peau', value: '50€' },
        { label: 'Extraction', value: '10€' },
        { label: 'Soin personnalisé', value: '55€' },
      ],
      sub: [
        { t: 'Nettoyage de peau', d: 'Soin complet de nettoyage pour éliminer impuretés, sébum et cellules mortes' },
        { t: 'Extraction', d: 'Élimination professionnelle des comédons et impuretés de manière sûre et efficace' },
        { t: 'Soin personnalisé', d: 'Soin adapté au type de peau — hydratation, anti-âge, luminosité ou contrôle du sebum' },
        { t: 'Peau acnéique', d: 'Protocole spécifique pour peaux à tendance acnéique et excès de sébum' },
        { t: 'Anti-âge', d: "Soins avec des actifs qui stimulent le collagène et réduisent les signes de l'âge" },
        { t: 'Hydratation profonde', d: "Reposition intensive d'hydratation pour peaux sèches, déshydratées ou sensibles" },
      ],
    },
    'depilacao-laser': {
      tagline: 'Finie l’épilation hebdomadaire — laser définitif, pour femme et homme',
      description: "L'épilation au laser est un soin esthétique qui utilise des faisceaux de lumière concentrée pour détruire la racine du poil (le follicule pileux), ralentissant et réduisant sa croissance de façon prolongée.",
      prices: [
        { label: 'Femme — 1 zone', value: '20€' },
        { label: 'Femme — Combi 3 zones', value: '50€' },
        { label: 'Femme — Zone supplémentaire', value: '10€' },
        { label: 'Homme — 1 zone', value: '20€' },
        { label: 'Homme — Combi 3 zones', value: '60€' },
        { label: 'Homme — Zone supplémentaire', value: '10€' },
      ],
      sub: [
        { t: 'Aine et ligne du maillot', d: 'Traitement complet ou partiel, avec des options adaptées à vos préférences' },
        { t: 'Jambes et cuisses', d: 'Épilation de zones étendues avec efficacité et confort maximaux' },
        { t: 'Aisselles', d: 'Une des zones avec le résultat le plus rapide — souvent efficace en quelques séances' },
        { t: 'Visage et cou', d: 'Lèvre supérieure, menton, joues et zone du cou, avec une précision extrême' },
        { t: 'Dos et torse', d: 'Traitement de zones étendues sur le corps masculin, avec un équipement adapté' },
        { t: 'Bras et avant-bras', d: 'Résultats graduels et permanents dans cette zone à forte densité de poils' },
      ],
    },
    'pilates-clinico': {
      tagline: 'Pilates supervisé par un physiothérapeute — exercice adapté, toujours sûr',
      description: "Le Pilates clinique est une modalité d'exercice thérapeutique axée sur la prévention et la réadaptation des lésions musculo-squelettiques. Il se distingue du Pilates traditionnel par le fait d'être dispensé exclusivement par des physiothérapeutes, qui adaptent les exercices à la condition clinique et aux besoins spécifiques de chaque personne.",
      prices: [
        { label: 'Mensualité (1x/semaine)', value: '35€' },
        { label: 'Mensualité (2x/semaine)', value: '60€' },
        { label: 'Personnalisé (50min)', value: '45€' },
      ],
      sub: [
        { t: 'Douleur lombaire et hernies', d: 'Renforcement du core profond pour stabiliser la colonne et réduire la douleur chronique' },
        { t: 'Post-opératoire', d: 'Réintégration progressive du mouvement après chirurgie orthopédique, abdominale ou autre' },
        { t: 'Grossesse et post-partum', d: "Exercices adaptés à chaque phase — préparation à l'accouchement et récupération après" },
        { t: 'Ostéoporose', d: "Entraînement de force et d'équilibre à faible impact articulaire, pour prévenir les chutes et les fractures" },
        { t: 'Scoliose et déviations posturales', d: 'Correction progressive des schémas posturaux altérés avec un exercice supervisé' },
        { t: 'Performance et prévention', d: 'Pour ceux qui veulent améliorer la conscience corporelle et prévenir les blessures en sport' },
      ],
    },
    'hipopressivos': {
      tagline: 'Gymnastique abdominale hypopressive — renforcer le core et le plancher pelvien de l’intérieur',
      description: "Les hypopressifs sont un ensemble de techniques posturales et respiratoires qui réduisent la pression à l'intérieur de la cavité abdominale. Contrairement aux abdominaux traditionnels, ils activent de façon réflexe la musculature profonde du core et du plancher pelvien, et sont particulièrement indiqués en post-partum, dans la prévention des hernies et pour améliorer la posture.",
      prices: [
        { label: 'Mensualité (1x/semaine)', value: '35€' },
        { label: 'Mensualité (2x/semaine)', value: '60€' },
      ],
      sub: [
        { t: 'Post-partum', d: 'Récupération de la paroi abdominale et du plancher pelvien après la grossesse, avec une progression sûre' },
        { t: 'Plancher pelvien', d: 'Renforcement réflexe qui aide à prévenir et contrôler l’incontinence urinaire' },
        { t: 'Diastasis abdominal', d: 'Rééducation de la paroi abdominale pour rapprocher les grands droits et réduire le diastasis' },
        { t: 'Posture et core', d: 'Amélioration de la posture, de la conscience corporelle et de la stabilité centrale du tronc' },
        { t: 'Prévention des hernies', d: 'Réduction de la pression intra-abdominale pour prévenir hernies et prolapsus' },
        { t: 'Complément à l’entraînement', d: 'Base de stabilité profonde qui améliore la performance dans d’autres activités physiques' },
      ],
    },
    'personal-trainer': {
      tagline: 'Entraînement personnalisé et encadré — vos objectifs, un plan sur mesure',
      description: "L'accompagnement par un coach sportif garantit un plan d'entraînement individualisé, ajusté à votre condition physique, vos objectifs et votre disponibilité. Avec un suivi proche à chaque séance, l'exercice est exécuté avec une technique correcte et une progression adaptée — en toute sécurité, motivant et efficace.",
      prices: [
        { label: 'Séance', value: '45€' },
        { label: 'Pack (par séance)', value: '40€' },
      ],
      sub: [
        { t: 'Perte de poids', d: 'Des plans qui combinent entraînement et dépense énergétique pour une perte de poids saine et durable' },
        { t: 'Force et tonification', d: 'Programmes de renforcement musculaire adaptés à votre niveau, du débutant à l’avancé' },
        { t: 'Condition physique générale', d: 'Amélioration de l’endurance, de la mobilité et de l’énergie au quotidien' },
        { t: 'Reprise d’activité', d: 'Réintroduction progressive de l’exercice pour ceux qui ont arrêté ou reviennent de blessure' },
        { t: 'Préparation sportive', d: 'Entraînement spécifique pour améliorer la performance dans une discipline ou un objectif' },
        { t: 'Motivation et suivi', d: 'Un accompagnement proche et une responsabilisation pour maintenir la régularité et les résultats' },
      ],
    },
  },
  ES: {
    'fisioterapia-geral': {
      tagline: 'Evaluación cuidadosa, plan a su medida — para volver a moverse con confianza',
      description: 'La fisioterapia es una ciencia de la salud centrada en el estudio, la prevención, el diagnóstico y el tratamiento de los trastornos relacionados con el movimiento, la biomecánica y la capacidad funcional humana. El objetivo es restaurar, desarrollar y mantener la máxima autonomía, movilidad y calidad de vida de los pacientes.',
      prices: [
        { label: 'Sesión (50min)', value: '50€' },
      ],
      sub: [
        { t: 'Dolor lumbar y cervical', d: 'Evaluación postural, terapia manual y ejercicio progresivo para el dolor crónico o agudo de columna' },
        { t: 'Recuperación postlesión', d: 'Acompañamiento desde la fase aguda hasta la vuelta a la actividad normal, deportiva o laboral' },
        { t: 'Fisioterapia deportiva', d: 'Prevención y tratamiento de lesiones deportivas, con foco en el retorno seguro a la práctica' },
        { t: 'Posoperatorio', d: 'Reducción de la hinchazón, ganancia de movilidad y recuperación de la fuerza tras cirugía ortopédica u otra' },
        { t: 'Embarazo y posparto', d: 'Prevención y alivio de molestias durante el embarazo y recuperación del suelo pélvico tras el parto' },
        { t: 'Dolor crónico', d: 'Enfoque integrado del dolor persistente con terapia manual, ejercicio y educación en dolor' },
        { t: 'Fisioterapia oncológica', d: 'Prevenir, minimizar y tratar las secuelas físicas del cáncer y de sus tratamientos — cirugía, quimioterapia y radioterapia — preservando la funcionalidad, la autonomía y la calidad de vida en todas las fases' },
      ],
    },
    'fisioterapia-pediatrica': {
      tagline: 'Fisioterapia adaptada a cada etapa del crecimiento — con cuidado, seguridad y tiempo para cada niño',
      description: 'La Fisioterapia Pediátrica acompaña a bebés, niños y adolescentes en diferentes etapas del desarrollo. Evaluamos y tratamos retrasos en el desarrollo motor, alteraciones posturales, lesiones musculoesqueléticas y condiciones neurológicas — siempre en un entorno seguro y adecuado a la edad de cada niño. Cada sesión se diseña para el ritmo del niño, con participación de la familia siempre que tenga sentido.',
      prices: [
        { label: 'Sesión (50min)', value: '50€' },
      ],
      sub: [
        { t: 'Desarrollo motor', d: 'Evaluación y estimulación del desarrollo motor en bebés y niños con retraso o alteraciones' },
        { t: 'Alteraciones posturales', d: 'Escoliosis, cifosis, pies planos y otras alteraciones posturales en la infancia y adolescencia' },
        { t: 'Lesiones musculoesqueléticas', d: 'Recuperación de lesiones deportivas, traumáticas o por sobreuso en niños y jóvenes' },
        { t: 'Tortícolis congénita', d: 'Tratamiento manual y ejercicios específicos para tortícolis muscular del bebé' },
        { t: 'Plagiocefalia', d: 'Ayuda en la corrección de asimetrías del cráneo en bebés mediante posicionamiento y movilización' },
        { t: 'Condiciones neurológicas', d: 'Seguimiento de niños con parálisis cerebral, retraso global u otras condiciones neurológicas' },
      ],
    },
    'fisioterapia-atm': {
      tagline: 'Cuando la mandíbula duele, se bloquea o hace chasquidos — tratamos la ATM en su raíz',
      description: 'La fisioterapia para la articulación temporomandibular (ATM) trata la disfunción (TTM) mediante terapias manuales y ejercicios. El objetivo es aliviar los dolores de cabeza o de la cara, eliminar los chasquidos, reducir la tensión y restaurar la movilidad, integrándose a menudo en un seguimiento médico multidisciplinar.',
      prices: [{ label: 'Fisioterapia ATM (50min)', value: '55€' }],
      sub: [
        { t: 'Dolor en la mandíbula', d: 'Alivio del dolor articular, muscular o al masticar mediante terapia manual especializada' },
        { t: 'Chasquidos y rechinar', d: 'Evaluación y tratamiento de los chasquidos o crepitaciones en la articulación al abrir o cerrar la boca' },
        { t: 'Bloqueo articular', d: 'Recuperación del rango de movimiento de la mandíbula en casos de bloqueo o limitación de apertura' },
        { t: 'Cefaleas y tensión cervical', d: 'Enfoque integrado entre ATM, cervical y cefaleas — a menudo interconectados' },
        { t: 'Bruxismo', d: 'Gestión de la tensión muscular y protección articular en casos de bruxismo diurno o nocturno' },
        { t: 'Post-ortodoncia o post-cirugía', d: 'Recuperación funcional de la ATM tras tratamientos dentales, ortodónticos o quirúrgicos' },
      ],
    },
    mesoterapia: {
      tagline: 'Acción dirigida donde más la necesita — para dolor, inflamación o cuidado estético',
      description: 'La Mesoterapia consiste en aplicar microinyecciones de sustancias activas directamente en las capas superficiales de la piel o tejido subcutáneo. Permite una acción altamente localizada — llega a la zona exacta del dolor, contractura o preocupación estética, con poca difusión sistémica. Aplicada por fisioterapeuta con formación específica, es una técnica versátil tanto en contexto clínico (dolor articular, contracturas) como estético (celulitis, flacidez, rejuvenecimiento).',
      prices: [
        { label: 'Sesión (50min)', value: '55€' },
      ],
      sub: [
        { t: 'Dolor e inflamación articular', d: 'Aplicación localizada de antiinflamatorios para alivio rápido en rodillas, hombros o columna' },
        { t: 'Contracturas musculares', d: 'Liberación de puntos de tensión persistentes resistentes a otras técnicas' },
        { t: 'Celulitis y grasa localizada', d: 'Mejora de la circulación local y reducción de la acumulación de grasa en zonas específicas' },
        { t: 'Flacidez de la piel', d: 'Estimulación de la producción de colágeno para la firmeza y tono de la piel' },
        { t: 'Rejuvenecimiento facial', d: 'Hidratación profunda y revitalización de la piel con ácido hialurónico y vitaminas' },
        { t: 'Caída del cabello', d: 'Estimulación del cuero cabelludo para fortalecer el cabello y frenar la caída' },
      ],
    },
    'fisioterapia-vestibular': {
      tagline: 'Recuperar la estabilidad — y volver a confiar en el equilibrio de su cuerpo',
      description: 'La Fisioterapia Vestibular es un área especializada de la fisioterapia que trata los mareos, vértigo y desequilibrios. A través de una evaluación rigurosa, maniobras de reposicionamiento (eficaces en VPPB) y ejercicios específicos de habituación y estabilización de la mirada, ayudamos al sistema vestibular a recuperarse o compensar. Los resultados suelen ser rápidos — en muchos casos, con alivio significativo desde la primera sesión.',
      prices: [
        { label: 'Sesión (50min)', value: '50€' },
        { label: 'Pack 5 sesiones', value: '225€' },
      ],
      sub: [
        { t: 'Vértigo posicional (VPPB)', d: 'Maniobras de reposicionamiento de otolitos — resolución frecuente en 1 a 3 sesiones' },
        { t: 'Mareos crónicos', d: 'Ejercicios de habituación y estabilización de la mirada para reducir mareos persistentes' },
        { t: 'Neuritis vestibular', d: 'Rehabilitación tras inflamación del nervio vestibular para recuperar equilibrio y estabilidad' },
        { t: 'Enfermedad de Ménière', d: 'Apoyo en la gestión de crisis vertiginosas y mejora del equilibrio entre episodios' },
        { t: 'Desequilibrio en el mayor', d: 'Entrenamiento del equilibrio y prevención de caídas en poblaciones con mayor riesgo' },
        { t: 'Mareos postraumáticos', d: 'Recuperación tras traumatismo craneal o cervical con síntomas vestibulares' },
      ],
    },
    'fisioterapia-oncologica': {
      tagline: 'Recuperar función, autonomía y calidad de vida — en todas las fases',
      description: 'La fisioterapia oncológica es la especialidad centrada en prevenir, minimizar y tratar las secuelas físicas causadas por el cáncer y sus tratamientos agresivos, como cirugías, quimioterapia y radioterapia. El objetivo principal es preservar la función, devolver la autonomía y garantizar la calidad de vida del paciente en todas las fases de la patología.',
      prices: [
        { label: 'Sesión (50min)', value: '50€' },
        { label: 'Pack 5 sesiones', value: '225€' },
      ],
      sub: [
        { t: 'Linfedema posoncológico', d: 'Drenaje linfático manual y vendajes para controlar el edema tras vaciamiento ganglionar o radioterapia' },
        { t: 'Recuperación tras mastectomía', d: 'Recuperación de la movilidad del hombro y el brazo y tratamiento de la cicatriz tras cirugía de mama' },
        { t: 'Secuelas de radioterapia', d: 'Tratamiento de fibrosis, adherencias y pérdida de movilidad provocadas por la radioterapia' },
        { t: 'Fatiga y desacondicionamiento', d: 'Ejercicio adaptado y progresivo para combatir la fatiga oncológica y recuperar la condición física' },
        { t: 'Movilidad y cicatrices', d: 'Movilización de tejidos, alivio de adherencias y recuperación de la amplitud de movimiento' },
        { t: 'Rehabilitación durante el tratamiento', d: 'Acompañamiento activo a lo largo de la quimioterapia y la radioterapia para preservar la función' },
      ],
    },
    'tecarterapia-winback': {
      tagline: 'Tecarterapia de última generación — la tecnología que acelera cada sesión de fisioterapia',
      description: 'La Winback es un equipo de tecarterapia (diatermia capacitiva y resistiva) que combina alta frecuencia (300 kHz a 1 MHz) con neuromodulación Hi-TENS e Hi-EMS. Al calentar los tejidos en profundidad, activa la circulación sanguínea y el metabolismo celular en la zona tratada, acelerando los procesos naturales de recuperación del organismo. La fisioterapeuta la integra en las sesiones de tratamiento, adaptada a cada caso — sin agujas, sin dolor, sin tiempo de parada.',
      prices: [
        { label: 'Sesión de fisioterapia con Winback (50min)', value: '50€' },
        { label: 'Pack 5 sesiones', value: '225€' },
      ],
      sub: [
        { t: 'Alivio rápido del dolor', d: 'Acción analgésica inmediata mediante la neuromodulación Hi-TENS, sentida ya durante la sesión' },
        { t: 'Reducción de la inflamación', d: 'El calor profundo (diatermia) estimula la microcirculación local y ayuda a drenar el edema' },
        { t: 'Recuperación muscular post-esfuerzo', d: 'Acelera la eliminación del ácido láctico y la regeneración del tejido muscular tras un esfuerzo intenso' },
        { t: 'Tendinopatías y contracturas', d: 'Trabajo en profundidad sobre tendones y músculos contracturados, difícil de alcanzar solo con terapia manual' },
        { t: 'Recuperación posquirúrgica', d: 'Acelera la cicatrización de los tejidos y recupera la movilidad tras una cirugía ortopédica' },
        { t: 'Lesiones deportivas agudas y crónicas', d: 'Reduce el tiempo de recuperación en esguinces, roturas musculares y sobrecargas de entrenamiento' },
      ],
      equipment: {
        eyebrow: 'EL EQUIPO',
        heading: 'Tecnología Winback, oficial y certificada',
        text: 'El Winback lo maneja directamente la fisioterapeuta a través de una pantalla táctil, que permite ajustar en tiempo real el modo, la intensidad y la combinación de corrientes a cada caso. El electrodo se desliza sobre la piel con una crema conductora específica — sin agujas, sin preparación especial y sin tiempo de parada entre la sesión y el día a día.',
        badge: 'Certificado Winback Expert Center',
        bullets: [
          { t: '300 kHz – 1 MHz', d: 'Alta frecuencia regulable según la profundidad del tejido a tratar.' },
          { t: 'Capacitivo y resistivo', d: 'Dos modos de diatermia, para tejido superficial o más profundo.' },
          { t: 'Hi-TENS + Hi-EMS', d: 'Neuromodulación combinada con el calor, para el alivio del dolor y la activación muscular.' },
          { t: 'Electrodo monopolar', d: 'Aplicado directamente por la fisioterapeuta, con control total sobre la zona tratada.' },
        ],
      },
      process: {
        eyebrow: 'DURANTE LA SESIÓN',
        heading: 'Cómo se realiza la aplicación',
        steps: [
          { t: 'Evaluación y ajuste', d: 'La fisioterapeuta elige el modo, la intensidad y el electrodo según la zona y el objetivo del tratamiento.' },
          { t: 'Aplicación directa', d: 'El electrodo se desliza sobre la piel con crema conductora, sin agujas ni molestias.' },
          { t: 'Calor y neuromodulación', d: 'Se siente calor profundo y una estimulación eléctrica suave ya en los primeros minutos.' },
          { t: 'Integrado en la sesión', d: 'El Winback se combina con terapia manual, potenciando el resultado de cada sesión de fisioterapia.' },
        ],
      },
    },
    acupuntura: {
      tagline: 'Una medicina con siglos de práctica — y evidencia creciente para su bienestar',
      description: 'La acupuntura es una técnica terapéutica milenaria, originaria de la Medicina Tradicional China, que consiste en la inserción de agujas finas en puntos específicos del cuerpo. Su objetivo es estimular las respuestas naturales del organismo, promoviendo el equilibrio físico y emocional y el alivio de síntomas.',
      prices: [{ label: 'Por sesión (50min)', value: '45€' }],
      sub: [
        { t: 'Dolor crónico', d: 'Dolor lumbar, cervical, cefaleas y dolores articulares con respuesta probada a la acupuntura' },
        { t: 'Estrés y ansiedad', d: 'Regulación del sistema nervioso autónomo para reducir la tensión, irritabilidad y fatiga mental' },
        { t: 'Insomnio', d: 'Tratamiento de las causas subyacentes del sueño alterado mediante el equilibrio energético' },
        { t: 'Salud digestiva', d: 'Intestino irritable, reflujo y otros desequilibrios del sistema digestivo' },
        { t: 'Fertilidad y ciclo menstrual', d: 'Regulación hormonal y apoyo en procesos de fertilidad o molestias menstruales' },
        { t: 'Bienestar general', d: 'Equilibrio energético y bienestar global como práctica preventiva y de salud' },
      ],
    },
    nutricao: {
      tagline: 'Alimentación real para la vida real — sin dietas restrictivas ni soluciones genéricas',
      description: 'La nutrición es la ciencia que estudia la relación entre los alimentos ingeridos, su composición y el impacto directo en el funcionamiento del cuerpo, en la salud y en la prevención de enfermedades. El proceso biológico implica la ingestión, absorción y utilización de nutrientes para el crecimiento, la energía y el mantenimiento de la vida.',
      prices: [
        { label: '1ª consulta (hasta 50min)', value: '45€' },
        { label: 'Siguientes (30min)', value: '40€' },
      ],
      sub: [
        { t: 'Pérdida de peso sostenible', d: 'Un plan alimentario real adaptado a su estilo de vida — para perder peso y mantenerlo' },
        { t: 'Nutrición deportiva', d: 'Optimización de la nutrición para el rendimiento, recuperación y composición corporal' },
        { t: 'Salud digestiva', d: 'Apoyo nutricional para intestino irritable, intolerancias, reflujo y otros desequilibrios' },
        { t: 'Diabetes y colesterol', d: 'Gestión nutricional de condiciones metabólicas con seguimiento regular' },
        { t: 'Embarazo y lactancia', d: 'Nutrición adaptada a cada fase, para la salud de la madre y del bebé' },
        { t: 'Alimentación vegetariana y vegana', d: 'Garantía de equilibrio nutricional en dietas vegetales sin carencias' },
      ],
    },
    'terapia-bowen': {
      tagline: 'Suave en el toque, eficaz en el resultado — para todas las edades',
      description: 'La terapia de Bowen es una técnica manual holística y no invasiva que utiliza toques suaves y precisos sobre músculos, tendones y ligamentos. Su principal objetivo es estimular los mecanismos naturales de autocuración del cuerpo y restaurar el equilibrio del sistema nervioso, promoviendo el alivio del dolor y la relajación.',
      prices: [
        { label: 'Niños hasta 5 años (60min)', value: '20€' },
        { label: 'Niños 5-12 (60min)', value: '30€' },
        { label: 'Adultos 12+ (60min)', value: '60€' },
      ],
      sub: [
        { t: 'Dolor lumbar y cervical', d: 'Liberación de la tensión profunda de la columna con una técnica completamente suave' },
        { t: 'Fibromialgia', d: 'Enfoque eficaz para el manejo del dolor difuso y la fatiga crónica de la fibromialgia' },
        { t: 'Tensión y estrés crónicos', d: 'Activación del sistema nervioso parasimpático para un estado de calma y regeneración' },
        { t: 'Lesiones deportivas', d: 'Recuperación de lesiones musculares y tendinosas con tiempo de inactividad reducido' },
        { t: 'Migraña y cefalea tensional', d: 'Reducción de la frecuencia e intensidad de los episodios mediante el equilibrio muscular y fascial' },
        { t: 'Niños', d: 'Técnica completamente segura y suave, indicada a partir de los 5 años' },
      ],
    },
    psicologia: {
      tagline: 'Un espacio seguro para hablar de lo que le preocupa — para niños, adolescentes y adultos',
      description: 'La psicología es la ciencia que estudia el comportamiento humano, los procesos mentales y la forma en que las emociones, los pensamientos y el entorno interactúan. Su principal objetivo es comprender, explicar y promover la salud mental y el bienestar, ayudando a las personas a afrontar desafíos y a mejorar su calidad de vida.',
      prices: [{ label: 'Consulta (60min)', value: '45€' }],
      sub: [
        { t: 'Ansiedad y estrés', d: 'Herramientas prácticas para gestionar la preocupación excesiva, la tensión y los síntomas físicos asociados' },
        { t: 'Depresión y estado de ánimo', d: 'Acompañamiento en estados depresivos, tristeza persistente y pérdida de motivación' },
        { t: 'Psicología infantil', d: 'Apoyo a niños con dificultades de comportamiento, atención, aprendizaje o adaptación' },
        { t: 'Adolescencia', d: 'Apoyo en identidad, presión social, autoestima y regulación emocional' },
        { t: 'Duelo y pérdida', d: 'Acompañamiento en procesos de pérdida — de personas, relaciones, salud o proyectos vitales' },
        { t: 'Relaciones y comunicación', d: 'Trabajo sobre patrones relacionales, asertividad y dinámicas interpersonales' },
      ],
    },
    'massagem-relaxamento': {
      tagline: 'Tiempo de desacelerar. Tu momento de bienestar absoluto;',
      description: 'El masaje de relajación es una terapia manual que utiliza movimientos suaves, rítmicos y continuos por todo el cuerpo, con la ayuda de aceites o cremas. Su objetivo principal es aliviar las tensiones musculares, reducir el estrés y promover un estado de bienestar físico y mental profundo.',
      prices: [
        { label: '50 minutos', value: '40€' },
        { label: '80 minutos', value: '65€' },
      ],
      sub: [
        { t: 'Tensión muscular general', d: 'Liberación de contracturas y puntos de tensión acumulados en el día a día' },
        { t: 'Estrés y sobrecarga mental', d: 'Activación del sistema nervioso parasimpático para una respuesta de calma profunda' },
        { t: 'Trastornos del sueño', d: 'El masaje regular mejora la calidad del sueño y facilita conciliarlo' },
        { t: 'Cefaleas tensionales', d: 'Trabajo en cuello, hombros y cuero cabelludo para aliviar las cefaleas de tensión' },
        { t: 'Circulación y drenaje', d: 'Mejora del flujo sanguíneo y linfático para un cuerpo más ligero y vital' },
        { t: 'Bienestar preventivo', d: 'Una sesión regular es una inversión en salud — no un lujo' },
      ],
    },
    'massagem-criancas': {
      tagline: 'Un toque suave y seguro — para el bienestar de los más pequeños',
      description: 'El masaje de relajación para niños es una práctica suave que combina técnicas terapéuticas adaptadas a la edad infantil. Ayuda a reducir el estrés y la ansiedad, mejora la calidad del sueño, disminuye los dolores de crecimiento y promueve un fuerte desarrollo emocional y seguridad.',
      prices: [{ label: 'Por sesión (40min)', value: '30€' }],
      sub: [
        { t: 'Relajación y sueño', d: 'Técnica suave para favorecer un sueño más tranquilo y profundo en los niños' },
        { t: 'Ansiedad infantil', d: 'Reducción del estrés y la ansiedad con toque terapéutico y un entorno seguro' },
        { t: 'Cólicos y digestión', d: 'Masaje abdominal suave para aliviar los cólicos y las molestias digestivas' },
        { t: 'Desarrollo motor', d: 'Estimulación sensorial y motriz para el desarrollo sano del niño' },
        { t: 'Tensión muscular', d: 'Liberación de tensión en niños activos o con postura inadecuada' },
        { t: 'Bienestar general', d: 'Una sesión de bienestar para niños que simplemente necesitan un momento de cuidado' },
      ],
    },
    'massagem-assinatura-rg': {
      tagline: 'Relajación profunda de la cabeza a los pies. Nuestro masaje exclusivo.',
      description: 'El Masaje Firma RG representa un viaje de bienestar exclusivo creado por nosotros. Combina técnicas personalizadas con el confort del ritual de toallas calientes y los beneficios terapéuticos de la aromaterapia para una relajación profunda y multisensorial.',
      prices: [{ label: 'Sesión completa (80min)', value: '75€' }],
      sub: [
        { t: 'Relajación total', d: 'Combinación de técnicas suaves para inducir un estado de calma profunda' },
        { t: 'Trabajo muscular', d: 'Liberación de la tensión acumulada con técnicas adaptadas a cada zona del cuerpo' },
        { t: 'Bienestar global', d: 'Un enfoque holístico que cuida del cuerpo y la mente conjuntamente' },
        { t: 'Experiencia personalizada', d: 'Cada sesión se adapta a las preferencias y necesidades del cliente' },
        { t: 'Un momento único', d: '80 minutos de dedicación exclusiva a su bienestar' },
        { t: 'Ideal para regalar', d: 'La elección perfecta para un regalo especial o un momento de autocuidado' },
      ],
    },
    'massagem-profunda': {
      tagline: 'Trabajo muscular profundo — para quien exige más de su cuerpo, en el entrenamiento o el día a día',
      description: 'El masaje deep tissue (o masaje de tejido profundo) es una técnica terapéutica centrada en las capas más profundas de los músculos y del tejido conjuntivo. Utiliza movimientos lentos y presión firme para aliviar dolores crónicos, nudos musculares (adherencias) y recuperar la movilidad.',
      prices: [
        { label: '50 minutos', value: '45€' },
        { label: '80 minutos', value: '75€' },
      ],
      sub: [
        { t: 'Contracturas y espasmos musculares', d: 'Liberación de nudos musculares y zonas de tensión profunda resistentes a la relajación espontánea' },
        { t: 'Recuperación post-entrenamiento', d: 'Regeneración muscular acelerada, reducción de agujetas y eliminación de residuos metabólicos tras esfuerzo intenso' },
        { t: 'Preparación precompetición', d: 'Activación muscular y movilización de tejidos para optimizar el rendimiento deportivo antes de la prueba o entrenamiento' },
        { t: 'Síndrome del piriforme y ciática', d: 'Trabajo específico sobre la musculatura glútea profunda para aliviar el dolor ciático y liberar el nervio' },
        { t: 'Tensión cervical y de hombros', d: 'Enfoque profundo en la zona más afectada por el estrés, el trabajo sedentario y la postura anterior' },
        { t: 'Tendinitis y lesiones por sobreuso', d: 'Tratamiento de tendinitis crónicas y lesiones por esfuerzo repetitivo en atletas y no atletas' },
      ],
    },
    'massagem-pre-pos-natal': {
      tagline: 'Acompañamiento y confort en el embarazo y el posparto — adaptado a cada fase',
      description: 'El masaje pre y posnatal es un tratamiento terapéutico centrado en el alivio de dolores musculares, hinchazón y estrés, adaptado a las transformaciones del cuerpo de la mujer. En el prenatal (embarazo), mejora la circulación y reduce las molestias; en el posnatal, ayuda a recuperar el tono muscular y el equilibrio emocional.',
      prices: [{ label: 'Por sesión (50min)', value: '45€' }],
      sub: [
        { t: 'Dolor lumbar en el embarazo', d: 'Alivio del dolor lumbar y pélvico típico del embarazo, con posicionamiento seguro' },
        { t: 'Hinchazón y retención de líquidos', d: 'Mejora de la circulación y reducción de la hinchazón en piernas y tobillos durante el embarazo' },
        { t: 'Tensión muscular', d: 'Liberación de la tensión en cuello, hombros y espalda acumulada bajo el peso de la barriga' },
        { t: 'Recuperación posparto', d: 'Apoyo en la recuperación física tras el parto — dolor muscular, tensión y bienestar general' },
        { t: 'Equilibrio emocional', d: 'Un momento de cuidado y relajación en un periodo de grandes cambios emocionales' },
        { t: 'Sueño y descanso', d: 'Técnicas para mejorar la calidad del sueño — tan difícil durante el embarazo y el posparto' },
      ],
    },
    'massagem-sacro-craniana': {
      tagline: 'Un toque casi imperceptible con efectos profundos en el sistema nervioso',
      description: 'La terapia craneal (o terapia craneosacral/sacrocraneal) es una técnica manual suave y no invasiva que actúa sobre el sistema craneosacral, que incluye los huesos del cráneo, la columna, el sacro y el líquido cefalorraquídeo. Mediante toques muy ligeros (de unos 5 gramos), el terapeuta libera bloqueos y tensiones, promoviendo el autoequilibrio del cuerpo y la relajación profunda del sistema nervioso central.',
      prices: [{ label: 'Por sesión (50min)', value: '40€' }],
      sub: [
        { t: 'Cefaleas y migrañas', d: 'Liberación de la tensión sacrocraneal que contribuye a los dolores de cabeza recurrentes' },
        { t: 'Estrés y ansiedad', d: 'Activación profunda del sistema nervioso parasimpático para el equilibrio emocional' },
        { t: 'Disfunción de la ATM', d: 'Alivio del dolor y la tensión en la articulación temporomandibular y la cara' },
        { t: 'Dolor cervical', d: 'Liberación de la tensión en el cuello y la base del cráneo' },
        { t: 'Insomnio', d: 'Promueve un estado de descanso profundo que mejora la calidad del sueño' },
        { t: 'Bebés y niños', d: 'Una técnica completamente segura para los más pequeños, indicada para cólicos y tensiones del parto' },
      ],
    },
    'drenagem-linfatica': {
      tagline: 'Para recuperar tras la cirugía — un drenaje suave que acelera la cicatrización',
      description: 'El drenaje linfático postoperatorio es un masaje suave y terapéutico esencial para la recuperación de cirugías plásticas o clínicas. Reduce la hinchazón (edema), disminuye los hematomas, alivia dolores y previene complicaciones como fibrosis y seromas, acelerando la cicatrización y mejorando la calidad de los resultados finales.',
      prices: [
        { label: 'Postoperatorio 50min', value: '60€' },
        { label: 'Postoperatorio 90min', value: '80€' },
      ],
      sub: [
        { t: 'Recuperación postcirugía', d: 'Reducción del edema y mejora de la calidad de las cicatrices tras intervención quirúrgica' },
        { t: 'Cirugía plástica y estética', d: 'Drenaje esencial tras liposucción, abdominoplastia y otras cirugías plásticas' },
        { t: 'Prevención de complicaciones', d: 'Prevención de fibrosis, seromas y adherencias que comprometen el resultado final' },
        { t: 'Reducción de hematomas', d: 'Reabsorción más rápida de hematomas y equimosis en la zona operada' },
        { t: 'Cicatrización acelerada', d: 'Estímulo de la circulación local para una cicatrización más rápida y saludable' },
        { t: 'Confort postoperatorio', d: 'Alivio del malestar y la sensación de pesadez en las primeras semanas de recuperación' },
      ],
    },
    'drenagem-linfatica-manual': {
      tagline: 'Drenaje Linfático Manual (Método Vodder) — ligereza, circulación y bienestar',
      description: 'El drenaje linfático manual (DLM) es una técnica de masaje terapéutico especializada que utiliza movimientos rítmicos, suaves y lentos. Su principal objetivo es estimular el sistema linfático, acelerando la eliminación de líquidos, toxinas y residuos metabólicos a través de la orina.',
      prices: [
        { label: 'Sesión 50min', value: '50€' },
        { label: 'Sesión 80min', value: '80€' },
      ],
      sub: [
        { t: 'Retención de líquidos', d: 'Reducción de la hinchazón en piernas, tobillos y vientre causada por la retención de agua' },
        { t: 'Linfedema', d: 'Manejo del linfedema primario o secundario con técnica especializada del Método Vodder' },
        { t: 'Celulitis y ligereza', d: 'Mejora del aspecto de la piel, la microcirculación local y sensación de cuerpo más ligero' },
        { t: 'Piernas pesadas y cansadas', d: 'Alivio de la sensación de pesadez y cansancio en las piernas, habitual al final del día o tras viajes largos' },
      ],
    },
    'massagem-terapeutica': {
      tagline: 'Masaje terapéutico — trabajo muscular profundo para aliviar la tensión que no se va',
      description: 'El masaje terapéutico es una técnica manual centrada en el tratamiento de disfunciones musculares y articulares y dolores localizados. Utiliza movimientos específicos y con más presión para aliviar tensiones, mejorar la movilidad y promover la recuperación física. Se diferencia del masaje de relajación por tener un objetivo clínico y curativo, y no solo de bienestar general.',
      prices: [
        { label: 'Sesión 50min', value: '45€' },
      ],
      sub: [
        { t: 'Contracturas y espasmos', d: 'Liberación de nudos musculares y zonas de tensión profunda resistentes a la relajación' },
        { t: 'Tensión cervical y de hombros', d: 'Enfoque profundo en la zona más afectada por el trabajo sedentario y el estrés' },
        { t: 'Recuperación deportiva', d: 'Protocolo específico para deportistas — antes o después de competición o entrenamiento' },
      ],
    },
    reflexologia: {
      tagline: 'Todo el cuerpo en los pies — una terapia no invasiva con efectos profundos',
      description: 'La reflexología es una técnica terapéutica no invasiva que consiste en la aplicación de presión en áreas específicas de los pies, las manos o las orejas. Se basa en el principio de que estas zonas corresponden a reflejos directos de diferentes órganos, glándulas y partes del cuerpo.',
      prices: [{ label: 'Por sesión (50min)', value: '45€' }],
      sub: [
        { t: 'Estrés y ansiedad', d: 'Estimulación del sistema nervioso parasimpático para reducir la tensión y la ansiedad' },
        { t: 'Insomnio', d: 'Regulación del sueño mediante el equilibrio de los sistemas del organismo' },
        { t: 'Dolores de cabeza', d: 'Trabajo en los puntos reflejos correspondientes a la cabeza y el sistema nervioso' },
        { t: 'Salud digestiva', d: 'Estimulación de los reflejos del sistema digestivo para mejorar la función intestinal' },
        { t: 'Circulación', d: 'Mejora de la circulación sanguínea y linfática mediante la estimulación refleja' },
        { t: 'Bienestar general', d: 'Una sesión de profundo equilibrio y relajación para cuerpo y mente' },
      ],
    },
    shiatsu: {
      tagline: 'Presión precisa sobre los meridianos — para devolver equilibrio y vitalidad',
      description: 'El shiatsu es una terapia corporal y masaje terapéutico de origen japonés cuyo nombre significa literalmente "presión con los dedos" (shi = dedos + atsu = presión). La técnica se centra en el reequilibrio físico y energético.',
      prices: [{ label: 'Por sesión (50min)', value: '45€' }],
      sub: [
        { t: 'Dolor muscular y articular', d: 'Alivio del dolor muscular y la tensión mediante presión sobre los meridianos energéticos' },
        { t: 'Fatiga y baja energía', d: 'Estimulación del flujo de energía vital para recuperar la vitalidad' },
        { t: 'Estrés y ansiedad', d: 'Equilibrio del sistema nervioso para reducir el estrés y promover el bienestar' },
        { t: 'Dolores de cabeza', d: 'Liberación de la tensión en cuello, hombros y cabeza que provoca las cefaleas' },
        { t: 'Problemas digestivos', d: 'Estimulación de los meridianos relacionados con el sistema digestivo' },
        { t: 'Equilibrio emocional', d: 'Armonía entre lo físico y lo emocional mediante la regulación energética' },
      ],
    },
    'massagem-indiana': {
      tagline: '«Un viaje hacia la relajación profunda.» Alivie la carga de los hombros, la cabeza y el cuello, y sienta la ligereza de una mente perfectamente tranquila y revitalizada.',
      description: 'El masaje indio consiste en movimientos rítmicos, lentos y profundos, aplicados en puntos específicos del cuerpo para liberar tensiones, mejorar la circulación sanguínea y eliminar toxinas.',
      prices: [{ label: 'Por sesión (40min)', value: '35€' }],
      sub: [
        { t: 'Dolores de cabeza y tensión craneal', d: 'Liberación de la tensión acumulada en cuero cabelludo, cuello y hombros' },
        { t: 'Estrés y sobrecarga mental', d: 'Inducción de relajación profunda con técnicas de raíz ayurvédica' },
        { t: 'Circulación del cuero cabelludo', d: 'Mejora de la circulación local, beneficiosa para la salud y crecimiento del cabello' },
        { t: 'Tensión cervical', d: 'Trabajo específico sobre la región cervical, cuello y hombros' },
        { t: 'Fatiga ocular', d: 'Técnicas suaves en cara y zona orbital para aliviar el cansancio ocular' },
        { t: 'Equilibrio energético', d: 'Trabajo sobre los chakras superiores para la armonía física y emocional' },
      ],
    },
    'head-spa': {
      tagline: 'Cuidar el cuero cabelludo es cuidar el cabello — y relajarse como hace tiempo no se relajaba',
      description: 'El head spa japonés es una terapia capilar y holística de relajación profunda. Originaria de Japón, se centra en la salud del cuero cabelludo a través de limpieza, exfoliación y masajes estimulantes en la cabeza, el cuello y los hombros. El tratamiento alivia el estrés, mejora la circulación sanguínea y promueve el bienestar general.',
      prices: [{ label: 'Sesión completa (90min)', value: '75€' }],
      sub: [
        { t: 'Limpieza profunda', d: 'Eliminación del exceso de sebo, células muertas e impurezas del cuero cabelludo' },
        { t: 'Nutrición e hidratación', d: 'Aplicación de activos nutritivos para fortalecer los folículos y revitalizar el cabello' },
        { t: 'Caída del cabello', d: 'Estimulación de la circulación del cuero cabelludo para fortalecer los folículos capilares' },
        { t: 'Cuero cabelludo sensible', d: 'Tratamiento suave y equilibrante para cuero cabelludo irritado o con caspa' },
        { t: 'Masaje relajante', d: 'Masaje profundo del cuero cabelludo para liberar la tensión y promover el bienestar' },
        { t: 'Brillo y vitalidad', d: 'Resultados visibles en el aspecto del cabello — más brillante, ligero y sano' },
      ],
    },
    facial: {
      tagline: 'Cuidado profesional para cada tipo de piel — para resultados visibles y duraderos',
      description: 'La limpieza de cutis es un procedimiento estético fundamental para eliminar impurezas, células muertas y el exceso de grasa. El proceso desobstruye los poros, mejora la oxigenación y potencia la absorción de los productos de cuidado diario. La limpieza de cutis con extracción es un procedimiento estético profesional esencial para desobstruir los poros y eliminar puntos negros (comedones), blancos (miliums) y células muertas. El proceso devuelve la luminosidad y la salud a la piel, realizándose mediante etapas rigurosas de higiene, emoliencia e hidratación.',
      prices: [
        { label: 'Limpieza de cutis', value: '50€' },
        { label: 'Extracción', value: '10€' },
        { label: 'Facial personalizado', value: '55€' },
      ],
      sub: [
        { t: 'Limpieza de cutis', d: 'Un tratamiento completo de limpieza para eliminar impurezas, sebo y células muertas' },
        { t: 'Extracción', d: 'Eliminación profesional de comedones e impurezas de forma segura y eficaz' },
        { t: 'Facial personalizado', d: 'Tratamiento adaptado al tipo de piel — hidratación, antiedad, luminosidad o control de la grasa' },
        { t: 'Piel acneica', d: 'Protocolo específico para piel con tendencia al acné y al exceso de grasa' },
        { t: 'Antiedad', d: 'Tratamientos con activos que estimulan el colágeno y reducen los signos de la edad' },
        { t: 'Hidratación profunda', d: 'Reposición intensiva de hidratación para pieles secas, deshidratadas o sensibles' },
      ],
    },
    'depilacao-laser': {
      tagline: 'Adiós a la depilación semanal — láser definitivo, para mujer y hombre',
      description: 'La depilación láser es un procedimiento estético que utiliza haces de luz concentrada para destruir la raíz del vello (el folículo piloso), retardando y reduciendo su crecimiento de forma prolongada.',
      prices: [
        { label: 'Mujer — 1 zona', value: '20€' },
        { label: 'Mujer — Combi 3 zonas', value: '50€' },
        { label: 'Mujer — Zona extra', value: '10€' },
        { label: 'Hombre — 1 zona', value: '20€' },
        { label: 'Hombre — Combi 3 zonas', value: '60€' },
        { label: 'Hombre — Zona extra', value: '10€' },
      ],
      sub: [
        { t: 'Ingle y línea del bikini', d: 'Tratamiento total o parcial, con opciones adaptadas a sus preferencias' },
        { t: 'Piernas y muslos', d: 'Depilación de zonas extensas con eficacia y comodidad máximas' },
        { t: 'Axilas', d: 'Una de las zonas con resultado más rápido — a menudo eficaz en pocas sesiones' },
        { t: 'Cara y cuello', d: 'Labio superior, mentón, mejillas y zona del cuello, con precisión extrema' },
        { t: 'Espalda y pecho', d: 'Tratamiento de zonas extensas en el cuerpo masculino, con equipo adecuado' },
        { t: 'Brazos y antebrazos', d: 'Resultados graduales y permanentes en esta zona de alta densidad capilar' },
      ],
    },
    'pilates-clinico': {
      tagline: 'Pilates con supervisión de fisioterapeuta — ejercicio adaptado, siempre seguro',
      description: 'El pilates clínico es una modalidad de ejercicio terapéutico, centrada en la prevención y rehabilitación de lesiones musculoesqueléticas. Se distingue del pilates tradicional por ser impartido exclusivamente por fisioterapeutas, que adaptan los ejercicios a la condición clínica y a las necesidades específicas de cada persona.',
      prices: [
        { label: 'Cuota mensual (1x/semana)', value: '35€' },
        { label: 'Cuota mensual (2x/semana)', value: '60€' },
        { label: 'Personalizado (50min)', value: '45€' },
      ],
      sub: [
        { t: 'Dolor lumbar y hernias', d: 'Fortalecimiento del core profundo para estabilizar la columna y reducir el dolor crónico' },
        { t: 'Posoperatorio', d: 'Reintegración progresiva del movimiento tras cirugía ortopédica, abdominal u otra' },
        { t: 'Embarazo y posparto', d: 'Ejercicios adaptados a cada fase — preparación al parto y recuperación después' },
        { t: 'Osteoporosis', d: 'Entrenamiento de fuerza y equilibrio de bajo impacto articular, para prevenir caídas y fracturas' },
        { t: 'Escoliosis y desviaciones posturales', d: 'Corrección progresiva de patrones posturales alterados con ejercicio supervisado' },
        { t: 'Rendimiento y prevención', d: 'Para quien quiere mejorar la conciencia corporal y prevenir lesiones en el deporte' },
      ],
    },
    'hipopressivos': {
      tagline: 'Gimnasia abdominal hipopresiva — fortalecer el core y el suelo pélvico de dentro hacia fuera',
      description: 'Los hipopresivos son un conjunto de técnicas posturales y respiratorias que reducen la presión dentro de la cavidad abdominal. A diferencia de los abdominales tradicionales, activan de forma refleja la musculatura profunda del core y del suelo pélvico, siendo especialmente indicados en el posparto, en la prevención de hernias y en la mejora de la postura.',
      prices: [
        { label: 'Cuota mensual (1x/semana)', value: '35€' },
        { label: 'Cuota mensual (2x/semana)', value: '60€' },
      ],
      sub: [
        { t: 'Posparto', d: 'Recuperación de la pared abdominal y del suelo pélvico tras el embarazo, con progresión segura' },
        { t: 'Suelo pélvico', d: 'Fortalecimiento reflejo que ayuda en la prevención y el control de la incontinencia urinaria' },
        { t: 'Diástasis abdominal', d: 'Reeducación de la pared abdominal para reaproximar los rectos y reducir la diástasis' },
        { t: 'Postura y core', d: 'Mejora de la postura, la conciencia corporal y la estabilidad central del tronco' },
        { t: 'Prevención de hernias', d: 'Reducción de la presión intraabdominal para prevenir hernias y prolapsos' },
        { t: 'Complemento al entrenamiento', d: 'Base de estabilidad profunda que potencia el rendimiento en otras actividades físicas' },
      ],
    },
    'personal-trainer': {
      tagline: 'Entrenamiento personalizado y supervisado — sus objetivos, un plan a su medida',
      description: 'El acompañamiento por entrenador personal garantiza un plan de entrenamiento individualizado, ajustado a su condición física, objetivos y disponibilidad. Con supervisión cercana en cada sesión, el ejercicio se ejecuta con técnica correcta y progresión adecuada — de forma segura, motivadora y eficaz.',
      prices: [
        { label: 'Sesión', value: '45€' },
        { label: 'Pack (por sesión)', value: '40€' },
      ],
      sub: [
        { t: 'Pérdida de peso', d: 'Planes que combinan entrenamiento y gasto energético para una pérdida de peso saludable y sostenible' },
        { t: 'Fuerza y tonificación', d: 'Programas de refuerzo muscular adaptados a su nivel, del principiante al avanzado' },
        { t: 'Condición física general', d: 'Mejora de la resistencia, la movilidad y la energía para el día a día' },
        { t: 'Retomar la actividad', d: 'Reintroducción gradual del ejercicio para quien estuvo parado o viene de una lesión' },
        { t: 'Preparación deportiva', d: 'Entrenamiento específico para mejorar el rendimiento en una modalidad u objetivo' },
        { t: 'Motivación y acompañamiento', d: 'Supervisión cercana y responsabilización para mantener la constancia y los resultados' },
      ],
    },
  },
};

// Returns a localized clone of SERVICES with PT as fallback.
function getServices(lang) {
  if (lang === 'PT' || !SERVICES_I18N[lang]) return SERVICES;
  const overlay = SERVICES_I18N[lang];
  const out = {};
  for (const catKey of Object.keys(SERVICES)) {
    const src = SERVICES[catKey];
    const tr = overlay[catKey] || {};
    out[catKey] = {
      label: tr.label || src.label,
      intro: tr.intro || src.intro,
      items: src.items.map(it => {
        const itTr = (tr.items && tr.items[it.slug]) || {};
        return { ...it, name: itTr.name || it.name, blurb: itTr.blurb || it.blurb };
      }),
    };
  }
  return out;
}

// Returns a localized clone of SERVICE_DETAIL with PT as fallback.
function getServiceDetail(lang) {
  if (lang === 'PT' || !SERVICE_DETAIL_I18N[lang]) return SERVICE_DETAIL;
  const overlay = SERVICE_DETAIL_I18N[lang];
  const out = {};
  for (const slug of Object.keys(SERVICE_DETAIL)) {
    const src = SERVICE_DETAIL[slug];
    const tr = overlay[slug];
    if (!tr) { out[slug] = src; continue; }
    out[slug] = {
      tagline: tr.tagline || src.tagline,
      description: tr.description || src.description,
      prices: tr.prices || src.prices,
      sub: tr.sub || src.sub,
      tech: src.tech,
    };
  }
  return out;
}

Object.assign(window, { SERVICES_I18N, SERVICE_DETAIL_I18N, getServices, getServiceDetail });
