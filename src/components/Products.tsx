import { useState } from 'react';
import { products, Category, categories, Product } from '../data/products';
import { ShoppingCart } from 'lucide-react';
import ProductModal from './ProductModal';

interface ProductsProps {
  onAddToCart: (id: number, name: string, price: number, image: string) => void;
}

export default function Products({ onAddToCart }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = selectedCategory === 'Todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 px-4 bg-white dark:bg-[#2d2d2d] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary dark:text-[#CBA135]">
          Nuestros Productos
        </h2>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(product => (
            <div
              key={product.id}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 bg-white dark:bg-[#1a1a1a] cursor-pointer"
              onClick={() => openProductModal(product)}
            >
              <div className="relative h-48 bg-gray-100 dark:bg-[#2d2d2d] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                {product.stock === 0 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Agotado</span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 dark:text-[#CBA135] line-clamp-2 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-primary dark:text-[#CBA135]">
                    ${product.price.toLocaleString('es-CL')}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Stock: {product.stock}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product.id, product.name, product.price, product.image);
                  }}
                  disabled={product.stock === 0}
                  className="w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 text-white transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#CBA135' }}
                >
                  <ShoppingCart size={18} />
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeProductModal}
          onAddToCart={onAddToCart}
        />
      </div>
    </section>
  );
}
