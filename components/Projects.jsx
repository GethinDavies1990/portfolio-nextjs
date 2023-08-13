import React from "react";
import Image from "next/image";
import bingeReviews from "../public/assets/projects/bingeReviews.png";
import ducksTaproom from "../public/assets/projects/ducksTaproom.png";
import loveSports from "../public/assets/projects/loveSports.png";
import tacoTequila from "../public/assets/projects/tacoTequila.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase">Projects</p>
				<h2 className="py-4 text-purple-600">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						title="Binge Reviews"
						backgroundImg={bingeReviews}
						projectUrl="/binge-reviews"
						builtWith="Flask"
					/>
					<ProjectItem
						title="Ducks Tap"
						backgroundImg={ducksTaproom}
						projectUrl="/ducks-taproom"
						builtWith="HTML, CSS"
					/>
					<ProjectItem
						title="LoveSports"
						backgroundImg={loveSports}
						projectUrl="/lovesports"
						builtWith="HTML, CSS, JavaScript"
					/>
					<ProjectItem
						title="Taco Y Tequila"
						backgroundImg={tacoTequila}
						projectUrl="/taco-y-tequila"
						builtWith="Django"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
