import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import Products from "@/components/Products";
import WhyNovira from "@/components/WhyNovira";
import Benefits from "@/components/Benefits";
import HowToUse from "@/components/HowToUse";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Trust from "@/components/Trust";
import OrderCTA from "@/components/OrderCTA";
import OrderForm from "@/components/OrderForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <Products />
        <WhyNovira />
        <Benefits />
        <HowToUse />
        <Gallery />
        <About />
        <Trust />
        <OrderCTA />
        <OrderForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
