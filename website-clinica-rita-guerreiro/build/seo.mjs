// Dados de SEO partilhados pelo build (fonte única para JSON-LD, canonical e sitemap)
export const SITE = 'https://clinicaritaguerreiro.pt';

const SAME_AS = [
  'https://www.instagram.com/centro_terapias_rita_guerreiro/',
  // TODO: juntar o URL da página de Facebook quando a clínica o confirmar
];

export const BUSINESS = {
  name: 'Centro de Terapias Rita Guerreiro',
  alternateName: [
    'Rita Guerreiro- Centro de Terapias & Bem-Estar',
    'Rita Guerreiro - Centro Terapias & Bem-Estar Loulé',
    'Clínica Rita Guerreiro',
  ],
  image: `${SITE}/og-cover-sq.jpg`,
};

BUSINESS.jsonld = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${SITE}/#business`,
  name: BUSINESS.name,
  alternateName: BUSINESS.alternateName,
  description: 'Fisioterapia, massagens, holísticas, psicologia e estética em Loulé, Algarve.',
  url: `${SITE}/`,
  image: BUSINESS.image,
  logo: `${SITE}/rita_guerreiro_logo.png`,
  telephone: '+351961899364',
  email: 'fisioritaguerreiro@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Padre António Vieira 58',
    postalCode: '8100-611',
    addressLocality: 'Loulé',
    addressRegion: 'Algarve',
    addressCountry: 'PT',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 37.1397, longitude: -8.0247 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '17:00', description: 'Mediante marcação prévia' },
  ],
  sameAs: SAME_AS,
};

// Ficheiro HTML -> rota pública (igual aos rewrites/cleanUrls do vercel.json)
export function routeFor(file) {
  const base = file.replace(/\.html$/, '');
  if (base === 'index') return { kind: 'home', path: '/', url: `${SITE}/`, sitemap: true, priority: 1.0 };
  const m = base.match(/^servico-(.+)$/);
  if (m) return { kind: 'service', slug: m[1], path: `/servico/${m[1]}`, url: `${SITE}/servico/${m[1]}`, sitemap: true, priority: 0.8, fallbackName: m[1] };
  const legal = base === 'privacidade' || base === 'termos';
  return { kind: 'page', path: `/${base}`, url: `${SITE}/${base}`, sitemap: true, priority: legal ? 0.3 : 0.9 };
}
