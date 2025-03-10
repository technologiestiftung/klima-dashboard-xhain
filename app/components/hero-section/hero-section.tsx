import React from "react";
import { i18n } from "~/i18n/i18n-utils";
import ThermometerChart from "../visualizations/thermometer-chart/thermometer-chart";

export const HeroSection: React.FC = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 items-center h-vhs lg:h-[calc(100svh-125px)] w-full hero-section">
			<div className="h-full bg-xhain-green-50">
				<div className="flex flex-col p-5 md:px-20 lg:py-0 w-full h-full justify-center items-center lg:items-start text-center lg:text-left">
					<div className="mb-0 md:mb-2 text-base leading-6 font-normal md:text-xl md:leading-7 md:font-bold text-left">
						{i18n("heroSection.eyebrowText")}
					</div>
					<h1 className="w-full mb-4 md:mb-7 text-2xl leading-8 font-bold md:text-5xl xl:text-6xl 2xl:text-7xl md:leading-none :font-semibold">
						{i18n("heroSection.heading")}
					</h1>
					<p className="text-base leading-6 font-normal md:text-2xl xl:text-3xl 2xl:text-3xl md:leading-9">
						{i18n("heroSection.subheading")}
					</p>
				</div>
			</div>
			<div className="flex flex-col w-full h-full py-6 px-4 lg:px-20 items-center justify-center bg-xhain-blue-20">
				<div>
					<ThermometerChart radioId="medium-temperature-1" />
				</div>
				<div className="gap-0 flex flex-col justify-self-end items-center mt-4 text-center">
					<span className="text-base md:text-lg leading-6 font-bold">
						{i18n("heroSection.mediumTemperature.averageTempText")}
					</span>
					<span className="text-base md:text-lg leading-6 font-normal text-center md:text-left md:ml-2">
						{i18n("heroSection.mediumTemperature.locationText")}
					</span>
				</div>
			</div>
		</div>
	);
};
