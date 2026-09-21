import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Products from "@/components/Products";
import WhyNovira from "@/components/WhyNovira";
import Benefits from "@/components/Benefits";
import HowToUse from "@/components/HowToUse";
import About from "@/components/About";
import OrderForm from "@/components/OrderForm";
import FAQ from "@/components/FAQ";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import OrderCTA from "@/components/OrderCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <WhyNovira />
        <Benefits />
        <HowToUse />
        <About />
        <OrderForm />
        <FAQ />
        <Trust />
        <Contact />
        <OrderCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
