import { HeroSection } from "@/components/custom/hero-section";
import { flattenAttributes } from "@/lib/utils";
import qs from "qs";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      populate: {
        image: {
          fields: ["url", "alternativeText"],
        },
        link: {
          populate: true,
        },
      },
    },
  },
});

async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";

  const url = new URL(path, baseUrl);
  url.search = homePageQuery;

  console.log(url.href);

  try {
    const response = await fetch(url, {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const flattened = flattenAttributes(data);
    return flattened;
  } catch (err) {
    console.error(err);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");
  console.dir(strapiData, { depth: null });
  const { title, description, blocks } = strapiData;

  return (
    <main className="container mx-auto py-6">
      <HeroSection data={blocks[0]} />
    </main>
  );
}
