import LinkProps from "next/link";
import { StrapiImage } from "./strapi-image";
import { getStrapiURL } from "@/lib/utils";

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface LinkProps {
  id: number;
  url: string;
  text: string;
}

interface HeroSectionProps {
  data: {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    image: ImageProps;
    link: LinkProps;
  };
}

export function HeroSection({ data }: Readonly<HeroSectionProps>) {
  const { heading, subHeading, image, link } = data;

  const imageURL = getStrapiURL() + image.url;

  return (
    <header className="relative h-[600px] overflow-hidden">
      <StrapiImage
        alt="video camera"
        className="absolute inset-0 object-cover w-full h-full"
        height={1080}
        src={imageURL}
        width={1920}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          {heading}
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">{subHeading}</p>
        <LinkProps
          className="mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100"
          href={link.url}
        >
          {link.text}
        </LinkProps>
      </div>
    </header>
  );
}
