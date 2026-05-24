export interface Testimonial {
  id: number;
  name: string;
  username: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Camila Rojas',
    username: '@cami.beauty',
    text:
      'La crema corporal de frutilla deja la piel demasiado suave y el aroma dura muchísimo ✨',
    rating: 5,
  },
  {
    id: 2,
    name: 'Valentina Soto',
    username: '@vale.skincare',
    text:
      'El shampoo de uva me ayudó mucho con el brillo del cabello, además huele increíble 💜',
    rating: 5,
  },
  {
    id: 3,
    name: 'Fernanda Díaz',
    username: '@fercare',
    text:
      'Me encantó el packaging y los aromas. Se siente una marca muy delicada y femenina.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Josefa Martínez',
    username: '@josebeauty',
    text:
      'La mascarilla capilar dejó mi pelo súper suave desde la primera aplicación.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Martina López',
    username: '@martiskin',
    text:
      'Los bálsamos labiales tienen un aroma demasiado rico y se sienten hidratantes.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Antonia Silva',
    username: '@antoniaselfcare',
    text:
      'Compré varios productos y todos llegaron hermosos. Muy recomendada la tienda 💕',
    rating: 5,
  },
];