import { type RefObject, useEffect } from "react";

export function useFocusLeave(
	ref: RefObject<HTMLElement | null>,
	callback: () => void,
) {
	useEffect(() => {
		if (!ref.current) {
			return () => {};
		}

		ref.current.addEventListener("focusout", callback);

		return () => {
			if (!ref.current) {
				return;
			}

			ref.current.removeEventListener("focusout", callback);
		};
	}, [ref, callback]);
}
