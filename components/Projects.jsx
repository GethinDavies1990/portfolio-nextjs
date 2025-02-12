import React from "react";
import Image from "next/image";
import BingeReviewsImg from "../public/assets/images/bingereviews.png";
import DucksTaproomImg from "../public/assets/images/duckstaproom.png";
import LoveSportsImg from "../public/assets/images/lovesports.png";
import TacoTequilaImg from "../public/assets/images/tacoytequila.png";
import NetflixCloneImg from "../public/assets/images/netflixclone.png";
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
						backgroundImg={BingeReviewsImg}
						projectUrl="/binge-reviews"
						builtWith="Flask"
					/>
					<ProjectItem
						title="Ducks Tap"
						backgroundImg={DucksTaproomImg}
						projectUrl="/ducks-taproom"
						builtWith="HTML, CSS"
					/>
					<ProjectItem
						title="LoveSports"
						backgroundImg={LoveSportsImg}
						projectUrl="/lovesports"
						builtWith="HTML, CSS, JavaScript"
					/>
					<ProjectItem
						title="Taco Y Tequila"
						backgroundImg={TacoTequilaImg}
						projectUrl="/taco-y-tequila"
						builtWith="Django"
					/>
					<ProjectItem
						title="Netflix Clone"
						backgroundImg={NetflixCloneImg}
						projectUrl="/netflix-clone"
						builtWith="React, Tailwind, Firebase"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
