import AboutParagraph from "@/ui/about-paragraph";

export default function About() {
  return (
    <section className="bg-black/60 backdrop-blur-sm py-16 rounded-xl px-6 md:px-12 flex flex-col md:flex-row items-center gap-4 md:gap-8">
      <div className="w-full md:w-1/2">
        <img
          src="/logo-rrotten.jpeg"
          alt="Interior de Rrotten"
          className="rounded-2xl shadow-lg object-cover w-full h-full max-h-[650px]"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-200 mb-4">Sobre Rrotten</h2>

        <AboutParagraph>
          En <span className="font-semibold text-yellow-600">Rrotten</span>,
          celebramos la pasión por la buena comida, combinando recetas
          tradicionales con un enfoque contemporáneo que transforma cada plato
          en una experiencia única. Nos mueve el deseo de generar momentos
          memorables en un ambiente cálido, donde cada detalle está pensado para
          que te sientas como en casa.
        </AboutParagraph>

        <AboutParagraph className="mt-4">
          Desde los ingredientes más frescos hasta la dedicación en la atención
          personalizada, cada visita a nuestro restaurante es una invitación a
          disfrutar lo mejor de la gastronomía local e internacional. Nuestro
          menú refleja el equilibrio perfecto entre la autenticidad de los
          sabores caseros y la innovación culinaria, ofreciendo una carta
          diversa, pensada para todos los gustos.
        </AboutParagraph>

        <AboutParagraph className="mt-4">
          Ya sea que vengas a compartir una cena en familia, una salida con
          amigos o una ocasión especial, en Rrotten te esperamos con los brazos
          abiertos y la mesa servida para que vivas una experiencia gastronómica
          que querrás repetir.
        </AboutParagraph>
      </div>
    </section>
  );
}
