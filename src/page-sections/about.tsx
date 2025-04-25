export default function About() {
  return (
    <section className="bg-black/60 backdrop-blur-sm py-16 rounded-xl px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2">
        <img
          src="/logo-rrotten.jpeg"
          alt="Interior de Rroten"
          className="rounded-2xl shadow-lg object-cover w-full h-full max-h-[500px]"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-200 mb-4">Sobre Rrotten</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          En <span className="font-semibold text-yellow-600">Rrotten</span>,
          celebramos la pasión por la comida con recetas tradicionales y un
          ambiente acogedor. Cada plato es una experiencia culinaria pensada
          para compartir con quienes más querés.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mt-4">
          Nos especializamos en ingredientes frescos, atención personalizada y
          una carta que refleja lo mejor de la cocina local e internacional.
        </p>
      </div>
    </section>
  );
}
