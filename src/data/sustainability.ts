// Sello de Compromiso / Sustentabilidad
// Edita aquí los compromisos reales de la marca (packaging reciclable,
// cruelty-free, ingredientes naturales, etc). Se recomienda declarar solo
// compromisos que la marca efectivamente cumple.
//
// El campo "icon" debe ser el nombre exacto de un ícono de lucide-react.

export interface SustainabilityCommitment {
  id: number;
  icon: 'Recycle' | 'Leaf' | 'HeartHandshake' | 'Droplet';
  title: string;
  description: string;
}

export const sustainabilityContent = {
  title: 'Nuestro Compromiso',
  subtitle: 'Cuidamos de ti y del planeta',
  description:
    'En Asuka creemos que el autocuidado también significa cuidar el entorno en el que vivimos. Por eso avanzamos, producto a producto, hacia prácticas más responsables.',
};

export const sustainabilityCommitments: SustainabilityCommitment[] = [
  {
    id: 1,
    icon: 'Recycle',
    title: 'Envases reciclables',
    description: 'Priorizamos envases que pueden reciclarse, reduciendo el impacto de cada compra.',
  },
  {
    id: 2,
    icon: 'HeartHandshake',
    title: 'Cruelty-free',
    description: 'Nuestros productos no se testean en animales.',
  },
  {
    id: 3,
    icon: 'Leaf',
    title: 'Ingredientes naturales',
    description: 'Seleccionamos formulaciones con ingredientes de origen natural siempre que es posible.',
  },
  {
    id: 4,
    icon: 'Droplet',
    title: 'Producción consciente',
    description: 'Trabajamos con proveedores que comparten nuestro compromiso con el cuidado del entorno.',
  },
];
