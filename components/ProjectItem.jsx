import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectUrl, builtWith }) => {
	return (
		<div className=" border border-purple-600 relative flex items-center justify-center h-auto w-full rounded-xl p-4 group hover:bg-gradient-to-r from-purple-600 to-pink-800">
			<Image
				className="rounded-xl group-hover:opacity-10"
				src={backgroundImg}
				alt="Binge Reviews"
			/>
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className="text-2xl tracking-wider text-center">{title}</h3>
				<p className=" pb-4 pt-2 text-center">{builtWith}</p>
				<Link href={projectUrl}>
					<p className="text-center py-3 rounded-lg text-purple-600 bg-white font-bold text-lg cursor-pointer border border-purple-600">
						More Info
					</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectItem;
