import React from "react";
import Image from "next/image";
import BingeReviews from "../public/assets/projects/bingereviews.png";
import DucksTaproom from "../public/assets/projects/duckstaproom.png";
import LoveSports from "../public/assets/projects/lovesports.png";
import TacoTequila from "../public/assets/projects/tacoytequila.png";
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
						backgroundImg={BingeReviews}
						projectUrl="/binge-reviews"
						builtWith="Flask"
					/>
					<ProjectItem
						title="Ducks Tap"
						backgroundImg={DucksTaproom}
						projectUrl="/ducks-taproom"
						builtWith="HTML, CSS"
					/>
					<ProjectItem
						title="LoveSports"
						backgroundImg={LoveSports}
						projectUrl="/lovesports"
						builtWith="HTML, CSS, JavaScript"
					/>
					<ProjectItem
						title="Taco Y Tequila"
						backgroundImg={TacoTequila}
						projectUrl="/taco-y-tequila"
						builtWith="Django"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
