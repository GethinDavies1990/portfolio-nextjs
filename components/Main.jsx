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
					<h1 className="py-4">
						Hi, I&#39;m <span className="text-purple-600">Gethin</span>
					</h1>
					<h1 className="py-4">A Full Stack Developer</h1>
					<p className="py-4 text-white max-w-[90%] md:max-w-[70%] lg:max-w-[50%]  m-auto">
						Hello, I&#39;m a full stack developer deeply engaged in exploring
						the latest trends and technology. From front-end finesse to back-end
						robustness, I&#39;m passionate about it all. Let&#39;s dive into
						innovation together!
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/gethin-davies-59301b86/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn Profile"
						>
							<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
								<FaLinkedinIn />
							</div>
						</a>
						<a
							href="https://github.com/GethinDavies1990"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Github Profile"
						>
							<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
								<FaGithub />
							</div>
						</a>
						<a
							href="mailto:gethindavies1990@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Email"
						>
							<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
								<AiOutlineMail />
							</div>
						</a>
						{/* <Link href="/contact" target="on_blank">
						<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
							<BsFillPersonLinesFill />
						</div>
						</Link> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
