import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/images/AboutImg.jpg";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest ">About</p>
					<h2 className="text-purple-600 py-4">Who I Am</h2>
					<p className="py-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ad amet
						corporis quia odit nihil dolorem dolores deserunt quae laborum at,
						facilis, iure ipsam a consequuntur ut facere veritatis! Odio.
					</p>
					<p className="py-2 underline cursor-pointer">
						Check out my latest{" "}
						<span className="text-purple-600">Projects</span>
					</p>
				</div>
				<div className="w-full h-auto m-auto border border-purple-600 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image
						src={AboutImg}
						alt="/"
						width="500"
						height="500"
						className="rounded-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
