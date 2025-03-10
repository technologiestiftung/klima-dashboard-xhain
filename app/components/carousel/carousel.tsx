import React, { useEffect, useRef, useState } from "react";
import { i18n, formatNumber } from "~/i18n/i18n-utils";
import { CarouselCard } from "./carousel-card";

const mod = (n: number, m: number) => ((n % m) + m) % m;

const SCROLL_OPTIONS = {
	behavior: "smooth",
	block: "nearest",
	inline: "start",
} as const;

interface CardContent {
	intro: string;
	number: string;
	description: string;
	image: string | null;
	hasToggle: boolean;
	sourceLink: string;
	source: string;
}

export const Carousel: React.FC = () => {
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [currentCardIndex, setCurrentCardIndex] = useState(0);

	// isXhainSelected stores the toggle state of the cards with xhain and berlin values
	const [isXhainSelected, setIsXhainSelected] = useState<
		Record<number, boolean>
	>({
		1: true, // Card 2 toggle
		2: true, // Card 3 toggle
		3: true, // Card 4 toggle
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
			number: isXhainSelected[1] ? formatNumber(14398) : formatNumber(4361),
			description: i18n("carousel.card2.description"),
			image: null,
			hasToggle: true,
			sourceLink: "https://www.statistik-berlin-brandenburg.de/a-i-5-hj",
			source: i18n("carousel.card2.source"),
		},
		{
			intro: i18n("carousel.card3.intro"),
			number: isXhainSelected[2]
				? formatNumber(68) + "%"
				: formatNumber(34) + "%",
			description: i18n("carousel.card3.description"),
			image: "/images/sealing-icon.svg",
			hasToggle: true,
			sourceLink:
				"https://www.berlin.de/umweltatlas/boden/versiegelung/2021/kartenbeschreibung/",
			source: i18n("carousel.card3.source"),
		},
		{
			intro: i18n("carousel.card4.intro"),
			number: isXhainSelected[3]
				? formatNumber(26) + "%"
				: formatNumber(15) + "%",
			description: i18n("carousel.card4.description"),
			image: null,
			hasToggle: true,
			sourceLink: "https://www.statistik-berlin-brandenburg.de/a-v-3-j",
			source: i18n("carousel.card4.source"),
		},
		{
			intro: i18n("carousel.card5.intro"),
			number:
				formatNumber(1.6, { toFixed: 1 }) +
				" " +
				i18n("carousel.card5..millionUnit"),
			description: i18n("carousel.card5.description"),
			image: "/images/bed-icon.svg",
			hasToggle: false,
			sourceLink:
				"https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/wirtschaftsfoerderung/tourismus/",
			source: i18n("carousel.card5.source"),
		},
	];

	const toggleSelectedCard = (cardIndex: number) => {
		setIsXhainSelected((prev) => ({
			...prev,
			[cardIndex]: !prev[cardIndex],
		}));
	};

	const [isSmallDesktop, setIsSmallDesktop] = useState(
		typeof window !== "undefined" && window.innerWidth > 1060,
	);
	const [isLargeDesktop, setIsLargeDesktop] = useState(
		typeof window !== "undefined" && window.innerWidth > 1800,
	);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallDesktop(window.innerWidth > 1060);
			setIsLargeDesktop(window.innerWidth > 1800);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const cardCount = cardData.length;

	const updateCardView = (index: number) => {
		cardRefs.current[index]?.scrollIntoView(SCROLL_OPTIONS);
		setCurrentCardIndex(index);
	};

	const goToNext = () => {
		const nextIndex = mod(currentCardIndex + 1, cardCount);

		// when multiple cards from the end (on the right) are already visible in the viewport
		const isNextCardInViewport =
			(isLargeDesktop && nextIndex === cardCount - 2) ||
			(isSmallDesktop && nextIndex === cardCount - 1);

		// If on desktop and isNextCardInViewport, go to the first card directly (reset the index to 0).
		const adjustedIndex = isNextCardInViewport ? 0 : nextIndex;

		updateCardView(adjustedIndex);
	};

	const goToPrevious = () => {
		const prevIndex = mod(currentCardIndex - 1, cardCount);

		// Check if we are are jumping from the first to the last card.
		const isJumpingToLastCard = isSmallDesktop && prevIndex === cardCount - 1;

		if (!isJumpingToLastCard) {
			updateCardView(prevIndex);
			return;
		}

		// On small desktop, jump to the second last card. On large desktop, jump to the third last card.
		const adjustedIndex = isLargeDesktop ? cardCount - 3 : cardCount - 2;

		updateCardView(adjustedIndex);
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
						className="flex py-2"
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
					className="rounded-full size-12 p-3 bg-xhain-green-50 hover:bg-white"
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
