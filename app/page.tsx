
import HomeSection from "@/components/sections/home-section/home";
import Products from "@/components/sections/product-section/product";
import WhyChooseUs from "@/components/sections/whyus/whyus";
import AboutUs from "@/components/sections/about/aboutus";
import ContactUs from "@/components/sections/contact-section/contactus";
export default function Home() {
  return (
    <div>
        <HomeSection/>
        <AboutUs/>
        <WhyChooseUs/>
        <Products/>
        <ContactUs/>
    </div>
  );
}
