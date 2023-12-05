import Image from "next/image";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import AboutUs from "./components/about-us";
import ServicesOverview from "./components/service-overview";
import HowItWorks from "./components/how-it-works";
import Pricing from "./components/pricing";
import FAQs from "./components/faq";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import ContactForm from "./components/contact-form";

export default function Home() {
  return (
    <>
      <Header />
      <ContactForm />
      <HeroSection />
      <AboutUs />
      <ServicesOverview />
      <HowItWorks />
      <Pricing />
      <FAQs />
      <Testimonials />
      <Footer />
    </>
  );
}
