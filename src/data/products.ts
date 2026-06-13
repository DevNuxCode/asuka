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
    stock: 10,
    category: 'Skincare',
    description: 'Bálsamo labial con aroma a durazno para labios suaves e hidratados.',
  },
  {
    id: 4,
    name: 'Balsamo Labial Uva',
    price: 1500,
    image: 'https://www.image2url.com/r2/default/images/1780887867651-b2735414-0459-49b1-97bc-bc256bceac7d.png',
    stock: 10,
    category: 'Skincare',
    description: 'Bálsamo labial con aroma a uva para labios suaves e hidratados.',
  },
  
    {
    id: 5,
    name: 'Balsamo Labial Frutilla',
    price: 1500,
    image: 'https://www.image2url.com/r2/default/images/1780887900959-83dd8c24-dab9-4d7b-903f-3f6c5145e400.png',
    stock: 10,
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
    stock: 40,
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
    stock: 18,
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
    stock: 50,
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
    description: 'Mascarillas para ojeras',
  },
  {
    id: 27,
    name: 'Mascaras Hidratantes Para Ojeras Naranja',
    price: 600,
    image: 'https://www.image2url.com/r2/default/images/1781378912557-96b925a3-635e-4dac-9c14-69369a492c08.jpg',
    stock: 10,
    category: 'Skincare',
    description: 'Mascarillas para ojeras',
  },
   {
    id: 28,
    name: 'Mascaras Hidratantes Para Ojeras Kiwi',
    price: 600,
    image: 'https://www.image2url.com/r2/default/images/1781378912557-96b925a3-635e-4dac-9c14-69369a492c08.jpg',
    stock: 10,
    category: 'Skincare',
    description: 'Mascarillas para ojeras',
  },
  {
    id: 29,
    name: 'Mascaras Hidratantes Para Ojeras Cereza',
    price: 600,
    image: 'https://www.image2url.com/r2/default/images/1781378912557-96b925a3-635e-4dac-9c14-69369a492c08.jpg',
    stock: 10,
    category: 'Skincare',
    description: 'Mascarillas para ojeras',
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
    description: 'Mascarillas para ojeras',
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
    category: 'Corporal', 
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
    category: 'Corporal', 
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
    name: 'Toallas humedas Frutilla',
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
];
