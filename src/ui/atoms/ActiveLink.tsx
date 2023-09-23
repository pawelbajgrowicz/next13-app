import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Route } from "next";

export const ActiveLink = ({
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
	href: Route;
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
		<li
			className={cn(className, statusClasses, "p-0")}
			aria-current={pathname}
		>
			<Link {...props} href={href}>
				<NavigationMenuLink>
					<div className="px-4 py-2 text-sm font-medium leading-none ">
						{title}
					</div>
				</NavigationMenuLink>
			</Link>
		</li>
	);
};
