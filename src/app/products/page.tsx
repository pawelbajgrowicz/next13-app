import { ProductList } from "@/ui/organisms/ProductList";

const Page = () => {
	const products = [1, 2, 3, 4].map((index: number) => ({
		image: { src: `https://picsum.photos/306/424?n=${index}`, alt: `Product alt ${index}` },
		name: `Product ${index}`,
		price: index * 100,
	})) as Product[];

	return (
		<div className="bg-white">
			<ProductList products={products} />
		</div>
	);
};

export default Page;
