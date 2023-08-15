import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-white">
						Let&#39;s Build Something Together
					</p>
					<h1 className="py-4">
						Hi, I&#39;m <span className="text-purple-600">Gethin</span>
					</h1>
					<h1 className="py-4">A Full Stack Developer</h1>
					<p className="py-4 text-white mx-w-[70%] m-auto">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ut
						aliquid magnam voluptatum qui. Inventore nesciunt cum a! Nam
						voluptatum tempora atque laborum tenetur praesentium deserunt fugit
						distinctio aliquam vel.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<Link href="#contact">
						<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-6 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
							<FaLinkedinIn />
						</div>
						</Link>
						<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-6 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
							<FaGithub />
						</div>
						<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-6 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
							<AiOutlineMail />
						</div>
						<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-6 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
