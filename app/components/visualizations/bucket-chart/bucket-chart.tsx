import React from "react";
import { i18n, formatNumber } from "~/i18n/i18n-utils";
import { howToReachGoalsData } from "~/data";

const { restBudgetThgUntilYear } = howToReachGoalsData;

const budgetPastYears = restBudgetThgUntilYear.filter(
	(d) => d.year < new Date().getFullYear(),
);

const budgetFuture = restBudgetThgUntilYear[0];

const colors = [
	"bg-white",
	"bg-xhain-blue-10",
	"bg-xhain-blue-30",
	"bg-xhain-blue-40",
	"bg-xhain-blue-50",
];

export const BucketChart: React.FC = () => {
	return (
		<div className="flex flex-col w-full h-full">
			<p className="mb-7 mt-4 gap-7 text-base leading-6 font-normal">
				{i18n("chart.restBudgetThgUntilYear.description")}
			</p>
			<div className="relative w-full h-80 flex justify-center items-center">
				<img src={"/images/bucket.svg"} alt="" className="" />
				<div className="absolute top-0 left-0 h-full flex flex-col justify-center xl:justify-between items-center gap-2 md:py-3 w-full mx-auto">
					<div className="border-2 border-dashed rounded-5px border-xhain-blue-80 z-10 xl:h-full p-2 xl:p-5 text-center w-44 sm:w-60 lg:w-48 xl:w-60 flex flex-col justify-center">
						<p className="text-xl leading-7 font-semibold">
							{budgetFuture.tons_co2 / 1000000}{" "}
							{i18n("chart.restBudgetThgUntilYear.unit")}
						</p>
						<p>
							{i18n("chart.restBudgetThgUntilYear.remainingBudget")}{" "}
							{budgetFuture?.year}
						</p>
					</div>
					<div className="w-44 sm:w-60 lg:w-48 xl:w-60">
						{budgetPastYears.map((year, i) => (
							<div
								key={i}
								className={`px-2 flex flex-row justify-between last:rounded-b-5px w-full
                                    ${colors[i]} `}
							>
								<div className="text-base leading-6 font-semibold ">
									{year.year}
								</div>
								<div>{formatNumber(year.tons_co2)} t</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
