import React from "react";
import Image from "next/image";
import DucksTaproomImg from "../public/assets/images/duckstaproom.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const DucksTaproom = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[60vh] lg:h-[60vh] relative">
				<div className="absolute top-0 left-0 w-full h-[60vh] lg:h-[60vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={DucksTaproomImg}
					alt="Ducks Taproom"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
					<h2 className="py-2">Ducks Taproom</h2>
					<h3>Flask</h3>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						Ducks Taproom is a web application project developed as part of my
						diploma program, showcasing your foundational skills in web
						development. The project was created using HTML, CSS, and Bootstrap,
						and serves as an introduction to building user interfaces and
						interactive web experiences.
					</p>
					<a
						href="https://gethindavies1990.github.io/CI_MS1_DTR"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Demo</button>
					</a>
					<a
						href="https://github.com/GethinDavies1990/CI_MS1_DTR"
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

export default DucksTaproom;
