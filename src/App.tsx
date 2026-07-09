import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import BlogPostPage from './pages/BlogPostPage';
import { ThemeProvider } from './context/ThemeContext';
import useHashScroll from './hooks/useHashScroll';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  useHashScroll();

  const addToCart = (id: number, name: string, price: number, image: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id, name, price, image, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-[#F7E7E5] dark:bg-[#1a1a1a]">

        <Navbar
          cartCount={cart.length}
          onCartClick={() => setShowCart(!showCart)}
        />
        {showCart && (
          <Cart
            cart={cart}
            onClose={() => setShowCart(false)}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        )}

        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/blog" element={<Home onAddToCart={addToCart} />} />
        </Routes>

        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
