import { Recycle, Leaf, HeartHandshake, Droplet, LucideIcon } from 'lucide-react';
import { sustainabilityContent, sustainabilityCommitments, SustainabilityCommitment } from '../data/sustainability';

const iconMap: Record<SustainabilityCommitment['icon'], LucideIcon> = {
  Recycle,
  Leaf,
  HeartHandshake,
  Droplet,
};

export default function Sustainability() {
  return (
    <section className="py-20 px-4 bg-[#F7E7E5] dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary dark:text-[#CBA135] mb-2">
          {sustainabilityContent.title}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-[#CBA135]">
          {sustainabilityContent.subtitle}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          {sustainabilityContent.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sustainabilityCommitments.map(item => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-[#2d2d2d] rounded-lg p-6 border border-primary/10 dark:border-[#37654B]/30 hover:-translate-y-1 transition transform"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary/10 dark:bg-[#CBA135]/10">
                  <Icon size={24} className="text-primary dark:text-[#CBA135]" />
                </div>
                <p className="font-semibold text-primary dark:text-gray-100 mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
