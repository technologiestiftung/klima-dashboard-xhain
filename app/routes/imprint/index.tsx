import { i18n } from "~/i18n/i18n-utils";

export default function Index() {
	return (
		<>
			<h1 className="py-10 px-2 lg:px-20 text-4xl leading-10 font-semibold lg:text-7xl lg:leading-none text-center lg:text-left bg-xhain-blue-20">
				{i18n("imprint.title")}
			</h1>
			<div className="max-w-8xl 2xl:mx-auto px-5 py-10 lg:p-20 lg:pb-0">
				<p className="mb-3 text-2xl leading-8 font-bold">
					{i18n("imprint.heading")}
				</p>
				<p
					className="text-base leading-6 font-normal lg:text-2xl lg:leading-8"
					dangerouslySetInnerHTML={{ __html: i18n("imprint.description") }}
				/>
			</div>
		</>
	);
}
