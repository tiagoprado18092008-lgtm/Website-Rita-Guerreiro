// i18n overlay for SERVICES and SERVICE_DETAIL — EN/FR translations.
// PT comes from data.jsx; this file provides EN/FR strings keyed by slug/category id.
// getServices(lang) / getServiceDetail(lang) return localized clones of the catalog.

const SERVICES_I18N = {
  EN: {
    fisioterapia: {
      label: 'Physiotherapy',
      intro: 'Individual assessment and treatment of pain, injury and dysfunction — for children and adults',
      items: {
        fisioterapia: { name: 'General Physiotherapy', blurb: 'Physiotherapy for children and adults — assessment and treatment of pain, injury or musculoskeletal dysfunction' },
        mesoterapia: { name: 'TMJ Physiotherapy / Mesotherapy', blurb: 'Specialised treatment of the temporomandibular joint and mesotherapy for localised pain and inflammation' },
        acupuntura: { name: 'Vestibular Physiotherapy / Acupuncture', blurb: 'Vestibular rehabilitation for dizziness and vertigo, and acupuncture for pain, stress and general wellbeing' },
      },
    },
    saude: {
      label: 'Health Care',
      intro: 'Specialised clinical treatments for health and wellbeing',
      items: {
        nutricao: { name: 'Nutrition', blurb: 'Personalised nutritional consultation for weight loss, performance or general health' },
        'terapia-bowen': { name: 'Bowen Therapy', blurb: 'Gentle neuromuscular technique for children and adults — chronic pain, tension and balance' },
        psicologia: { name: 'Psychology', blurb: 'Psychological support for children, adolescents and adults' },
      },
    },
    massagens: {
      label: 'Massages',
      intro: 'Manual therapies to release tension, recover and restore balance',
      items: {
        'massagem-relaxamento': { name: 'Relaxation Massage', blurb: 'Full-body massage to relieve built-up tension and restore balance' },
        'massagem-criancas': { name: 'Children’s Massage', blurb: 'Gentle massage tailored to the youngest — relaxation, sleep and child wellbeing' },
        'massagem-assinatura-rg': { name: 'RG Signature Massage', blurb: 'The signature massage of the Rita Guerreiro clinic — 80 minutes of a unique experience' },
        'massagem-profunda': { name: 'Deep Tissue Massage', blurb: 'Deep tissue and sport massage — deep muscular work for recovery and performance' },
        'massagem-pre-pos-natal': { name: 'Pre/Post-Natal Massage', blurb: 'Massage adapted for pregnant women and new mothers — comfort, relaxation and recovery' },
        'massagem-sacro-craniana': { name: 'Craniosacral Massage', blurb: 'Gentle technique on the craniosacral system — relief from tension, headaches and stress' },
        'drenagem-linfatica': { name: 'Manual Lymphatic Drainage', blurb: 'Vodder method to reduce swelling, improve circulation and detoxify the body' },
        'massagem-terapeutica': { name: 'Post-Op Drainage / Therapeutic', blurb: 'Post-operative lymphatic drainage and therapeutic massage for recovery and muscle pain' },
      },
    },
    holisticas: {
      label: 'Holistic',
      intro: 'Holistic therapies for balance of body and mind',
      items: {
        reflexologia: { name: 'Reflexology', blurb: 'Stimulation of reflex points on the feet to rebalance the body’s systems' },
        shiatsu: { name: 'Shiatsu', blurb: 'Japanese technique of pressure along energy meridians — balance and vitality' },
        'massagem-indiana': { name: 'Indian Massage', blurb: 'Indian Head Massage — head, neck and shoulder massage for stress and tension' },
        'head-spa': { name: 'Head Spa', blurb: 'Deep scalp treatment — cleansing, nourishment and total relaxation' },
      },
    },
    estetica: {
      label: 'Aesthetics & Treatments',
      intro: 'Aesthetic care and treatment packages with advanced technology',
      items: {
        facial: { name: 'Facials', blurb: 'Skin cleansing, extraction and personalised facials for healthy, radiant skin' },
        'pacotes-tratamento': { name: 'Treatment Packages', blurb: 'Cavitation, radiofrequency, lipolaser, electrostimulation and pressotherapy' },
        'depilacao-laser': { name: 'Laser Hair Removal', blurb: 'Permanent laser hair removal — for women and men, all body areas' },
        'pilates-clinico': { name: 'Clinical Pilates', blurb: 'Pilates supervised by a physiotherapist, adapted to injuries and rehabilitation' },
      },
    },
  },
  FR: {
    fisioterapia: {
      label: 'Physiothérapie',
      intro: 'Évaluation et traitement individuel de la douleur, des blessures et des dysfonctionnements — pour enfants et adultes',
      items: {
        fisioterapia: { name: 'Physiothérapie générale', blurb: 'Physiothérapie pour enfants et adultes — évaluation et traitement de la douleur, blessure ou dysfonction musculo-squelettique' },
        mesoterapia: { name: 'Physiothérapie ATM / Mésothérapie', blurb: 'Traitement spécialisé de l’articulation temporo-mandibulaire et mésothérapie pour douleur et inflammation localisées' },
        acupuntura: { name: 'Physiothérapie vestibulaire / Acupuncture', blurb: 'Réadaptation vestibulaire pour vertiges et acupuncture pour la douleur, le stress et le bien-être général' },
      },
    },
    saude: {
      label: 'Soins de santé',
      intro: 'Traitements cliniques spécialisés pour la santé et le bien-être',
      items: {
        nutricao: { name: 'Nutrition', blurb: 'Consultation nutritionnelle personnalisée pour la perte de poids, la performance ou la santé générale' },
        'terapia-bowen': { name: 'Thérapie Bowen', blurb: 'Technique neuromusculaire douce pour enfants et adultes — douleur chronique, tension et équilibre' },
        psicologia: { name: 'Psychologie', blurb: 'Accompagnement psychologique pour enfants, adolescents et adultes' },
      },
    },
    massagens: {
      label: 'Massages',
      intro: 'Thérapies manuelles pour libérer les tensions, récupérer et retrouver l’équilibre',
      items: {
        'massagem-relaxamento': { name: 'Massage relaxant', blurb: 'Massage du corps entier pour soulager les tensions accumulées et restaurer l’équilibre' },
        'massagem-criancas': { name: 'Massage pour enfants', blurb: 'Massage doux et adapté aux plus petits — relaxation, sommeil et bien-être infantile' },
        'massagem-assinatura-rg': { name: 'Massage Signature RG', blurb: 'Le massage d’exception de la clinique Rita Guerreiro — 80 minutes d’une expérience unique' },
        'massagem-profunda': { name: 'Massage profond', blurb: 'Deep tissue et sport massage — travail musculaire profond pour la récupération et la performance' },
        'massagem-pre-pos-natal': { name: 'Massage pré/post-natal', blurb: 'Massage adapté aux femmes enceintes et aux jeunes mères — confort, relaxation et récupération' },
        'massagem-sacro-craniana': { name: 'Massage crânio-sacré', blurb: 'Technique douce sur le système crânio-sacré — soulagement des tensions, céphalées et stress' },
        'drenagem-linfatica': { name: 'Drainage lymphatique manuel', blurb: 'Méthode Vodder pour réduire le gonflement, améliorer la circulation et détoxifier l’organisme' },
        'massagem-terapeutica': { name: 'Drainage post-opératoire / Thérapeutique', blurb: 'Drainage lymphatique post-opératoire et massage thérapeutique pour récupération et douleur musculaire' },
      },
    },
    holisticas: {
      label: 'Holistique',
      intro: 'Thérapies holistiques pour l’équilibre du corps et de l’esprit',
      items: {
        reflexologia: { name: 'Réflexologie', blurb: 'Stimulation des points réflexes des pieds pour rééquilibrer les systèmes de l’organisme' },
        shiatsu: { name: 'Shiatsu', blurb: 'Technique japonaise de pression sur les méridiens énergétiques — équilibre et vitalité' },
        'massagem-indiana': { name: 'Massage indien', blurb: 'Indian Head Massage — massage de la tête, du cou et des épaules pour le stress et la tension' },
        'head-spa': { name: 'Head Spa', blurb: 'Traitement profond du cuir chevelu — nettoyage, nutrition et détente totale' },
      },
    },
    estetica: {
      label: 'Esthétique & Traitements',
      intro: 'Soins esthétiques et forfaits de traitement avec technologie avancée',
      items: {
        facial: { name: 'Soins du visage', blurb: 'Nettoyage de peau, extraction et soin facial personnalisé pour une peau saine et éclatante' },
        'pacotes-tratamento': { name: 'Forfaits de traitement', blurb: 'Cavitation, radiofréquence, lipolaser, électrostimulation et pressothérapie' },
        'depilacao-laser': { name: 'Épilation au laser', blurb: 'Épilation définitive au laser — femme et homme, toutes les zones du corps' },
        'pilates-clinico': { name: 'Pilates clinique', blurb: 'Pilates supervisé par un physiothérapeute, adapté aux blessures et à la réadaptation' },
      },
    },
  },
};

const SERVICE_DETAIL_I18N = {
  EN: {
    fisioterapia: {
      tagline: 'Assessment, treatment and recovery for pain or injury — for children and adults',
      description: 'Our physiotherapy is designed person by person. We start with a careful assessment — we listen to your story, understand the source of pain or dysfunction, and from there we build a realistic plan for your recovery. We work with children and adults in sessions of 50 to 80 minutes, combining manual therapy, therapeutic exercise and, whenever appropriate, integration with other services at the centre.',
      prices: [
        { label: 'Children (50min)', value: '50€' },
        { label: 'Adults (50min)', value: '45€' },
        { label: 'Adults (80min)', value: '90€' },
      ],
      sub: [
        { t: 'Lower back and neck pain', d: 'Postural assessment, manual therapy and progressive exercise for chronic or acute spinal pain' },
        { t: 'Post-injury recovery', d: 'Support from the acute phase through to return to normal, sporting or work activity' },
        { t: 'Sports physiotherapy', d: 'Prevention and treatment of sport-related injuries, with a focus on safe return to practice' },
        { t: 'Post-operative', d: 'Reduction of swelling, mobility gains and strength recovery after orthopaedic or other surgery' },
        { t: 'Pregnancy and postpartum', d: 'Prevention and relief of discomfort during pregnancy and pelvic floor recovery after birth' },
        { t: 'Paediatric physiotherapy', d: 'Treatment adapted to children at different stages of development' },
      ],
    },
    mesoterapia: {
      tagline: 'Specialised TMJ treatment and mesotherapy for localised pain and inflammation',
      description: 'TMJ Physiotherapy treats dysfunctions of the temporomandibular joint — pain, locking, clicking or grinding of the jaw — with a specialised manual approach. Mesotherapy consists of applying micro-injections of active substances directly into the superficial layers of the skin or subcutaneous tissue, with localised action for joint pain, contractures and aesthetic treatments.',
      prices: [
        { label: 'TMJ Physiotherapy (50min)', value: '55€' },
        { label: 'Mesotherapy (50min)', value: '50€' },
      ],
      sub: [
        { t: 'TMJ — Temporomandibular joint', d: 'Treatment of pain, locking, clicking or grinding in the jaw and relief of associated headaches' },
        { t: 'Joint pain and inflammation', d: 'Localised application of anti-inflammatories for quick relief in knees, shoulders or spine' },
        { t: 'Muscle contractures', d: 'Release of persistent tension points resistant to other techniques' },
        { t: 'Cellulite and localised fat', d: 'Improvement of local circulation and reduction of fat accumulation in specific areas' },
        { t: 'Skin laxity', d: 'Stimulation of collagen production for firmness and skin tone' },
        { t: 'Facial rejuvenation', d: 'Deep hydration and skin revitalisation with hyaluronic acid and vitamins' },
      ],
    },
    acupuntura: {
      tagline: 'Vestibular rehabilitation and acupuncture — balance, pain relief and wellbeing in every session',
      description: 'Vestibular Physiotherapy treats dizziness, vertigo and imbalance through specific manoeuvres and rehabilitation exercises. Acupuncture is one of the pillars of Traditional Chinese Medicine with growing evidence in managing pain, stress, anxiety and insomnia. At Rita Guerreiro, every session is preceded by an overall health assessment for a truly personalised intervention.',
      prices: [{ label: 'Per session (50min)', value: '45€' }],
      sub: [
        { t: 'Vertigo and dizziness', d: 'Repositioning manoeuvres and vestibular rehabilitation exercises for balance' },
        { t: 'Chronic pain', d: 'Lower back pain, neck pain, headaches and joint pain with proven response to acupuncture' },
        { t: 'Stress and anxiety', d: 'Regulation of the autonomic nervous system to reduce tension, irritability and mental fatigue' },
        { t: 'Insomnia', d: 'Treatment of the underlying causes of disturbed sleep through energy balance' },
        { t: 'Digestive health', d: 'Irritable bowel, reflux and other imbalances of the digestive system' },
        { t: 'Fertility and menstrual cycle', d: 'Hormonal regulation and support in fertility processes or menstrual discomfort' },
      ],
    },
    nutricao: {
      tagline: 'Nutrition that works for your life — no restrictive diets or off-the-shelf solutions',
      description: 'Nutrition consultation at Rita Guerreiro starts with understanding who you are: your habits, your pace, what works and what doesn’t. From there we create a personalised, realistic and sustainable meal plan. We work on weight loss, muscle gain, digestive health, sports nutrition and meal plans adapted to specific clinical conditions.',
      prices: [{ label: 'Consultation 30-50min', value: '40€ / 45€' }],
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
      tagline: 'A gentle technique with surprising results — for children and adults',
      description: 'Bowen Therapy is a holistic, non-invasive approach that works on the neuromuscular system through precise movements on muscles, tendons and fascia. The touch is gentle — without force or manipulation — and the effects are often deep and long-lasting. Suitable for all ages, including children from 5 years old.',
      prices: [
        { label: 'Children 5-12 (60min)', value: '20€ / 30€' },
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
      tagline: 'Specialised psychological support for children, adolescents and adults',
      description: 'Mental health is as important as physical health — and deserves the same attention and care. At Rita Guerreiro, the psychology consultation is a safe, confidential and non-judgmental space where you can explore what concerns you with the support of a specialised professional. We work with children, adolescents and adults at different moments in life.',
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
      tagline: 'For when the body asks to stop — and the mind needs to breathe',
      description: 'The Relaxation Massage is a space of complete pause. With a gentle and continuous rhythm, we work the whole body to release accumulated tension, relieve muscular overload and induce a state of deep wellbeing. The effects go far beyond the immediate sensation — regular massage reduces cortisol, improves sleep and has a positive impact on the immune system.',
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
      tagline: 'Gentle massage tailored to the youngest — relaxation, sleep and child wellbeing',
      description: 'Massage for children is a gentle, safe technique adapted to the needs of the youngest. It promotes relaxation, improves sleep, reduces anxiety and strengthens the emotional bond. Delivered by professionals with specific training in paediatric massage, each session is adapted to the age and needs of the child.',
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
      tagline: 'The flagship massage experience of the Rita Guerreiro clinic — 80 unique minutes',
      description: 'The RG Signature Massage is the ultimate experience the Rita Guerreiro clinic has to offer. An 80-minute session carefully designed to combine the best techniques of deep relaxation, muscle work and overall wellbeing. A personalised experience from start to finish.',
      prices: [{ label: 'Full session (80min)', value: '75€' }],
      sub: [
        { t: 'Total relaxation', d: 'A combination of gentle techniques to induce a state of deep calm' },
        { t: 'Muscle work', d: 'Release of accumulated tension with techniques adapted to each area of the body' },
        { t: 'Overall wellbeing', d: 'A holistic approach that takes care of body and mind together' },
        { t: 'Personalised experience', d: 'Each session is adapted to the client’s preferences and needs' },
        { t: 'A unique moment', d: '80 minutes of dedicated focus on your wellbeing' },
        { t: 'Ideal as a gift', d: 'The perfect choice for a special gift or a moment of self-care' },
      ],
    },
    'massagem-profunda': {
      tagline: 'Deep tissue and sport massage — deep muscle work for real recovery',
      description: 'The Deep Tissue Massage goes to the heart of muscle tension. Using deep tissue and sport massage techniques, we work the deeper layers of the muscle to release chronic contractures, speed up recovery after intense exercise and treat persistent pain. Recommended for athletes and for anyone with deep muscle tension resistant to other approaches.',
      prices: [
        { label: '50 minutes', value: '45€' },
        { label: '80 minutes', value: '75€' },
      ],
      sub: [
        { t: 'Contractures and spasms', d: 'Release of muscle knots and zones of deep tension resistant to spontaneous relaxation' },
        { t: 'Post-exercise soreness', d: 'Accelerated muscle recovery and reduced inflammation after intense training' },
        { t: 'Piriformis syndrome and sciatica', d: 'Specific work on glute and deep musculature to relieve sciatic pain' },
        { t: 'Neck and shoulder tension', d: 'The area most affected by sedentary work — a deep and effective approach' },
        { t: 'Tendinitis and overuse', d: 'Treatment of chronic tendinitis and overuse from repetitive strain' },
        { t: 'Sports recovery', d: 'Specific protocol for athletes — before or after competition or training' },
      ],
    },
    'massagem-pre-pos-natal': {
      tagline: 'Care and comfort for pregnant women and new mothers — a moment just for you',
      description: 'The Pre/Post-Natal Massage is specifically adapted to the body’s transformations during pregnancy and after birth. It relieves lower back pain, swelling and muscle tension accumulated during pregnancy. Postpartum, it helps with the mother’s physical and emotional recovery, at a time of so many changes and demands.',
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
      tagline: 'Gentle technique on the craniosacral system — deep relief without effort',
      description: 'Craniosacral Massage is an extremely gentle manual technique that works on the craniosacral system — the link between the sacrum and the skull through the spine. With an almost imperceptible touch, it releases restrictions in the membranes and cerebrospinal fluid, promoting balance of the central nervous system and relief from accumulated tension.',
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
      tagline: 'Detoxify, reduce swelling and revitalise — with the Vodder manual technique',
      description: 'Manual Lymphatic Drainage according to the Vodder Method is the international reference technique for stimulating the lymphatic system. Through gentle, rhythmic and precise movements on the skin, it activates lymphatic circulation, reduces oedema and promotes the elimination of toxins. Suitable both in clinical and wellbeing contexts.',
      prices: [
        { label: 'Manual (50min)', value: '45€ / 50€' },
        { label: 'Post-Op 50min', value: '55€' },
        { label: 'Post-Op 80min', value: '70€' },
      ],
      sub: [
        { t: 'Fluid retention', d: 'Reduction of swelling in legs, ankles and belly caused by water retention' },
        { t: 'Post-surgery and healing', d: 'Faster recovery, reduced oedema and improved quality of scars' },
        { t: 'Lymphoedema', d: 'Management of primary or secondary lymphoedema with specialised Vodder Method technique' },
        { t: 'Cellulite', d: 'Improved skin appearance and local microcirculation in cellulite-affected areas' },
        { t: 'Immune system', d: 'Stimulation of the body’s natural defences and elimination of metabolic waste' },
        { t: 'Wellbeing and lightness', d: 'A feeling of a lighter body, relieved tired legs and a more relaxed mind' },
      ],
    },
    'massagem-terapeutica': {
      tagline: 'Post-operative drainage and therapeutic massage — recovery and pain relief',
      description: 'Post-operative Lymphatic Drainage is essential for fast, complication-free recovery after surgery — it reduces oedema, improves scars and restores circulation. Therapeutic Massage works on areas of chronic tension, contractures and persistent muscle pain, with techniques adapted to each person’s condition.',
      prices: [
        { label: 'Therapeutic 30-50min', value: '30€ – 45€' },
        { label: 'Post-Op Drainage 50min', value: '55€' },
        { label: 'Post-Op Drainage 80min', value: '70€' },
      ],
      sub: [
        { t: 'Post-surgery recovery', d: 'Reduction of oedema and improvement of scar quality after surgical intervention' },
        { t: 'Contractures and spasms', d: 'Release of muscle knots and zones of deep tension resistant to relaxation' },
        { t: 'Post-exercise soreness', d: 'Accelerated muscle recovery and reduced inflammation after intense training' },
        { t: 'Neck and shoulder tension', d: 'Deep approach to the area most affected by sedentary work and stress' },
        { t: 'Tendinitis and overuse', d: 'Treatment of chronic tendinitis and overuse from repetitive strain' },
        { t: 'Sports recovery', d: 'Specific protocol for athletes — before or after competition or training' },
      ],
    },
    reflexologia: {
      tagline: 'Stimulation of reflex points on the feet to rebalance the body’s systems',
      description: 'Reflexology is a natural therapy that works on reflex points located on the feet, hands or ears, corresponding to different organs and systems of the body. Through precise and rhythmic pressure, it stimulates organic rebalance, relieves tension and promotes general wellbeing. A non-invasive technique with deep effects.',
      prices: [{ label: 'Per session (50min)', value: '45€' }],
      sub: [
        { t: 'Stress and anxiety', d: 'Stimulation of the parasympathetic nervous system to reduce tension and anxiety' },
        { t: 'Insomnia', d: 'Sleep regulation through the balance of the body’s systems' },
        { t: 'Headaches', d: 'Work on reflex points corresponding to the head and nervous system' },
        { t: 'Digestive health', d: 'Stimulation of digestive system reflexes to improve intestinal function' },
        { t: 'Circulation', d: 'Improvement of blood and lymphatic circulation through reflex stimulation' },
        { t: 'General wellbeing', d: 'A session of deep balance and relaxation for body and mind' },
      ],
    },
    shiatsu: {
      tagline: 'Japanese technique of pressure on energy meridians — balance and vitality',
      description: 'Shiatsu is a Japanese therapy that applies pressure with the thumbs, palms and elbows on the body’s energy meridians. Based on the principles of Traditional Chinese Medicine, it promotes the flow of vital energy (Ki), relieves tension and pain, and restores physical and emotional balance. Delivered over comfortable clothing, without oils.',
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
      tagline: 'Indian Head Massage — deep relaxation of head, neck and shoulders',
      description: 'Indian Massage, or Indian Head Massage, is a technique of Ayurvedic origin focused on the head, neck, shoulders and face. It works on the chakras of the upper body to release accumulated tension, relieve headaches, improve scalp circulation and induce a state of deep relaxation. Performed seated, without the need to undress.',
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
      tagline: 'Deep scalp treatment — cleansing, nourishment and total relaxation',
      description: 'The Head Spa is a luxury scalp treatment that combines deep cleansing, intensive nourishment and a relaxing massage. It removes excess sebum and impurities, balances the scalp’s pH, strengthens hair follicles and provides an unparalleled feeling of freshness and lightness. Visible results in the hair come together with a state of deep relaxation.',
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
      tagline: 'Skin cleansing, extraction and personalised facials for healthy, radiant skin',
      description: 'Our facial treatments are delivered by specialised professionals, with high-quality products adapted to each client’s skin type. From the simplest skin cleansing to the most complete personalised facial — each session is designed to maximise visible results and skin wellbeing.',
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
    'pacotes-tratamento': {
      tagline: 'Advanced technology for your body — cavitation, radiofrequency, lipolaser and more',
      description: 'Our treatment packages combine the most advanced body aesthetic technologies: cavitation, radiofrequency, lipolaser, electrostimulation and pressotherapy. Each treatment is delivered by certified professionals, with prior assessment and a personalised protocol to maximise results.',
      prices: [
        { label: 'Cav./Radiofreq./Lipolaser/Electrostim. (50min)', value: '50€' },
        { label: '10-session package', value: '450€' },
        { label: 'Pressotherapy 30-50min', value: '25€ / 35€' },
      ],
      sub: [
        { t: 'Cavitation', d: 'Focused ultrasound for destruction of fat cells in localised areas' },
        { t: 'Radiofrequency', d: 'Stimulation of collagen and elastin for firmer skin and reduced laxity' },
        { t: 'Lipolaser', d: 'Low-level laser for mobilisation of localised fat and body shaping' },
        { t: 'Electrostimulation', d: 'Passive muscle contraction for toning and recovery of specific areas' },
        { t: 'Pressotherapy', d: 'Mechanical lymphatic drainage via sequential pressure — swelling, circulation and recovery' },
        { t: '10-session package', d: 'Save with the 10-session package — ideal for progressive and lasting results' },
      ],
    },
    'depilacao-laser': {
      tagline: 'Permanent hair removal with state-of-the-art technology — for women and men',
      description: 'Laser hair removal is today the most effective and lasting solution for eliminating unwanted hair. At Rita Guerreiro we use cutting-edge equipment, with technology adapted to different skin tones and hair types. The process is progressive — at each session the hair becomes finer and sparser, until permanent elimination.',
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
      tagline: 'Mindful movement supervised by a physiotherapist — a strong, pain-free body',
      description: 'Clinical Pilates differs from conventional Pilates in being supervised by a physiotherapist and adapted to specific clinical conditions — lower back pain, hernias, post-surgery, pregnancy, osteoporosis or any other limitation. At Rita Guerreiro, each programme is designed individually with progressive exercises.',
      prices: [
        { label: 'Monthly fee', value: '35€ / 60€' },
        { label: 'Annual insurance', value: '10€' },
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
  },
  FR: {
    fisioterapia: {
      tagline: 'Évaluation, traitement et récupération en cas de douleur ou de blessure — pour enfants et adultes',
      description: 'Notre physiothérapie est conçue personne par personne. Nous commençons par une évaluation soignée — nous écoutons votre histoire, comprenons l’origine de la douleur ou du dysfonctionnement et, à partir de là, nous construisons un plan réaliste pour votre récupération. Nous travaillons avec des enfants et des adultes, lors de séances de 50 à 80 minutes, en combinant thérapie manuelle, exercice thérapeutique et, lorsque cela a du sens, l’intégration avec d’autres services du centre.',
      prices: [
        { label: 'Enfants (50min)', value: '50€' },
        { label: 'Adultes (50min)', value: '45€' },
        { label: 'Adultes (80min)', value: '90€' },
      ],
      sub: [
        { t: 'Douleur lombaire et cervicale', d: 'Évaluation posturale, thérapie manuelle et exercice progressif pour la douleur chronique ou aiguë du dos' },
        { t: 'Récupération post-blessure', d: 'Accompagnement de la phase aiguë jusqu’au retour à l’activité normale, sportive ou professionnelle' },
        { t: 'Physiothérapie sportive', d: 'Prévention et traitement des blessures liées au sport, avec un accent sur le retour sûr à la pratique' },
        { t: 'Post-opératoire', d: 'Réduction de l’œdème, gain de mobilité et récupération de la force après chirurgie orthopédique ou autre' },
        { t: 'Grossesse et post-partum', d: 'Prévention et soulagement des inconforts pendant la grossesse et récupération du plancher pelvien après l’accouchement' },
        { t: 'Physiothérapie pédiatrique', d: 'Traitement adapté aux enfants à différentes étapes du développement' },
      ],
    },
    mesoterapia: {
      tagline: 'Traitement spécialisé de l’ATM et mésothérapie pour douleur et inflammation localisées',
      description: 'La Physiothérapie ATM traite les dysfonctions de l’articulation temporo-mandibulaire — douleur, blocage, claquement ou grincement de la mâchoire — avec une approche manuelle spécialisée. La Mésothérapie consiste en l’application de micro-injections de substances actives directement dans les couches superficielles de la peau ou du tissu sous-cutané, avec une action localisée sur la douleur articulaire, les contractures et les traitements esthétiques.',
      prices: [
        { label: 'Physiothérapie ATM (50min)', value: '55€' },
        { label: 'Mésothérapie (50min)', value: '50€' },
      ],
      sub: [
        { t: 'ATM — Articulation temporo-mandibulaire', d: 'Traitement de la douleur, blocage, claquements ou grincements de la mâchoire et soulagement des céphalées associées' },
        { t: 'Douleur et inflammation articulaire', d: 'Application localisée d’anti-inflammatoires pour un soulagement rapide des genoux, épaules ou colonne' },
        { t: 'Contractures musculaires', d: 'Libération de points de tension persistants résistants aux autres techniques' },
        { t: 'Cellulite et graisse localisée', d: 'Amélioration de la circulation locale et réduction des accumulations de graisse dans des zones spécifiques' },
        { t: 'Relâchement cutané', d: 'Stimulation de la production de collagène pour la fermeté et la tonicité de la peau' },
        { t: 'Rajeunissement facial', d: 'Hydratation profonde et revitalisation de la peau du visage avec acide hyaluronique et vitamines' },
      ],
    },
    acupuntura: {
      tagline: 'Réadaptation vestibulaire et acupuncture — équilibre, douleur et bien-être à chaque séance',
      description: 'La Physiothérapie Vestibulaire traite les vertiges, étourdissements et déséquilibres par des manœuvres spécifiques et des exercices de réadaptation. L’Acupuncture est un des piliers de la Médecine Traditionnelle Chinoise avec une évidence croissante dans la gestion de la douleur, du stress, de l’anxiété et de l’insomnie. À la Rita Guerreiro, chaque séance est précédée d’une évaluation de l’état de santé global pour une intervention véritablement personnalisée.',
      prices: [{ label: 'Par séance (50min)', value: '45€' }],
      sub: [
        { t: 'Vertiges et étourdissements', d: 'Manœuvres de repositionnement et exercices de réadaptation vestibulaire pour l’équilibre' },
        { t: 'Douleur chronique', d: 'Lombalgies, cervicalgies, céphalées et douleurs articulaires avec réponse prouvée à l’acupuncture' },
        { t: 'Stress et anxiété', d: 'Régulation du système nerveux autonome pour réduire la tension, l’irritabilité et la fatigue mentale' },
        { t: 'Insomnie', d: 'Traitement des causes sous-jacentes du sommeil perturbé par l’équilibre énergétique' },
        { t: 'Santé digestive', d: 'Colon irritable, reflux et autres déséquilibres du système digestif' },
        { t: 'Fertilité et cycle menstruel', d: 'Régulation hormonale et soutien dans les processus de fertilité ou inconforts menstruels' },
      ],
    },
    nutricao: {
      tagline: 'Une alimentation qui fonctionne pour votre vie — sans régimes restrictifs ni solutions toutes faites',
      description: 'La consultation de nutrition à la Rita Guerreiro commence par comprendre qui vous êtes : vos habitudes, votre rythme, ce qui fonctionne et ce qui ne fonctionne pas. À partir de là, nous créons un plan alimentaire personnalisé, réaliste et durable. Nous travaillons la perte de poids, la prise de masse musculaire, la santé digestive, la nutrition sportive et l’alimentation adaptée à des conditions cliniques spécifiques.',
      prices: [{ label: 'Consultation 30-50min', value: '40€ / 45€' }],
      sub: [
        { t: 'Perte de poids durable', d: 'Un plan alimentaire réel adapté à votre style de vie — pour perdre et maintenir' },
        { t: 'Nutrition sportive', d: 'Optimisation de l’alimentation pour la performance, la récupération et la composition corporelle' },
        { t: 'Santé digestive', d: 'Soutien nutritionnel pour le colon irritable, intolérances, reflux et autres déséquilibres' },
        { t: 'Diabète et cholestérol', d: 'Gestion nutritionnelle des pathologies métaboliques avec suivi régulier' },
        { t: 'Grossesse et allaitement', d: 'Alimentation adaptée à chaque phase, pour la santé de la mère et du bébé' },
        { t: 'Alimentation végétarienne et végane', d: 'Garantie d’équilibre nutritionnel dans les régimes à base de plantes sans carences' },
      ],
    },
    'terapia-bowen': {
      tagline: 'Une technique douce aux résultats surprenants — pour enfants et adultes',
      description: 'La Thérapie Bowen est une approche holistique et non invasive qui agit sur le système neuromusculaire par des mouvements précis sur les muscles, tendons et fascias. Le toucher est doux — sans force ni manipulation — et les effets sont souvent profonds et durables. Indiquée à tous les âges, y compris les enfants à partir de 5 ans.',
      prices: [
        { label: 'Enfants 5-12 ans (60min)', value: '20€ / 30€' },
        { label: 'Adultes +12 ans (60min)', value: '60€' },
      ],
      sub: [
        { t: 'Douleur lombaire et cervicale', d: 'Libération des tensions profondes de la colonne avec une technique entièrement douce' },
        { t: 'Fibromyalgie', d: 'Approche efficace pour la gestion de la douleur diffuse et de la fatigue chronique liées à la fibromyalgie' },
        { t: 'Tension et stress chronique', d: 'Activation du système nerveux parasympathique pour un état de calme et de régénération' },
        { t: 'Blessures sportives', d: 'Récupération des lésions musculaires et tendineuses avec un temps d’arrêt réduit' },
        { t: 'Migraine et céphalée de tension', d: 'Réduction de la fréquence et de l’intensité des crises par l’équilibre musculaire et fascial' },
        { t: 'Enfants', d: 'Technique parfaitement sûre et douce, indiquée à partir de 5 ans' },
      ],
    },
    psicologia: {
      tagline: 'Accompagnement psychologique spécialisé pour enfants, adolescents et adultes',
      description: 'La santé mentale est aussi importante que la santé physique — et mérite la même attention et les mêmes soins. À la Rita Guerreiro, la consultation de psychologie est un espace sûr, confidentiel et sans jugement, où vous pouvez explorer ce qui vous préoccupe avec le soutien d’un professionnel spécialisé. Nous travaillons avec des enfants, des adolescents et des adultes à différents moments de la vie.',
      prices: [{ label: 'Consultation (60min)', value: '45€' }],
      sub: [
        { t: 'Anxiété et stress', d: 'Outils pratiques pour gérer l’inquiétude excessive, la tension et les symptômes physiques associés' },
        { t: 'Dépression et humeur', d: 'Accompagnement des états dépressifs, tristesse persistante et perte de motivation' },
        { t: 'Psychologie infantile', d: 'Soutien aux enfants ayant des difficultés de comportement, d’attention, d’apprentissage ou d’adaptation' },
        { t: 'Adolescence', d: 'Soutien dans les processus d’identité, pression sociale, estime de soi et gestion émotionnelle' },
        { t: 'Deuil et perte', d: 'Accompagnement dans les processus de perte — de personnes, relations, santé ou projets de vie' },
        { t: 'Relations et communication', d: 'Travail sur les schémas relationnels, l’assertivité et les dynamiques interpersonnelles' },
      ],
    },
    'massagem-relaxamento': {
      tagline: 'Pour quand le corps demande à s’arrêter — et que l’esprit a besoin de respirer',
      description: 'Le Massage Relaxant est un espace de pause totale. Dans un rythme doux et continu, nous travaillons tout le corps pour libérer les tensions accumulées, soulager la surcharge musculaire et induire un état de bien-être profond. Les effets vont bien au-delà de la sensation immédiate — un massage régulier réduit le cortisol, améliore le sommeil et a un impact positif sur le système immunitaire.',
      prices: [
        { label: '50 minutes', value: '40€' },
        { label: '80 minutes', value: '65€' },
      ],
      sub: [
        { t: 'Tension musculaire généralisée', d: 'Libération des contractures et points de tension accumulés au quotidien' },
        { t: 'Stress et surcharge mentale', d: 'Activation du système nerveux parasympathique pour une réponse de calme profond' },
        { t: 'Troubles du sommeil', d: 'Le massage régulier améliore la qualité du sommeil et facilite l’endormissement' },
        { t: 'Céphalées de tension', d: 'Travail sur le cou, les épaules et le cuir chevelu pour soulager les céphalées de tension' },
        { t: 'Circulation et drainage', d: 'Amélioration du flux sanguin et lymphatique pour un corps plus léger et vital' },
        { t: 'Bien-être préventif', d: 'Une séance régulière est un investissement en santé — pas un luxe' },
      ],
    },
    'massagem-criancas': {
      tagline: 'Massage doux et adapté aux plus petits — relaxation, sommeil et bien-être infantile',
      description: 'Le massage pour enfants est une technique douce, sûre et adaptée aux besoins des plus jeunes. Il favorise la relaxation, améliore le sommeil, réduit l’anxiété et renforce le lien affectif. Réalisé par des professionnels avec une formation spécifique en massage pédiatrique, chaque séance est adaptée à l’âge et aux besoins de l’enfant.',
      prices: [{ label: 'Par séance (40min)', value: '30€' }],
      sub: [
        { t: 'Relaxation et sommeil', d: 'Technique douce pour favoriser un sommeil plus calme et profond chez les enfants' },
        { t: 'Anxiété infantile', d: 'Réduction du stress et de l’anxiété avec un toucher thérapeutique et un environnement sûr' },
        { t: 'Coliques et digestion', d: 'Massage abdominal doux pour soulager les coliques et l’inconfort digestif' },
        { t: 'Développement moteur', d: 'Stimulation sensorielle et motrice pour le développement sain de l’enfant' },
        { t: 'Tension musculaire', d: 'Libération des tensions accumulées chez les enfants actifs ou à la posture inadéquate' },
        { t: 'Bien-être général', d: 'Une séance de bien-être pour les enfants qui ont simplement besoin d’un moment de soin' },
      ],
    },
    'massagem-assinatura-rg': {
      tagline: 'L’expérience de massage par excellence de la clinique Rita Guerreiro — 80 minutes uniques',
      description: 'Le Massage Signature RG est l’expérience maximale que la clinique Rita Guerreiro a à offrir. Une séance de 80 minutes soigneusement conçue pour combiner les meilleures techniques de relaxation profonde, travail musculaire et bien-être global. Une expérience personnalisée, du début à la fin.',
      prices: [{ label: 'Séance complète (80min)', value: '75€' }],
      sub: [
        { t: 'Relaxation totale', d: 'Combinaison de techniques douces pour induire un état de calme profond' },
        { t: 'Travail musculaire', d: 'Libération des tensions accumulées avec des techniques adaptées à chaque zone du corps' },
        { t: 'Bien-être global', d: 'Une approche holistique qui prend soin du corps et de l’esprit simultanément' },
        { t: 'Expérience personnalisée', d: 'Chaque séance est adaptée aux préférences et aux besoins du client' },
        { t: 'Un moment unique', d: '80 minutes de dédicace exclusive à votre bien-être' },
        { t: 'Idéal à offrir', d: 'Le choix parfait pour un cadeau spécial ou un moment de soin de soi' },
      ],
    },
    'massagem-profunda': {
      tagline: 'Deep tissue et sport massage — travail musculaire profond pour une récupération réelle',
      description: 'Le Massage Profond va au cœur de la tension musculaire. Avec des techniques de deep tissue et de sport massage, nous travaillons les couches les plus profondes du muscle pour libérer les contractures chroniques, accélérer la récupération après un exercice intense et traiter la douleur persistante. Indiqué pour les sportifs et pour ceux qui ont une tension musculaire profonde résistante à d’autres approches.',
      prices: [
        { label: '50 minutes', value: '45€' },
        { label: '80 minutes', value: '75€' },
      ],
      sub: [
        { t: 'Contractures et spasmes', d: 'Libération des nœuds musculaires et zones de tension profonde résistantes à la détente spontanée' },
        { t: 'Douleur post-exercice', d: 'Accélération de la récupération musculaire et réduction de l’inflammation après un entraînement intense' },
        { t: 'Syndrome du piriforme et sciatique', d: 'Travail spécifique sur la musculature fessière et profonde pour le soulagement de la douleur sciatique' },
        { t: 'Tension cervicale et épaules', d: 'Zone la plus affectée par le travail sédentaire — approche profonde et efficace' },
        { t: 'Tendinites et surcharges', d: 'Traitement des tendinites chroniques et des surcharges par effort répétitif' },
        { t: 'Récupération sportive', d: 'Protocole spécifique pour athlètes — avant ou après la compétition ou l’entraînement' },
      ],
    },
    'massagem-pre-pos-natal': {
      tagline: 'Soin et confort pour les femmes enceintes et les jeunes mères — un moment rien que pour vous',
      description: 'Le Massage Pré/Post-Natal est spécialement adapté aux transformations du corps pendant la grossesse et après l’accouchement. Il soulage les douleurs lombaires, les gonflements et la tension musculaire accumulée pendant la gestation. En post-partum, il aide à la récupération physique et émotionnelle de la mère, dans une période de tant de changements et d’exigences.',
      prices: [{ label: 'Par séance (50min)', value: '45€' }],
      sub: [
        { t: 'Douleur lombaire pendant la grossesse', d: 'Soulagement des douleurs lombaires et pelviennes typiques de la gestation, avec positionnement sûr' },
        { t: 'Gonflement et rétention', d: 'Amélioration de la circulation et réduction du gonflement des jambes et chevilles pendant la grossesse' },
        { t: 'Tension musculaire', d: 'Libération des tensions dans le cou, les épaules et le dos accumulées avec le poids du ventre' },
        { t: 'Récupération post-partum', d: 'Soutien à la récupération physique après l’accouchement — douleur musculaire, tension et bien-être général' },
        { t: 'Équilibre émotionnel', d: 'Un moment de soin et de relaxation dans une période de tant de changements émotionnels' },
        { t: 'Sommeil et repos', d: 'Techniques pour améliorer la qualité du sommeil — si difficile pendant la grossesse et après l’accouchement' },
      ],
    },
    'massagem-sacro-craniana': {
      tagline: 'Technique douce sur le système crânio-sacré — soulagement profond sans effort',
      description: 'Le Massage Crânio-sacré est une technique manuelle extrêmement douce qui travaille sur le système crânio-sacré — le lien entre le sacrum et le crâne en passant par la colonne vertébrale. Avec un toucher presque imperceptible, il libère les restrictions dans les membranes et le liquide céphalo-rachidien, favorisant l’équilibre du système nerveux central et le soulagement des tensions accumulées.',
      prices: [{ label: 'Par séance (50min)', value: '40€' }],
      sub: [
        { t: 'Céphalées et migraines', d: 'Libération des tensions crânio-sacrées qui contribuent aux maux de tête récurrents' },
        { t: 'Stress et anxiété', d: 'Activation profonde du système nerveux parasympathique pour l’équilibre émotionnel' },
        { t: 'Dysfonctions de l’ATM', d: 'Soulagement des douleurs et tensions de l’articulation temporo-mandibulaire et du visage' },
        { t: 'Douleur cervicale', d: 'Libération des tensions dans la région cervicale et la base du crâne' },
        { t: 'Insomnie', d: 'Promotion d’un état de repos profond qui améliore la qualité du sommeil' },
        { t: 'Bébés et enfants', d: 'Technique parfaitement sûre pour les plus petits, indiquée pour les coliques et tensions de l’accouchement' },
      ],
    },
    'drenagem-linfatica': {
      tagline: 'Détoxifie, dégonfle et revitalise — avec la technique manuelle Méthode Vodder',
      description: 'Le Drainage Lymphatique Manuel selon la Méthode Vodder est la technique de référence internationale pour stimuler le système lymphatique. Par des mouvements doux, rythmiques et précis sur la peau, il active la circulation lymphatique, réduit l’œdème et favorise l’élimination des toxines. Indiqué tant en contexte clinique que de bien-être.',
      prices: [
        { label: 'Manuel (50min)', value: '45€ / 50€' },
        { label: 'Post-Op 50min', value: '55€' },
        { label: 'Post-Op 80min', value: '70€' },
      ],
      sub: [
        { t: 'Rétention de liquides', d: 'Réduction du gonflement des jambes, chevilles et ventre causé par la rétention d’eau' },
        { t: 'Post-chirurgie et cicatrisation', d: 'Accélération de la récupération, réduction de l’œdème et amélioration de la qualité des cicatrices' },
        { t: 'Lymphœdème', d: 'Gestion du lymphœdème primaire ou secondaire avec une technique spécialisée Méthode Vodder' },
        { t: 'Cellulite', d: 'Amélioration de l’aspect de la peau et de la microcirculation locale dans les zones touchées par la cellulite' },
        { t: 'Système immunitaire', d: 'Stimulation des défenses naturelles de l’organisme et élimination des déchets métaboliques' },
        { t: 'Bien-être et légèreté', d: 'Sensation de corps plus léger, jambes fatiguées soulagées et esprit plus détendu' },
      ],
    },
    'massagem-terapeutica': {
      tagline: 'Drainage post-opératoire et massage thérapeutique — récupération et soulagement de la douleur',
      description: 'Le Drainage Lymphatique Post-opératoire est essentiel à une récupération rapide et sans complications après une chirurgie — il réduit l’œdème, améliore les cicatrices et restaure la circulation. Le Massage Thérapeutique travaille les zones de tension chronique, les contractures et la douleur musculaire persistante, avec des techniques adaptées à la condition de chaque personne.',
      prices: [
        { label: 'Thérapeutique 30-50min', value: '30€ – 45€' },
        { label: 'Drainage Post-Op 50min', value: '55€' },
        { label: 'Drainage Post-Op 80min', value: '70€' },
      ],
      sub: [
        { t: 'Récupération post-chirurgie', d: 'Réduction de l’œdème et amélioration de la qualité des cicatrices après intervention chirurgicale' },
        { t: 'Contractures et spasmes', d: 'Libération des nœuds musculaires et zones de tension profonde résistantes à la détente' },
        { t: 'Douleur post-exercice', d: 'Accélération de la récupération musculaire et réduction de l’inflammation après un entraînement intense' },
        { t: 'Tension cervicale et épaules', d: 'Approche profonde dans la zone la plus affectée par le travail sédentaire et le stress' },
        { t: 'Tendinites et surcharges', d: 'Traitement des tendinites chroniques et des surcharges par effort répétitif' },
        { t: 'Récupération sportive', d: 'Protocole spécifique pour athlètes — avant ou après la compétition ou l’entraînement' },
      ],
    },
    reflexologia: {
      tagline: 'Stimulation des points réflexes des pieds pour rééquilibrer les systèmes de l’organisme',
      description: 'La Réflexologie est une thérapie naturelle qui travaille sur des points réflexes situés sur les pieds, les mains ou les oreilles, correspondant à différents organes et systèmes du corps. Par une pression précise et rythmique, elle stimule le rééquilibre organique, soulage les tensions et favorise le bien-être général. Une technique non invasive aux effets profonds.',
      prices: [{ label: 'Par séance (50min)', value: '45€' }],
      sub: [
        { t: 'Stress et anxiété', d: 'Stimulation du système nerveux parasympathique pour réduire la tension et l’anxiété' },
        { t: 'Insomnie', d: 'Régulation du sommeil par l’équilibre des systèmes de l’organisme' },
        { t: 'Maux de tête', d: 'Travail sur les points réflexes correspondant à la tête et au système nerveux' },
        { t: 'Santé digestive', d: 'Stimulation des réflexes du système digestif pour améliorer la fonction intestinale' },
        { t: 'Circulation', d: 'Amélioration de la circulation sanguine et lymphatique par la stimulation réflexe' },
        { t: 'Bien-être général', d: 'Une séance d’équilibre et de relaxation profonde pour le corps et l’esprit' },
      ],
    },
    shiatsu: {
      tagline: 'Technique japonaise de pression sur les méridiens énergétiques — équilibre et vitalité',
      description: 'Le Shiatsu est une thérapie japonaise qui applique une pression avec les pouces, les paumes et les coudes sur les méridiens énergétiques du corps. Basé sur les principes de la Médecine Traditionnelle Chinoise, il favorise le flux d’énergie vitale (Ki), soulage la tension et la douleur, et restaure l’équilibre physique et émotionnel. Réalisé sur vêtements confortables, sans huiles.',
      prices: [{ label: 'Par séance (50min)', value: '45€' }],
      sub: [
        { t: 'Douleur musculaire et articulaire', d: 'Soulagement des douleurs et tensions musculaires par la pression sur les méridiens énergétiques' },
        { t: 'Fatigue et manque d’énergie', d: 'Stimulation du flux d’énergie vitale pour la récupération de la vitalité' },
        { t: 'Stress et anxiété', d: 'Équilibre du système nerveux pour réduire le stress et promouvoir le bien-être' },
        { t: 'Maux de tête', d: 'Libération des tensions dans le cou, les épaules et la tête qui provoquent des céphalées' },
        { t: 'Problèmes digestifs', d: 'Stimulation des méridiens liés au système digestif' },
        { t: 'Équilibre émotionnel', d: 'Harmonie entre le physique et l’émotionnel par la régulation énergétique' },
      ],
    },
    'massagem-indiana': {
      tagline: 'Indian Head Massage — relaxation profonde de la tête, du cou et des épaules',
      description: 'Le Massage Indien, ou Indian Head Massage, est une technique d’origine ayurvédique focalisée sur la tête, le cou, les épaules et le visage. Il travaille sur les chakras de la partie supérieure du corps pour libérer la tension accumulée, soulager les céphalées, améliorer la circulation du cuir chevelu et induire un état de relaxation profonde. Réalisé assis, sans nécessité de se déshabiller.',
      prices: [{ label: 'Par séance (40min)', value: '35€' }],
      sub: [
        { t: 'Céphalées et tension crânienne', d: 'Libération de la tension accumulée dans le cuir chevelu, le cou et les épaules' },
        { t: 'Stress et surcharge mentale', d: 'Induction d’un état de relaxation profonde avec des techniques d’origine ayurvédique' },
        { t: 'Circulation du cuir chevelu', d: 'Amélioration de la circulation locale, bénéfique pour la santé et la croissance du cheveu' },
        { t: 'Tension cervicale', d: 'Travail spécifique sur la région cervicale, le cou et les épaules' },
        { t: 'Fatigue visuelle', d: 'Techniques douces sur le visage et la zone orbitaire pour soulager la fatigue oculaire' },
        { t: 'Équilibre énergétique', d: 'Travail sur les chakras supérieurs pour l’harmonie physique et émotionnelle' },
      ],
    },
    'head-spa': {
      tagline: 'Traitement profond du cuir chevelu — nettoyage, nutrition et détente totale',
      description: 'Le Head Spa est un traitement de luxe pour le cuir chevelu qui combine nettoyage profond, nutrition intensive et massage relaxant. Il élimine l’excès de sébum et les impuretés, équilibre le pH du cuir chevelu, renforce les follicules capillaires et procure une sensation de fraîcheur et de légèreté incomparable. Le résultat visible sur le cheveu s’accompagne d’un état de relaxation profonde.',
      prices: [{ label: 'Séance complète (90min)', value: '75€' }],
      sub: [
        { t: 'Nettoyage en profondeur', d: 'Élimination de l’excès de sébum, cellules mortes et impuretés du cuir chevelu' },
        { t: 'Nutrition et hydratation', d: 'Application d’actifs nutritifs pour renforcer les follicules et revitaliser le cheveu' },
        { t: 'Chute de cheveux', d: 'Stimulation de la circulation du cuir chevelu pour renforcer les follicules capillaires' },
        { t: 'Cuir chevelu sensible', d: 'Traitement doux et équilibrant pour cuir chevelu irrité ou avec pellicules' },
        { t: 'Massage relaxant', d: 'Massage profond du cuir chevelu pour libérer la tension et favoriser le bien-être' },
        { t: 'Brillance et vitalité', d: 'Résultats visibles sur l’aspect du cheveu — plus brillant, léger et sain' },
      ],
    },
    facial: {
      tagline: 'Nettoyage de peau, extraction et soin facial personnalisé pour une peau saine et éclatante',
      description: 'Nos soins du visage sont réalisés par des professionnels spécialisés, avec des produits de haute qualité adaptés au type de peau de chaque client. Du simple nettoyage de peau au soin personnalisé le plus complet — chaque séance est pensée pour maximiser les résultats visibles et le bien-être de la peau.',
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
        { t: 'Anti-âge', d: 'Soins avec des actifs qui stimulent le collagène et réduisent les signes de l’âge' },
        { t: 'Hydratation profonde', d: 'Reposition intensive d’hydratation pour peaux sèches, déshydratées ou sensibles' },
      ],
    },
    'pacotes-tratamento': {
      tagline: 'Technologie avancée pour votre corps — cavitation, radiofréquence, lipolaser et plus',
      description: 'Nos forfaits de traitement combinent les technologies les plus avancées d’esthétique corporelle : cavitation, radiofréquence, lipolaser, électrostimulation et pressothérapie. Chaque traitement est réalisé par des professionnels certifiés, avec une évaluation préalable et un protocole personnalisé pour maximiser les résultats.',
      prices: [
        { label: 'Cav./Radiofréq./Lipolaser/Électrostim. (50min)', value: '50€' },
        { label: 'Forfait 10 séances', value: '450€' },
        { label: 'Pressothérapie 30-50min', value: '25€ / 35€' },
      ],
      sub: [
        { t: 'Cavitation', d: 'Ultrasons focalisés pour la destruction des cellules adipeuses dans des zones localisées' },
        { t: 'Radiofréquence', d: 'Stimulation du collagène et de l’élastine pour la fermeté de la peau et la réduction du relâchement' },
        { t: 'Lipolaser', d: 'Laser de faible intensité pour la mobilisation de la graisse localisée et le modélage du corps' },
        { t: 'Électrostimulation', d: 'Contraction musculaire passive pour la tonification et la récupération de zones spécifiques' },
        { t: 'Pressothérapie', d: 'Drainage lymphatique mécanique par pression séquentielle — gonflement, circulation et récupération' },
        { t: 'Forfait 10 séances', d: 'Économisez avec le forfait de 10 séances — idéal pour des résultats progressifs et durables' },
      ],
    },
    'depilacao-laser': {
      tagline: 'Épilation définitive avec une technologie de dernière génération — pour femme et homme',
      description: 'L’épilation au laser est aujourd’hui la solution la plus efficace et durable pour l’élimination du poil indésiré. À la Rita Guerreiro nous utilisons des équipements de dernière génération, avec une technologie qui s’adapte aux différents tons de peau et types de poil. Le processus est progressif — à chaque séance le poil devient plus fin et plus clairsemé, jusqu’à l’élimination permanente.',
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
      tagline: 'Mouvement conscient supervisé par un physiothérapeute — un corps fort et sans douleur',
      description: 'Le Pilates Clinique se distingue du Pilates conventionnel par le fait d’être supervisé par un physiothérapeute et adapté à des conditions cliniques spécifiques — douleur lombaire, hernies, post-opératoire, grossesse, ostéoporose ou toute autre limitation. À la Rita Guerreiro, chaque programme est conçu individuellement avec des exercices progressifs.',
      prices: [
        { label: 'Mensualité', value: '35€ / 60€' },
        { label: 'Assurance annuelle', value: '10€' },
        { label: 'Personnalisé (50min)', value: '45€' },
      ],
      sub: [
        { t: 'Douleur lombaire et hernies', d: 'Renforcement du core profond pour stabiliser la colonne et réduire la douleur chronique' },
        { t: 'Post-opératoire', d: 'Réintégration progressive du mouvement après chirurgie orthopédique, abdominale ou autre' },
        { t: 'Grossesse et post-partum', d: 'Exercices adaptés à chaque phase — préparation à l’accouchement et récupération après' },
        { t: 'Ostéoporose', d: 'Entraînement de force et d’équilibre à faible impact articulaire, pour prévenir les chutes et les fractures' },
        { t: 'Scoliose et déviations posturales', d: 'Correction progressive des schémas posturaux altérés avec un exercice supervisé' },
        { t: 'Performance et prévention', d: 'Pour ceux qui veulent améliorer la conscience corporelle et prévenir les blessures en sport' },
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
    };
  }
  return out;
}

Object.assign(window, { SERVICES_I18N, SERVICE_DETAIL_I18N, getServices, getServiceDetail });
