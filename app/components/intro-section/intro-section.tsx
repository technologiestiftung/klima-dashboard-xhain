import React, { useState } from "react";
import { i18n } from "~/i18n/i18n-utils";

const chevronUp = "/images/blue-chevron-up.svg";

export const IntroSection: React.FC = () => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="mx-auto px-5 py-10 lg:p-20 max-w-[894px] text-xhain-blue-80">
			<p
				className="text-base leading-6 lg:text-2xl lg:leading-8 font-normal"
				dangerouslySetInnerHTML={{ __html: i18n("introSection.overview") }}
			/>
			<ul className="list-disc pl-7">
				<li className="text-base leading-6 lg:text-2xl lg:leading-8 font-semibold">
					{i18n("introSection.keyQuestion1")}
				</li>
				<li className="text-base leading-6 lg:text-2xl lg:leading-8 font-semibold">
					{i18n("introSection.keyQuestion2")}
				</li>
				<li className="text-base leading-6 lg:text-2xl lg:leading-8 font-semibold">
					{i18n("introSection.keyQuestion3")}
				</li>
			</ul>
			<br />
			{expanded && (
				<>
					<p
						className="mb-4 text-base leading-6 lg:text-2xl lg:leading-8 font-normal"
						dangerouslySetInnerHTML={{ __html: i18n("introSection.dataBasis") }}
					/>
					<p
						className="mb-4 text-base leading-6 lg:text-2xl lg:leading-8 font-normal"
						dangerouslySetInnerHTML={{
							__html: i18n("introSection.collaboration"),
						}}
					/>
					<p
						className="mb-4 text-base leading-6 lg:text-2xl lg:leading-8 font-normal"
						dangerouslySetInnerHTML={{
							__html: i18n("introSection.explanation"),
						}}
					/>
				</>
			)}
			<button
				className="flex gap-2 items-center focus-xhain-blue-80"
				onClick={() => setExpanded(!expanded)}
			>
				<span className="text-base leading-6 font-normal lg:text-2xl lg:leading-8 lg:font-semibold text-xhain-blue-50">
					{expanded
						? i18n("introSection.showLess")
						: i18n("introSection.showMore")}
				</span>
				<img
					src={chevronUp}
					alt={
						expanded
							? i18n("introSection.expandedAltText")
							: i18n("introSection.collapseAltText")
					}
					className={`transform ${expanded ? "rotate-0" : "rotate-180"}`}
				/>
			</button>
		</div>
	);
};
