import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ExperienceSection = () => {
  return (
    <Section className="w-full py-16 bg-gray-50 dark:bg-gray-900 font-bold">
      <Container className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className=" text-gray-900 dark:text-white">
            Over <span className="bg-red-600 text-white px-1  rounded">20 Years</span> of Experience in CNC Machining
          </h1>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Southside Engineering has over 20 years of experience in servicing some of the largest and most accredited companies throughout Australia, which has enabled us to build a solid reputation throughout the industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              className=" text-white bg-blue-700 border-blue-700 border-2 rounded-md w-2/5 h-[60px] hover:bg-blue-900 "
            >
              <Link href="/quote">
                <span className="text-white font-bold">Get a Quote</span>
              </Link>
            </button>

            <button
              className=" text-white border-2 border-blue-700 rounded-md w-2/5 h-[60px] hover:bg-blue-900"
            >
              <Link href="/contact">
                <span className="text-blue-700 font-bold hover:text-white ">Contact Us</span>
              </Link>
            </button>
          </div>
        </div>

        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.5!2d145.0343!3d-37.9634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66a5c7f2!2sSouthside+Engineering!5e0!3m2!1sen!2sau!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>
      </Container>
    </Section>
  );
};

export default ExperienceSection;
