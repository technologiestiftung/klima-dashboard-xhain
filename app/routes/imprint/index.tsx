import { i18n } from "~/i18n/i18n-utils";

export default function Index() {
	return (
		<>
			<div className="py-10 px-2 lg:px-20 bg-xhain-blue-20">
				<h1 className="max-w-[894px] mx-auto text-4xl leading-10 font-semibold lg:text-7xl lg:leading-none text-center lg:text-left">
					{i18n("imprint.title")}
				</h1>
			</div>
			<div className="px-5 py-10 lg:p-20 lg:pb-0">
				<div className="max-w-[894px] mx-auto">
					<p className="mb-3 text-2xl leading-8 font-bold">
						{i18n("imprint.heading")}
					</p>
					<p
						className="text-base leading-6 font-normal lg:text-2xl lg:leading-8"
						dangerouslySetInnerHTML={{ __html: i18n("imprint.description") }}
					/>
				</div>
			</div>
		</>
	);
}
