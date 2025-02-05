import React from "react";
import { i18n } from "~/i18n/i18n-utils";
import ThermometerChart from "../visualizations/thermometer-chart/thermometer-chart";

export const HeroSection: React.FC = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 items-center h-vhs lg:h-[calc(100svh-125px)] w-full hero-section">
			<div className="h-full bg-xhain-green-50">
				<div className="flex flex-col p-5 lg:px-20 lg:py-0 w-full h-full justify-center items-center lg:items-start text-center lg:text-left">
					<div className="mb-0 lg:mb-2 text-base leading-6 font-normal lg:text-xl lg:leading-7 lg:font-bold text-left">
						{i18n("heroSection.eyebrowText")}
					</div>
					<h1 className="w-full mb-4 lg:mb-7 text-2xl leading-8 font-bold lg:text-5xl xl:text-6xl 2xl:text-7xl lg:leading-none lg:font-semibold">
						{i18n("heroSection.heading")}
					</h1>
					<p className="text-base leading-6 font-normal lg:text-2xl xl:text-3xl 2xl:text-3xl lg:leading-9">
						{i18n("heroSection.subheading")}
					</p>
				</div>
			</div>
			<div className="flex flex-col w-full h-full py-6 px-4 lg:px-20 items-center justify-between bg-xhain-blue-20">
				<div className="my-auto">
					<ThermometerChart radioId="medium-temperature-1" />
				</div>
				<div className="flex gap-0 flex-col lg:flex-row lg:gap-2 justify-self-end items-center mt-4">
					<span className="text-base leading-6 font-bold">
						{i18n("heroSection.mediumTemperature.averageTempText")}
					</span>
					<span className="text-base leading-6 font-normal text-center lg:text-left">
						{i18n("heroSection.mediumTemperature.locationText")}
					</span>
				</div>
			</div>
		</div>
	);
};
