import React, { useEffect, useRef } from "react";
import { i18n } from "../../i18n/i18n-utils";

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
		<div className="px-2.5">
			<dialog
				ref={dialogRef}
				id={id}
				className={`${className} bg-xhain-blue-10 rounded-4xl p-8 shadow-lg gap-7 mx-auto w-full md:max-w-[580px]`}
			>
				<button
					className="flex items-center px-3 py-0.5 gap-x-2 bg-xhain-blue-50 text-white rounded-full mb-7 font-semibold 
							hover:bg-xhain-blue-60 focus:outline focus:outline-3 focus:outline-xhain-blue-80 focus:outline-offset-5"
					onClick={closeDialog}
				>
					<img src={"/images/x-icon.svg"} alt={i18n("button.lessInfo")} />
					{i18n("button.lessInfo")}
				</button>
				{children}
			</dialog>
		</div>
	);
};
