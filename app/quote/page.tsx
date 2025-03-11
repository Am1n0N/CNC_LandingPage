//quote page

import { Container, Main, Section } from "@/components/craft";
import Script from "next/script";


export default function Quote() {
    return (
        <Main>
            <Section className="py-16">
                <Container className=" pt-10 max-w-6xl h-full mx-auto">

                    <iframe

                        id="JotFormIFrame-250054229467558"
                        title="Send Your AutoCAD File"

                        allow="geolocation; microphone; camera; fullscreen"
                        src="https://form.jotform.com/250054229467558"
                        frameBorder="0"
                        style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none", marginTop: "60px" }}
                    >
                    </iframe>
                    <Script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" strategy="lazyOnload" />
                    <Script id="jotform-embed-handler" strategy="lazyOnload">
                        {`window.jotformEmbedHandler("iframe[id='JotFormIFrame-250054229467558']", "https://form.jotform.com/")`}
                    </Script>

                </Container>
            </Section>
        </Main>
    );
}
