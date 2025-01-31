import React from "react";
import { i18n } from "~/i18n/i18n-utils";
import ThermometerChart from "../visualizations/thermometer-chart/thermometer-chart";

export const HeroSection: React.FC = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 items-center h-auto lg:min-h-[800px] hero-section">
			<div className="w-full h-full bg-xhain-green-50">
				<div className="flex flex-col p-5 lg:px-20 lg:py-0 w-full h-full justify-center items-center lg:items-start text-center lg:text-left">
					<div className="mb-0 lg:mb-2 text-base leading-6 font-normal lg:text-xl lg:leading-7 lg:font-bold text-left">
						{i18n("heroSection.eyebrowText")}
					</div>
					<h1 className="mb-4 lg:mb-7 text-2xl leading-8 font-bold lg:text-7xl lg:leading-none lg:font-semibold ">
						{i18n("heroSection.heading")}
					</h1>
					<p className="text-base leading-6 font-normal lg:text-3xl lg:leading-9">
						{i18n("heroSection.subheading")}
					</p>
				</div>
			</div>
			<div className="flex flex-col w-full h-full py-6 px-4 lg:px-0 items-center justify-between bg-xhain-blue-20">
				<div className="mt-0 lg:mt-9 mb-8 lg:mb-0">
					<ThermometerChart />
				</div>
				<div className="flex gap-0 flex-col lg:flex-row lg:gap-2 justify-self-end items-center">
					<span className="text-base leading-6 font-bold">
						{i18n("heroSection.mediumTemperature.averageTempText")}
					</span>
					<span className="text-base leading-6 font-normal">
						{i18n("heroSection.mediumTemperature.locationText")}
					</span>
				</div>
			</div>
		</div>
	);
};
