import Link from "next/link";

export const ProductListItemDescription = ({
	title,
	price,
	id,
}: {
	title: string;
	price: number;
	id: string;
}) => {
	return (
		<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700">
					<Link href={`/product/${id}`}>
						<span
							aria-hidden="true"
							className="absolute inset-0"
						></span>
						{title}
					</Link>
				</h3>
			</div>
			<p className="text-sm font-medium text-gray-900">{price} zł</p>
		</div>
	);
};
