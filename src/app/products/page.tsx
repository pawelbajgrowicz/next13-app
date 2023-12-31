import { ProductList } from "@/ui/organisms/ProductList";
import { Breadcrumbs } from "@/ui/organisms/Breadcrumbs";
import { Pagination } from "@/ui/organisms/Pagination";

const Products = async () => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=20`,
	);

	const products = (await response.json()) as Product[];

	return (
		<>
			<Breadcrumbs
				items={[{ link: "/products", name: "Products" }]}
			/>
			<ProductList products={products} />
			<Pagination />
		</>
	);
};

export default Products;
