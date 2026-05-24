import { X, Minus, Plus, Send } from 'lucide-react';
import { CartItem } from '../App';
import { sendWhatsAppMessage } from '../utils/whatsapp';

interface CartProps {
  cart: CartItem[];
  onClose: () => void;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export default function Cart({ cart, onClose, onRemove, onUpdateQuantity }: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsApp = () => {
    if (cart.length === 0) return;

    const message = `Hola, me gustaría realizar el siguiente pedido:\n\n${cart
      .map(item => `${item.name} x${item.quantity} - $${(item.price * item.quantity).toLocaleString('es-CL')}`)
      .join('\n')}\n\nTotal: $${total.toLocaleString('es-CL')}`;

    sendWhatsAppMessage(message);
  };

  return (
    <div className="fixed inset-0 z-40 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70" onClick={onClose} />

      <div className="absolute right-0 top-0 h-full w-full md:w-96 bg-white dark:bg-[#2d2d2d] shadow-xl flex flex-col animate-slide-in">
        <div className="flex items-center justify-between p-6 border-b border-primary dark:border-[#CBA135]">
          <h2 className="text-xl font-bold text-primary dark:text-[#CBA135]">
            Tu Carrito
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] rounded">
            <X size={24} className="text-gray-800 dark:text-gray-200" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">Tu carrito está vacío</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-gray-200 dark:border-[#37654B] pb-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200 line-clamp-2">{item.name}</h3>
                  <p className="text-sm font-bold mt-1 text-primary dark:text-[#CBA135]">
                    ${(item.price * item.quantity).toLocaleString('es-CL')}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] rounded"
                    >
                      <Minus size={16} className="text-gray-800 dark:text-gray-200" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center text-gray-800 dark:text-gray-200">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] rounded"
                    >
                      <Plus size={16} className="text-gray-800 dark:text-gray-200" />
                    </button>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="ml-auto text-red-500 text-xs hover:bg-red-50 dark:hover:bg-red-900 dark:hover:bg-opacity-20 px-2 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-primary dark:border-[#CBA135] p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg text-gray-800 dark:text-gray-200">Total:</span>
              <span className="font-bold text-xl text-primary dark:text-[#CBA135]">
                ${total.toLocaleString('es-CL')}
              </span>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 transition bg-primary dark:bg-[#CBA135]"
            >
              <Send size={20} />
              Enviar por WhatsApp
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
