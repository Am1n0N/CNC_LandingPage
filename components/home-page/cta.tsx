import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/craft";


import RapidPrototypingImage from "@/public/prototyping.webp";

const CTA = () => {
  return (
    <Section className="relative min-h-[600px] w-full">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${RapidPrototypingImage.src})`,  
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

    
      <Container className="relative flex flex-col items-center justify-center min-h-[600px] text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">  
            Get High-Quality CNC Machined Components
          </h1>
          
          <p className="text-xl mb-12 text-gray-200">
            Quality assurance at every stage in our factory based in Melbourne
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="flex flex-col">
              <span className="text-sm mb-2 text-gray-300">
                Is your part file ready to go?
              </span>
              <Button 
                className="w-full bg-white text-black hover:bg-gray-200" 
                asChild
              >
                <Link href="/quote">Get a Quote</Link>
              </Button>
            </div>

            <div className="flex flex-col">
              <span className="text-sm mb-2 text-gray-300">
                Want to talk about your project?
              </span>
              <Button 
                className="w-full bg-transparent border border-white hover:bg-white/10" 
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;