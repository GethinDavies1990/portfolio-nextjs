import React from "react";
import Image from "next/image";
import BingeReviews from "../public/assets/projects/bingeReviews.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const bingeReviews = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={BingeReviews}
					alt="Binge Reviews"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
					<h2 className="py-2">Binge Reviews</h2>
					<h3>Flask</h3>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						My third portfolio project marks a significant milestone in your
						journey as a web developer. By incorporating a full-stack approach,
						this project demonstrates my ability to seamlessly combine frontend
						and backend technologies. The project utilizes HTML, CSS,
						JavaScript, EmailJS, Bootstrap, Flask, and Python to create a
						comprehensive and interactive website with dynamic functionality and
						a server-side backend.
					</p>
					<a
						href="https://binge-reviews.herokuapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Demo</button>
					</a>
					<a
						href="https://github.com/GethinDavies1990/CI_MS3_DTR"
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
								Flask
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

export default bingeReviews;
