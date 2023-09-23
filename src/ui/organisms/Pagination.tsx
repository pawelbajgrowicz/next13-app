"use client";

import * as React from "react";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function Pagination() {
	const activeClass =
		"outline outline-2 outline-offset-2 outline-slate-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent";

	const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div
			className={"mt-2 flex justify-center"}
			aria-label={"pagination"}
		>
			<NavigationMenu>
				<NavigationMenuList className={"gap-2.5"}>
					{pages.map((page) => (
						<NavigationMenuItem key={page}>
							<ActiveLink
								href={`/products/${page}`}
								title={page.toString()}
								className={navigationMenuTriggerStyle()}
								exact={true}
								activeClassName={activeClass}
							/>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
