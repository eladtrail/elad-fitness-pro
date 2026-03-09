import { Hero }            from "@/components/sections/hero";
import { Services }        from "@/components/sections/services";
import { BMICalculator }   from "@/components/sections/bmi-calculator";
import { FAQ }             from "@/components/sections/faq";
import { SuccessStories }  from "@/components/sections/success-stories";
import { About }           from "@/components/sections/about";
import { ContactForm }     from "@/components/sections/contact-form";
import { WhatsAppButton }  from "@/components/ui/whatsapp-button";
import { SiteFooter }      from "@/components/ui/site-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BMICalculator />
      <FAQ />
      <SuccessStories />
      <About />
      <ContactForm />
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
