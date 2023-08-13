import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/images/AboutImg.png";

const About = () => {
	return (
		<div className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p>About</p>
					<h2>Who I Am</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ad amet
						corporis quia odit nihil dolorem dolores deserunt quae laborum at,
						facilis, iure ipsam a consequuntur ut facere veritatis! Odio.
					</p>
				</div>
				<div>
					<Image src={AboutImg} alt="/" width="500" height="500" />
				</div>
			</div>
		</div>
	);
};

export default About;
