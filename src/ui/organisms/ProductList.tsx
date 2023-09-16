import React from "react";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: Product[] }) => {
	return (
		<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<h2 className="text-2xl font-bold tracking-tight text-gray-900">Product list</h2>

			<ul
				className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
				data-testid={"products-list"}
			>
				{products.map((product) => (
					<ProductListItem key={product.name} product={product} />
				))}
			</ul>
		</div>
	);
};
