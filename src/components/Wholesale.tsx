import { useState } from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { wholesaleContent, wholesaleBenefits } from '../data/wholesale';
import { sendWhatsAppMessage } from '../utils/whatsapp';

export default function Wholesale() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = name || business
      ? `Hola! Soy ${name || 'un/a interesado/a'}${business ? ` de ${business}` : ''}. Me gustaría recibir información sobre la venta mayorista de Asuka Cosmetics 🙌`
      : wholesaleContent.whatsappMessage;

    sendWhatsAppMessage(message);
  };

  const handleDirectClick = () => {
    sendWhatsAppMessage(wholesaleContent.whatsappMessage);
  };

  return (
    <section id="wholesale" className="py-20 px-4 bg-[#F7E7E5] dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto y beneficios */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary dark:text-[#CBA135] mb-2">
            {wholesaleContent.title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-[#CBA135] leading-tight">
            {wholesaleContent.subtitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {wholesaleContent.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {wholesaleBenefits.map(benefit => (
              <div key={benefit.id} className="flex gap-3">
                <CheckCircle2 size={20} className="text-secondary dark:text-[#CBA135] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary dark:text-gray-100 text-sm">{benefit.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleDirectClick}
            className="inline-flex items-center gap-2 px-8 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition transform hover:scale-105 bg-primary dark:bg-[#CBA135]"
          >
            <MessageCircle size={20} />
            {wholesaleContent.ctaLabel}
          </button>
        </div>

        {/* Formulario */}
        <div className="bg-white dark:bg-[#2d2d2d] rounded-xl shadow-lg p-8 border border-primary/10 dark:border-[#37654B]/30">
          <h3 className="text-xl font-bold mb-1 text-primary dark:text-[#CBA135]">
            Cuéntanos de tu negocio
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Te contactamos por WhatsApp para conversar los detalles.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded bg-[#F7E7E5] dark:bg-[#1a1a1a] border border-primary/20 dark:border-[#CBA135]/40 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-primary dark:focus:border-[#CBA135] transition text-primary dark:text-gray-100"
            />
            <input
              type="text"
              placeholder="Nombre de tu negocio o ciudad"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="w-full px-4 py-2 rounded bg-[#F7E7E5] dark:bg-[#1a1a1a] border border-primary/20 dark:border-[#CBA135]/40 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-primary dark:focus:border-[#CBA135] transition text-primary dark:text-gray-100"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold hover:opacity-90 transition transform hover:scale-105 bg-secondary dark:bg-[#CBA135] text-white dark:text-[#1a1a1a]"
            >
              <MessageCircle size={20} />
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
