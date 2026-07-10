import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Products from '../components/Products';
import Wholesale from '../components/Wholesale';
import Testimonials from '../components/Testimonials';
import Sustainability from '../components/Sustainability';
import SocialFeed from '../components/SocialFeed';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
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
      <TrustBar />
      <Products onAddToCart={onAddToCart} />
      <Wholesale />
      <Testimonials />
      <Sustainability />
      <SocialFeed />
      <Blog />
      <FAQ />
    </>
  );
}
