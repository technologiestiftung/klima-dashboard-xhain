import React from "react";
import { i18n } from "~/i18n/i18n-utils";
import { useMenuStore } from "./navigation/menu-store";

const hamburgerMenuIcon = "/images/hamburger-menu.svg";

export const MenuButton: React.FC = () => {
	const { isMenuOpen, setIsMenuOpen } = useMenuStore();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<button
			data-collapse-toggle="navbar-default"
			type="button"
			className="lg:hidden mr-5 lg:mr-20"
			aria-controls="navbar-default"
			aria-expanded={isMenuOpen ? "true" : "false"}
			onClick={toggleMenu}
		>
			<img src={hamburgerMenuIcon} alt={i18n("header.burgerMenuAltText")} />
		</button>
	);
};
