import React from "react";

const closeIcon = "/images/close-icon.svg";

interface CloseButtonProps {
	onClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
	return (
		<button
			className="flex items-end justify-self-end mb-16 mr-5 text-white lg:hidden"
			onClick={onClick}
			aria-label="Close Menu"
		>
			<img src={closeIcon} alt="Close Menu" />
		</button>
	);
};
