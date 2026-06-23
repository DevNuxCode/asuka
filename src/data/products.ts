export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  category: string;
  description: string;
}

export const categories = [
  'Todos',
  'Skincare',
  'Capilar',
  'Corporal',
  'Fragancias',
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
{
  id: 1,
  name: 'Acondicionador FRUTILLA Bubbaluu',
  price: 5000,
  image: 'https://www.image2url.com/r2/default/images/1780887662959-e6a93d55-79b3-4693-8bbd-9a7371fa2cd5.png',
  stock: 2,
  category: 'Capilar',
  description: `Disfruta de un cabello más suave, manejable y lleno de vida con el Acondicionador Bubbaluu Argán Tutti Frutti.

Su fórmula enriquecida con Argán, Colágeno, Keratina y Omegas 6 y 9 ayuda a nutrir profundamente la fibra capilar, restaurando la suavidad y el brillo natural del cabello.

Especialmente diseñado para complementar tu rutina capilar, ayuda a desenredar fácilmente, controlar el frizz y proteger el cabello de la resequedad. Su delicioso aroma Tutti Frutti deja una agradable fragancia que acompaña tu cabello durante el día.

Beneficios:

✨ Ayuda a desenredar el cabello fácilmente.
✨ Nutre e hidrata la fibra capilar.
✨ Controla el frizz y mejora la manejabilidad.
✨ Aporta suavidad, brillo y sedosidad.
✨ Ayuda a reparar el aspecto de cabellos secos o dañados.
✨ Deja el cabello con un agradable aroma Tutti Frutti.
✨ Ideal para uso frecuente.

Modo de uso:

1. Lava el cabello con shampoo y enjuaga.
2. Aplica una cantidad adecuada de acondicionador de medios a puntas.
3. Masajea suavemente para distribuir el producto.
4. Deja actuar durante 2 a 3 minutos.
5. Enjuaga con abundante agua.

Utiliza regularmente para obtener mejores resultados.

💖 Tip Asuka: Para una rutina capilar completa, úsalo junto al Shampoo Sin Sal Bubbaluu Argán Tutti Frutti, la Crema para Peinar y la Bomba Nutritiva de la misma línea. Así conseguirás un cabello más hidratado, brillante, suave y con menos frizz. ✨🍭🌸`,
},
    {
    id: 2,
    name: 'Acondicionador UVA Bubbaluu',
    price: 5000,
    image: 'https://www.image2url.com/r2/default/images/1780887787986-36990b81-f9af-4923-80fa-bb458c32d792.png',
    stock: 2,
    category: 'Capilar',
    description: `Dale a tu cabello el cuidado que merece con el Acondicionador Bubbaluu Uva 350 ml. Su fórmula enriquecida con Biotina, Coenzima Q10, Vitamina E y Ácido Hialurónico ayuda a nutrir e hidratar la fibra capilar, dejando el cabello más suave, brillante y fácil de peinar.
Diseñado para complementar la acción del shampoo, ayuda a desenredar el cabello, controlar el frizz y mejorar su apariencia, aportando una sensación de suavidad y vitalidad desde la raíz hasta las puntas. Su delicioso aroma a uva convierte cada aplicación en una experiencia agradable y refrescante.

✨ Con Biotina, Q10, Vitamina E y Ácido Hialurónico.
✨ Ayuda a hidratar y nutrir el cabello.
✨ Facilita el desenredado.
✨ Ayuda a controlar el frizz.
✨ Aporta suavidad y brillo.
✨ Fórmula sin sal.
✨ Aroma Uva.

Beneficios:
💜 Ayuda a fortalecer la fibra capilar.
💜 Favorece un cabello más suave y manejable.
💜 Contribuye a reducir el quiebre causado por el peinado.
💜 Ayuda a combatir el frizz y la resequedad.
💜 Aporta brillo y una apariencia saludable.
💜 Ideal para todo tipo de cabello.

Modo de uso:

1.Lava previamente el cabello con shampoo.
2. Aplica una cantidad adecuada de acondicionador de medios a puntas.
3. Masajea suavemente para distribuir el producto de manera uniforme.
4. Deja actuar entre 2 y 3 minutos.
5. Enjuaga con abundante agua.

💖 Tip Asuka: Para obtener mejores resultados, utiliza el Pack Shampoo + Acondicionador Bubbaluu Uva y complementa tu rutina con una mascarilla capilar una o dos veces por semana para mantener tu cabello hidratado, brillante y lleno de vida. 🍇✨🌸`,
  },
  {
    id: 3,
    name: 'Balsamo Labial Durazno',
    price: 1500,
    image: 'https://www.image2url.com/r2/default/images/1780887815311-7d3332fc-a141-4766-8657-db0d4ad33ec9.png',
    stock: 0,
    category: 'Skincare',
    description: 'Bálsamo labial con aroma a durazno para labios suaves e hidratados.',
  },
  {
    id: 4,
    name: 'Balsamo Labial Uva',
    price: 1500,
    image: 'https://www.image2url.com/r2/default/images/1780887867651-b2735414-0459-49b1-97bc-bc256bceac7d.png',
    stock: 0,
    category: 'Skincare',
    description: 'Bálsamo labial con aroma a uva para labios suaves e hidratados.',
  },
  
    {
    id: 5,
    name: 'Balsamo Labial Frutilla',
    price: 1500,
    image: 'https://www.image2url.com/r2/default/images/1780887900959-83dd8c24-dab9-4d7b-903f-3f6c5145e400.png',
    stock: 4,
    category: 'Skincare',
    description: 'Bálsamo labial con aroma a frutilla para labios suaves e hidratados.',
  },
  {
    id: 6,
    name: 'Bomba Nutritiva Capilar Frutilla Bubbaluu 500ml',
    price: 5600,
    image: 'https://www.image2url.com/r2/default/images/1780887923137-88bee78f-1877-4145-9123-2841ad5cc6ef.png',
    stock: 35,
    category: 'Capilar',
    description: `Devuélvele la vida a tu cabello con la Bomba Nutritiva Capilar Bubbaluu, una mascarilla de tratamiento intensivo formulada con glicerina y colágeno, ingredientes que ayudan a hidratar, nutrir y mejorar la apariencia del cabello desde la raíz hasta las puntas.
Su fórmula está diseñada para aportar suavidad, brillo y manejabilidad, ayudando a reducir la sensación de resequedad y el frizz. Ideal para cabellos secos, dañados o expuestos frecuentemente a herramientas de calor, tintes y procesos químicos.

✨ Aroma frutilla.
✨ Hidratación profunda.
✨ Mayor suavidad y brillo.
✨ Ayuda a mejorar la apariencia del cabello dañado.
✨ Apta para todo tipo de cabello.

Modo de uso:

1. Lava tu cabello con shampoo y retira el exceso de agua.
2. Aplica una cantidad adecuada de Bomba Nutritiva Capilar desde medios a puntas.
3. Masajea suavemente y distribuye de manera uniforme por todo el cabello.
4. Deja actuar entre 5 y 10 minutos.
Enjuaga con abundante agua tibia.

💖 Tip Asuka: Utilízala de 1 a 2 veces por semana para mantener tu cabello hidratado, brillante y con un aspecto saludable. 🌸🍓`,
  },
  {
    id: 7,
    name: 'Crema Corporal BUBBALUU Frutilla',
    price: 7000,
    image: 'https://www.image2url.com/r2/default/images/1780887950415-6d1d0d0b-72a1-46a7-800f-306e61f880de.png',
    stock: 20,
    category: 'Corporal',
    description:  `Disfruta de una piel suave, hidratada y deliciosamente perfumada con la Crema Corporal Hidratante Bubbaluu Frutilla. Su fórmula está diseñada para nutrir y ayudar a mantener la hidratación natural de la piel, dejándola con una sensación de suavidad y frescura durante todo el día.
Su irresistible aroma a frutilla envuelve tu piel con una fragancia dulce y frutal, convirtiendo tu rutina de cuidado corporal en un momento especial de bienestar y autocuidado.

Beneficios:
🍓 Ayuda a hidratar y nutrir la piel diariamente.
🍓 Contribuye a mejorar la suavidad y elasticidad de la piel.
🍓 Ayuda a prevenir la sensación de resequedad y tirantez.
🍓 Deja la piel suave, luminosa y agradable al tacto.
🍓 Aroma dulce y duradero a frutilla.
🍓 Ideal para el uso diario y para todo tipo de piel.

Modo de uso:
1. Aplicar una cantidad adecuada sobre la piel limpia y seca.
2. Masajear suavemente con movimientos circulares hasta su completa absorción.
3. Prestar especial atención a zonas más secas como codos, rodillas y piernas.
4. Utilizar diariamente, preferentemente después del baño o ducha.

💖 Tip Asuka: Para una experiencia aún más deliciosa, utiliza primero el Gel de Ducha Bubbaluu Frutilla y luego aplica la Crema Corporal Hidratante Bubbaluu Frutilla. Así potenciarás la hidratación y disfrutarás por más tiempo de su exquisito aroma frutal. 🍓✨🌸`,
  },
  {
    id: 8,
    name: 'Crema Corporal BUBBALUU Tutti Frutti',
    price: 7000,
    image: 'https://www.image2url.com/r2/default/images/1780887970552-3c4a4084-476c-4841-82ed-913d89c665dc.png',
    stock: 45,
    category: 'Corporal',
    description: `Consiente tu piel con la Crema Corporal Hidratante Bubbaluu Tutti Frutti, especialmente formulada para brindar hidratación y suavidad mientras envuelve tu cuerpo con un delicioso aroma frutal. Su textura ligera se absorbe fácilmente, ayudando a mantener la piel nutrida, fresca y confortable durante el día.
La combinación de su exquisita fragancia Tutti Frutti transforma tu rutina de cuidado corporal en una experiencia divertida, refrescante y llena de energía.

Beneficios:
🍭 Ayuda a hidratar y nutrir la piel diariamente.
🍭 Contribuye a mantener la piel suave y tersa.
🍭 Ayuda a prevenir la resequedad y la sensación de tirantez.
🍭 Deja la piel con una agradable sensación de frescura.
🍭 Aroma dulce y frutal de larga duración.
🍭 Ideal para todo tipo de piel y uso diario.

Modo de uso:

1. Aplicar una cantidad adecuada sobre la piel limpia y seca.
2.bMasajear suavemente con movimientos circulares hasta su completa absorción.
3. Aplicar especialmente en las zonas que tienden a resecarse.
Utilizar diariamente después del baño o cuando sea necesario.

💖 Tip Asuka: Para disfrutar de una experiencia completa, utiliza primero el Gel de Ducha Bubbaluu Tutti Frutti y luego aplica la Crema Corporal Hidratante Bubbaluu Tutti Frutti. Tu piel quedará hidratada, suave y con un delicioso aroma frutal que te acompañará durante todo el día. 🍭✨🌸🍓🍍🥝🍊`,
  },
  {
    id: 9,
    name: 'Crema Corporal BUBBALUU Uva',
    price: 7000,
    image: 'https://www.image2url.com/r2/default/images/1780888038263-c0253ce1-c23b-4c9f-9895-c32aa477dde3.png',
    stock: 30,
    category: 'Corporal',
    description: `Consiente tu piel con la Crema Corporal Hidratante Bubbaluu Tutti Frutti, especialmente formulada para brindar hidratación y suavidad mientras envuelve tu cuerpo con un delicioso aroma frutal. Su textura ligera se absorbe fácilmente, ayudando a mantener la piel nutrida, fresca y confortable durante el día.
La combinación de su exquisita fragancia Tutti Frutti transforma tu rutina de cuidado corporal en una experiencia divertida, refrescante y llena de energía.

Beneficios:
🍭 Ayuda a hidratar y nutrir la piel diariamente.
🍭 Contribuye a mantener la piel suave y tersa.
🍭 Ayuda a prevenir la resequedad y la sensación de tirantez.
🍭 Deja la piel con una agradable sensación de frescura.
🍭 Aroma dulce y frutal de larga duración.
🍭 Ideal para todo tipo de piel y uso diario.

Modo de uso:

1. Aplicar una cantidad adecuada sobre la piel limpia y seca.
2.bMasajear suavemente con movimientos circulares hasta su completa absorción.
3. Aplicar especialmente en las zonas que tienden a resecarse.
Utilizar diariamente después del baño o cuando sea necesario.

💖 Tip Asuka: Para disfrutar de una experiencia completa, utiliza primero el Gel de Ducha Bubbaluu Tutti Frutti y luego aplica la Crema Corporal Hidratante Bubbaluu Tutti Frutti. Tu piel quedará hidratada, suave y con un delicioso aroma frutal que te acompañará durante todo el día. 🍭✨🌸🍓🍍🥝🍊`,
  },
  {
    id: 10,
    name: 'Crema de Manos BUBBALUU 100ML UVA',
    price: 3600,
    image: 'https://www.image2url.com/r2/default/images/1780888059567-c6483f8a-3670-42cf-aae3-441952482d8e.png',
    stock: 3,
    category: 'Corporal',
    description: `La Crema de Manos Bubbaluu Aroma Uva está especialmente formulada para hidratar, nutrir y suavizar la piel de las manos. Su textura ligera de rápida absorción ayuda a combatir la resequedad sin dejar sensación grasosa, mientras su delicioso aroma a uva deja una fragancia dulce y agradable durante el día.
Ideal para el uso diario, manteniendo tus manos suaves, protegidas y perfumadas en cualquier momento.

💖 Beneficios

🍇 Hidrata profundamente las manos secas.
🍇 Ayuda a prevenir la resequedad y aspereza.
🍇 Suaviza y mejora la textura de la piel.
🍇 Rápida absorción, sin sensación pegajosa.
🍇 Deja las manos delicadamente perfumadas.
🍇 Formato práctico para llevar en cartera, mochila o bolso.
🍇 Ideal para uso diario y todo tipo de piel.

🧴 Modo de uso

1.Aplica una pequeña cantidad de crema sobre las manos limpias y secas.
2. Masajea suavemente hasta su completa absorción.
3. Reaplica durante el día cada vez que sea necesario, especialmente después del lavado de manos.
4. Utiliza diariamente para mantener tus manos suaves e hidratadas.

🌸 Tip Asuka: Aplica tu Crema de Manos Bubbaluu Aroma Uva antes de dormir para que la hidratación actúe durante toda la noche. Al despertar sentirás tus manos más suaves, nutridas y con un agradable aroma frutal. 💜✨`,
  },
  {
    id: 11,
    name: 'Crema de Manos Sachet Varios Aromas',
    price: 1700,
    image: 'https://www.image2url.com/r2/default/images/1781128215610-f73c6e4d-8772-4bab-a3f8-4c21dd54a829.png',
    stock: 0,
    category: 'Corporal',
    description: `Lleva la hidratación a todas partes con la Crema de Manos Sachet Bubbaluu, disponible en los deliciosos aromas Uva, Tutti Frutti y Frutilla. Su fórmula ayuda a nutrir y suavizar la piel, manteniendo las manos hidratadas y protegidas de la resequedad diaria.
Gracias a su práctico formato de 30 g, es perfecta para llevar en la cartera, mochila o bolsillo y disfrutar de unas manos suaves y perfumadas en cualquier momento.

💖 Beneficios

🍇🍓🍬 Ayuda a hidratar y nutrir las manos.
🍇🍓🍬 Suaviza la piel y combate la resequedad.
🍇🍓🍬 Textura ligera y rápida absorción.
🍇🍓🍬 Deliciosos aromas Uva, Tutti Frutti y Frutilla.
🍇🍓🍬 Formato práctico para llevar a todas partes.
🍇🍓🍬 Ideal para uso diario.

🧴 Modo de uso:

1. Aplica una pequeña cantidad sobre las manos limpias y secas.
2. Masajea suavemente hasta su completa absorción. 
3. Reaplica durante el día cada vez que sea necesario.

🌸 Tip Asuka: Mantén una crema de manos en tu cartera, escritorio o velador. Aplicarla después de cada lavado ayuda a conservar la hidratación y mantener tus manos suaves, protegidas y con un delicioso aroma durante todo el día. ✨🍓🍇🍬 🩷`,
  },
  {
    id: 12,
    name: 'Crema Facial Niacinamida',
    price: 4200,
    image: 'https://www.image2url.com/r2/default/images/1781128270079-1dcfbba5-f75a-4885-9be0-10acb968b180.png',
    stock: 28,
    category: 'Skincare',
    description: `Descubre una piel más hidratada, suave y luminosa con la Crema Facial Hidratante Bubbaluu Niacinamida. Su fórmula está enriquecida con Niacinamida, un activo reconocido por ayudar a mejorar la apariencia de la piel, aportando hidratación, suavidad y una sensación de frescura durante todo el día.
Su textura ligera y de rápida absorción se integra fácilmente a tu rutina facial diaria, dejando la piel confortable, hidratada y con una apariencia más uniforme.

💖 Beneficios

🩷 Ayuda a hidratar profundamente la piel.
🩷 Contribuye a mejorar la apariencia del tono de la piel.
🩷 Ayuda a reducir la apariencia de imperfecciones.
🩷 Favorece una piel más suave y luminosa.
🩷 Textura ligera y de rápida absorción.
🩷 Ideal para uso diario.
🩷 Deja la piel fresca y confortable sin sensación grasosa.

🧴 Modo de uso:

1. Limpia y seca tu rostro.
2. Aplica una pequeña cantidad de crema facial sobre la piel.
3. Distribuye suavemente con movimientos circulares ascendentes.
4. Utiliza por la mañana y por la noche.
5. Durante el día complementa tu rutina con protector solar.

🌸 Tip Asuka: Para potenciar tu rutina facial, aplica la Crema Facial Niacinamida Bubbaluu después de tu sérum facial. Esta combinación ayuda a mantener la hidratación y deja la piel con una apariencia más fresca, uniforme y luminosa. ✨💖`,
  },
  {
    id: 13,
    name: 'Crema Facial de COLAGENO',
    price: 4200,
    image: 'https://www.image2url.com/r2/default/images/1781128300741-1467e5c6-d1f8-48d6-95b4-3aff554b1f20.png',
    stock: 55,
    category: 'Skincare',
    description: `Descubre una hidratación profunda y duradera con la Crema Facial Hidratante Bubbaluu, enriquecida con Colágeno y Ácido Hialurónico, ingredientes reconocidos por ayudar a mantener la piel hidratada, suave y con una apariencia saludable.
Su textura ligera y de rápida absorción proporciona confort sin sensación grasosa, ayudando a que la piel luzca más fresca, luminosa y revitalizada día tras día. Ideal para complementar tu rutina diaria de cuidado facial.

💖 Beneficios

💜 Ayuda a mantener la hidratación de la piel.
💜 Contribuye a una apariencia más suave y luminosa.
💜 Fórmula con Colágeno y Ácido Hialurónico.
💜 Textura ligera y de rápida absorción.
💜 Ayuda a mejorar la sensación de elasticidad de la piel.
💜 Ideal para uso diario.
💜 Deja la piel con una sensación fresca y confortable.

🧴 Modo de uso: 

1. Limpia y seca tu rostro.
2. Aplica una pequeña cantidad de crema sobre la piel.
3. Distribuye suavemente con movimientos circulares ascendentes.
4. Utiliza por la mañana y por la noche como parte de tu rutina facial.
5. Para mejores resultados, complementa con protector solar durante el día.

🌸 Tip Asuka: Aplica la crema facial sobre la piel ligeramente húmeda después de la limpieza facial. Esto ayuda a potenciar la sensación de hidratación y deja tu piel más fresca, suave y luminosa durante el día. ✨🍇`,
  },
  {
    id: 14,
    name: 'Crema para Peinar TUTTIFRUTI',
    price: 6000,
    image: 'https://www.image2url.com/r2/default/images/1781128333717-d5386a7a-cdd0-483d-832f-f30ceaac1ec2.png',
    stock: 70,
    category: 'Capilar',
    description: `La Crema para Peinar Bubbaluu Aroma Tutti Frutti es el complemento perfecto para una rutina capilar llena de hidratación, suavidad y frescura. Su fórmula ayuda a controlar el frizz, facilita el peinado y aporta brillo al cabello, dejándolo más manejable y con un delicioso aroma frutal que dura por horas.

✨ Beneficios

🍬 Ayuda a controlar el frizz y el volumen.
🍬 Facilita el desenredo y el peinado diario.
🍬 Aporta hidratación y suavidad al cabello.
🍬 Ayuda a proteger las puntas del resecamiento.
🍬 Deja el cabello con un aspecto más brillante y saludable.
🍬 Aroma Tutti Frutti dulce y duradero.
🍬 Ideal para todo tipo de cabello.

🧴 Modo de uso

1. Aplica una pequeña cantidad sobre el cabello húmedo o seco.
2. Distribuye uniformemente de medios a puntas.
3. No enjuagues.
4. Peina como de costumbre.
5. Utiliza diariamente para mantener el cabello suave, hidratado y perfumado.

💖 Tip Asuka: Para una experiencia completa y un aroma que enamora, combina tu Crema para Peinar Bubbaluu Tutti Frutti con el Shampoo, Acondicionador y Bomba Nutritiva Tutti Frutti. Tu cabello lucirá más suave, brillante y lleno de vida todos los días. 🍬✨`,
  },
  {
    id: 15,
    name: 'Crema para Peinar UVA',
    price: 6000,
    image: 'https://www.image2url.com/r2/default/images/1781128354376-959238e7-7af8-4611-baae-ed9d293939fc.png',
    stock: 45,
    category: 'Capilar',
    description: `Mantén tu cabello suave, hidratado y fácil de peinar con la Crema para Peinar Bubbaluu 250 ml. Enriquecida con ácido hialurónico y libre de sal, su fórmula ayuda a hidratar la fibra capilar, controlar el frizz y aportar brillo, dejando el cabello con una apariencia más saludable y manejable.
Su textura ligera permite una aplicación uniforme sin dejar sensación pesada, siendo ideal para el cuidado diario de todo tipo de cabello. Disponible en delicioso aroma uva que dejan una agradable fragancia durante el día.

Beneficios:
✨ Ayuda a hidratar y suavizar el cabello.
✨ Facilita el peinado y desenredado.
✨ Ayuda a controlar el frizz.
✨ Aporta brillo y una apariencia saludable.
✨ Fórmula con ácido hialurónico.
✨ Libre de sal.
✨ Ideal para uso diario.
✨ Apta para todo tipo de cabello.

Modo de uso:

1.Lava tu cabello y retira el exceso de agua con una toalla.
2. Aplica una cantidad adecuada de crema para peinar sobre el cabello húmedo o seco.
3. Distribuye uniformemente de medios a puntas.
4. No enjuagar.
5. Peina como de costumbre y deja secar naturalmente o utiliza secador si lo deseas.

💖 Tip Asuka: Aplica una pequeña cantidad en las puntas durante el día para controlar el frizz y mantener tu cabello suave, brillante y con un delicioso aroma por más tiempo. ✨🍇🌸`,
  },
  {
    id: 16,
    name: 'Exfoliante Capilar FRUTILLA',
    price: 7200,
    image: 'https://www.image2url.com/r2/default/images/1781128406022-46636be6-bce0-4ffa-bca6-3d8a9ec76f68.png',
    stock: 0,
    category: 'Capilar',
    description: `Disfruta de una limpieza profunda y una experiencia deliciosa con el Exfoliante Capilar Bubbaluu Aroma Frutilla. Su fórmula ayuda a remover impurezas, residuos de productos y células muertas acumuladas en el cuero cabelludo, dejando una agradable sensación de frescura y limpieza.
Su exquisito aroma a frutilla transforma tu rutina capilar en un momento de cuidado y bienestar, ayudando a que tu cabello luzca más ligero, saludable y revitalizado desde la raíz.

💖 Beneficios

🍓 Ayuda a eliminar impurezas y residuos acumulados.
🍓 Limpia profundamente el cuero cabelludo.
🍓 Favorece una sensación de frescura y limpieza prolongada.
🍓 Ayuda a mejorar la apariencia del cabello desde la raíz.
🍓 Contribuye a mantener un cuero cabelludo saludable.
🍓 Aroma a frutilla dulce y agradable.
🍓 Ideal para complementar cualquier rutina de cuidado capilar.

🧴 Modo de uso:

1. Humedece completamente el cabello y cuero cabelludo.
2. Aplica una cantidad adecuada de exfoliante sobre el cuero cabelludo.
3. Masajea suavemente con movimientos circulares durante 2 a 3 minutos.
4. Enjuaga con abundante agua.
5. Continúa con tu shampoo y acondicionador habitual.
6. Utiliza una vez por semana o según las necesidades de tu cabello.

🌸 Tip Asuka: Para una sensación extra de frescura, utiliza el Exfoliante Capilar Bubbaluu Aroma Frutilla antes de tu rutina capilar semanal. Al eliminar residuos acumulados, ayudas a que el shampoo, acondicionador y tratamientos actúen de manera más efectiva, dejando tu cabello más limpio, ligero y brillante. 🍓✨`,
  },
  {
    id: 17,
    name: 'Exfoliante Capilar UVA',
    price: 7200,
    image: 'https://www.image2url.com/r2/default/images/1781128434968-d2eab686-42dc-4fd6-a717-bf94cba589c5.png',
    stock: 0,
    category: 'Capilar',
    description: `Renueva tu rutina capilar con el Exfoliante Capilar Bubbaluu Aroma Uva. Su fórmula está diseñada para ayudar a eliminar impurezas, residuos de productos y células muertas acumuladas en el cuero cabelludo, proporcionando una limpieza profunda y una agradable sensación de frescura.
Su delicioso aroma a uva convierte cada aplicación en una experiencia sensorial única, mientras ayuda a mantener un cuero cabelludo limpio y un cabello con aspecto más saludable, ligero y revitalizado.

💜 Beneficios

🍇 Ayuda a eliminar impurezas y residuos acumulados.
🍇 Limpia profundamente el cuero cabelludo.
🍇 Favorece una sensación de frescura y ligereza.
🍇 Ayuda a mejorar la apariencia del cabello desde la raíz.
🍇 Contribuye a una mejor oxigenación del cuero cabelludo.
🍇 Aroma a uva dulce y duradero.
🍇 Ideal para complementar cualquier rutina de cuidado capilar.

🧴 Modo de uso:

1. Humedece completamente el cabello y cuero cabelludo.
2. Aplica una cantidad adecuada de exfoliante sobre el cuero cabelludo.
3. Masajea suavemente con movimientos circulares durante 2 a 3 minutos.
4. Enjuaga con abundante agua.
Continúa con tu shampoo y acondicionador habitual.
5. Utiliza una vez por semana o según las necesidades de tu cabello.

🌸 Tip Asuka: Si utilizas cremas para peinar, aceites o tratamientos capilares con frecuencia, incorpora el Exfoliante Capilar Bubbaluu Aroma Uva una vez por semana. Esto ayudará a mantener el cuero cabelludo libre de acumulación de productos y permitirá que tu rutina capilar aproveche mejor sus beneficios. 🍇✨`,
  },
  {
    id: 18,
    name: 'Exfoliante de Azucar UVA',
    price: 8000,
    image: 'https://www.image2url.com/r2/default/images/1781128457536-be7e1e13-a12f-4334-994c-eaa1179b8e1e.png',
    stock: 80,
    category: 'Corporal',
    description: `Renueva y revitaliza tu piel con el Exfoliante Corporal de Azúcar Bubbaluu Aroma Uva. Su fórmula ayuda a eliminar suavemente las células muertas e impurezas, dejando la piel más lisa, suave y luminosa. Además, su delicioso aroma a uva transforma tu rutina de cuidado corporal en una experiencia refrescante y placentera.
Su textura a base de azúcar exfolia delicadamente sin resecar, ayudando a mejorar la apariencia y textura de la piel desde la primera aplicación.

💜 Beneficios

🍇 Elimina células muertas e impurezas.
🍇 Ayuda a suavizar y alisar la piel.
🍇 Favorece una apariencia más luminosa y saludable.
🍇 Contribuye a mejorar la textura de la piel.
🍇 Deja la piel suave y delicadamente perfumada.
🍇 Exfoliación efectiva pero suave.
🍇 Ideal para complementar tu rutina de hidratación corporal.

🧴 Modo de uso:

1. Humedece la piel durante la ducha.
2. Aplica una cantidad adecuada de exfoliante sobre la piel húmeda.
3. Masajea suavemente con movimientos circulares, enfocándote en zonas más secas como codos, rodillas y talones.
4. Enjuaga con abundante agua.
5. Utiliza de 1 a 3 veces por semana según las necesidades de tu piel.
6. Finaliza aplicando tu crema corporal favorita para potenciar la hidratación.

🌸 Tip Asuka: Para una piel aún más suave y perfumada, utiliza el Exfoliante Corporal Bubbaluu Aroma Uva durante la ducha y luego aplica la Crema Corporal Bubbaluu Aroma Uva. Esta combinación ayuda a mantener la piel hidratada, luminosa y con un delicioso aroma durante más tiempo. 💜✨`,
  },
  {
    id: 19,
    name: 'Exfoliante de Azucar FRUTILLA',
    price: 8000,
    image: 'https://www.image2url.com/r2/default/images/1781128480634-9c00c639-403a-432e-ba4c-573e09c6ce5e.png',
    stock: 38,
    category: 'Corporal',
    description: `Disfruta una piel más suave, luminosa y renovada con el Exfoliante Corporal de Azúcar Bubbaluu Aroma Frutilla. Su fórmula ayuda a remover delicadamente las células muertas e impurezas acumuladas en la piel, dejándola con una textura más uniforme y un irresistible aroma a frutilla.
Gracias a su exfoliación suave a base de azúcar, ayuda a revitalizar la piel sin resecarla, convirtiendo tu rutina de cuidado corporal en un momento de bienestar y frescura.

💖 Beneficios

🍓 Ayuda a eliminar células muertas e impurezas.
🍓 Suaviza y mejora la textura de la piel.
🍓 Favorece una apariencia más luminosa y saludable.
🍓 Ayuda a prevenir la sensación de piel áspera.
🍓 Deja la piel delicadamente perfumada con aroma a frutilla.
🍓 Exfoliación suave ideal para el cuidado corporal.
🍓 Complemento perfecto para tu rutina de hidratación.

🧴 Modo de uso:

1. Humedece la piel durante la ducha.
2. Aplica una cantidad adecuada de exfoliante sobre la piel húmeda.
3. Masajea suavemente con movimientos circulares.
4. Presta especial atención a zonas como codos, rodillas y talones.
5. Enjuaga con abundante agua.
6. Utiliza de 1 a 3 veces por semana.
7. Finaliza aplicando una crema corporal para potenciar la hidratación.

🌸 Tip Asuka: Para obtener mejores resultados, utiliza el Exfoliante Corporal Bubbaluu Aroma Frutilla antes de aplicar tu Crema Corporal Bubbaluu Aroma Frutilla. La exfoliación ayuda a que la piel absorba mejor la hidratación, dejándola más suave, luminosa y con un delicioso aroma frutal. 🍓✨`,
  },
  {
    id: 20,
    name: 'Gel de Ducha Uva 500ml',
    price: 6800,
    image: 'https://www.image2url.com/r2/default/images/1781128499792-6a780caf-8590-4804-b8b4-8075b1ec3afe.png',
    stock: 32,
    category: 'Corporal',
    description: `Disfruta de una experiencia de limpieza refrescante con el Gel de Ducha Bubbaluu Uva. Su fórmula suave ayuda a limpiar la piel eficazmente, eliminando impurezas mientras aporta una agradable sensación de frescura y bienestar.
Su delicioso aroma a uva envuelve tu piel con una fragancia dulce y frutal, transformando cada ducha en un momento de relajación. Ideal para el uso diario, deja la piel limpia, suave y con una agradable sensación de hidratación.

✨ Limpieza suave y efectiva.
✨ Delicioso aroma a uva.
✨ Ayuda a mantener la piel suave y fresca.
✨ Ideal para uso diario.
✨ Apto para todo tipo de piel.
✨ Presentación de 500 ml.

Beneficios:

🍇 Ayuda a limpiar la piel sin resecarla.
🍇 Proporciona una agradable sensación de frescura.
🍇 Deja la piel suave y confortable.
🍇 Perfuma delicadamente la piel con aroma a uva.
🍇 Ideal para toda la familia.
🍇 Convierte la ducha en un momento de bienestar y relajación.

Modo de uso:

1. Humedece completamente la piel durante la ducha.
2. Aplica una cantidad adecuada de gel sobre una esponja o directamente en las manos.
3. Masajea suavemente el cuerpo hasta formar espuma.
4. Distribuye el producto con movimientos circulares.
5. Enjuaga con abundante agua.
6. Utiliza diariamente para disfrutar de una piel limpia, fresca y delicadamente perfumada.

💖 Tip Asuka: Para prolongar la sensación de frescura y aroma, complementa tu rutina con una crema corporal o splash corporal después de la ducha. 🍇✨🌸`,
  },
  {
    id: 21,
    name: 'Gel de Ducha TuttiFrutti 500ml',
    price: 6800,
    image: 'https://www.image2url.com/r2/default/images/1781377825119-d3dd7eed-a615-4af9-9cf3-f93eb830c2a0.png',
    stock: 22,
    category: 'Corporal',
    description: `Transforma tu rutina diaria en una experiencia refrescante con el Gel de Ducha Bubbaluu Tutti Frutti. Su fórmula suave ayuda a limpiar la piel delicadamente, eliminando impurezas mientras aporta una agradable sensación de frescura y bienestar.
Su delicioso aroma Tutti Frutti envuelve tu piel con una fragancia dulce y frutal que permanece después de cada baño, dejando la piel limpia, suave y con una sensación de hidratación y confort.

✨ Limpieza suave y efectiva.
✨ Aroma dulce Tutti Frutti.
✨ Ayuda a mantener la piel suave y fresca.
✨ Ideal para uso diario.
✨ Apto para todo tipo de piel.
✨ Presentación de 500 ml.

Beneficios:

🍬 Ayuda a limpiar la piel sin resecarla.
🍬 Proporciona una agradable sensación de frescura.
🍬 Deja la piel suave y confortable.
🍬 Perfuma delicadamente la piel con aroma Tutti Frutti.
🍬 Ideal para toda la familia.
🍬 Convierte la ducha en un momento de relajación y bienestar.

Modo de uso:

1. Humedece completamente la piel durante la ducha.
2. Aplica una cantidad adecuada de gel en una esponja o directamente sobre las manos.
3. Masajea suavemente sobre el cuerpo hasta formar espuma.
4. Distribuye por todo el cuerpo con movimientos circulares.
5. Enjuaga con abundante agua.
Utiliza diariamente para disfrutar de una piel limpia, fresca y perfumada.

💖 Tip Asuka: Complementa tu rutina con una crema corporal o splash de tu aroma favorito para prolongar la sensación de frescura y bienestar durante todo el día. 🍬✨🌸`,
  },
  {
    id: 22,
    name: 'Limpiador Facial de COLAGENO',
    price: 4400,
    image: 'https://www.image2url.com/r2/default/images/1781377952961-48db5071-9d0a-4aae-b205-d05233ec90b2.png',
    stock: 0,
    category: 'Skincare',
    description: `Disfruta de una limpieza profunda y delicada con el Limpiador Facial Hidratante Bubbaluu, enriquecido con colágeno y ácido hialurónico. Su fórmula ayuda a eliminar eficazmente el exceso de grasa, impurezas, restos de maquillaje y suciedad acumulada durante el día, dejando la piel fresca, limpia y confortable.
Su espuma suave proporciona una experiencia de limpieza agradable mientras ayuda a mantener la hidratación natural de la piel, evitando la sensación de resequedad o tirantez. Ideal para incorporar en tu rutina diaria de cuidado facial.

Modo de uso:

1. Humedece el rostro con agua tibia.
2. Aplica una pequeña cantidad de producto en la palma de la mano.
3. Masajea suavemente sobre el rostro con movimientos circulares hasta formar espuma.
4. Enjuaga con abundante agua.
Utiliza por la mañana y por la noche 5. para mantener una piel limpia y fresca.

✨ Tip ASUKA: Después de la limpieza, aplica tu sérum y crema hidratante favorita para potenciar los beneficios de tu rutina de skincare. 🌸💜`,
  },
  
  {
    id: 24,
    name: 'Shampoo Uva',
    price: 5000,
    image: 'https://www.image2url.com/r2/default/images/1781378263160-fce74aa6-91eb-4090-a3ca-900b0424feb3.png',
    stock: 27,
    category: 'Capilar',
    description: `Luce un cabello limpio, suave y lleno de vida con el Shampoo Bubbaluu Uva 350 ml. Su fórmula enriquecida con Biotina, Coenzima Q10, Vitamina E y Ácido Hialurónico ayuda a fortalecer la fibra capilar mientras limpia delicadamente el cuero cabelludo y el cabello.
Gracias a sus ingredientes, contribuye a mantener el cabello hidratado, brillante y manejable, ayudando a reducir el frizz y mejorando su apariencia general. Su delicioso aroma a uva deja una agradable sensación de frescura en cada lavado

✨ Con Biotina, Q10, Vitamina E y Ácido Hialurónico.
✨ Ayuda a fortalecer el cabello.
✨ Limpia suavemente sin resecar.
✨ Ayuda a controlar el frizz.
✨ Contribuye a un cabello más brillante y saludable.
✨ Fórmula sin sal.
✨ Aroma Uva.

Beneficios:
💜 Ayuda a fortalecer la fibra capilar.
💜 Contribuye a reducir la apariencia de puntas dañadas.
💜 Favorece un cabello más suave y manejable.
💜 Ayuda a mantener la hidratación natural del cabello.
💜 Aporta brillo y vitalidad.
💜 Ideal para el cuidado diario de todo tipo de cabello.

Modo de uso:

1. Humedece completamente el cabello.
2. Aplica una cantidad adecuada de shampoo sobre el cuero cabelludo y cabello.
3. Masajea suavemente hasta formar espuma.
4. Enjuaga con abundante agua.
5. Repite la aplicación si es necesario.
6. ÑPara mejores resultados, complementa con el Acondicionador Bubbaluu Uva.

💖 Tip Asuka: Utiliza el shampoo junto al acondicionador de la misma línea para potenciar la hidratación, el brillo y la suavidad de tu cabello. 🍇✨🌸`,
  },
  {
    id: 25,
    name: 'Shampoo Frutilla',
    price: 5000,
    image: 'https://www.image2url.com/r2/default/images/1781378307199-598650cf-f61b-4c78-a954-05a28c635c45.png',
    stock: 33,
    category: 'Capilar',
    description: `Limpia y cuida tu cabello con el Shampoo Bubbaluu Frutilla, formulado con Glicerina y Colágeno para ayudar a mantener el cabello hidratado, suave y con una apariencia saludable. Su fórmula sin sal limpia delicadamente mientras contribuye a controlar el frizz y mejorar la manejabilidad del cabello.
Ideal para cabellos secos, ondulados o con rizos, ayuda a mantener la hidratación natural de la fibra capilar, dejando el cabello más brillante, suave y fácil de peinar. Su delicioso aroma a frutilla brinda una experiencia fresca y agradable en cada lavado.

Beneficios:
🍓 Ayuda a hidratar profundamente el cabello.
🍓 Contribuye a controlar el frizz.
🍓 Favorece rizos más definidos y suaves.
🍓 Ayuda a reconstruir y proteger la fibra capilar.
🍓 Aporta brillo y suavidad.
🍓 Fórmula sin sal.
🍓 Ideal para uso diario.

Modo de uso:

1. Humedece completamente el cabello.
2. Aplica una cantidad adecuada de shampoo sobre el cuero cabelludo.
3. Masajea suavemente hasta formar espuma.
4. Distribuye la espuma hacia medios y puntas.
5. Enjuaga con abundante agua.
6. Repite si es necesario.

💖 Tip Asuka: Para mejores resultados, utiliza junto al Acondicionador Bubbaluu Frutilla con Glicerina y Colágeno para potenciar la hidratación, suavidad y definición de tu cabello. 🍓✨🌸`,
  },
   {
    id: 26,
    name: 'Mascaras Hidratantes Para Ojeras Perlas',
    price: 600,
    image: 'https://www.image2url.com/r2/default/images/1781378912557-96b925a3-635e-4dac-9c14-69369a492c08.jpg',
    stock: 10,
    category: 'Skincare',
    description: `Devuelve luminosidad y frescura a tu mirada con la Mascarilla para Ojeras Bubbaluu Perlas. Su fórmula hidratante ayuda a revitalizar el contorno de ojos, aportando suavidad y una apariencia más descansada desde la primera aplicación.
Inspirada en el brillo natural de las perlas, esta mascarilla proporciona una agradable sensación refrescante que ayuda a disminuir los signos visibles de cansancio, dejando la piel más luminosa y radiante.

💖 Beneficios

⚪ Ayuda a iluminar el contorno de ojos.
⚪ Proporciona hidratación profunda y duradera.
⚪ Contribuye a disminuir la apariencia de ojeras y bolsas.
⚪ Favorece una mirada más fresca y descansada.
⚪ Ayuda a suavizar la delicada piel del área ocular.
⚪ Ideal para todo tipo de piel.

🧴 Modo de uso:

1. Limpia y seca completamente el rostro.
2. Coloca los parches debajo de los ojos.
3. Deja actuar entre 15 y 20 minutos.
4. Retira cuidadosamente la mascarilla.
5. Masajea suavemente el sérum restante hasta su completa absorción.
6. No es necesario enjuagar.

🌸 Tip Asuka: Utiliza la mascarilla antes deuna ocasión especial para lucir una mirada más luminosa y descansada. Para potenciar el efecto refrescante, refrigérala unos minutos antes de usarla. ✨⚪🤍`,
  },
  {
    id: 27,
    name: 'Mascaras Hidratantes Para Ojeras Naranja',
    price: 600,
    image: 'https://www.image2url.com/r2/default/images/1781378912557-96b925a3-635e-4dac-9c14-69369a492c08.jpg',
    stock: 10,
    category: 'Skincare',
    description: `Ilumina y revitaliza tu mirada con la Mascarilla para Ojeras Bubbaluu Naranja. Enriquecida con extracto de naranja, ayuda a refrescar e hidratar profundamente el contorno de ojos, dejando la piel con una apariencia más luminosa, descansada y saludable.
Su fórmula proporciona una agradable sensación de frescura mientras ayuda a reducir los signos visibles de cansancio, bolsas y ojeras, devolviendo vitalidad a tu mirada.

💖 Beneficios

🍊 Ayuda a iluminar el contorno de ojos.
🍊 Proporciona hidratación profunda y duradera.
🍊 Contribuye a disminuir la apariencia de ojeras y bolsas.
🍊 Favorece una mirada más fresca y descansada.
🍊 Refresca y suaviza la delicada piel del área ocular.
🍊 Ideal para todo tipo de piel.

🧴 Modo de uso
1. Limpia y seca completamente el rostro.
2. Coloca los parches debajo de los ojos.
3. Deja actuar entre 15 y 20 minutos.
4. Retira cuidadosamente la mascarilla.
5. Masajea suavemente el sérum restante hasta su completa absorción.
6. No es necesario enjuagar.

🌸 Tip Asuka: Úsala por la mañana para despertar tu mirada y darle un aspecto más fresco y luminoso durante todo el día. Para potenciar su efecto refrescante, refrigérala unos minutos antes de aplicarla. ❄️🍊✨`,
  },
   {
    id: 28,
    name: 'Mascaras Hidratantes Para Ojeras Kiwi',
    price: 600,
    image: 'https://www.image2url.com/r2/default/images/1781378912557-96b925a3-635e-4dac-9c14-69369a492c08.jpg',
    stock: 10,
    category: 'Skincare',
    description: `Revitaliza tu mirada con la Mascarilla para Ojeras Hidratante Bubbaluu Kiwi. Su fórmula enriquecida con extracto de kiwi ayuda a hidratar y refrescar el contorno de los ojos, proporcionando una sensación de alivio inmediato frente al cansancio y la fatiga diaria.
Gracias a sus ingredientes humectantes, deja la piel suave, luminosa y con una apariencia más descansada, ayudando a reducir visualmente bolsas y ojeras.

💖 Beneficios

🥝 Ayuda a revitalizar el contorno de ojos.
🥝 Proporciona hidratación profunda y duradera.
🥝 Favorece una apariencia más luminosa y descansada.
🥝 Ayuda a disminuir la apariencia de bolsas y ojeras.
🥝 Refresca y calma la piel delicada del área ocular.
🥝 Apta para todo tipo de piel.

🧴 Modo de uso:

1. Limpia y seca completamente el rostro.
2. Aplica los parches debajo de los ojos.
3. Deja actuar durante 15 a 20 minutos.
4. Retira cuidadosamente la mascarilla.
5. Masajea suavemente el sérum restante hasta su completa absorción.
6. No enjuagar.

🌸 Tip Asuka: Guarda la mascarilla en el refrigerador unos minutos antes de usarla. El efecto frío ayudará a refrescar la mirada, disminuir la hinchazón y potenciar la sensación de descanso. 💚🥝 💫`,
  },
  {
    id: 29,
    name: 'Mascaras Hidratantes Para Ojeras Cereza',
    price: 600,
    image: 'https://www.image2url.com/r2/default/images/1781378912557-96b925a3-635e-4dac-9c14-69369a492c08.jpg',
    stock: 10,
    category: 'Skincare',
    description: `Devuelve frescura y luminosidad a tu mirada con la Mascarilla para Ojeras Bubbaluu Cereza. Enriquecida con extracto de cereza, ayuda a hidratar profundamente el contorno de ojos mientras revitaliza la piel cansada y reduce la apariencia de ojeras y bolsas.
Su fórmula refrescante proporciona una agradable sensación de bienestar, dejando la piel suave, luminosa y con una apariencia más descansada desde la primera aplicación.

💖 Beneficios

🍒 Ayuda a revitalizar y refrescar el contorno de ojos.
🍒 Proporciona hidratación profunda y duradera.
🍒 Contribuye a disminuir la apariencia de ojeras y bolsas.
🍒 Favorece una mirada más luminosa y descansada.
🍒 Ayuda a suavizar la piel delicada del área ocular.
🍒 Ideal para todo tipo de piel.

🧴 Modo de uso:

1. Limpia y seca completamente el rostro.
2. Coloca los parches debajo de los ojos.
3. Deja actuar entre 15 y 20 minutos.
4. Retira cuidadosamente la mascarilla.
5. Masajea suavemente el sérum restante hasta su total absorción.
6. No es necesario enjuagar.

🌸 Tip Asuka: Utiliza la mascarilla antes de dormir o antes de un evento especial para lucir una mirada más fresca y radiante. Para una experiencia aún más revitalizante, refrigérala unos minutos antes de usarla. ✨🍒❤️`,
  },
  {
    id: 30,
    name: 'Mascaras Hidratantes Para Ojeras Arandanos',
    price: 600,
    image: 'https://www.image2url.com/r2/default/images/1781378912557-96b925a3-635e-4dac-9c14-69369a492c08.jpg',
    stock: 10,
    category: 'Skincare',
    description: 'Mascarillas para ojeras',
  },
    {
    id: 31,
    name: 'Mascaras Hidratantes Para Ojeras 24k',
    price: 600,
    image: 'https://www.image2url.com/r2/default/images/1781378912557-96b925a3-635e-4dac-9c14-69369a492c08.jpg',
    stock: 10,
    category: 'Skincare',
    description: `Ilumina y revitaliza tu mirada con la Mascarilla para Ojeras Bubbaluu 24K Gold. Su fórmula enriquecida con partículas inspiradas en oro 24K ayuda a hidratar profundamente el contorno de ojos, aportando luminosidad y una apariencia más descansada.
Ideal para combatir los signos de cansancio, esta mascarilla refresca la piel delicada bajo los ojos, ayudando a reducir visualmente bolsas, ojeras y líneas de expresión para una mirada más radiante y rejuvenecida.

💖 Beneficios

✨ Ayuda a iluminar el contorno de ojos.
✨ Hidratación profunda y refrescante.
✨ Disminuye la apariencia de ojeras y bolsas.
✨ Favorece una mirada más descansada y luminosa.
✨ Ayuda a suavizar líneas finas de expresión.
✨ Apta para todo tipo de piel.

🧴 Modo de uso:

1. Limpia y seca completamente el rostro.
2. Retira los parches del envase y colócalos debajo de los ojos.
3. Deja actuar entre 15 y 20 minutos.
4.Retira suavemente los parches.
5. Masajea el sérum restante hasta su completa absorción.
6. No es necesario enjuagar.

🌸 Tip Asuka: Para potenciar el efecto descongestionante y refrescante, guarda la mascarilla en el refrigerador unos minutos antes de usarla. Perfecta antes de una reunión, evento o después de una noche de poco descanso. ✨ 👑 💛`,
  },
  {
    id: 32,
    name: 'Removedor de Impurezas Facial',
    price: 4900,
    image: 'https://www.image2url.com/r2/default/images/1781378590933-2bec149d-9f80-43d2-a01a-79bce5c09b80.jpg',
    stock: 10,
    category: 'Skincare',
    description: `Luce una piel más limpia, fresca y radiante con el Removedor de Impurezas Facial Bubbaluu Aroma Uva. Su fórmula ayuda a eliminar restos de maquillaje, exceso de grasa e impurezas acumuladas durante el día, dejando una agradable sensación de limpieza y suavidad.
Enriquecido con ácido hialurónico y un delicioso aroma a uva, contribuye a mantener la hidratación natural de la piel mientras limpia profundamente, ayudando a revelar un rostro más luminoso y saludable.

💖 Beneficios

🍇 Ayuda a remover impurezas y residuos del rostro.
🍇 Elimina exceso de grasa y suciedad acumulada.
🍇 Contribuye a una piel más suave y fresca.
🍇 Ayuda a mantener la hidratación gracias a su fórmula con ácido hialurónico.
🍇 Favorece una apariencia más luminosa y saludable.
🍇 Ideal para complementar la rutina diaria de cuidado facial.
🍇 Delicioso aroma a uva que transforma la limpieza en una experiencia agradable.

🧴 Modo de uso:

1. Humedece el rostro con agua tibia.
Aplica una pequeña cantidad del producto sobre la piel.
2. Masajea suavemente con movimientos circulares, evitando el área de los ojos.
3. Enjuaga con abundante agua.
4. Utiliza por la mañana y por la noche para mejores resultados.

🌸 Tip Asuka: Para una rutina facial completa, utiliza el Removedor de Impurezas Bubbaluu antes de aplicar tu sérum o crema hidratante. Una piel limpia absorbe mejor los productos de cuidado facial y ayuda a potenciar sus beneficios. ✨💜`,
  },
  {
    id: 33,
    name: 'Splash Midnight 120 ml',
    price: 3700,
    image: 'https://www.image2url.com/r2/default/images/1781378696889-641a61e2-e871-4015-af5b-5b4118e3d627.jpg',
    stock: 10,
    category: 'Fragancias', 
    description: `Déjate envolver por la esencia única de Splash Bubbaluu Midnight, una fragancia fresca e intensa diseñada para quienes buscan destacar con un aroma sofisticado y cautivador. Su combinación de notas amaderadas y frescas brinda una sensación de limpieza, elegancia y confianza que te acompaña durante todo el día.
Su fórmula ligera refresca la piel al instante, dejando una delicada estela aromática ideal para cualquier ocasión, especialmente para quienes prefieren aromas más profundos y envolventes.

💖 Beneficios

🌙 Aroma amaderado, fresco e intenso.
🌙 Refresca y perfuma la piel al instante.
🌙 Fórmula ligera de rápida absorción.
🌙 Ideal para uso diario.
🌙 Sensación de frescura prolongada.
🌙 Perfecto para llevar en la cartera, mochila o bolso.

 🧴 Modo de uso:

1. Aplicar sobre la piel limpia y seca.
2. Rocíar a una distancia de 15 a 20 cm.
3. Aplicar en cuello, muñecas y escote para potenciar la duración del aroma.
4. Reaplicar durante el día cuando desees renovar la sensación de frescura.

🌸 Tip Asuka: Para una experiencia más duradera, aplica tu Splash Midnight después de la ducha sobre la piel ligeramente hidratada. Esto ayuda a fijar mejor la fragancia y prolongar su aroma durante más tiempo. 💙✨🌙`,
  },
  {
    id: 34,
    name: 'Splash Seduction 120 ml',
    price: 3700,
    image: 'https://www.image2url.com/r2/default/images/1781378743525-b4bef794-4f83-48bb-a4ab-73ad75b0203c.jpg',
    stock: 10,
    category: 'Fragancias', 
    description: `Déjate envolver por el encanto de Splash Bubbaluu Seduction, una fragancia intensa y femenina que combina delicadas notas dulces y florales para crear una experiencia irresistible. Su fórmula ligera refresca la piel mientras deja un aroma envolvente y duradero, perfecto para quienes aman destacar con un toque de elegancia y personalidad.
Ideal para el día o la noche, Seduction aporta frescura, suavidad y una exquisita sensación de bienestar en cada aplicación.

💖 Beneficios

🌹 Aroma dulce y floral de gran intensidad.
🌹 Refresca y perfuma la piel al instante.
🌹 Fórmula ligera y de rápida absorción.
🌹 Ayuda a mantener una agradable sensación de frescura.
🌹 Ideal para uso diario y ocasiones especiales.
🌹 Formato práctico para llevar a todas partes.

🧴 Modo de uso:

Aplicar sobre la piel limpia y seca.
Rocíar a una distancia de 15 a 20 cm.
Aplicar en cuello, muñecas y escote para potenciar la fragancia.
Reaplicar durante el día cuando desees renovar el aroma.

🌸 Tip Asuka: Para prolongar la duración de tu fragancia, aplica Splash Seduction después de la ducha sobre la piel hidratada. También puedes complementar con crema corporal de aroma dulce para intensificar su fijación y disfrutar de una experiencia aromática más duradera. ✨🌹 ❤️`,
  },
  {
    id: 35,
    name: 'Toallitas humedas Frutilla',
    price: 2400,
    image: 'https://www.image2url.com/r2/default/images/1781378843215-d43a0340-eaf1-4470-95fa-a5715d583a6e.jpg',
    stock: 10,
    category: 'Skincare', 
    description: `Mantén tu piel limpia y fresca en cualquier momento con las Toallitas Desmaquillantes Bubbaluu. Su fórmula suave ayuda a remover eficazmente el maquillaje, el exceso de grasa y las impurezas acumuladas durante el día, dejando la piel limpia, suave y con una agradable sensación de frescura.
Son ideales para el uso diario y perfectas para llevar en la cartera, mochila o durante tus viajes. Gracias a su práctico formato, podrás cuidar tu piel dondequiera que estés.
✨ Remueven maquillaje e impurezas.
✨ Ayudan a limpiar y refrescar la piel.
✨ Suaves con el rostro.
✨ Prácticas y fáciles de transportar.
✨ Ideales para todo tipo de piel.
✨ Aroma Frutilla.

Modo de uso:

1. Retira una toallita del envase.
2. Deslízala suavemente sobre el rostro, ojos y labios para eliminar maquillaje e impurezas.
3. Repite si es necesario hasta que la piel quede completamente limpia.
4. No requiere enjuague.
5. Cierra bien el envase después de cada uso para mantener la humedad de las toallitas.

💖 Tip Asuka: Ideales para llevar en tu cartera o mochila y refrescar tu piel durante el día, después del gimnasio o mientras viajas. ✨🍓🌸`,
  },
  {
    id: 36,
    name: 'Body Mist Bath & Body Works A Thousand Wishes',
    price: 9500,
    image: '/body_mist_a_thousand_wishes.jpg',
    stock: 10,
    category: 'Fragancias', 
    description: `Celebra cada momento con A Thousand Wishes Body Mist Mini, una fragancia cálida, luminosa y encantadora que transmite alegría, elegancia y feminidad. Inspirada en los deseos, los sueños y las celebraciones especiales, esta bruma perfumada envuelve tu piel y cabello con un aroma dulce y sofisticado que deja una impresión inolvidable.
Su fórmula ligera está diseñada para usarse en cuerpo y cabello, proporcionando una sensación refrescante y una delicada estela aromática durante todo el día. Su práctico formato mini es perfecto para llevar en tu cartera y disfrutar de tu fragancia favorita donde quiera que vayas.

💖 Notas Aromáticas
🌸 Peonías Cristalinas
🍐 Membrillo Chispeante
✨ Ámbar Dorado
🍮 Crema de Amaretto

💖 Beneficios

✨ Perfuma delicadamente cuerpo y cabello.
💖 Aroma dulce, cálido y femenino.
🌸 Ideal para el uso diario y ocasiones especiales.
👜 Formato mini práctico para llevar a todas partes.
✨ Deja una estela elegante y duradera.
✔️ Dermatológicamente probado.

🧴 Modo de Uso

1. Aplica una crema corporal hidratante sobre la piel limpia.
2. Espera unos minutos para que se absorba correctamente.
3. Rocía el Body Mist sobre cuello, muñecas, escote y cabello a una distancia de 15 a 20 cm.
4. Reaplica durante el día cuando desees refrescar tu fragancia.

🌸 Tip Asuka: Para prolongar la duración de A Thousand Wishes, aplícalo sobre la piel humectada después de tu rutina corporal. También puedes perfumar ligeramente tu cabello para mantener su aroma delicado durante más tiempo. Combínalo con una crema de vainilla, almendra o notas dulces para potenciar aún más su fragancia.`,
  },
  {
    id: 37,
    name: 'Body Mist Bath & Body Works Champagne Toast',
    price: 9500,
    image: 'https://www.image2url.com/r2/default/images/1781562752244-5ff565a4-cb85-4204-bb45-41ab82301e11.jpg',
    stock: 10,
    category: 'Fragancias', 
    description: `Celebra cada día con Champagne Toast Body Mist Mini, una fragancia vibrante, dulce y efervescente que transforma cualquier momento en una ocasión especial. Inspirada en el brillo de una copa de champaña y la frescura de las frutas cítricas, esta bruma perfumada envuelve tu piel y cabello con un aroma alegre, femenino y lleno de energía.
Su fórmula ligera está diseñada para usarse tanto en el cuerpo como en el cabello, dejando una sensación refrescante y una fragancia irresistible durante todo el día. Gracias a su práctico formato mini, podrás llevarla contigo donde quieras y refrescar tu aroma en cualquier momento.

🥂 Notas Aromáticas
🍾 Champaña burbujeante
🍓 Frutos rojos efervescentes
🍊 Mandarina jugosa
🌟 Beneficios
✨ Perfuma delicadamente cuerpo y cabello.
🥂 Aroma dulce, frutal y chispeante.
💖 Brinda una sensación fresca y femenina durante todo el día.
👜 Formato mini ideal para llevar en cartera o cosmetiquero.
🌸 Perfecto para uso diario o ocasiones especiales.
☀️ Deja una estela alegre y sofisticada.

🧴 Modo de Uso

1. Aplica una crema corporal o loción hidratante sobre la piel limpia.
2. Espera unos minutos para que la hidratante se absorba.
3. Rocía el Body Mist sobre cuello, muñecas, escote y cabello a una distancia de 15 a 20 cm.
4. Reaplica cuando desees intensificar o refrescar tu fragancia.

🌸 Tip Asuka: Para una mayor duración del aroma, aplica Champagne Toast sobre la piel previamente humectada. También puedes rociar ligeramente tu cabello para disfrutar de sus notas frutales y burbujeantes durante todo el día. Combínalo con una crema de aroma dulce o frutal para potenciar aún más su duración.`,
  },
  {
    id: 38,
    name: 'Body Mist Bath & Body Works Costa Rica',
    price: 9500,
    image: 'https://www.image2url.com/r2/default/images/1782254306551-3f259a0b-bc3b-4d0f-ac23-eac1f712564a.jpg',
    stock: 0,
    category: 'Fragancias', 
    description: `Despierta tus sentidos con Pink Pineapple Sunrise Body Mist Mini, una fragancia tropical inspirada en los cálidos amaneceres del paraíso. Su delicioso aroma combina notas dulces y frutales que evocan la frescura de una piña rosada recién cortada bajo el sol, creando una experiencia alegre, luminosa y refrescante.
Diseñado para utilizar tanto en el cuerpo como en el cabello, este body mist deja una delicada bruma perfumada que acompaña tu día con una sensación de frescura y energía. Su práctico formato mini es ideal para llevar en tu cartera o cosmetiquero y disfrutar de un toque tropical donde quiera que vayas.

🍍 Notas Aromáticas
🍍 Piña rosada dulce
🌴 Azúcar de palma
☀️ Néctar bañado por el sol

💖 Beneficios

✨ Perfuma delicadamente cuerpo y cabello.
🍍 Aroma tropical, dulce y refrescante.
💖 Brinda una agradable sensación de frescura durante el día.
👜 Formato mini ideal para llevar a todas partes.
☀️ Perfecto para uso diario y climas cálidos.
🌺 Deja una estela alegre, femenina y veraniega.

🧴 Modo de Uso:

1. Aplica una crema corporal o loción hidratante sobre la piel limpia.
2. Espera unos minutos para que la hidratante se absorba.
3. Rocía el Body Mist sobre cuello, escote, muñecas y cabello a una distancia de 15 a 20 cm.
4. Reaplica durante el día cuando desees refrescar tu fragancia.

🌸 Tip Asuka: Para una mayor duración del aroma, aplica tu Pink Pineapple Sunrise Body Mist sobre la piel previamente humectada. También puedes rociar ligeramente tu cabello para disfrutar de sus notas tropicales cada vez que te muevas. 🍍☀️✨`,
  },
  {
    id: 54,
    name: 'Body Mist Bath & Body Works Japanese Cherry',
    price: 9500,
    image: 'https://www.image2url.com/r2/default/images/1781563038737-07d8b6d3-094e-41aa-921d-4e4e68166e29.jpg',
    stock: 8,
    category: 'Fragancias', 
    description: `Descubre la elegancia atemporal de Japanese Cherry Blossom, una de las fragancias más icónicas de Bath & Body Works. Su exquisita combinación de flores delicadas y notas suaves crea un aroma femenino, romántico y sofisticado que acompaña cada momento con un toque de belleza natural.
Esta bruma perfumada está diseñada para usarse tanto en cuerpo como en cabello, dejando una estela floral duradera y una sensación fresca y ligera. Perfecta para quienes aman los aromas clásicos, elegantes y llenos de encanto.

🌸 Notas Aromáticas
🌸 Flor de Cerezo Japonés
🍐 Pera Asiática
🌼 Pétalos de Mimosa Fresca
🤍 Jazmín Blanco
🌿 Sándalo Suave

💖 Beneficios

✨ Perfuma delicadamente cuerpo y cabello.
🌸 Aroma floral elegante, femenino y duradero.
💖 Ideal para uso diario o ocasiones especiales.
✔️ Dermatológicamente probado.
🌿 Fragancia ligera y fácil de combinar con otras líneas de cuidado corporal.
👜 Formato práctico para llevar a cualquier lugar.

🧴 Modo de Uso

1. Aplica sobre la piel limpia y humectada.
2. Rocía en cuello, muñecas, escote y cabello a una distancia de 15 a 20 cm.
3. Reaplica durante el día para mantener la intensidad de la fragancia.

🌸 Tip Asuka: Para una mayor duración, aplica Japanese Cherry Blossom después de tu crema corporal favorita. La piel hidratada ayuda a fijar mejor el aroma, permitiendo que sus delicadas notas florales permanezcan por más tiempo. También puedes aplicar una ligera bruma sobre tu cabello para disfrutar de una fragancia elegante durante todo el día.`,
  },
  {
    id: 39,
    name: 'Body Mist Bath & Body Works Dreaming of Rio',
    price: 9500,
    image: 'https://www.image2url.com/r2/default/images/1781562756634-cd05297a-e2ea-4ab7-963d-ede7169d3c35.jpg',
    stock: 8,
    category: 'Fragancias', 
    description: `Escápate a las playas soleadas de Río de Janeiro con Dreaming of Rio Body Mist Mini, una fragancia dulce, floral y cálida inspirada en la energía, belleza y encanto de Brasil. Su exquisita combinación de notas tropicales envuelve tu piel y cabello con un aroma femenino, acogedor y lleno de personalidad.
Diseñado para usar tanto en el cuerpo como en el cabello, este body mist proporciona una sensación refrescante mientras deja una delicada estela aromática durante el día. Su formato mini es perfecto para llevar en la cartera, mochila o cosmetiquero y disfrutar de un toque de frescura donde quieras.

🌺 Notas Aromáticas
🍌 Plátano dorado
🌼 Pétalos de gardenia
🌳 Madera de cedro iluminada por el sol
🌟 Beneficios
✨ Perfuma delicadamente cuerpo y cabello.
🌴 Aroma dulce, floral y cálido con inspiración tropical.
💖 Brinda una agradable sensación de frescura.
👜 Formato mini ideal para llevar a todas partes.
☀️ Perfecto para uso diario y ocasiones especiales.
🌺 Deja una estela femenina y envolvente.

🧴 Modo de Uso

1. Aplica una crema corporal o loción hidratante sobre la piel limpia.
2. Espera unos minutos para que la hidratante se absorba.
3. Rocía el Body Mist sobre cuello, escote, muñecas y cabello a una distancia de 15 a 20 cm.
4. Reaplica durante el día para mantener la intensidad de la fragancia.

🌸 Tip Asuka: Para una mayor duración del aroma, aplica tu Dreaming of Rio Body Mist sobre la piel previamente humectada. También puedes perfumar ligeramente tu cabello para disfrutar de sus notas tropicales cada vez que te muevas. 🌴🍌✨`,
  },
  {
    id: 40,
    name: 'Body Mist Bath & Body Works In the Stars',
    price: 9500,
    image: 'https://www.image2url.com/r2/default/images/1781562762851-973896b8-4754-46b8-8c93-5672cec6e622.jpg',
    stock: 4,
    category: 'Fragancias', 
    description: `Déjate envolver por la magia de In The Stars Body Mist Mini, una fragancia cálida, luminosa y sofisticada inspirada en los momentos que brillan como las estrellas. Su exquisita combinación de notas dulces, amaderadas y ambaradas crea un aroma elegante y envolvente que destaca por su feminidad y personalidad única.
Esta bruma perfumada está diseñada para usarse en cuerpo y cabello, proporcionando una sensación refrescante mientras deja una delicada estela aromática durante todo el día. Su práctico formato mini es ideal para llevar contigo y reaplicar tu fragancia favorita cuando lo desees.

⭐ Notas Aromáticas
🌼 Flor de Estrella
🤍 Almizcle de Sándalo
🍊 Tangelo Azucarado
🌳 Madera de Agar Blanca
✨ Ámbar Radiante

💖 Beneficios

✨ Perfuma delicadamente cuerpo y cabello.
⭐ Aroma cálido, elegante y duradero.
💖 Ideal para quienes buscan una fragancia sofisticada y femenina.
👜 Formato mini perfecto para cartera o cosmetiquero.
🌸 Deja una estela envolvente y luminosa.
✔️ Dermatológicamente probado y libre de parabenos.

🧴 Modo de Uso

1. Aplica una crema corporal hidratante sobre la piel limpia.
2. Espera unos minutos para que la piel absorba la hidratación.
3. Rocía el Body Mist sobre cuello, muñecas, escote y cabello a una distancia de 15 a 20 cm.
4. Reaplica durante el día para mantener la intensidad de la fragancia.

🌸 Tip Asuka: Para prolongar la duración de In The Stars, aplícalo sobre la piel humectada después de tu rutina de cuidado corporal. También puedes perfumar ligeramente tu cabello para disfrutar de sus notas cálidas y radiantes por más tiempo. Combínalo con una crema de vainilla, ámbar o notas dulces para potenciar aún más su aroma`,
  },
  {
    id: 41,
    name: 'Body Mist Bath & Body Works Into the night',
    price: 9500,
    image: 'https://www.image2url.com/r2/default/images/1781562762851-973896b8-4754-46b8-8c93-5672cec6e622.jpg',
    stock: 12,
    category: 'Fragancias', 
    description: `Déjate envolver por el misterio y la elegancia de Into The Night Body Mist Mini. Esta sofisticada bruma perfumada captura la esencia de una noche inolvidable, combinando notas frutales oscuras, flores aterciopeladas y acordes cálidos que crean una fragancia intensa, femenina y cautivadora.
Diseñada para usarse en cuerpo y cabello, su fórmula ligera refresca y perfuma delicadamente, dejando una estela envolvente y duradera. Su práctico formato mini es perfecto para llevar contigo y reaplicar tu aroma favorito cuando lo desees.

🌙 Notas Aromáticas
🖤 Frambuesa Noir
✨ Cristales de Ámbar
🌹 Pétalos de Rosa Aterciopelada
🤎 Pachulí Cremoso
☕ Almizcle de Mocha
🌟 Beneficios
✨ Perfuma delicadamente cuerpo y cabello.
🌙 Aroma elegante, profundo y sofisticado.
💖 Ideal para salidas nocturnas y ocasiones especiales.
👜 Formato mini práctico para llevar a todas partes.
🌸 Deja una estela femenina y envolvente.
✔️ Dermatológicamente probado y libre de parabenos.

🧴 Modo de Uso

1. Aplica una crema corporal hidratante sobre la piel limpia.
2. Espera unos minutos para que se absorba completamente.
3. Rocía el Body Mist sobre cuello, muñecas, escote y cabello a una distancia de 15 a 20 cm.
4. Reaplica durante el día o la noche para mantener la intensidad de la fragancia.

🌸 Tip Asuka: Para potenciar la duración de Into The Night, aplícalo sobre la piel humectada después de tu rutina de cuidado corporal. También puedes rociar ligeramente tu cabello para disfrutar de su aroma elegante y sofisticado durante más tiempo. Combínalo con una crema de notas dulces o ambaradas para una experiencia aún más intensa.`,
  },
  {
    id: 42,
    name: 'Body Mist Bath & Body Works Rose',
    price: 9500,
    image: 'https://www.image2url.com/r2/default/images/1781562764452-0e6bea50-8cc0-4e4b-bae2-94243b6ceab5.jpg',
    stock: 6,
    category: 'Fragancias', 
    description: `Déjate envolver por la delicadeza de Rose Fine Fragrance Mist, una fragancia floral fresca, ligera y elegante que captura la esencia de un jardín de rosas recién florecidas. Su aroma limpio y romántico combina suaves notas florales con un toque de almizcle cremoso, creando una experiencia femenina y sofisticada para el día a día.
Esta bruma perfumada está diseñada para usarse en cuerpo y cabello, dejando una sensación refrescante y una delicada estela floral que acompaña cada momento. Su práctico formato de viaje es perfecto para llevar contigo y reaplicar cuando desees renovar tu aroma.

🌹 Notas Aromáticas
💧 Agua de Rosa Ligera
🌸 Pétalos de Jazmín
🤍 Almizcle Cremoso

💖 Beneficios

✨ Perfuma delicadamente cuerpo y cabello.
🌹 Aroma floral fresco, limpio y romántico.
💖 Ideal para quienes aman las fragancias suaves y elegantes.
👜 Formato travel size perfecto para llevar a todas partes.
✔️ Libre de parabenos y dermatológicamente probado.
🌸 Deja una sensación ligera y confortable durante el día.

🧴 Modo de Uso

1. Aplica sobre la piel limpia y humectada.
2. Rocía en cuello, muñecas, escote y cabello a una distancia de 15 a 20 cm.
3. Reaplica durante el día para mantener la frescura de la fragancia.

🌸 Tip Asuka: Para potenciar la duración del aroma, aplica Rose después de tu crema corporal favorita. La piel hidratada ayuda a fijar mejor la fragancia, permitiendo que sus delicadas notas florales permanezcan por más tiempo. También puedes perfumar ligeramente tu cabello para disfrutar de un aroma fresco y femenino durante todo el día.`,
  },
  {
    id: 43,
    name: 'Body Mist Bath & Body Viva Brazil',
    price: 9500,
    image: 'https://www.image2url.com/r2/default/images/1781562766216-3df6b01f-6955-4cf9-896a-70d47ec8ea0f.jpg',
    stock: 16,
    category: 'Fragancias', 
    description: `Déjate envolver por la energía tropical de Viva Brazil Body Mist Mini, una fragancia inspirada en los vibrantes paisajes y aromas de Brasil. Su combinación de notas frutales y refrescantes crea un aroma alegre, femenino y lleno de vitalidad, perfecto para quienes aman las fragancias dulces con un toque fresco y exótico.
Su práctico formato mini es ideal para llevar en la cartera, mochila o cosmetiquero, permitiéndote refrescar tu aroma en cualquier momento del día.

🌴 Notas Aromáticas
🥭 Guayaba fresca
🍈 Ralladura de maracuyá
🥥 Agua de coco
🌟 Beneficios
✨ Aroma tropical dulce y refrescante.
💖 Brinda una agradable sensación de frescura sobre la piel.
👜 Formato práctico para llevar a todas partes.
🌺 Ideal para uso diario y cualquier ocasión.
☀️ Perfecto para quienes disfrutan fragancias frutales y veraniegas.

🧴 Modo de Uso
1. Aplica una crema corporal o loción hidratante sobre la piel limpia.
2. Espera unos minutos para que la hidratante se absorba.
3. Rocía el Body Mist sobre cuello, escote, muñecas y detrás de las orejas.
4. Reaplica durante el día cuando desees refrescar tu fragancia.

🌸 Tip Asuka: Para lograr una mayor duración del aroma, aplica tu Body Mist Viva Brazil sobre la piel previamente humectada con crema corporal. La hidratación ayuda a fijar mejor la fragancia, permitiendo que sus deliciosas notas tropicales te acompañen durante más tiempo. 🌺🥥✨`,
  },
  {
    id: 44,
    name: 'Body Mist Bath & Body Vainilla',
    price: 9500,
    image: 'https://www.image2url.com/r2/default/images/1781562768613-5b4d5b10-9442-4177-b93b-31d29caef400.jpg',
    stock: 8,
    category: 'Fragancias', 
    description: `Disfruta de la dulzura reconfortante de Warm Vanilla Sugar Body Mist Mini, una fragancia cálida, cremosa y envolvente que transforma cada aplicación en un momento de bienestar. Su exquisita combinación de vainilla, flores suaves y notas amaderadas crea un aroma dulce y elegante, perfecto para quienes aman las fragancias acogedoras y femeninas.
Esta bruma perfumada está diseñada para usarse en cuerpo y cabello, dejando una sensación fresca y una delicada estela aromática que acompaña durante todo el día. Su práctico formato mini la convierte en la compañera ideal para llevar en tu cartera y refrescar tu aroma cuando lo necesites.

🤎 Notas Aromáticas
🍦 Vainilla Embriagante
🌼 Orquídea Blanca
✨ Azúcar Brillante
🌸 Jazmín Fresco
🌿 Sándalo Cremoso

💖 Beneficios

✨ Perfuma delicadamente cuerpo y cabello.
🤎 Aroma dulce, cálido y reconfortante.
🌸 Ideal para uso diario durante todo el año.
👜 Formato mini práctico para llevar a todas partes.
💖 Deja una estela suave, femenina y duradera.
✔️ Dermatológicamente probado y libre de parabenos.

🧴 Modo de Uso

1. Aplica una crema corporal hidratante sobre la piel limpia.
2. Espera unos minutos para que la piel absorba la hidratación.
3. Rocía el Body Mist sobre cuello, muñecas, escote y cabello a una distancia de 15 a 20 cm.
4. Reaplica durante el día para mantener la intensidad de la fragancia.

🌸 Tip Asuka: Para una mayor duración del aroma, aplica Warm Vanilla Sugar sobre la piel humectada después de tu rutina corporal. También puedes perfumar ligeramente tu cabello para disfrutar de sus notas dulces y cremosas por más tiempo. Combínalo con una crema de vainilla o manteca corporal para potenciar aún más su fragancia.`,
  },
  {
    id: 45,
    name: 'Mascarillas Facial Cereza',
    price: 1000,
    image: 'https://www.image2url.com/r2/default/images/1782254274600-8aa15f88-7fa1-48f2-b138-cb9718fa626b.png',
    stock: 8,
    category: 'Skincare',
    description: `Disfruta una experiencia de cuidado facial revitalizante con la Mascarilla Facial Bubbaluu Cherry. Enriquecida con extracto de cereza, ayuda a hidratar, nutrir y refrescar la piel, aportando una apariencia más luminosa y saludable.
Su fórmula inspirada en los beneficios antioxidantes de la cereza contribuye a proteger la piel de los factores externos, ayudando a mantenerla suave, flexible y con un aspecto radiante. Ideal para complementar tu rutina de skincare y regalarle a tu rostro un momento de cuidado y frescura.

💖 Beneficios

🍒 Ayuda a hidratar y nutrir la piel.
🍒 Favorece una apariencia más luminosa y radiante.
🍒 Contribuye a revitalizar la piel cansada o apagada.
🍒 Ayuda a mantener la suavidad y elasticidad natural del rostro.
🍒 Sus antioxidantes ayudan a proteger la piel frente a agresores externos.
🍒 Apta para todo tipo de piel.

🧴 Modo de Uso:

1. Limpia y seca completamente tu rostro.
2. Aplica una capa uniforme evitando ojos y labios.
3 Deja actuar entre 10 y 15 minutos.
4. Retira con abundante agua tibia.
5. Finaliza con tu crema hidratante favorita.

🌸 Tip Asuka: Para potenciar la sensación refrescante, guarda la mascarilla unos minutos en el refrigerador antes de usarla. Tu piel se sentirá más fresca, suave y revitalizada. ✨🍒❤️`,
  },
  {
    id: 23,
    name: 'Mascarillas Facial Kiwi',
    price: 1000,
    image: 'https://www.image2url.com/r2/default/images/1781378169685-bee0ff8d-cd53-4a4f-a9aa-6f63957df180.png',
    stock: 20,
    category: 'Skincare',
    description: `Revitaliza tu piel con la Mascarilla Facial Bubbaluu Kiwi, una fórmula inspirada en los beneficios naturales del kiwi para brindar hidratación, frescura y luminosidad al rostro. Rica en antioxidantes y vitaminas, ayuda a mantener la piel suave, nutrida y con una apariencia saludable.
Su textura ligera permite una aplicación cómoda, proporcionando una agradable sensación refrescante mientras contribuye a mejorar el aspecto general de la piel. Ideal para complementar tu rutina de skincare y devolverle vitalidad a tu rostro.

💖 Beneficios

🥝 Ayuda a hidratar y nutrir la piel en profundidad.
🥝 Favorece una apariencia más luminosa y saludable.
🥝 Rica en antioxidantes que ayudan a proteger la piel.
🥝 Contribuye a mantener la suavidad y elasticidad natural del rostro.
🥝 Ayuda a revitalizar pieles cansadas o apagadas.
🥝 Apta para todo tipo de piel.

🧴 Modo de Uso:

1. Limpia y seca completamente tu rostro.
2. Aplica una capa uniforme evitando el área de los ojos y labios.
3. Deja actuar durante 10 a 15 minutos.
4. Retira con abundante agua tibia.
5. Continúa con tu crema hidratante habitual.

🌸 Tip Asuka: Para una experiencia aún más refrescante, conserva la mascarilla unos minutos en el refrigerador antes de aplicarla. Ideal para utilizar después de un día largo o cuando tu piel necesite un impulso de frescura. ✨🥝💚`,
  },
  {
    id: 46,
    name: 'Mascarillas Facial Mango',
    price: 1000,
    image: 'https://www.image2url.com/r2/default/images/1782254279129-20665cf9-bb93-4088-9fce-55005687a797.png',
    stock: 18,
    category: 'Skincare',
    description: `Disfruta una experiencia de cuidado facial tropical con la Mascarilla Facial Bubbaluu Mango. Enriquecida con extracto de mango, ayuda a hidratar, nutrir y revitalizar la piel, aportando una sensación de frescura y suavidad después de cada aplicación.
Su fórmula está diseñada para complementar tu rutina de skincare, ayudando a mantener la piel luminosa, flexible y con una apariencia saludable. Gracias a los nutrientes naturales presentes en el mango, contribuye a mejorar el aspecto del rostro y brindar una sensación de bienestar y renovación.

💖 Beneficios

🥭 Ayuda a hidratar y nutrir la piel.
🥭 Favorece una apariencia más luminosa y saludable.
🥭 Aporta suavidad y frescura al rostro.
🥭 Contribuye a revitalizar la piel cansada o apagada.
🥭 Ayuda a mejorar la textura y elasticidad de la piel.
🥭 Apta para todo tipo de piel.

🧴 Modo de Uso:

1. Limpia y seca completamente tu rostro.
2. Aplica una capa uniforme evitando el área de ojos y labios.
3. Deja actuar entre 10 y 15 minutos.
4. Retira con abundante agua tibia.
5. Finaliza aplicando tu crema hidratante habitual.

🌸 Tip Asuka: Utiliza esta mascarilla cuando tu piel necesite un extra de nutrición y luminosidad. Para una experiencia aún más refrescante, refrigérala unos minutos antes de usarla y disfruta de un verdadero momento de spa en casa. ✨🥭🧡`,
  },
  {
    id: 47,
    name: 'Mascarillas Facial Frutilla',
    price: 1000,
    image: 'https://www.image2url.com/r2/default/images/1782254275890-daff19b3-e4e6-4819-94f6-3331fab3a887.png',
    stock: 14,
    category: 'Skincare',
    description: `Disfruta una experiencia de cuidado facial llena de frescura con la Mascarilla Facial Bubbaluu Frutilla. Enriquecida con extracto de frutilla, ayuda a hidratar, revitalizar y suavizar la piel, aportando una sensación refrescante y una apariencia más luminosa y saludable.
Su fórmula está diseñada para complementar tu rutina de skincare, ayudando a mantener la piel nutrida y con un aspecto radiante. Gracias a sus propiedades antioxidantes, contribuye a proteger la piel de los factores externos mientras mejora su textura y suavidad.

💖 Beneficios

🍓 Ayuda a hidratar y revitalizar la piel.
🍓 Favorece una apariencia más luminosa y saludable.
🍓 Aporta suavidad y frescura al rostro.
🍓 Rica en antioxidantes que ayudan a proteger la piel.
🍓 Contribuye a mejorar la textura y apariencia de la piel.
🍓 Apta para todo tipo de piel.

🧴 Modo de Uso:
1. Limpia y seca completamente tu rostro.
2. Aplica una capa uniforme evitando el área de ojos y labios.
3.bDeja actuar entre 10 y 15 minutos.
4.Retira con abundante agua tibia.
5. Finaliza aplicando tu crema hidratante habitual.

🌸 Tip Asuka: Utiliza esta mascarilla cuando tu piel necesite un extra de hidratación y luminosidad. Para una sensación aún más refrescante, refrigérala unos minutos antes de usarla y disfruta de una experiencia tipo spa en casa. ✨🍓❤️`,
  },
  {
    id: 48,
    name: 'Mascarillas Facial Piña',
    price: 1000,
    image: 'https://www.image2url.com/r2/default/images/1782254280202-fe507dc4-cd80-4ad3-82c6-9e572f5510d4.png',
    stock: 15,
    category: 'Skincare',
    description: `Disfruta una experiencia refrescante y revitalizante con la Mascarilla Facial Bubbaluu Piña. Enriquecida con extracto de piña, ayuda a hidratar y nutrir la piel mientras aporta frescura y luminosidad al rostro. Su fórmula está diseñada para complementar tu rutina de skincare, dejando la piel suave, renovada y con una apariencia saludable.
Gracias a las propiedades naturales de la piña, esta mascarilla ayuda a revitalizar la piel cansada y a mejorar su aspecto, brindando una agradable sensación de bienestar en cada aplicación.

💖 Beneficios
🍍 Ayuda a hidratar y nutrir la piel.
🍍 Favorece una apariencia más luminosa y saludable.
🍍 Aporta frescura y suavidad al rostro.
🍍 Ayuda a revitalizar la piel opaca o cansada.
🍍 Contribuye a mejorar la textura y apariencia de la piel.
🍍 Apta para todo tipo de piel.

🧴 Modo de Uso:

1 Limpia y seca completamente tu rostro.
2. Aplica una capa uniforme evitando el área de ojos y labios.
3. Deja actuar entre 10 y 15 minutos.
4. Retira con abundante agua tibia.
5. Finaliza aplicando tu crema hidratante habitual.

🌸 Tip Asuka: Utiliza la mascarilla después de una larga jornada o cuando tu piel necesite un extra de frescura. Para una experiencia aún más revitalizante, refrigérala unos minutos antes de usarla. ✨🍍💛`,
  },
  {
    id: 49,
    name: 'Mascarillas Facial Sandia',
    price: 1000,
    image: 'https://www.image2url.com/r2/default/images/1782254285903-c996adf8-d6b0-4ed3-9fd5-a55d4b1f8ee6.png',
    stock: 19,
    category: 'Skincare',
    description: `Refresca y revitaliza tu piel con la Mascarilla Facial Bubbaluu Sandía. Enriquecida con extracto de sandía, esta mascarilla ayuda a hidratar profundamente el rostro, aportando frescura y nutrición para una apariencia más luminosa y saludable.
Su fórmula ligera proporciona una agradable sensación refrescante mientras ayuda a suavizar la piel y mantener su hidratación natural. Ideal para complementar tu rutina de skincare y disfrutar de un momento de relajación y cuidado personal.

💖 Beneficios

🍉 Ayuda a hidratar y nutrir la piel.
🍉 Aporta frescura y suavidad al rostro.
🍉 Favorece una apariencia más luminosa y saludable.
🍉 Ayuda a revitalizar la piel cansada o deshidratada.
🍉 Contribuye a mejorar la textura y elasticidad de la piel.
🍉 Apta para todo tipo de piel.

🧴 Modo de Uso:

1. Limpia y seca completamente tu rostro.
2. Aplica una capa uniforme evitando el área de ojos y labios.
3. Deja actuar entre 10 y 15 minutos.
4. Retira con abundante agua tibia.
5. Finaliza aplicando tu crema hidratante favorita.

🌸 Tip Asuka: Para potenciar su efecto refrescante, conserva la mascarilla en el refrigerador antes de usarla. Ideal para utilizar después de un día caluroso o cuando tu piel necesite un extra de hidratación y frescura. ✨🍉🩷💚`,
  },
  {
    id: 50,
    name: 'Mascarillas Facial Tuttifrutti',
    price: 1000,
    image: 'https://www.image2url.com/r2/default/images/1782254289162-1e7ba490-6cd9-4931-800d-b56287b2e199.png',
    stock: 9,
    category: 'Skincare',
    description: `Disfruta una explosión de frescura y color con la Mascarilla Facial Bubbaluu Tutti Frutti. Inspirada en una mezcla de frutas cuidadosamente seleccionadas, esta mascarilla ayuda a hidratar, revitalizar y refrescar la piel, aportando nutrientes que contribuyen a mantener un rostro suave, luminoso y saludable.
Su fórmula combina el poder de los extractos frutales para brindar una experiencia de cuidado facial única, ayudando a mejorar la apariencia de la piel y devolviéndole vitalidad. Ideal para complementar tu rutina de skincare y disfrutar de un momento de relajación mientras cuidas tu rostro.

💖 Beneficios

🍬 Ayuda a revitalizar y refrescar la piel.
🍬 Proporciona hidratación y suavidad.
🍬 Favorece una apariencia más luminosa y saludable.
🍬 Aporta nutrientes provenientes de extractos frutales.
🍬 Ayuda a mejorar la textura y apariencia del rostro.
🍬 Apta para todo tipo de piel.

🧴 Modo de Uso:

1. Limpia y seca completamente tu rostro.
2. Aplica una capa uniforme evitando el área de ojos y labios.
3. Deja actuar durante 10 a 15 minutos.
4. Retira con abundante agua tibia.
5. Finaliza aplicando tu crema hidratante habitual.

🌸 Tip Asuka: Utiliza esta mascarilla cuando tu piel necesite un extra de frescura y luminosidad. Para una experiencia aún más agradable, refrigérala unos minutos antes de usarla y disfruta de una sensación revitalizante. ✨🍬🩷`,
  },
  {
    id: 51,
    name: 'Mascarillas Facial Uva',
    price: 1000,
    image: 'https://www.image2url.com/r2/default/images/1782254290395-547369cc-ea28-4652-a466-b692e9766a0c.png',
    stock: 15,
    category: 'Skincare',
    description: `Descubre la Mascarilla Facial Bubbaluu Uva, una experiencia de cuidado facial inspirada en los beneficios naturales de la uva. Su fórmula ayuda a hidratar, refrescar y revitalizar la piel, aportando una agradable sensación de suavidad y bienestar desde la primera aplicación.
Gracias a sus propiedades antioxidantes, contribuye a proteger la piel de los factores externos mientras ayuda a mantener una apariencia luminosa, fresca y saludable. Su textura ligera y fácil aplicación la convierten en el complemento ideal para tu rutina de skincare.
Perfecta para quienes buscan una piel más hidratada, radiante y con un aspecto renovado día tras día.

💖 Beneficios

🍇 Ayuda a revitalizar y refrescar la piel.
🍇 Proporciona hidratación y suavidad.
🍇 Favorece una apariencia más luminosa y saludable.
🍇 Rica en antioxidantes que ayudan a proteger la piel.
🍇 Ayuda a mejorar la textura y apariencia del rostro.
🍇 Apta para todo tipo de piel.

🧴 Modo de Uso

1. Limpia y seca completamente tu rostro.
2. Aplica una capa uniforme evitando el área de ojos y labios.
3. Deja actuar durante 10 a 15 minutos.
4. Retira con abundante agua tibia.
5. Finaliza aplicando tu crema hidratante habitual.

🌸 Tip Asuka: Para potenciar la sensación de frescura, refrigera la mascarilla unos minutos antes de usarla. Úsala de 2 a 3 veces por semana para mantener tu piel hidratada, suave y radiante. ✨ 🍇💜`,
  },
  {
    id: 52,
    name: 'Mascarillas Facial Naranja',
    price: 1000,
    image: '/mascarilla-naranja.png',
    stock: 18,
    category: 'Skincare',
    description: `Ilumina y revitaliza tu piel con la Mascarilla Facial Bubbaluu Vitamina C. Su fórmula enriquecida con Vitamina C ayuda a aportar luminosidad, frescura e hidratación al rostro, dejando la piel con una apariencia más uniforme y radiante. Ideal para complementar tu rutina de skincare y devolverle vitalidad a la piel opaca o cansada.

💖 Beneficios

🍊 Ayuda a iluminar y revitalizar la piel.
🍊 Favorece una apariencia más radiante y uniforme.
🍊 Proporciona hidratación y suavidad al rostro.
🍊 Ayuda a combatir los efectos del cansancio y factores ambientales.🍊 Deja la piel fresca, luminosa y con sensación de bienestar.
🍊 Apta para todo tipo de piel.

🧴 Modo de Uso:

1. Limpia y seca completamente tu rostro.
2. Aplica una capa uniforme de mascarilla evitando el área de ojos y labios.
3. Deja actuar entre 10 y 15 minutos.
4. Retira con abundante agua tibia.
5. Finaliza aplicando tu crema hidratante favorita.

🌸 Tip Asuka: Utiliza esta mascarilla antes de un evento especial o cuando quieras darle un extra de luminosidad a tu piel. Para potenciar el efecto refrescante, mantenla refrigerada unos minutos antes de usarla. ✨🍊🧡`,
  },{
    id: 53,
    name: 'Mascarillas Facial Arandano',
    price: 1000,
    image: 'https://www.image2url.com/r2/default/images/1782254273098-089c5d46-91b1-4d77-9307-1915d0958e8b.png',
    stock: 16,
    category: 'Skincare',
    description: `Disfruta una experiencia de cuidado facial refrescante con la Mascarilla Facial Bubbaluu Arándano. Enriquecida con extracto de arándano, ayuda a revitalizar la piel, aportando hidratación y una agradable sensación de frescura. Su fórmula está diseñada para dejar el rostro suave, luminoso y con una apariencia saludable.
Los antioxidantes naturales del arándano ayudan a proteger la piel de las agresiones externas, convirtiéndola en una excelente opción para complementar tu rutina de skincare.

💖 Beneficios

🫐 Ayuda a revitalizar y refrescar la piel.
🫐 Proporciona hidratación y suavidad al rostro.
🫐 Favorece una apariencia más luminosa y saludable.
🫐 Contribuye a proteger la piel gracias a sus antioxidantes naturales.
🫐 Ayuda a mejorar la sensación de frescura y bienestar.
🫐 Apta para todo tipo de piel.

🧴 Modo de uso:

1. Limpia y seca completamente tu rostro.
2. Aplica una capa uniforme de mascarilla evitando el área de ojos y labios.
3 Deja actuar entre 10 y 15 minutos.
4. Retira con abundante agua tibia.
5. Continúa con tu crema hidratante habitual para potenciar los resultados.

🌸 Tip Asuka: Para una sensación extra refrescante, guarda la mascarilla en el refrigerador unos minutos antes de usarla. Úsala 2 a 3 veces por semana para mantener tu piel hidratada, luminosa y con un aspecto saludable. ✨🫐💙`,
  },
  
];
