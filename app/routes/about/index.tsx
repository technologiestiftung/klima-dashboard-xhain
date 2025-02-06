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
					className="group rounded-full flex gap-2 w-fit px-2.5 py-1 border-2 text-sm leading-5 lg:text-base lg:leading-6 font-semibold focus-xhain-blue-80 hover:bg-white hover:text-xhain-blue-50"
				>
					<svg
						className="w-6 h-6 fill-current text-white group-hover:text-xhain-blue-50"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z" />
					</svg>
					{i18n("about.actionCardEmail")}
				</a>
			</div>
		</>
	);
}
