export const ProductListItemDescription = ({ name, price }: { name: string; price: number }) => {
	return (
		<div className="mt-4 flex justify-between">
			<div>
				<h3 className="text-sm text-gray-700">
					<a href="#">
						<span aria-hidden="true" className="absolute inset-0"></span>
						{name}
					</a>
				</h3>
			</div>
			<p className="text-sm font-medium text-gray-900">{price} zł</p>
		</div>
	);
};
