import { FeatureSection } from "@/components/custom/feature-sections";
import { HeroSection } from "@/components/custom/hero-section";
import { getHomePageData } from "@/data/loaders";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.features-sections":
      return <FeatureSection key={block.id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await getHomePageData();
  const { blocks } = strapiData;

  if (!blocks) {
    return <div>Nenhum block encontrado ...</div>;
  }

  return (
    <main className="container mx-auto py-6">
      {blocks.map((block: any) => blockRenderer(block))}
    </main>
  );
}
