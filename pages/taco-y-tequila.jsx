import React from "react";
import Image from "next/image";
import TacoTequilaImg from "../public/assets/projects/tacoytequila.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const TacoYTequila = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[60vh] lg:h-[60vh] relative">
				<div className="absolute top-0 left-0 w-full h-[60vh] lg:h-[60vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={TacoTequilImga}
					alt="Taco Y Tequila"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
					<h2 className="py-2">Taco Y Tequila</h2>
					<h3>Flask</h3>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						My final project represents the culmination of your web development
						journey, showcasing your ability to design, develop, and deploy a
						complex and feature-rich web application. This full-stack e-commerce
						website combines frontend and backend technologies, creating a
						seamless online shopping experience complete with payment
						integration.
					</p>
					<a
						href="https://taco-y-tequila-c6ff831b9a3a.herokuapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Demo</button>
					</a>
					<a
						href="https://github.com/GethinDavies1990/CI_MS4_DTR"
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
								Django
							</p>
							<p className="text-purple-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Python
							</p>
							<p className="text-purple-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Stripe
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

export default TacoYTequila;
