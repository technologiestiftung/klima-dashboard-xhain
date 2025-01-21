import { type RefObject, useEffect } from "react";

export function useMouseLeave(
	ref: RefObject<HTMLElement | null>,
	callback: () => void,
) {
	useEffect(() => {
		if (!ref.current) {
			return () => {};
		}

		ref.current.addEventListener("mouseleave", callback);

		return () => {
			if (!ref.current) {
				return;
			}

			ref.current.removeEventListener("mouseleave", callback);
		};
	}, [ref, callback]);
}
