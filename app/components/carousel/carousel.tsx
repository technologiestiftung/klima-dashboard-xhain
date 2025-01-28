import React, { useRef, useState } from "react";
import { i18n, formatNumber } from "~/i18n/i18n-utils";
import { CarouselCard } from "./carousel-card";

const mod = (n: number, m: number) => ((n % m) + m) % m;

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

export const Carousel: React.FC = () => {
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [currentCardIndex, setCurrentCardIndex] = useState(0);

	const [cardNumbers, setCardNumbers] = useState<Record<number, string>>({
		1: formatNumber(14398),
		2: formatNumber(68) + "%",
		3: formatNumber(26) + "%",
	});

	const cardData: CardContent[] = [
		{
			intro: i18n("carousel.card1.intro"),
			number: formatNumber(292866),
			description: i18n("carousel.card1.description"),
			image: "/images/einwohner-icon.svg",
			hasToggle: false,
			sourceLink: "https://www.statistik-berlin-brandenburg.de/a-i-5-hj",
			source: i18n("carousel.card1.source"),
		},
		{
			intro: i18n("carousel.card2.intro"),
			numberXhain: formatNumber(14398),
			numberBerlin: formatNumber(4361),
			number: cardNumbers[1],
			description: i18n("carousel.card2.description"),
			image: null,
			hasToggle: true,
			sourceLink: "https://www.statistik-berlin-brandenburg.de/a-i-5-hj",
			source: i18n("carousel.card2.source"),
		},
		{
			intro: i18n("carousel.card3.intro"),
			numberXhain: formatNumber(68) + "%",
			numberBerlin: formatNumber(34) + "%",
			number: cardNumbers[2],
			description: i18n("carousel.card3.description"),
			image: "/images/sealing-icon.svg",
			hasToggle: true,
			sourceLink:
				"https://www.berlin.de/umweltatlas/boden/versiegelung/2021/kartenbeschreibung/",
			source: i18n("carousel.card3.source"),
		},
		{
			intro: i18n("carousel.card4.intro"),
			numberXhain: formatNumber(26) + "%",
			numberBerlin: formatNumber(15) + "%",
			number: cardNumbers[3],
			description: i18n("carousel.card4.description"),
			image: null,
			hasToggle: true,
			sourceLink: "https://www.statistik-berlin-brandenburg.de/a-v-3-j",
			source: i18n("carousel.card4.source"),
		},
		{
			intro: i18n("carousel.card5.intro"),
			number: i18n("carousel.card5.number"),
			description: i18n("carousel.card5.description"),
			image: "/images/bed-icon.svg",
			hasToggle: false,
			sourceLink: "",
			source: i18n("carousel.card5.source"),
		},
	];

	const toggleSelectedCard = (cardIndex: number, value: string) => {
		setCardNumbers((prev) => {
			const toggledNumber =
				value === "xhain"
					? cardData[cardIndex].numberXhain
					: cardData[cardIndex].numberBerlin;
			return {
				...prev,
				[cardIndex]: toggledNumber || "",
			};
		});
	};

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
				<div className="snap-start md:w-8 xl:w-10 shrink-0" />

				{cardData.map((card, index) => (
					<div
						key={index}
						ref={(el) => {
							cardRefs.current[index] = el;
						}}
						className="flex"
					>
						<CarouselCard
							key={index}
							card={card}
							index={index}
							toggleSelectedCard={toggleSelectedCard}
						/>
					</div>
				))}

				{/* Right Spacer */}
				<div className="snap-start md:w-8 shrink-0" />
			</div>
			<div className="flex justify-end gap-6 md:gap-5 pt-12 px-5 md:px-20 max-w-8xl mx-auto">
				<button
					className="rounded-full size-12 p-3 bg-xhain-green-50 hover:bg-white"
					onClick={goToPrevious}
				>
					<img
						src="/images/arrow-left.svg"
						alt={i18n("carousel.button.previous.alt")}
					/>
				</button>
				<button
					className="rounded-full size-12 p-3 bg-xhain-green-50  hover:bg-white"
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
