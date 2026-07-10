// Preguntas Frecuentes (FAQ)
// Edita, agrega o elimina preguntas aquí. El campo "category" se usa para
// agrupar/filtrar las preguntas en la sección (mismo patrón que las
// categorías de Productos y Blog).

export const faqCategories = [
  'Todas',
  'Envíos',
  'Pagos',
  'Entregas',
  'Mayorista',
] as const;

export type FAQCategory = (typeof faqCategories)[number];

export interface FAQItem {
  id: number;
  category: Exclude<FAQCategory, 'Todas'>;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    category: 'Envíos',
    question: '¿Hacen envíos a todo Chile?',
    answer:
      'Sí, realizamos envíos a todo Chile a través de empresas de courier. El costo y tiempo de envío varía según la región de destino.',
  },
  {
    id: 2,
    category: 'Envíos',
    question: '¿Cuánto cuesta el envío?',
    answer:
      'El costo del envío se calcula según tu comuna y se muestra antes de confirmar tu pedido. Para compras mayoristas, coordinamos el envío directamente contigo.',
  },
  {
    id: 3,
    category: 'Pagos',
    question: '¿Qué formas de pago aceptan?',
    answer:
      'Aceptamos transferencia bancaria y pagos coordinados directamente por WhatsApp. Pronto sumaremos más medios de pago online.',
  },
  {
    id: 4,
    category: 'Pagos',
    question: '¿Es seguro comprar en Asuka?',
    answer:
      'Sí. Todo pedido se confirma directamente contigo antes de despachar, y coordinamos el pago de forma clara y transparente por WhatsApp o transferencia.',
  },
  {
    id: 5,
    category: 'Entregas',
    question: '¿Cuánto demora en llegar mi pedido?',
    answer:
      'Los tiempos de entrega dependen de tu ubicación. En general, dentro de la Región del Biobío el pedido llega en 1 a 3 días hábiles, y al resto del país entre 3 y 7 días hábiles.',
  },
  {
    id: 6,
    category: 'Entregas',
    question: '¿Puedo retirar mi pedido en persona?',
    answer:
      'En algunos casos sí, dependiendo de tu ubicación. Escríbenos por WhatsApp para coordinar el retiro.',
  },
  {
    id: 7,
    category: 'Mayorista',
    question: '¿Cómo puedo vender productos Asuka?',
    answer:
      'Puedes sumarte como distribuidor o emprendedor completando el formulario de la sección "Venta Mayorista" o escribiéndonos directamente por WhatsApp. Te contactaremos para conversar precios y condiciones.',
  },
  {
    id: 8,
    category: 'Mayorista',
    question: '¿Hay un monto mínimo de compra mayorista?',
    answer:
      'Sí, existe un monto mínimo de compra para acceder a precios mayoristas. Te entregamos todos los detalles al escribirnos por WhatsApp.',
  },
];
