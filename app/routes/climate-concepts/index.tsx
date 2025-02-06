import { i18n } from "~/i18n/i18n-utils.ts";
import { Fragment } from "react";
import { LinkArrowIcon } from "~/components/icon/link-arrow-icon.tsx";

const content = [
	{
		h2: "climateConcepts.protectionConcept.h2",
		p: "climateConcepts.protectionConcept.p",
		links: [
			{
				label: "climateConcepts.protectionConcept.a.1.label",
				href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/2024_ksk_xhain_langfassung.pdf?ts=1734709045",
				id: "climate-concept-full",
				format: "PDF",
				size: "3 MB",
			},
			{
				label: "climateConcepts.protectionConcept.a.3.label",
				href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/2024_ksk_xhain_teilkonzept_energieundgebaude.pdf?ts=1734609309",
				id: "energy-buildings",
				format: "PDF",
				size: "5 MB",
			},
			{
				label: "climateConcepts.protectionConcept.a.2.label",
				href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/2024_ksk_xhain_teilkonzept_mobilitaet.pdf?ts=1734609302",
				id: "mobility",
				format: "PDF",
				size: "2.9 MB",
			},
			{
				label: "climateConcepts.protectionConcept.a.4.label",
				href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/2024_ksk_xhain_teilkonzept_bezirkalsvorbild.pdf?ts=1734609304",
				id: "district-role-model",
				format: "PDF",
				size: "2.2 MB",
			},
			{
				label: "climateConcepts.protectionConcept.a.5.label",
				href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/2024_ksk_xhain_teilkonzept_konsumundgesellschaft.pdf?ts=1734609302",
				id: "consumption-society",
				format: "PDF",
				size: "2.1 MB",
			},
			{
				label: "climateConcepts.protectionConcept.a.6.label",
				href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/2024_ksk_xhain_kurzfassung.pdf?ts=1735905812",
				id: "climate-concept-summary",
				format: "PDF",
				size: "1.8 MB",
			},
		],
	},
	{
		h2: "climateConcepts.adaptionConcept.h2",
		p: "climateConcepts.adaptionConcept.p",
		links: [
			{
				label: "climateConcepts.adaptionConcept.a.1.label",
				href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/2024_kak_xhain_langfassung.pdf?ts=1734609306",
				id: "climate-adaptation-full",
				format: "PDF",
				size: "6.4 MB",
			},
			{
				label: "climateConcepts.adaptionConcept.a.2.label",
				href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/2024_kak_xhain_teilkonzept_gebaeudeinfrastruktur.pdf?ts=1734609301",
				id: "buildings-infrastructure",
				format: "PDF",
				size: "1.7 MB",
			},
			{
				label: "climateConcepts.adaptionConcept.a.3.label",
				href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/2024_kak_xhain_teilkonzept_stadtgruenbiodiversitaet.pdf?ts=1734609307",
				id: "urban-green-biodiversity",
				format: "PDF",
				size: "2.3 MB",
			},
			{
				label: "climateConcepts.adaptionConcept.a.4.label",
				href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/2024_kak_xhain_teilkonzept_stadtplanung.pdf?ts=1734609299",
				id: "urban-planning",
				format: "PDF",
				size: "2.7 MB",
			},
			{
				label: "climateConcepts.adaptionConcept.a.5.label",
				href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/2024_kak_xhain_teilkonzept_gesundheit.pdf?ts=1734609305",
				id: "health",
				format: "PDF",
				size: "2.2 MB",
			},
			{
				label: "climateConcepts.adaptionConcept.a.6.label",
				href: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/klima-und-internationales/2024__kak_xhain_kurzfassung.pdf?ts=1734964303",
				id: "climate-adaption-summary",
				format: "PDF",
				size: "1.7 MB",
			},
		],
	},
] as const;

export default function Index() {
	return (
		<>
			<h1 className="text-4xl lg:text-7xl font-semibold text-center lg:text-left lg:px-20 py-12 bg-xhain-blue-20">
				{i18n("climateConcepts.title")}
			</h1>
			<div className="flex w-full justify-center pt-10 lg:pt-20 px-5 lg:px-20">
				<div className="flex flex-col max-w-[894px]">
					<div className="flex flex-col gap-y-5">
						<p className="text-2xl leading-9 lg:leading-10 lg:text-3xl ">
							{i18n("climateConcepts.intro.p1")}
						</p>
						<p className="lg:text-xl lg:leading-8">
							{i18n("climateConcepts.intro.p2")}
						</p>
						<p className="lg:text-xl lg:leading-8">
							{i18n("climateConcepts.intro.p3")}
						</p>
					</div>

					<div className="flex flex-col">
						{content.map(({ h2, p, links }) => (
							<Fragment key={h2}>
								<h2 className="font-bold text-2xl pt-10 lg:pt-20">
									{i18n(h2)}
								</h2>
								<p className="lg:text-xl leading-8 pt-3 pb-10">{i18n(p)}</p>
								{links.map(({ label, href, id, format, size }) => (
									<a
										key={id}
										href={href}
										id={id}
										className={`
										flex scroll-mt-56 gap-x-5 p-4
										border-b border-b-xhain-blue-60 focus-black
										focus:bg-xhain-blue-20 hover:bg-xhain-blue-20`}
									>
										<img
											src={"/images/download-icon.svg"}
											width={32}
											height={32}
											alt={""}
										/>
										<span className="flex flex-col">
											<span className="font-bold">{i18n(label)}</span>
											<span>
												{format} ({size})
											</span>
										</span>
									</a>
								))}
							</Fragment>
						))}
					</div>
				</div>
			</div>

			<div
				className={`
					rounded-4xl flex flex-col p-10 mt-16 lg:mt-32 gap-4 mx-5 py-6 px-4
					lg:gap-8 sm:mx-auto lg:p-10 max-w-[557px] bg-xhain-blue-50 text-white
					`}
			>
				<p className="text-xl font-bold">
					{i18n("climateConcepts.actionCard.title")}
				</p>
				<p className="">{i18n("climateConcepts.actionCard.subtitle")}</p>
				<a
					href="https://www.berlin.de/ba-friedrichshain-kreuzberg/aktuelles/bezirksticker/2023/vorstellung-klimateam-1371837.php"
					className={`
					rounded-full flex gap-2 w-fit px-2.5 py-1 border-2 text-sm leading-5 font-semibold focus-xhain-blue-80 
					lg:text-base lg:leading-6 hover:bg-white hover:text-xhain-blue-50 hover:border-white
					`}
				>
					{i18n("climateConcepts.actionCard.link.label")}
					<LinkArrowIcon />
				</a>
			</div>
		</>
	);
}
