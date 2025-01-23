import React from "react";
import { LanguageToggleButton } from "~/components/language-toggle-button/language-toggle-button";
import { MenuButton } from "../menu-button";
import { NavigationLinks } from "./navigation-links";
import { CloseButton } from "../close-button";
import { useMenuStore } from "./menu-store";

export const Navigation: React.FC = () => {
	const { isMenuOpen, closeMenu } = useMenuStore();

	return (
		<nav className="flex flex-col items-end">
			<LanguageToggleButton />
			<MenuButton />
			<div
				className={`fixed top-0 left-0 lg:static lg:block w-full lg:w-auto bg-xhain-blue-20 lg:bg-transparent py-11 lg:py-0 ${
					isMenuOpen ? "z-50 block h-lvh lg:h-auto" : "hidden"
				}`}
				id="navbar-default"
			>
				{isMenuOpen && <CloseButton onClick={closeMenu} />}
				<NavigationLinks />
			</div>
		</nav>
	);
};
