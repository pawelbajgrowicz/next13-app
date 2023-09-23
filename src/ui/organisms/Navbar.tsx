"use client";

import * as React from "react";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function Navbar() {
	const activeClass =
		"outline outline-2 outline-offset-2 outline-slate-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent";
	return (
		<div className={"mt-2 flex justify-center"}>
			<NavigationMenu>
				<NavigationMenuList className={"gap-2.5"}>
					<NavigationMenuItem>
						<ActiveLink
							href="/"
							title={"Home"}
							className={navigationMenuTriggerStyle()}
							exact={true}
							activeClassName={activeClass}
						/>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<ActiveLink
							href="/products"
							title={"All"}
							className={navigationMenuTriggerStyle()}
							exact={true}
							activeClassName={activeClass}
						/>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
