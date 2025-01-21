import React from "react";

interface LanguageToggleButtonProps {
	currentLanguage: string;
	onLanguageChange: () => void;
}

export const LanguageToggleButton: React.FC<LanguageToggleButtonProps> = ({
	currentLanguage,
	onLanguageChange,
}) => {
	return (
		<label className="flex cursor-pointer select-none items-center">
			<div className="relative flex items-center h-8 w-[86px] rounded-full p-[2px] bg-xhain-blue-20">
				<div className="flex gap-[3px] h-7 w-[82px] items-center justify-center">
					{/* DE Button */}
					<div
						className={`absolute flex items-center justify-center left-0.5 w-[39px] h-7 rounded-full text-sm font-semibold leading-5 z-10 ${currentLanguage === "de" ? "text-white" : "text-xhain-blue-100 hover:bg-xhain-blue-30"}`}
					>
						DE
					</div>
					{/* EN Button */}
					<div
						className={`absolute flex items-center justify-center right-0.5 w-[39px] h-7 rounded-full text-sm font-semibold leading-5 z-10 ${currentLanguage === "en" ? "text-white" : "text-xhain-blue-100 hover:bg-xhain-blue-30"}`}
					>
						EN
					</div>
				</div>
				{/* Slider */}
				<div
					className={`absolute w-[39px] h-7 bg-xhain-blue-50 rounded-full transition-transform ${currentLanguage === "de" ? "translate-x-0" : "translate-x-[43px]"}`}
				></div>
			</div>
			<input
				type="checkbox"
				checked={currentLanguage === "de"}
				onChange={onLanguageChange}
				className="sr-only"
			/>
		</label>
	);
};
