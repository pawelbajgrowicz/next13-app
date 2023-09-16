import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

interface PropTypes {
	product: Product;
}

export const ProductListItem = ({
	product: {
		image: { src, alt },
		name,
		price,
	},
}: PropTypes) => {
	return (
		<div className="group relative">
			<ProductCoverImage src={src} alt={alt} />
			<ProductListItemDescription name={name} price={price} />
		</div>
	);
};
