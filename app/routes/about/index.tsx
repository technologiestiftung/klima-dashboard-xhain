import { i18n } from "~/i18n/i18n-utils";

export default function Index() {
	const content = [
		{
			h4: i18n("about.secondSectionSubtitle.part1"),
			p: i18n("about.secondSectionDescription.part1"),
		},
		{
			h4: i18n("about.secondSectionSubtitle.part2"),
			p: i18n("about.secondSectionDescription.part2"),
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
				<div className="lg:mx-auto max-w-[894px] flex flex-col gap-8 lg:gap-16">
					<div>
						<h2 className="text-2xl leading-8 font-bold mb-3">
							{i18n("about.firstSectionTitle")}
						</h2>
						<p
							className="text-base leading-6 lg:text-xl lg:leading-7 font-normal"
							dangerouslySetInnerHTML={{
								__html: i18n("about.firstSectionDescription"),
							}}
						/>
					</div>
					<div>
						<h2 className="text-2xl leading-8 font-bold mb-3">
							{i18n("about.secondSectionTitle")}
						</h2>
						{content.map((section, index) => (
							<div key={index} className="flex flex-col gap-3 mb-8">
								<h4 className="text-base leading-6 lg:text-xl lg:leading-7 font-bold">
									{section.h4}
								</h4>
								<p
									className="text-base leading-6 lg:text-xl lg:leading-7 font-normal"
									dangerouslySetInnerHTML={{
										__html: section.p,
									}}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
