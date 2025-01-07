import React, { useEffect, useRef } from "react";

interface DialogProps {
	children?: React.ReactNode;
	className?: string;
	id?: string;
}

export const Dialog: React.FC<DialogProps> = ({ children, className, id }) => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickListener);

		return () => {
			document.removeEventListener("mousedown", handleClickListener);
		};
	}, []);

	const handleClickListener = (event: MouseEvent) => {
		if (!dialogRef.current) {
			return;
		}

		/**
		 * This is confusing, yet correct. The dialog element spreads over the whole screen.
		 * If the user clicks on something inside the dialog, the event target won't be the dialog itself.
		 */
		const isClickOnDialogBackground = event.target === dialogRef.current;

		if (!isClickOnDialogBackground) {
			return;
		}

		closeDialog();
	};

	const closeDialog = () => {
		dialogRef.current?.close();
	};

	return (
		<>
			<dialog ref={dialogRef} id={id} className={className}>
				{children}
				<button
					className="text-ber-darker-grey absolute right-5 top-5 pb-2 hover:text-ber-dark-grey"
					onClick={closeDialog}
				>
					x
				</button>
			</dialog>
		</>
	);
};
