import React, { useState } from "react";
import { LanguageToggle } from "~/components/router/language-toggle";
import { MenuButton } from "../menu-button";
import { NavigationLinks } from "./navigation-links";
import { CloseButton } from "../close-button";

export const Navigation: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="flex flex-col items-end">
			<LanguageToggle />
			<MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<div
				className={`absolute lg:static lg:block lg:h-auto top-full left-0 right-0 w-full ${isMenuOpen ? "block" : "hidden"} lg:w-auto bg-xhain-blue-20 lg:bg-transparent py-11 lg:py-0`}
				id="navbar-default"
			>
				{isMenuOpen && <CloseButton onClick={closeMenu} />}
				<NavigationLinks closeMenu={closeMenu} />
			</div>
		</nav>
	);
};
