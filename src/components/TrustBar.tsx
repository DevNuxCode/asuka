import { Truck, ShieldCheck, MessageCircle, Sparkles, Handshake, LucideIcon } from 'lucide-react';
import { trustBarItems, TrustBarItem } from '../data/trustBar';

const iconMap: Record<TrustBarItem['icon'], LucideIcon> = {
  Truck,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  Handshake,
};

export default function TrustBar() {
  return (
    <section className="py-8 px-4 bg-white dark:bg-[#2d2d2d] border-y border-primary/10 dark:border-[#37654B]/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {trustBarItems.map(item => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.id} className="flex items-center gap-2.5">
                <Icon size={20} className="text-secondary dark:text-[#CBA135] shrink-0" />
                <span className="text-sm font-medium text-primary dark:text-gray-200 whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
