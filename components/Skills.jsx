import React from "react";
import Image from "next/image";
import {
	FaHtml5,
	FaCss3,
	FaPython,
	FaNodeJs,
	FaAws,
	FaGithub,
	FaReact,
} from "react-icons/fa";
import {
	BiLogoJavascript,
	BiLogoFirebase,
	BiLogoMongodb,
	BiLogoPostgresql,
	BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

export const Skills = () => {
	return (
		<div className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase">Skills</p>
				<h2 className="py-4 text-purple-600">What I Can Do</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<FaHtml5 size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">HTML</h3>
							</div>
						</div>
					</div>
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<FaCss3 size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">CSS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<BiLogoJavascript size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">Javascript</h3>
							</div>
						</div>
					</div>
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<FaPython size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">Python</h3>
							</div>
						</div>
					</div>
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<FaNodeJs size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">NodeJs</h3>
							</div>
						</div>
					</div>
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<FaAws size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">aws</h3>
							</div>
						</div>
					</div>
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<BiLogoFirebase size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">Firebase</h3>
							</div>
						</div>
					</div>
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<FaGithub size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">Github</h3>
							</div>
						</div>
					</div>
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<BiLogoMongodb size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">Mongodb</h3>
							</div>
						</div>
					</div>
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<BiLogoPostgresql size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">Sql</h3>
							</div>
						</div>
					</div>
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<TbBrandNextjs size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">Nextjs</h3>
							</div>
						</div>
					</div>
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<FaReact size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">React</h3>
							</div>
						</div>
					</div>
					<div className="p-6 rounded-xl hover:scale-105 ease-in duration-300 border border-purple-600">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<BiLogoTailwindCss size={65} className="text-purple-900" />
							</div>
							<div className="felx flex-col items-center justify-center">
								<h3 className="text-white text-lg">Tailwind</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
