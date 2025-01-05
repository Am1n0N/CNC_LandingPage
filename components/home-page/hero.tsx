// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import Placeholder from "@/public/Hero.webp";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <h1 className="text-4xl md:text-7xl">
            <Balancer>
            CNC Machining You Can <strong className="text-primary-foreground dark:text-primary-foreground-dark bg-black dark:bg-white rounded-md">Trust</strong>
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
            We specialise in precision CNC Machining of metal and plastic parts to service a vast range of 
            industries throughout Tunsia in any volume with a 100% Satisfaction Guarantee.
            </Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
