export default function Hero() {
  return (
    <div className="relative w-full h-80 flex items-center justify-center bg-cover bg-center bg-[url('/hero-restaurant.jpg')]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl" />
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          <span className="text-yellow-400">Rrotten</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Cocina casera con ingredientes frescos y pasión en cada plato.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 cursor-pointer transition">
          Reservar ahora
        </button>
      </div>
    </div>
  );
}
