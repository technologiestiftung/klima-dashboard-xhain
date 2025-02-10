import { useState, useEffect, useRef } from "react";

export const useScrollDirection = (): "up" | "down" => {
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.pageYOffset;
			// Ignore small scrolls for performance & smoother UX
			if (Math.abs(currentScrollY - lastScrollY.current) < 30) return;

			const newDirection = currentScrollY > lastScrollY.current ? "down" : "up";
			setScrollDirection(newDirection);
			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return scrollDirection;
};
