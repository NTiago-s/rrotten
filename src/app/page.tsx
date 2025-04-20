import Card from "@/components/cards";
import SectionContainer from "@/components/section-container";
import Title from "@/ui/title";

export default function Home() {
  return (
    <main>
      <SectionContainer>
        <Title>Hero</Title>
      </SectionContainer>
      <SectionContainer>
        <Title>Presentacion</Title>
      </SectionContainer>
      <SectionContainer>
        <Title>Carta</Title>
        <Card />
      </SectionContainer>
      <SectionContainer>
        <Title>Seccion Final</Title>
      </SectionContainer>
    </main>
  );
}
