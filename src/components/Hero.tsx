export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden bg-[#F7E7E5] dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, #37654B 100px, #37654B 200px)' }} />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-8 flex justify-center">
          <img
            src="/LogoIA.png"
            alt="Asuka"
            className="h-20 w-20 animate-pulse drop-shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-primary dark:text-[#CBA135]">
          Cuidado Personal Natural
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          Productos de alta calidad para tu cabello, piel y cuerpo. Cada fórmula está diseñada con ingredientes naturales para potenciar tu belleza.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition transform hover:scale-105 bg-primary dark:bg-[#CBA135]"
          >
            Descubre Nuestros Productos
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-lg font-semibold border-2 transition transform hover:scale-105 text-primary dark:text-[#CBA135] border-primary dark:border-[#CBA135]"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}
