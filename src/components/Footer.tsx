import { MapPin, Instagram, Facebook, Zap } from 'lucide-react';
import { useState } from 'react';
import { sendWhatsAppMessage } from '../utils/whatsapp';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !message) {
      setStatusMessage('Por favor completa todos los campos');
      return;
    }

    const contactMessage = `Nuevo mensaje de contacto:\n\nEmail: ${email}\nMensaje: ${message}`;
    sendWhatsAppMessage(contactMessage);

    setEmail('');
    setMessage('');
    setStatusMessage('Mensaje enviado!');
    setTimeout(() => setStatusMessage(''), 3000);
  };

  return (
    <footer id="contact" className="py-16 px-4 bg-primary dark:bg-[#1a1a1a] text-[#F7E7E5] dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contacto */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/LogoIA-white.png" alt="Asuka" className="h-8 w-8" />
              <h3 className="text-xl font-bold">Asuka Cosmetics</h3>
            </div>
            <p className="text-sm mb-6 opacity-80 dark:text-gray-400">
              Cuidado personal natural y de calidad para ti.
            </p>

            <div className="space-y-3">
              <a
                href="https://wa.me/56946970108"
                className="flex items-center gap-2 hover:opacity-80 transition"
              >
                <Zap size={18} className="text-[#CBA135]" />
                <span className="text-sm">+56 9 4697 0108</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#CBA135]" />
                <span className="text-sm">Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-bold mb-6">Síguenos</h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/asuka_cl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <Instagram size={20} className="text-[#CBA135]" />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590129577447&locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <Facebook size={20} className="text-[#CBA135]" />
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@asukacosmetic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <Zap size={20} className="text-[#CBA135]" />
                <span className="text-sm">TikTok</span>
              </a>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleContactSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-white bg-opacity-10 dark:bg-[#2d2d2d] border border-[#CBA135] border-opacity-30 dark:border-opacity-60 placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:border-opacity-100 transition text-[#37654B] dark:text-[#CBA135]"
              />
              <textarea
                placeholder="Tu mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 rounded bg-white bg-opacity-10 dark:bg-[#2d2d2d] border border-[#CBA135] border-opacity-30 dark:border-opacity-60 placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:border-opacity-100 transition resize-none text-[#37654B] dark:text-[#CBA135]"
              />
              <button
                type="submit"
                className="w-full py-2 rounded font-semibold hover:opacity-90 transition bg-[#CBA135] text-[#37654B]"
              >
                Enviar
              </button>
              {statusMessage && (
                <p className="text-sm text-center text-[#CBA135]">
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-[#CBA135] border-opacity-20 dark:border-opacity-30 pt-8 text-center text-sm opacity-80 dark:text-gray-400">
          <p>Asuka Cosmetics 2026. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
