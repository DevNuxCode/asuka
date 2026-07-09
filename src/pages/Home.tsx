import Hero from '../components/Hero';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import SEO from '../components/SEO';
import { DEFAULT_META_DESCRIPTION } from '../config/site';

interface HomeProps {
  onAddToCart: (id: number, name: string, price: number, image: string) => void;
}

export default function Home({ onAddToCart }: HomeProps) {
  return (
    <>
      <SEO
        title="Asuka Cosmetics - Cuidado Personal Natural"
        description={DEFAULT_META_DESCRIPTION}
        path="/"
      />
      <Hero />
      <Products onAddToCart={onAddToCart} />
      <Testimonials />
      <Blog />
    </>
  );
}
