import React from "react";
import { FooterLogoBar } from "./footer-logo-bar";
import { FooterCardSection } from "./footer-card-section";
import { FooterLeftSection } from "./footer-left-section";

export const Footer: React.FC = () => {
	return (
		<footer className="bg-xhain-blue-50">
			<div className="max-w-lg px-20 py-10 m-auto">
				<div className="relative container h-max">
					<FooterCardSection />
					<FooterLeftSection />
				</div>
			</div>
			<FooterLogoBar />
		</footer>
	);
};
