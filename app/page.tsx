import { Hero }           from "@/components/sections/hero";
import { Services }       from "@/components/sections/services";
import { FAQ }            from "@/components/sections/faq";
import { About }          from "@/components/sections/about";
import { ContactForm }    from "@/components/sections/contact-form";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { SiteFooter }     from "@/components/ui/site-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FAQ />
      <About />
      <ContactForm />
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
