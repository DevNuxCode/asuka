import { blogPosts, BlogCategory, blogCategories, BlogPost } from '../data/blog';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import BlogModal from './BlogModal';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('Todos');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = selectedCategory === 'Todos'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const openBlogModal = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeBlogModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <section id="blog" className="py-20 px-4" style={{ backgroundColor: '#F7E7E5' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary dark:text-[#CBA135]">
          Blog de Cuidado
        </h2>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {blogCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition transform hover:scale-105 ${
                selectedCategory === cat
                  ? 'text-white shadow-lg bg-primary dark:bg-[#CBA135]'
                  : 'text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#37654B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(post => (
            <article
              key={post.id}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 bg-white dark:bg-[#1a1a1a] cursor-pointer"
              onClick={() => openBlogModal(post)}
            >
              <div className="relative h-48 bg-gray-100 dark:bg-[#2d2d2d] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white bg-[#CBA135]"
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime} min lectura</span>
                </div>

                <h3 className="font-bold text-lg mb-2 leading-tight text-primary dark:text-[#CBA135]">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <div className="text-opacity-70 hover:text-opacity-100 transition flex items-center gap-1 font-semibold" style={{ color: '#37654B' }}>
                    Leer más
                    <ChevronRight size={16} className="text-primary dark:text-[#CBA135]" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <BlogModal
          post={selectedPost}
          isOpen={isModalOpen}
          onClose={closeBlogModal}
        />
      </div>
    </section>
  );
}
