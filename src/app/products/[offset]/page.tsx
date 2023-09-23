import { ProductList } from "@/ui/organisms/ProductList";
import { Breadcrumbs } from "@/ui/organisms/Breadcrumbs";
import { Pagination } from "@/ui/organisms/Pagination";

const Products = async ({
	params: { offset },
}: {
	params: { offset: number };
}) => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=20&offset=${offset}`,
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
