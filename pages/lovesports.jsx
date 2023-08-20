import React from "react";
import Image from "next/image";
import LoveSportsImg from "../public/assets/projects/loveSports.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const LoveSports = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[60vh] lg:h-[60vh] relative">
				<div className="absolute top-0 left-0 w-full h-[60vh] lg:h-[60vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={LoveSportsImg}
					alt="Love Sports"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
					<h2 className="py-2">LoveSports</h2>
					<h3>Flask</h3>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						My second portfolio project represents a significant advancement in
						my web development skills, as it incorporates HTML, CSS, JavaScript,
						and API integration. This project showcases my ability to create
						dynamic and interactive web experiences while utilizing external
						data sources. The project is designed to demonstrate your
						proficiency in web development techniques and my capability to
						integrate third-party services.
					</p>
					<a
						href="https://gethindavies1990.github.io/CI_MS2_DTR"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Demo</button>
					</a>
					<a
						href="https://github.com/GethinDavies1990/CI_MS2_DTR"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4">Code</button>
					</a>
				</div>
				<div
					className="col-span-4 md:col-span-1 border border-purple-600 p-4
					rounded-xl"
				>
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-purple-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								HTML
							</p>
							<p className="text-purple-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								CSS
							</p>
							<p className="text-purple-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Javascript
							</p>
							<p className="text-purple-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								EmailJS
							</p>
							<p className="text-purple-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								RapidAPI
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="underline cursor-pointer">Back</p>
				</Link>
			</div>
		</div>
	);
};

export default LoveSports;
