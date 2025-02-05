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
		<div className="flex flex-col desktop:flex-row gap-4 items-center">
			<p
				className="my-4 flex flex-col text-base gap-2"
				dangerouslySetInnerHTML={{
					__html: i18n("chart.restBudgetThgUntilYear.text"),
				}}
			/>
			<div className="flex flex-col w-full h-full desktop:mx-10">
				<div className="relative w-fit mx-auto h-full flex justify-center items-center">
					<img src={"/images/bucket.svg"} alt="" className="w-80" />
					<div className="absolute top-0 h-full flex flex-col justify-center xl:justify-between items-center gap-2 md:py-3 px-[16%] mx-auto">
						<div className="flex flex-col justify-center border-2 border-dashed rounded-5px border-xhain-blue-80 z-10 xl:h-full px-2 py-1 text-center w-full">
							<p className="text-xl lg:text-base xl:text-xl leading-7 font-semibold ">
								{budgetFuture.tons_co2 / 1000000}{" "}
								{i18n("chart.restBudgetThgUntilYear.unit")}
							</p>
							<p className="text-base leading-6 lg:text-sm xl:text-base">
								{i18n("chart.restBudgetThgUntilYear.remainingBudget")}{" "}
								{budgetFuture?.year}
							</p>
						</div>
						<div className="w-full">
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
		</div>
	);
};
