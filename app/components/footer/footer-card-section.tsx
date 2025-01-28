import React from "react";
import { i18n } from "~/i18n/i18n-utils";

export const FooterCardSection: React.FC = () => {
	return (
		<div className="absolute lg:right-0 -top-1/2 lg:-top-2/3 rounded-4xl w-full lg:w-1/2 p-5 md:p-11 bg-xhain-blue-10 flex flex-col justify-center text-center items-center md:text-start md:items-start gap-12">
			<div className="text-xl md:text-2xl lg:text-3xl leading-7 md:leading-8 lg:leading-9 text-xhain-blue-80">
				<div className="font-bold">{i18n("footer.cardHeading")}</div>
				<br />
				<p className="font-normal">{i18n("footer.cardSubHeading")}</p>
			</div>
			<a
				href={`mailto:${i18n("footer.cardCtaButtonText")}`}
				className="rounded-full bg-xhain-green-50 px-3 py-2.5 w-fit text-xl md:text-2xl leading-7 md:leading-8 font-bold hover:bg-xhain-green-60 focus-xhain-blue-80"
			>
				{i18n("footer.cardCtaButtonText")}
			</a>
		</div>
	);
};
