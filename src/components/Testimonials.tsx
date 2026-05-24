import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-primary dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white dark:text-[#CBA135]">
          Lo que dicen nuestras clientas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white bg-opacity-10 dark:bg-[#2d2d2d] backdrop-blur rounded-lg p-6 border border-white border-opacity-20 dark:border-[#37654B] dark:border-opacity-30 hover:bg-opacity-20 dark:hover:bg-opacity-100 transition">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#CBA135" color="#CBA135" />
                ))}
              </div>

              <p className="text-white dark:text-gray-300 mb-4 leading-relaxed">"{testimonial.text}"</p>

              <div>
                <p className="font-semibold text-white dark:text-[#CBA135]">{testimonial.name}</p>
                <p className="text-sm text-white text-opacity-80 dark:text-gray-400">{testimonial.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
