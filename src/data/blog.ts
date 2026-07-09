export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: number;
}

export const blogCategories = [
  'Todos',
  'Skincare',
  'Capilar',
  'Corporal',
  'Emprendedor',
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const blogPosts: BlogPost[] = [

  {
    id: 4,
    title: 'Rutina de Correcto Lavado de Cabello',
    slug: 'rutina-cuidado-capilar',
    excerpt: 'Aprende la rutina correcta para mantener tu cabello limpio, brillante, hidratado y saludable con hábitos simples y efectivos.',
    content: `Un buen lavado capilar es la base para un cabello saludable, brillante y lleno de vida.

** 1. Cepilla tu cabello antes del lavado **
Antes de mojarlo:
- Desenreda suavemente.
- Elimina polvo y residuos.
- Evita que se formen nudos durante el lavado.

** 2. Usa agua tibia **
El agua demasiado caliente puede:
- Resecar el cuero cabelludo.
- Aumentar el frizz.
- Estimular más grasa.

** 3. Prepara y protege el cabello **
Si tienes el cabello reseco o maltratado, utiliza tratamientos nutritivos antes del lavado:
- Aceites capilares
- Sérums
- Tratamientos hidratantes

** 4. Aplica el shampoo correctamente **
El shampoo debe enfocarse principalmente en el cuero cabelludo.
- Haz espuma en las manos antes de aplicarlo.
- Masajea con las yemas de los dedos.
- Evita usar las uñas.

** 5. Usa acondicionador **
El acondicionador ayuda a:
- Suavizar el cabello
- Reducir frizz
- Aportar brillo e hidratación

** 6. Seca y desenreda con cuidado **
- Evita frotar con la toalla.
- Usa toalla de microfibra.
- Desenreda desde puntas hacia arriba.

*** Consejo ASUKA ***
Cada cabello tiene necesidades diferentes. Utiliza productos adecuados según tu tipo de cabello.`,
    image: '/cuidado-capilar-1.png',
    category: 'Capilar',
    date: '2026-05-22',
    author: 'Asuka',
    readTime: 6,
  },

  {
    id: 5,
    title: 'Rutina de Cuidado Corporal y Aromaterapia',
    slug: 'rutina-cuidado-corporal',
    excerpt: 'Convierte tu ducha en una experiencia de bienestar con aromaterapia, exfoliación e hidratación corporal.',
    content: `El cuidado corporal puede convertirse en un momento de relajación y bienestar.

## 1. Comienza con agua tibia
El agua caliente puede:
- Resecar la piel
- Irritarla
- Eliminar sus aceites naturales

## 2. Utiliza un jabón o gel corporal con aroma
Puedes elegir aromas según el efecto que busques:
- Lavanda: relajación
- Frutales: energía
- Vainilla: sensación cálida
- Cítricos: frescura y revitalización

## 3. Exfoliación corporal
La exfoliación ayuda a:
- Remover células muertas
- Mejorar la textura de la piel
- Potenciar la hidratación

Recomendación: exfoliar 1 a 2 veces por semana.

## 4. Baños relajantes
Puedes agregar:
- Sales de baño
- Espuma de baño
- Aceites aromáticos
- Velas aromáticas

## 5. Hidratación después de la ducha
Después de secar la piel:
- Aplica crema corporal
- Usa aceites o sérums hidratantes

## 6. Body mist y aceites corporales
Ayudan a prolongar la sensación de frescura y aroma.

### Consejo ASUKA
El autocuidado también se vive a través de los aromas y pequeños momentos de bienestar.`,
    image: '/rutina-ducha-1.png',
    category: 'Corporal',
    date: '2026-05-22',
    author: 'Asuka',
    readTime: 5,
  },

  {
    id: 6,
    title: 'Rutina de Skin Cycling',
    slug: 'rutina-skin-cycling',
    excerpt: 'Descubre cómo el Skin Cycling ayuda a mantener una piel equilibrada, luminosa e hidratada sin irritarla.',
    content: `El Skin Cycling es una rutina facial que alterna productos activos y días de recuperación para cuidar la piel sin irritarla.

## ¿Qué es el Skin Cycling?
Consiste en alternar:
- Exfoliación
- Tratamiento
- Recuperación e hidratación

## Noche 1: Limpieza + Exfoliación
- Limpieza facial suave
- Exfoliante facial
- Hidratante facial

Beneficios:
- Piel más suave
- Mayor luminosidad
- Mejor absorción de productos

## Noche 2: Limpieza + Sérum
Puedes utilizar:
- Sérum de Niacinamida
- Sérum de Ácido Hialurónico

Ayudan a:
- Controlar grasa
- Mejorar manchas
- Aportar hidratación y luminosidad

## Noches 3 y 4: Recuperación e Hidratación
Rutina recomendada:
- Limpieza facial suave
- Sérum hidratante
- Crema hidratante

## En las mañanas
Siempre utiliza:
- Hidratante
- Protector solar

### Consejo ASUKA
El skincare no se trata de usar muchos productos, sino de aprender a cuidar tu piel con equilibrio y constancia.`,
    image: '/skin-cycling-1.png',
    category: 'Skincare',
    date: '2026-05-22',
    author: 'Asuka',
    readTime: 6,
  },

  {
id: 1,
title: '¿Dónde comprar productos de skincare para vender en Chile?',
slug:'donde-comprar-productos-skincare-para-vender',
excerpt:'Guía para emprendedores que buscan proveedores de skincare y productos de belleza para comenzar un negocio rentable.',
content:`# ¿Dónde comprar productos de skincare para vender en Chile?

## ¿Cómo elegir un proveedor?

Al buscar **donde comprar productos de skincare para vender** es importante evaluar calidad, disponibilidad, tiempos de entrega, variedad y respaldo.

## Qué considerar

- Calidad del producto.
- Cumplimiento normativo.
- Catálogo actualizado.
- Precios competitivos.
- Compras mayoristas.

## Emprender con productos de belleza

El mercado chileno continúa creciendo gracias al interés por el cuidado personal y el bienestar.

### Consejo ASUKA

Antes de comprar grandes cantidades, solicita catálogos, compara proveedores y estudia a tu público objetivo.`,
image:'/asukablog.jpg',
category:'Emprendedor',
date:'2026-07-08',
author:'Asuka',
readTime:6,
},
{
id:7,
title:'¿Dónde comprar productos coreanos al por mayor en Chile?',
slug:'productos-coreanos-al-por-mayor-chile',
excerpt:'Conoce qué debes evaluar antes de comprar cosmética coreana al por mayor y cómo elegir un proveedor confiable.',
content:`# ¿Dónde comprar productos coreanos al por mayor en Chile?

## Cosmética coreana

La cosmética coreana destaca por su innovación, ingredientes y rutinas de cuidado facial.

## Antes de comprar

- Verifica la autenticidad.
- Revisa fechas de vencimiento.
- Evalúa el proveedor.
- Compara precios y stock.

## ¿Dónde comprar productos coreanos al por mayor en Chile?

Busca empresas establecidas que ofrezcan garantía, soporte y disponibilidad para emprendedores.

### Consejo ASUKA

Construye una oferta variada combinando skincare, cuidado corporal y fragancias para diferenciar tu negocio.`,
image:'/asukablog.jpg',
category:'Emprendedor',
date:'2026-07-08',
author:'Asuka',
readTime:7,
}

];