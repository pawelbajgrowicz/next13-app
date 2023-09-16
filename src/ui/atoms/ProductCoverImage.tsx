export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div
			className={
				"aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80"
			}
		>
			<img
				src={src}
				alt={alt}
				className={"h-full w-full object-cover object-center lg:h-full lg:w-full"}
			/>
		</div>
	);
};
