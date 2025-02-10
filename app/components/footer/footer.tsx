import React from "react";
import { FooterLogoBar } from "./footer-logo-bar";
import { FooterCardSection } from "./footer-card-section";
import { FooterLeftSection } from "./footer-left-section";

export const Footer: React.FC = () => {
	return (
		<footer className="bg-xhain-blue-50 mt-56 lg:mt-72">
			<div className="max-w-8xl px-5 sm:px-20 py-10 mx-auto w-full">
				<div className="relative container h-max w-full mx-auto">
					<FooterCardSection />
					<FooterLeftSection />
				</div>
			</div>
			<FooterLogoBar />
		</footer>
	);
};
