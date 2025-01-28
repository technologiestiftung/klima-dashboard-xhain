import React, { useState } from "react";
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
	sourceLink: string;
	source: string;
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
	const [isSourceVisible, setIsSourceVisible] = useState<boolean>(false);
	return (
		<div
			tabIndex={0}
			className={`snap-start text-white rounded-2xl h-[200px] md:h-[340px]  
                        shrink-0 border-4 border-white flex scroll-mx-5 md:scroll-mx-20
                        ${index % 2 === 0 ? "md:w-[680px] w-[325px]" : "md:w-[340px] w-[200px]"} 
                        ${card.image ? "flex-row" : "flex-col justify-center items-center"}`}
		>
			<div
				className={`flex flex-col p-4 text-center justify-center items-center text-sm md:text-lg relative h-full
                                        ${card.image ? "w-1/2" : "w-full"}`}
			>
				<div className="absolute top-4 left-4">
					<button
						className="flex flex-row  gap-2"
						onClick={() => setIsSourceVisible(!isSourceVisible)}
						onMouseOver={() => setIsSourceVisible(true)}
						onMouseOut={() => setIsSourceVisible(false)}
					>
						<img className="size-5 " src="/images/i-icon.svg" alt="icon" />
						{isSourceVisible && (
							<a
								className="text-sm leading-5 font-normal text-xhain-blue-50 bg-white max-w-24 md:max-w-none px-0.5 md:px-1.5 rounded-5px underline"
								target="_blank"
								rel="noopener noreferrer"
								href={card.sourceLink}
							>
								{card.source}
							</a>
						)}
					</button>
				</div>
				<p className="leading-5 md:leading-7 font-semibold">{card.intro}</p>
				<h2 className="text-2xl md:text-6xl leading-none font-bold">
					{card.number}
				</h2>
				<p
					className={`leading-5 md:leading-7 font-semibold ${
						card.hasToggle ? "mb-4" : "mb-0"
					}`}
				>
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
				<div className="w-1/2 bg-white flex justify-center items-center rounded-r-md">
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
