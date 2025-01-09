import React, { useRef, useState } from "react";

const mod = (n: number, m: number) => {
	return ((n % m) + m) % m;
};

export const Carousel: React.FC = () => {
	const card1 = useRef<HTMLDivElement | null>(null);
	const card2 = useRef<HTMLDivElement | null>(null);
	const card3 = useRef<HTMLDivElement | null>(null);
	const cards = [card1, card2, card3];

	const [currentCardIndex, setCurrentCardIndex] = useState(0);

	const goToNext = () => {
		const nextCardIndex = mod(currentCardIndex + 1, cards.length);
		cards[nextCardIndex]?.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "start",
		});
		setCurrentCardIndex(nextCardIndex);
	};

	const goToPrevious = () => {
		const previousCardIndex = mod(currentCardIndex - 1, cards.length);
		cards[previousCardIndex]?.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "start",
		});
		setCurrentCardIndex(previousCardIndex);
	};

	return (
		<div className="bg-xhain-blue-70 w-full py-12 px-12">
			<div
				id="carousel"
				className="snap-x snap-mandatory flex overflow-x-auto h-96 no-scrollbar gap-12"
			>
				<div
					ref={card1}
					className="snap-start text-white text-6xl rounded-3xl w-[50rem] shrink-0 border-4 border-white"
				>
					293.454
				</div>
				<div
					ref={card2}
					className="snap-start text-white text-6xl rounded-3xl w-[50rem] shrink-0 border-4 border-white"
				>
					14.427
				</div>
				<div
					ref={card3}
					className="snap-start text-white text-6xl rounded-3xl w-[50rem] shrink-0 border-4 border-white"
				>
					68%
				</div>
			</div>
			<div className="flex gap-2 pt-12">
				<button
					className="rounded-full px-3 py-2 bg-[#99EE63] text-xhain-blue-70"
					onClick={goToPrevious}
				>
					&lt;-
				</button>
				<button
					className="rounded-full px-3 py-2 bg-[#99EE63] text-xhain-blue-70"
					onClick={goToNext}
				>
					-&gt;
				</button>
			</div>
		</div>
	);
};
