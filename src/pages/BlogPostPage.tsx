
import { Link, Navigate, useParams } from 'react-router-dom';
import { Calendar, Clock, User, ChevronRight, ArrowLeft } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blog';
import SEO from '../components/SEO';
import { SITE_URL } from '../config/site';


function renderInlineMarkdown(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-primary dark:text-[#CBA135]">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}


function renderContent(content: string) {
  const lines = content.split('\n');
  return lines.map((line, index) => {
    if (line.startsWith('## ')) {
      return (
        <h2 key={index} className="text-2xl font-bold mt-8 mb-3 text-primary dark:text-[#CBA135]">
          {line.replace('## ', '')}
        </h2>
      );
    }
    if (line.startsWith('### ')) {
      return (
        <h3 key={index} className="text-xl font-semibold mt-6 mb-2 text-primary dark:text-[#CBA135]">
          {line.replace('### ', '')}
        </h3>
      );
    }
    
    if (line.startsWith('- ')) {
      return (
        <li key={index} className="ml-4 my-1 text-gray-600 dark:text-gray-400">
          {line.replace('- ', '')}
        </li>
      );
    }
    if (line.startsWith('*** ')) {
      return (
        <div key={index} className="my-4 p-4 rounded-lg bg-opacity-10" style={{ backgroundColor: '#CBA135' }}>
          <p className="font-semibold italic" style={{ color: '#37654B' }}>
            {line.replace('*** ', '')}
          </p>
        </div>
      );
    }
    if (line.trim() === '') {
      return <div key={index} className="h-3" />;
    }
    return (
  <p key={index} className="my-2 text-gray-600 dark:text-gray-800 leading-relaxed">
    {renderInlineMarkdown(line)}
  </p>
);
  });
}

function getRelatedPosts(current: BlogPost, count = 3): BlogPost[] {
  const sameCategory = blogPosts.filter(p => p.id !== current.id && p.category === current.category);
  const others = blogPosts.filter(p => p.id !== current.id && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, count);
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = getRelatedPosts(post);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Asuka Cosmetics',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/LogoIA.png`,
      },
    },
  };

  return (
    <article className="pt-28 pb-20 px-4 min-h-screen" style={{ backgroundColor: '#F7E7E5' }}>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        jsonLd={jsonLd}
      />

      <div className="max-w-3xl mx-auto">
        {/* Breadcrumbs: help users and search engines link this article back to the site structure */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:underline text-primary dark:text-[#CBA135]">Inicio</Link>
          <ChevronRight size={14} />
          <Link to="/#blog" className="hover:underline text-primary dark:text-[#CBA135]">Blog</Link>
          <ChevronRight size={14} />
          <span className="truncate">{post.title}</span>
        </nav>

        <Link
          to="/#blog"
          className="inline-flex items-center gap-1 text-sm font-semibold mb-6 hover:opacity-70 transition text-primary dark:text-[#CBA135]"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>

        <div className="rounded-lg overflow-hidden shadow-md mb-8 h-64 md:h-80 bg-gray-100 dark:bg-[#2d2d2d]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full text-white bg-[#CBA135]">
            {post.category}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <Clock size={14} />
            {post.readTime} min lectura
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-primary dark:text-[#CBA135]">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 mb-8 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User size={14} />
            {post.author}
          </span>
        </div>

        <div className="prose max-w-none dark:prose-invert bg-white dark:bg-[#1a1a1a] rounded-lg p-6 md:p-8 shadow-sm">
          {renderContent(post.content)}
        </div>

        {/* Internal links between articles: helps SEO (crawlability + link equity) and keeps users on-site */}
        {related.length > 0 && (
          <section className="mt-12" aria-label="Artículos relacionados">
            <h2 className="text-2xl font-bold mb-6 text-primary dark:text-[#CBA135]">
              Sigue leyendo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map(r => (
                <Link
                  key={r.id}
                  to={`/blog/${r.slug}`}
                  className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 bg-white dark:bg-[#1a1a1a]"
                >
                  <div className="h-32 bg-gray-100 dark:bg-[#2d2d2d] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full text-white bg-[#CBA135]">
                      {r.category}
                    </span>
                    <h3 className="font-semibold text-sm mt-2 leading-snug text-primary dark:text-[#CBA135]">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
