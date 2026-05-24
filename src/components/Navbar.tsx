import { ShoppingCart, Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white bg-opacity-95 dark:bg-[#2d2d2d] dark:bg-opacity-95 border-b border-primary dark:border-[#CBA135] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/LogoIA.png" alt="Asuka" className="h-8 w-8" />
          <span className="font-semibold text-lg text-primary dark:text-[#CBA135]">Asuka</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('products')} className="text-sm font-medium hover:opacity-70 transition text-primary dark:text-[#CBA135]">
            Productos
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium hover:opacity-70 transition text-primary dark:text-[#CBA135]">
            Testimonios
          </button>
          <button onClick={() => scrollToSection('blog')} className="text-sm font-medium hover:opacity-70 transition text-primary dark:text-[#CBA135]">
            Blog
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:opacity-70 transition text-primary dark:text-[#CBA135]">
            Contacto
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-[#CBA135] hover:bg-opacity-10 transition text-primary dark:text-[#CBA135]"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            onClick={onCartClick}
            className="relative p-2 rounded-lg hover:bg-opacity-10 transition"
            style={{ backgroundColor: 'rgba(203, 161, 53, 0.1)' }}
          >
            <ShoppingCart size={20} className="text-primary dark:text-[#CBA135]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-primary dark:text-[#CBA135]" />
          ) : (
            <Menu size={24} className="text-primary dark:text-[#CBA135]" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary dark:border-[#CBA135] bg-[#F7E7E5] dark:bg-[#2d2d2d] transition-colors duration-300">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 text-sm font-medium hover:opacity-70 text-primary dark:text-[#CBA135]">
              Productos
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-sm font-medium hover:opacity-70 text-primary dark:text-[#CBA135]">
              Testimonios
            </button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left py-2 text-sm font-medium hover:opacity-70 text-primary dark:text-[#CBA135]">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-sm font-medium hover:opacity-70 text-primary dark:text-[#CBA135]">
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
