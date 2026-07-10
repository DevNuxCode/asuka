import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems, faqCategories, FAQCategory } from '../data/faq';

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('Todas');
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = selectedCategory === 'Todas'
    ? faqItems
    : faqItems.filter(item => item.category === selectedCategory);

  const toggle = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 px-4 bg-white dark:bg-[#2d2d2d] transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary dark:text-[#CBA135]">
          Preguntas Frecuentes
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Todo lo que necesitas saber sobre envíos, pagos, entregas y venta mayorista.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {faqCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition transform hover:scale-105 ${
                selectedCategory === cat
                  ? 'text-white shadow-lg bg-primary dark:bg-[#CBA135]'
                  : 'text-gray-700 dark:text-gray-300 bg-[#F7E7E5] dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#37654B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map(item => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-lg border border-gray-200 dark:border-[#37654B]/30 bg-[#F7E7E5] dark:bg-[#1a1a1a] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                >
                  <span className="font-semibold text-primary dark:text-gray-100">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-secondary dark:text-[#CBA135] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
