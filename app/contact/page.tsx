import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section, Container } from "@/components/craft";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <Section className="py-16">
      <Container className="mt-20">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              If you have any questions, please don&apos;t hesitate to reach out, we&apos;re always happy to help! If your AutoCAD/PDF file is ready to go, click on{" "}
              <a href="/quote" className="text-blue-600 dark:text-blue-400 hover:underline">Get a Quote</a>{" "}
              to submit it and we&apos;ll get back to you with a quote within 4 business hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="font-medium dark:text-white">Email</div>
                  <a href="mailto:info@ssengineering.com.au" className="text-gray-600 dark:text-gray-300 hover:underline">
                    info@ssengineering.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="font-medium dark:text-white">Phone</div>
                  <a href="tel:(03) 9587-6265" className="text-gray-600 dark:text-gray-300 hover:underline">
                    (03) 9587-6265
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="font-medium dark:text-white">Office</div>
                  <address className="text-gray-600 dark:text-gray-300 not-italic">
                    8 Arianne Street, Mordialloc,<br />
                    Victoria 3195
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Name</label>
                <Input type="text" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Company</label>
                <Input type="text" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Email</label>
                <Input type="email" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Phone Number</label>
                <Input type="tel" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">Message</label>
                <Textarea placeholder="Type your message..." className="h-32" required />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Submit
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 rounded-lg overflow-hidden h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.8!2d145.0!3d-38.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAwJzAwLjAiUyAxNDXCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </Section>
  );
};

export default ContactPage;
