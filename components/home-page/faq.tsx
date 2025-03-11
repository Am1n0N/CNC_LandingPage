import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, Container } from "@/components/craft";

const FAQ = () => {
  const faqs = [
    {
      question: "How fast can you manufacture?",
      answer: "We understand there can be urgencies with breakdowns and production runs. So we offer a 24 hour turnaround service on any urgent requirements to get you moving forward."
    },
    {
      question: "Do you offer delivery?",
      answer: "Yes! We have our own drivers for deliveries and have partnerships with transport companies, so we can deliver anywhere in Australia."
    },
    {
      question: "How long is delivery?",
      answer: "We offer next day delivery for Metropolitan Melbourne and 2-5 business days to anywhere else in Australia."
    },
    {
      question: "Can you work off digital files?",
      answer: "Yes! We can provide a full service from quotation to production from any digital file, including PDFs."
    }
  ];

  return (
    <Section className="py-8 bg-gray-50 dark:bg-gray-900 font-bold">
      <Container >
        <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Frequently Asked Questions
        </h1>
        
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="w-full p-4 border-4 border-blue-900 dark:border-blue-400 rounded-lg ">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg text-blue-900 dark:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-bold text-md dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;