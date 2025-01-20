import React from "react";
import { FooterLogoBar } from "./footer-logo-bar";
import { FooterCardSection } from "./footer-card-section";
import { FooterLeftSection } from "./footer-left-section";

export const Footer: React.FC = () => {
	return (
		<footer>
			<div className="bg-xhain-blue-50 px-20 py-10">
				<div className="relative container h-max">
					<FooterCardSection />
					<FooterLeftSection />
				</div>
			</div>
			<FooterLogoBar />
		</footer>
	);
};
