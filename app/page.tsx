import { Container, Main, Section } from "@/components/craft";
import CTA from "@/components/home-page/cta";
import SECONDCTA from "@/components/home-page/secondcta";
import Services from "@/components/home-page/Services";
import Hero from "@/components/home-page/hero";
import ProcessSection from "@/components/home-page/process-section";
import ExperienceSection from "@/components/home-page/Experience";
import FaqSection from "@/components/home-page/faq";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <Hero />
          <Services />
          <CTA />
          <ProcessSection />
          <ExperienceSection />
          <FaqSection />
          <SECONDCTA />
        </Container>
      </Section>
    </Main>
  );
}
