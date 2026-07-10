// Sección Venta Mayorista
// Edita aquí el título, la bajada, los beneficios y el mensaje que se
// enviará por WhatsApp cuando alguien haga clic en el CTA.

export interface WholesaleBenefit {
  id: number;
  title: string;
  description: string;
}

export const wholesaleContent = {
  title: 'Venta Mayorista',
  subtitle: 'Vende Asuka en tu negocio o emprendimiento',
  description:
    'Apoyamos a emprendedores y distribuidores con precios especiales, catálogo en constante crecimiento y acompañamiento cercano para que tu negocio crezca junto a nosotros.',
  ctaLabel: 'Quiero vender ASUKA',
  whatsappMessage:
    'Hola! Me gustaría recibir información sobre la venta mayorista de Asuka Cosmetics 🙌',
};

export const wholesaleBenefits: WholesaleBenefit[] = [
  {
    id: 1,
    title: 'Precios preferenciales',
    description: 'Márgenes atractivos para emprendedores y distribuidores desde el primer pedido.',
  },
  {
    id: 2,
    title: 'Catálogo en crecimiento',
    description: 'Nuevos productos y aromas de forma constante para renovar tu oferta.',
  },
  {
    id: 3,
    title: 'Acompañamiento cercano',
    description: 'Atención directa y personalizada durante todo el proceso de compra y reventa.',
  },
  {
    id: 4,
    title: 'Envíos a todo Chile',
    description: 'Recibe tus pedidos mayoristas estés donde estés.',
  },
];
