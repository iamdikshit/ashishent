
import ProductDetail from "@/components/sections/product-detail";
import {Metadata} from "next";
import productData from "@/data/product-detail";
import NoProduct from "@/components/sections/noproduct";



type Props = {
    params: {
        slug: string;
    };
};


export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const { slug } = await params;

    const product = productData.find(
        (p) => p.id === slug
    );

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.name} Importer in India | Bulk Supply`,
        description: product.description,
        alternates: {
            canonical: `https://www.ashishent.com/product/${product.id}`,
        },
        openGraph: {
            title: `${product.name} Wholesale Supplier`,
            description: product.description,
            url: `https://www.yourdomain.com/products/${product.id}`,
            images: [
                {
                    url: `/products/${product.id}.jpg`,
                    width: 1200,
                    height: 630,
                    alt: product.name,
                },
            ],
        },
    };
}
export default async  function Page({ params }: Props) {

    const { slug } = await params;

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
