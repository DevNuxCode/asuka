import { Clock, Calendar, User } from 'lucide-react';
import Modal from './Modal';
import { BlogPost } from '../data/blog';

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
  if (!post) return null;

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('## ')) {
        return (
          <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-primary dark:text-[#CBA135]">
            {line.replace('## ', '')}
          </h3>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h4 key={index} className="text-lg font-semibold mt-4 mb-2 text-primary dark:text-[#CBA135]">
            {line.replace('### ', '')}
          </h4>
        );
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={index} className="font-semibold my-2 text-primary dark:text-[#CBA135]">
            {line.replace(/\*\*/g, '')}
          </p>
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
        <p key={index} className="my-2 text-gray-600 dark:text-gray-400 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="h-56 bg-gray-100 dark:bg-[#1a1a1a] overflow-hidden rounded-t-lg">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 max-h-96 overflow-y-auto bg-white dark:bg-[#2d2d2d]">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full text-white bg-[#CBA135]"
          >
            {post.category}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <Clock size={14} className="text-gray-500 dark:text-gray-400" />
            {post.readTime} min lectura
          </span>
        </div>

        <h2 className="text-2xl font-bold mb-3 leading-tight text-primary dark:text-[#CBA135]">
          {post.title}
        </h2>

        <div className="flex items-center gap-4 mb-6 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar size={14} className="text-gray-500 dark:text-gray-400" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User size={14} className="text-gray-500 dark:text-gray-400" />
            {post.author}
          </span>
        </div>

        <div className="prose max-w-none dark:prose-invert">
          {renderContent(post.content)}
        </div>
      </div>
    </Modal>
  );
}
