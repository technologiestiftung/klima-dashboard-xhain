import { i18n } from "~/i18n/i18n-utils";

export default function Index() {
	const content = [
		{
			h2: i18n("about.firstSectionTitle"),
			p: i18n("about.firstSectionDescription"),
		},
		{
			h2: i18n("about.secondSectionTitle"),
			p: i18n("about.secondSectionDescription"),
		},
		{
			h2: i18n("about.thirdSectionTitle"),
			p: i18n("about.thirdSectionDescription"),
		},
	];
	return (
		<>
			<div className="bg-xhain-blue-20 py-10 px-5 lg:px-20">
				<h1 className="max-w-[894px] mx-auto text-4xl leading-10 font-semibold lg:text-7xl lg:leading-none text-center lg:text-left">
					{i18n("about.title")}
				</h1>
			</div>
			<div className="flex flex-col w-full justify-center px-5 py-10 lg:p-20 lg:pb-0">
				<div className="lg:mx-auto max-w-[894px]">
					{content.map((section, index) => (
						<div
							key={index}
							className="flex flex-col gap-3 mb-8 lg:mb-16
				"
						>
							<h2 className="text-2xl leading-8 font-bold">{section.h2}</h2>
							<p className="text-base leading-6 lg:text-xl lg:leading-7 font-normal">
								{section.p}
							</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
