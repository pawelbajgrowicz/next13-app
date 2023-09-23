import { SingleProduct } from "@/ui/organisms/SingleProduct";
import { Breadcrumbs } from "@/ui/organisms/Breadcrumbs";
import { Metadata } from "next";

export async function generateStaticParams() {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products`,
	);
	const products = (await res.json()) as {
		id: string;
		title: string;
	}[];

	return products.map((product) => ({ productId: product.id }));
}

export async function generateMetadata({
	params: { productId },
}: {
	params: { productId: number };
}): Promise<Metadata> {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${productId}`,
	);

	const { title, description } = (await response.json()) as Product;

	return {
		title,
		description,
		openGraph: {
			images: ["/images/og-images/publication.png"],
		},
	};
}

const Product = async ({
	params: { productId },
}: {
	params: { productId: number };
}) => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${productId}`,
	);

	const product = (await response.json()) as Product;

	return (
		<>
			<Breadcrumbs
				items={[
					{ link: "/products", name: "Products" },
					{ link: `/product/${productId}`, name: product.title },
				]}
			/>
			<SingleProduct product={product} />
		</>
	);
};

export default Product;
