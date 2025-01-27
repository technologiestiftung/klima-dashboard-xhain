import React, { useRef, useState } from "react";
import { i18n } from "~/i18n/i18n-utils";

const mod = (n: number, m: number) => {
	return ((n % m) + m) % m;
};

export const Carousel: React.FC = () => {
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [currentCardIndex, setCurrentCardIndex] = useState(0);

	const cardData = [
		{
			intro: i18n("carousel.card1.intro"),
			number: i18n("carousel.card1.number"),
			description: i18n("carousel.card1.description"),
			image: "/images/einwohner-icon.svg",
		},
		{
			intro: i18n("carousel.card2.intro"),
			number: i18n("carousel.card2.number"),
			description: i18n("carousel.card2.description"),
			image: null,
		},
		{
			intro: i18n("carousel.card3.intro"),
			number: i18n("carousel.card3.number"),
			description: i18n("carousel.card3.description"),
			image: "/images/sealing-icon.svg",
		},
		{
			intro: i18n("carousel.card4.intro"),
			number: i18n("carousel.card4.number"),
			description: i18n("carousel.card4.description"),
			image: null,
		},
		{
			intro: i18n("carousel.card5.intro"),
			number: i18n("carousel.card5.number"),
			description: i18n("carousel.card5.description"),
			image: "/images/bed-icon.svg",
		},
	];

	const goToNext = () => {
		const nextCardIndex = mod(currentCardIndex + 1, cardData.length);
		cardRefs.current[nextCardIndex]?.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "start",
		});
		setCurrentCardIndex(nextCardIndex);
	};

	const goToPrevious = () => {
		const previousCardIndex = mod(currentCardIndex - 1, cardData.length);
		cardRefs.current[previousCardIndex]?.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "start",
		});
		setCurrentCardIndex(previousCardIndex);
	};

	return (
		<div className="w-full">
			<div
				id="carousel"
				className="snap-x snap-mandatory flex overflow-x-auto no-scrollbar gap-6 md:gap-12"
			>
				{/* Left Spacer */}
				<div className="snap-start md:w-8 shrink-0" />

				{cardData.map((card, index) => (
					<div
						key={index}
						ref={(el) => {
							cardRefs.current[index] = el;
						}}
						tabIndex={0}
						className={`snap-start text-white rounded-2xl h-[200px] md:h-[340px]  
						shrink-0 border-4 border-white flex scroll-mx-5 md:scroll-mx-20
						${index % 2 === 0 ? "md:w-[680px] w-[325px]" : "md:w-[340px] w-[200px]"} 
						${card.image ? "flex-row" : "flex-col justify-center items-center"}`}
					>
						<div
							className={`flex flex-col p-4 text-center justify-center items-center font-bold text-sm md:text-lg 
								${card.image ? "w-1/2" : "w-full"}`}
						>
							<p className="leading-5 md:leading-7">{card.intro}</p>
							<h2 className="text-2xl md:text-6xl leading-none">
								{card.number}
							</h2>
							<p className="leading-5 md:leading-7">{card.description}</p>
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
				))}

				{/* Right Spacer */}
				<div className="snap-start md:w-8 shrink-0" />
			</div>
			<div className="flex justify-end gap-6 md:gap-5 pt-12 px-5 md:px-20 max-w-8xl mx-auto">
				<button
					className="rounded-full size-12 p-3 bg-xhain-green-50"
					onClick={goToPrevious}
				>
					<img
						src="/images/arrow-left.svg"
						alt={i18n("carousel.button.previous.alt")}
					/>
				</button>
				<button
					className="rounded-full size-12 p-3 bg-xhain-green-50"
					onClick={goToNext}
				>
					<img
						src="/images/arrow-right.svg"
						alt={i18n("carousel.button.next.alt")}
					/>
				</button>
			</div>
		</div>
	);
};
