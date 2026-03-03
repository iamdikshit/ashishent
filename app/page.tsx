

import Products from "@/components/sections/product-section/product";
import WhyChooseUs from "@/components/sections/whyus/whyus";
import AboutUs from "@/components/sections/about/aboutus";
import ContactUs from "@/components/sections/contact-section/contactus";
import Hero from "@/components/sections/home-section/hero";
import {Metadata} from "next";

export const metadata:Metadata = {
    title:
        "Textile Importer in India | Hosiery Rags, Carpets & Fabrics",
    description:
        "Leading textile import company in India supplying bulk hosiery rags, Chinese carpets, knitted fabrics, woven fabrics, PVC coated and PU fabrics at wholesale pricing.",
    alternates: {
        canonical: "https://www.ashishent.com",
    },
};
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
