import React from "react";
import { RadioToggle } from "../radio-toggle/radio-toggle";

const radioOptions = [
	{ value: "xhain", label: "Xhain" },
	{ value: "berlin", label: "Berlin" },
] as { value: string; label: string }[];

interface CardContent {
	intro: string;
	number: string;
	numberXhain?: string;
	numberBerlin?: string;
	description: string;
	image: string | null;
	hasToggle: boolean;
}

interface CarouselCardProps {
	card: CardContent;
	index: number;
	toggleSelectedCard: (index: number, value: string) => void;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({
	card,
	index,
	toggleSelectedCard,
}) => {
	return (
		<div
			tabIndex={0}
			className={`snap-start text-white rounded-2xl h-[200px] md:h-[340px]  
                        shrink-0 border-4 border-white flex scroll-mx-5 md:scroll-mx-20
                        ${index % 2 === 0 ? "md:w-[680px] w-[325px]" : "md:w-[340px] w-[200px]"} 
                        ${card.image ? "flex-row" : "flex-col justify-center items-center"}`}
		>
			<div
				className={`flex flex-col p-4 text-center justify-center items-center text-sm md:text-lg 
                                        ${card.image ? "w-1/2" : "w-full"}`}
			>
				<p className="leading-5 md:leading-7 font-semibold">{card.intro}</p>
				<h2 className="text-2xl md:text-6xl leading-none font-bold">
					{card.number}
				</h2>
				<p className="leading-5 md:leading-7 font-semibold mb-5">
					{card.description}
				</p>
				{card.hasToggle && (
					<RadioToggle
						options={radioOptions}
						defaultValue={radioOptions[0].value}
						onSelectionChange={(value) => toggleSelectedCard(index, value)}
						radioID={`card-${index}`}
					/>
				)}
			</div>
			{card.image && (
				<div className="w-1/2 bg-white flex justify-center items-center rounded-r-xl">
					<img
						className="size-[86px] md:size-[220px]"
						src={card.image}
						alt="icon"
					/>
				</div>
			)}
		</div>
	);
};
