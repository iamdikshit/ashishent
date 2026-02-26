"use client"
import ProductDetail from "@/components/sections/product-detail";
import {useParams} from "next/navigation";
import productData from "@/data/product-detail";
import NoProduct from "@/components/sections/noproduct";




export default function Page() {
    const params = useParams();
    const slug = params?.slug;
    const data = productData.find(
        (product) => product.id === slug
    );

    if (!data) {
        return <NoProduct/>;
    }
    return (
        <div>
            <ProductDetail data={data} />
        </div>
    );
}
