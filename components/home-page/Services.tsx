import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Section, Container } from "@/components/craft";
import { ArrowRight } from "lucide-react";

import MachiningImage from "@/public/machining.webp";
import RapidPrototypingImage from "@/public/prototyping.webp";
import AssemblyProductionImage from "@/public/Assembly.webp";

type FeatureText = {
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
  cta: string;
};

const featureText: FeatureText[] = [
  {
    image: MachiningImage,  // Replace with actual CNC manufacturing image path
    title: "CNC Manufacturing",
    description: "Order high-quality CNC machined components using our substantial inventory of CNC Lathes and Machining Centres from our Australian based factory.",
    href: "/cnc-manufacturing",
    cta: "More on CNC Manufacturing",
  },
  {
    image: RapidPrototypingImage,  // Replace with actual Rapid Prototyping image path
    title: "Rapid Prototyping",
    description: "With our highly skilled staffed and advanced machinery, we are able to provide a 24 hour service on any prototyping requirements.",
    href: "/rapid-prototyping",
    cta: "More on Rapid Prototyping",
  },
  {
    image: AssemblyProductionImage,  // Replace with actual Assembly Production image path
    title: "Assembly Production",
    description: "We provide full assembly from start to finish and can have a complete product delivered to your door. Our full production range includes machining, fabrication, metal finishing, welding, etc.",
    href: "/assembly-production",
    cta: "More on 3D CAD Design",
  },
];

const Services = () => {
  return (
    <Section className="py-16 bg-gray-50 dark:bg-gray-900">
      <Container className="not-prose">
        <div className="flex flex-col gap-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-2">
              <span className="text-gray-800 dark:text-gray-200">Our</span>{" "}
              <span className="bg-gray-900 text-white px-4 py-2 rounded-lg dark:bg-gray-200 dark:text-gray-900">
                Capabilities
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featureText.map(({ image, title, description, href, cta }, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="relative h-64 w-full">
                  <Image
                    alt={title}
                    fill
                    src={image}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 ">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;