import { ProductList } from "@/ui/organisms/ProductList";

const Products = () => {
	const products = [1, 2, 3, 4].map((index: number) => ({
		image: { src: `https://picsum.photos/306/424?n=${index}`, alt: `Product alt ${index}` },
		name: `Product ${index}`,
		price: index * 100,
	})) as Product[];

	return (
		<section className="bg-white">
			<ProductList products={products} />
		</section>
	);
};

export default Products;
