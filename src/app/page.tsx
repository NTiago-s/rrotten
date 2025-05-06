import Card from "@/page-sections/cards";
import SectionContainer from "@/components/section-container";
import Title from "@/ui/title";
import Hero from "@/page-sections/hero";
import About from "@/page-sections/about";
import MapView from "@/ui/map-view";
import Contact from "@/page-sections/contact";

export default function Home() {
  return (
    <main className="mx-auto md:m-12 flex justify-center flex-col gap-9 px-4">
      <SectionContainer id="Hero">
        <Hero />
      </SectionContainer>
      <SectionContainer id="Carta">
        <Title>Carta</Title>
        <Card />
      </SectionContainer>
      <SectionContainer id="Informacion del restaurant">
        <About />
      </SectionContainer>
      <SectionContainer id="Contacto">
        <Contact />
      </SectionContainer>
      <SectionContainer id="Map de Rrotten">
        <MapView />
      </SectionContainer>
    </main>
  );
}
