import { StackedImageCard } from "~/components/project-cards/stacked-image-card";
import { ProjectCard } from "~/components/project-cards/project-card";
import { i18n } from "~/i18n/i18n-utils";
import { ProjectActionCard } from "~/components/project-cards/project-action-card";

export default function Index() {
	const projects = [
		{
			title: i18n("currentProjects.project1.title"),
			description: i18n("currentProjects.project1.description"),
			imageDesktop:
				"/images/project-images/desktop/RZ_Entsiegelung_Desktop_klein.webp",
			imageMobile:
				"/images/project-images/mobile/RZ_entsiegelung_mobile_klein.webp",
			imageAltText: i18n("currentProjects.project1.imageAltText"),
			imageSourceText: i18n("currentProjects.project1.imageSource"),
			projectLink: i18n("currentProjects.project1.link"),
		},
		{
			title: i18n("currentProjects.project2.title"),
			description: i18n("currentProjects.project2.description"),
			imageDesktop:
				"/images/project-images/desktop/RZ_Grünberatung_Desktop_klein.webp",
			imageMobile:
				"/images/project-images/mobile/RZ_grünberatung_mobile_klein.webp",
			imageAltText: i18n("currentProjects.project2.imageAltText"),
			imageSourceText: i18n("currentProjects.project2.imageSource"),
			projectLink: i18n("currentProjects.project2.link"),
		},
		{
			title: i18n("currentProjects.project3.title"),
			description: i18n("currentProjects.project3.description"),
			imageDesktop:
				"/images/project-images/desktop/RZ_Parken_Desktop_klein.webp",
			imageMobile: "/images/project-images/mobile/RZ_Parken_mobile_klein.webp",
			imageAltText: i18n("currentProjects.project3.imageAltText"),
			imageSourceText: i18n("currentProjects.project3.imageSource"),
			projectLink: i18n("currentProjects.project3.link"),
		},
		{
			title: i18n("currentProjects.project4.title"),
			description: i18n("currentProjects.project4.description"),
			imageDesktop:
				"/images/project-images/desktop/RZ_Radverkehr_Desktop_klein.webp",
			imageMobile:
				"/images/project-images/mobile/RZ_radverkehr_mobile_klein.webp",
			imageAltText: i18n("currentProjects.project4.imageAltText"),
			imageSourceText: i18n("currentProjects.project4.imageSource"),
			projectLink: i18n("currentProjects.project4.link"),
		},
		{
			title: i18n("currentProjects.project5.title"),
			description: i18n("currentProjects.project5.description"),
			imageDesktop:
				"/images/project-images/desktop/RZ_PV-Anlage_Desktop_klein.webp",
			imageMobile: "/images/project-images/mobile/RZ_pv_mobile_klein.webp",
			imageAltText: i18n("currentProjects.project5.imageAltText"),
			imageSourceText: i18n("currentProjects.project5.imageSource"),
			projectLink: i18n("currentProjects.project5.link"),
		},
		{
			title: i18n("currentProjects.project6.title"),
			description: i18n("currentProjects.project6.description"),
			imageDesktop:
				"/images/project-images/desktop/RZ_Heizkreis_Desktop_klein.webp",
			imageMobile:
				"/images/project-images/mobile/RZ_heizkreis_mobile_klein.webp",
			imageAltText: i18n("currentProjects.project6.imageAltText"),
			imageSourceText: i18n("currentProjects.project6.imageSource"),
			projectLink: i18n("currentProjects.project6.link"),
		},
		{
			title: i18n("currentProjects.project7.title"),
			description: i18n("currentProjects.project7.description"),
			imageDesktop:
				"/images/project-images/desktop/RZ_Mehrwegbecher_Desktop_klein.webp",
			imageMobile:
				"/images/project-images/mobile/RZ_Mehrwegbecher_mobile_klein.webp",
			imageAltText: i18n("currentProjects.project7.imageAltText"),
			imageSourceText: i18n("currentProjects.project7.imageSource"),
			projectLink: i18n("currentProjects.project7.link"),
		},
	];

	return (
		<>
			<div className="w-full mb-36 lg:mb-48 pt-10 pb-32 px-2 lg:px-20 lg:py-28 bg-xhain-blue-20">
				<div className="max-w-8xl mx-auto block lg:flex lg:flex-1 lg:gap-28 xl:gap-0">
					<div className="lg:w-1/2">
						<h1 className="m-1 lg:mb-4 text-4xl leading-10 font-semibold lg:text-7xl lg:leading-none text-center lg:text-left">
							{i18n("currentProjects.title")}
						</h1>
						<p className="text-lg leading-7 font-normal lg:text-3xl text-center lg:text-left">
							{i18n("currentProjects.subtitle")}
						</p>
					</div>
					<div className="relative lg:static flex lg:w-1/2 justify-center mt-8 lg:mt-0">
						<StackedImageCard />
					</div>
				</div>
			</div>
			<div className="w-full px-5 lg:px-20">
				<div className="max-w-8xl lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] lg:gap-x-5 gap-y-[30px] lg:gap-y-12">
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							title={project.title}
							description={project.description}
							imageDesktop={project.imageDesktop}
							imageMobile={project.imageMobile}
							imageAltText={project.imageAltText}
							imageSourceText={project.imageSourceText}
							projectLink={project.projectLink}
						/>
					))}
					{/* Green Card */}
					<ProjectActionCard />
				</div>
			</div>
		</>
	);
}
