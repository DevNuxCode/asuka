import { ShoppingCart, Package } from 'lucide-react';
import Modal from './Modal';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (id: number, name: string, price: number, image: string) => void;
}

export default function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product.id, product.name, product.price, product.image);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="h-64 bg-gray-100 dark:bg-[#1a1a1a] overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-6 scrollable max-h-96 overflow-y-auto bg-white dark:bg-[#2d2d2d]">
        <div className="flex items-start gap-2 mb-4">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full text-white bg-[#CBA135]"
          >
            {product.category}
          </span>
          {product.stock === 0 && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-100 dark:bg-red-900 dark:bg-opacity-20 text-red-600 dark:text-red-400">
              Agotado
            </span>
          )}
        </div>

        <h2 className="text-2xl font-bold mb-3 leading-tight text-primary dark:text-[#CBA135]">
          {product.name}
        </h2>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl font-bold text-primary dark:text-[#CBA135]">
            ${product.price.toLocaleString('es-CL')}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <Package size={16} className="text-gray-500 dark:text-gray-400" />
            Stock: {product.stock} unidades
          </span>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Descripción</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">{product.description}</p>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 text-white transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed bg-[#CBA135] dark:bg-[#37654B]"
        >
          <ShoppingCart size={20} />
          Agregar al carrito
        </button>
      </div>
    </Modal>
  );
}
