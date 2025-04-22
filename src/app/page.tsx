import Card from "@/components/cards";
import SectionContainer from "@/components/section-container";
import Title from "@/ui/title";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto my-12 flex justify-center flex-col gap-9 px-4">
      <SectionContainer>
        <Title>Carta</Title>
        <Card />
      </SectionContainer>
    </main>
  );
}
