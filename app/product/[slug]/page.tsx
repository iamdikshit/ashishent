"use client"
import ProductDetail from "@/components/sections/product-detail";
import {useParams} from "next/navigation";
import productData from "@/data/product-detail";


type Product = {
    id: string;
    name: string;
    tagline: string;
    tag: string;
    tagColor: string;
    category: string;
    description: string;
    longDescription: string;
    applications: string[];
    specifications: { label: string; value: string }[];
    features: string[];
    moq: string;
    leadTime: string;
    origin: string;
    icon: React.ReactNode;
    gradient: string;
};

export default function Page() {
    const params = useParams();
    const slug = params?.slug;
     const data:[Product]  = productData.filter((product) => { return product.id===slug;});

    return (
        <div>
            <ProductDetail data={data} />
        </div>
    );
}
