import { Instagram, Zap } from 'lucide-react';
import { socialPosts, socialLinks } from '../data/social';

export default function SocialFeed() {
  return (
    <section className="py-20 px-4 bg-primary dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white dark:text-[#CBA135]">
          Síguenos en redes
        </h2>
        <p className="text-center text-white text-opacity-80 dark:text-gray-400 mb-10">
          Lo último de Asuka en Instagram y TikTok
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {socialPosts.map(post => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition flex flex-col items-center justify-center gap-2 p-3 text-center">
                {post.network === 'instagram' ? (
                  <Instagram size={22} className="text-white opacity-0 group-hover:opacity-100 transition" />
                ) : (
                  <Zap size={22} className="text-white opacity-0 group-hover:opacity-100 transition" />
                )}
                <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition leading-snug">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:opacity-80 transition font-medium text-sm"
          >
            <Instagram size={20} className="text-[#CBA135]" />
            @asuka_cl
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:opacity-80 transition font-medium text-sm"
          >
            <Zap size={20} className="text-[#CBA135]" />
            @asukacosmetic
          </a>
        </div>
      </div>
    </section>
  );
}
