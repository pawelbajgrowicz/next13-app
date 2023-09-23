import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

interface PropTypes {
	product: Product;
}

export const ProductListItem = ({
	product: { image, title, price, id },
}: PropTypes) => {
	return (
		<li className="group relative">
			<article>
				<ProductCoverImage src={image} alt={title} />
				<ProductListItemDescription
					title={title}
					price={price}
					id={id}
				/>
			</article>
		</li>
	);
};
