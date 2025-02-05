import { i18n } from "~/i18n/i18n-utils";

const mailIcon = "/images/mail-icon.svg";

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
		<div className="mb-60">
			<h1 className="py-10 px-2 lg:px-20 text-4xl leading-10 font-semibold lg:text-7xl lg:leading-none text-center lg:text-left bg-xhain-blue-20">
				{i18n("about.title")}
			</h1>
			<div className="px-5 py-10 lg:p-20 lg:mx-auto max-w-[894px]">
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
			<div className="rounded-4xl flex flex-col p-10 gap-4 lg:gap-8 mx-5 lg:mx-auto py-6 px-4 lg:p-10 max-w-[552px] bg-xhain-blue-50 text-white ">
				<p
					className="text-xl leading-7 lg:text-2xl lg:leading-8 font-semibold "
					dangerouslySetInnerHTML={{ __html: i18n("about.actionCardTitle") }}
				/>
				<a
					href={`mailto:${i18n("about.actionCardEmail")}`}
					className="rounded-full flex gap-2 w-fit px-2.5 py-1 border-2 text-sm leading-5 lg:text-base lg:leading-6 font-semibold focus-xhain-blue-80 hover:bg-xhain-blue-60"
				>
					<img src={mailIcon} alt="" />
					{i18n("about.actionCardEmail")}
				</a>
			</div>
		</div>
	);
}
