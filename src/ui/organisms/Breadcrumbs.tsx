import Link from "next/link";
import { Route } from "next";

export const Breadcrumbs = <T extends string>({
	items = [],
}: {
	items?: { link: Route<T>; name: string }[];
}) => {
	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol role="list" className="flex items-center">
				<li className="text-left">
					<div className="-m-1">
						<Link
							href="/"
							className="rounded-md p-1 text-sm font-medium text-gray-600 hover:text-gray-800"
						>
							{" "}
							Home
						</Link>
					</div>
				</li>

				{items.map(({ name, link }) => (
					<li className="text-left" key={name}>
						<div className="flex items-center">
							<span className="mx-2 text-gray-400">/</span>
							<div className="-m-1">
								<a
									href={link}
									className="rounded-md p-1 text-sm font-medium text-gray-600 hover:text-gray-800"
								>
									{" "}
									{name}
								</a>
							</div>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
};
