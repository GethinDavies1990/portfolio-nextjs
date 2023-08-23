import React from "react";
import Image from "next/image";
import NetflixCloneImg from "../public/assets/images/netflixclone.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const NetflixClone = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[60vh] lg:h-[60vh] relative">
				<div className="absolute top-0 left-0 w-full h-[60vh] lg:h-[60vh] bg-black/80 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={NetflixCloneImg}
					alt="Netflix Clone"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
					<h2 className="py-2">Netflix Clone</h2>
					<h3>React</h3>
				</div>
			</div>
			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						The Netflix Clone App is a web application developed using React and
						enhanced with the power of Tailwind CSS and Firebase. It faithfully
						replicates the captivating user interface of the popular streaming
						platform, Netflix. Leveraging React&aposs component-based
						architecture, Tailwind CSS&aposs utility-first approach for styling,
						and Firebase for user authentication and watch later functionality,
						this app offers an immersive and responsive streaming experience.
					</p>
					<a
						href="https://netflix-u9fb.vercel.app/"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Demo</button>
					</a>
					<a
						href="https://github.com/GethinDavies1990/netflix"
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
								React
							</p>
							<p className="text-purple-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								API
							</p>
							<p className="text-purple-600 py-2 flex items-center">
								<RiRadioButtonFill className="pr-1" />
								Firebase
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

export default NetflixClone;
