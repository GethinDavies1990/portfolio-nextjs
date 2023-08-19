import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/images/AboutImg.png";
import Link from "next/link";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest ">About</p>
					<h2 className="text-purple-600 py-4">Who I Am</h2>
					<p className="py-2">
						I started my journey in 2022 as a newcomer to full-stack
						development. What began as a hobby has since evolved into a strong
						passion for coding. Over time, I've acquired a diverse set of skills
						and developed a solid foundation in various technical areas. My
						primary interest lies in creating well-structured full-stack
						applications, with a strong focus on enhancing front-end aesthetics.
					</p>
					<Link href="/#projects">
						<p className="py-4 cursor-pointer hover:text-purple-600 font-bold">
							Check out my latest
							<span className="font-bold"> Projects</span>
						</p>
					</Link>
				</div>
				<div className="w-full h-auto m-auto border border-purple-600 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image
						src={AboutImg}
						alt="/"
						width="400"
						height="400"
						className="rounded-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
