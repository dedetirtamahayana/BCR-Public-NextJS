import CTA from "@/components/Home/CTA";
import FAQ from "@/components/Home/FAQ";
import Feature from "@/components/Home/Feature";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Testimonial from "@/components/Home/Testimonial";
import WhyUs from "@/components/Home/WhyUs";

function HomePage() {
  return (
    <main>
      <Hero />
      <Feature />
      <WhyUs />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
export default HomePage;
