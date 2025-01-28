import React from "react";
import { i18n } from "~/i18n/i18n-utils";

const closeIcon = "/images/close-icon.svg";

interface CloseButtonProps {
	onClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
	return (
		<button
			className="absolute right-0 mr-5 text-white lg:hidden"
			onClick={onClick}
		>
			<img src={closeIcon} alt={i18n("header.closeButtonAltText")} />
		</button>
	);
};
