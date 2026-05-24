# Asuka Cosmetics - Guía de Configuración

## Configuración Inicial

### 1. Agregar Imágenes de Productos
Las imágenes deben ser colocadas en la carpeta `public/` del proyecto:
- Extrae los archivos de `imagenes.zip` en la carpeta `public/`
- Asegúrate de que el logo `LogoIA.png` esté en `public/LogoIA.png`

### 2. Estructura de Imágenes Esperada
```
public/
├── LogoIA.png
├── balsamoFrutilla.png
├── balsamoUva.png
├── balsamoLabioDurazno.png
├── balsamoLabioUva.png
├── balsamoLabioFrutilla.png
├── BombaNutritivaCapilarBubbaluu500ml.png
├── CremaCorporalBUBBALUUFRUTILLA.png
├── CremaCorporalBUBBALUUTUTIFRUTI.png
├── CremaCorporalBUBBALUUUVA.png
├── CremaManosBUBBALUU100MLUVA.png
├── CremadeManos.png
├── CremaFacialNIACINAMIDA.png
├── CremaFacildeCOLAGENO.png
├── CremaparaPeinarTUTTIFRUTI.png
├── CremaparaPeinarUVA.png
├── ExfolianteCapilarFRUTILLA.png
├── ExfolianteCapilarUVA.png
├── ExfoliantedeAzucarUVA.png
├── ExfoliantedeAzucarFRUTILLA.png
├── GELDEDUCHAUVA.png
├── GELDEDUCHATUTTIFRUTI.png
├── LimpiadorFacialdeCOLAGENO.png
├── mascarilla.png
├── ShampooUva.png
├── ShampooFrutilla.png
├── cuidado-capilar-1.png
├── rutina-ducha-1.png
└── skin-cycling-1.png
```

## Características del Sitio

### Navegación
- **Hero Section**: Presentación elegante con CTA (Call To Action) dual
- **Productos**: Galería filtrable por categoría con carrito dinámico
- **Testimonios**: Sección oscura con reseñas de clientes
- **Blog**: Artículos de cuidado personal filtrados por categoría
- **Contacto**: Formulario integrado con WhatsApp

### Carrito de Compras
- Agregación dinámica de productos
- Control de cantidad con incremento/decremento
- Envío automático del pedido por WhatsApp al número: +56 9 4697 0108
- Formato de mensaje personalizado con detalles del pedido

### Integración WhatsApp
- Carrito: Envío de pedidos completos
- Contacto: Formulario de contacto directo
- Números: +56 9 4697 0108 (configurado globalmente)

### Redes Sociales
- Instagram: https://www.instagram.com/asuka_cl
- Facebook: https://www.facebook.com/profile.php?id=61590129577447&locale=es_LA
- TikTok: https://www.tiktok.com/@asukacosmetic

## Paleta de Colores

- **Verde Oscuro (Primario)**: #37654B
- **Dorado (Secundario)**: #CBA135
- **Crema (Fondo)**: #F7E7E5
- **Blanco**: #FFFFFF
- **Gris (Texto)**: #666666

## Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Verificar tipos
npm run typecheck
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.tsx        # Navegación con menú móvil
│   ├── Hero.tsx          # Sección principal
│   ├── Products.tsx      # Galería de productos
│   ├── Cart.tsx          # Panel lateral del carrito
│   ├── Testimonials.tsx  # Reseñas de clientes
│   ├── Blog.tsx          # Artículos
│   └── Footer.tsx        # Footer con contacto
├── data/
│   ├── products.ts       # Datos de productos
│   ├── testimonials.ts   # Testimonios
│   └── blog.ts           # Artículos del blog
├── utils/
│   └── whatsapp.ts       # Utilidades para WhatsApp
└── App.tsx               # Componente principal
```

## Personalización

### Cambiar Número de WhatsApp
Edita `src/utils/whatsapp.ts`:
```typescript
export const WHATSAPP_NUMBER = '56946970108'; // Reemplaza con tu número
```

### Agregar Nuevos Productos
Edita `src/data/products.ts` y agrega a la lista `products`.

### Agregar Blog Posts
Edita `src/data/blog.ts` y agrega a la lista `blogPosts`.

### Agregar Testimonios
Edita `src/data/testimonials.ts` y agrega a la lista `testimonials`.

## Optimizaciones

- Responsive design para móvil y escritorio
- Animaciones suaves con transiciones CSS
- Lazy loading de imágenes
- Build optimizado con Vite
- Tailwind CSS con configuración personalizada

## Notas Importantes

1. Las imágenes del blog y productos deben estar en la carpeta `public/`
2. El logo `LogoIA.png` es crítico para la identidad visual
3. El número de WhatsApp está configurado globalmente en `utils/whatsapp.ts`
4. Todos los colores utilizan la paleta definida (#37654B, #CBA135, #F7E7E5)
