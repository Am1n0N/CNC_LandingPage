import { Container, Main, Section } from "@/components/craft";
import CTA from "@/components/home-page/cta";
import Services from "@/components/home-page/Services";
import Footer from "@/components/home-page/footer";
import Hero from "@/components/home-page/hero";
import ProcessSection from "@/components/home-page/process-section";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
         <Hero />
         <Services />
         <CTA />
         <ProcessSection />
         <Footer />
        </Container>

      </Section>
    </Main>
  );
}
