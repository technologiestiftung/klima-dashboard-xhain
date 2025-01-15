import { type RefObject, useState, useEffect } from "react";

export function useContainerWidthHeight(ref: RefObject<HTMLDivElement | null>) {
	const [width, setWidth] = useState(360);
	const [height, setHeight] = useState(320);

	/**
	 * Set the initial width and height of the container
	 */
	useEffect(() => {
		if (!ref.current) {
			return;
		}

		const { offsetWidth, offsetHeight } = ref.current;
		setWidth(offsetWidth);
		setHeight(offsetHeight);
	}, [ref]);

	/**
	 * Observe if the container is resized
	 */
	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			const { offsetWidth, offsetHeight } = entries[0].target as HTMLDivElement;
			setWidth(offsetWidth);
			setHeight(offsetHeight);
		});

		if (ref.current) {
			resizeObserver.observe(ref.current);
		}

		return () => resizeObserver.disconnect();
	}, [ref]);

	return { width, height };
}
