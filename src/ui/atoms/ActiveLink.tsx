import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export const ActiveLink = <T extends string>({
	className,
	activeClassName,
	title,
	exact = true,
	href,
	...props
}: {
	title: string;
	className: string;
	activeClassName: string;
	exact?: boolean;
	href: Route<T>;
}) => {
	function isActive(): boolean {
		if (exact) {
			return href === pathname;
		}
		return pathname.startsWith(href);
	}

	const pathname = usePathname();
	const statusClasses = isActive() ? activeClassName : "";
	return (
		<li className={cn(className, statusClasses, "p-0")}>
			<Link
				{...props}
				href={href}
				{...(isActive() ? { "aria-current": "page" } : {})}
			>
				<NavigationMenuLink>
					<div className="px-4 py-2 text-sm font-medium leading-none ">
						{title}
					</div>
				</NavigationMenuLink>
			</Link>
		</li>
	);
};
