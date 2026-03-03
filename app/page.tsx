

import Products from "@/components/sections/product-section/product";
import WhyChooseUs from "@/components/sections/whyus/whyus";
import AboutUs from "@/components/sections/about/aboutus";
import ContactUs from "@/components/sections/contact-section/contactus";
import Hero from "@/components/sections/home-section/hero";
export default function Home() {
  return (
    <div>
        <Hero/>

        <AboutUs/>
        <WhyChooseUs/>
        <Products/>
        <ContactUs/>
    </div>
  );
}
