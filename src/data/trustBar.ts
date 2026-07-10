// Barra de confianza (trust bar)
// Edita aquí el texto o el ícono de cada punto. Va justo debajo del Hero.
//
// El campo "icon" debe ser el nombre exacto de un ícono de lucide-react
// (mismo set de íconos que ya usa el resto del sitio: Navbar, Footer, Testimonials).
// Puedes ver todos los íconos disponibles en https://lucide.dev/icons

export interface TrustBarItem {
  id: number;
  icon: 'Truck' | 'ShieldCheck' | 'MessageCircle' | 'Sparkles' | 'Handshake';
  text: string;
}

export const trustBarItems: TrustBarItem[] = [
  {
    id: 1,
    icon: 'Truck',
    text: 'Envíos a todo Chile',
  },
  {
    id: 2,
    icon: 'ShieldCheck',
    text: 'Compra 100% segura',
  },
  {
    id: 3,
    icon: 'MessageCircle',
    text: 'Atención personalizada',
  },
  {
    id: 4,
    icon: 'Sparkles',
    text: 'Productos seleccionados',
  },
  {
    id: 5,
    icon: 'Handshake',
    text: 'Venta mayorista',
  },
];
