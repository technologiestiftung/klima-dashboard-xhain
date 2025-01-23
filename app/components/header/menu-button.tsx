import React from "react";
import { i18n } from "~/i18n/i18n-utils";

const hamburgerMenuIcon = "/images/hamburger-menu.svg";

interface MenuButtonProps {
	isMenuOpen: boolean;
	setIsMenuOpen: (isOpen: boolean) => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
	isMenuOpen,
	setIsMenuOpen,
}) => {
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
