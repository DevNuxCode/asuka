// Redes Sociales Integradas
// Edita aquí las publicaciones que se muestran en el "feed" de la sección.
// Cada publicación necesita: red social, imagen, texto corto y el link al
// post real en Instagram/TikTok (para que al hacer clic se abra la app/web).
//
// NOTA IMPORTANTE:
// Un feed 100% automático (que se actualice solo cada vez que publicas)
// requiere conectar la API oficial de Instagram/TikTok o un servicio externo
// como SnapWidget o Elfsight (requieren crear una cuenta y pegar un script).
// Mientras no se configure eso, este archivo funciona como tu feed manual:
// cada vez que subas contenido nuevo a Instagram o TikTok, agrega una entrada
// acá y se mostrará automáticamente en la web.

export interface SocialPost {
  id: number;
  network: 'instagram' | 'tiktok';
  image: string;
  caption: string;
  url: string;
}

export const socialLinks = {
  instagram: 'https://www.instagram.com/asuka_cl',
  tiktok: 'https://www.tiktok.com/@asukacosmetic',
};

export const socialPosts: SocialPost[] = [
  {
    id: 1,
    network: 'instagram',
    image: '/body_mist_a_thousand_wishes.jpg',
    caption: 'Nuestro Body Mist favorito de la temporada ✨',
    url: 'https://www.instagram.com/asuka_cl/reel/DZxVhuhipKx/?hl=es',
  },
  {
    id: 2,
    network: 'instagram',
    image: '/rutina-ducha-1.png',
    caption: 'Tips para tu rutina de ducha perfecta 🚿',
    url: 'https://www.instagram.com/asuka_cl',
  },
  {
    id: 3,
    network: 'tiktok',
    image: '/skin-cycling-1.png',
    caption: 'Skin cycling explicado en 30 segundos',
    url: 'https://www.tiktok.com/@asukacosmetic',
  },
  {
    id: 4,
    network: 'instagram',
    image: '/cuidado-capilar-1.png',
    caption: 'Cuidado capilar paso a paso 💛',
    url: 'https://www.instagram.com/asuka_cl',
  },
];
