import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import NavLogo from "../public/assets/images/NavLogo.png";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="fixed w-full h-20 shadow-xl z-[100]">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Image src={NavLogo} alt="/" width="125" height="50" />
				<div>
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">Home</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">About</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Projects
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-950 p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<a>
									<Image src={NavLogo} alt="/" width="87" height="35" />
								</a>
							</Link>
							<div
								onClick={handleNav}
								className=" shadow-lg text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							>
								<AiOutlineClose size={25} />
							</div>
							<div className="border-b border-gray-300 my-4">
								<p className="w-[85%] md:w-[90%] py-4">
									Let&#39;s build something legendary together
								</p>
							</div>
						</div>
						<div>
							<div className="py-4 flex flex-col">
								<ul className="uppercase">
									<Link href="/">
										<li className="py-4 text-sm">Home</li>
									</Link>
									<Link href="/">
										<li className="py-4 text-sm">About</li>
									</Link>
									<Link href="/">
										<li className="py-4 text-sm">Skills</li>
									</Link>
									<Link href="/">
										<li className="py-4 text-sm">Projects</li>
									</Link>
									<Link href="/">
										<li className="py-4 text-sm">Contact</li>
									</Link>
								</ul>
								<div className="pt-40">
									<p className="uppercase tracking-widest">
										Let&apos;s Connect
									</p>
								</div>
								<div>
									<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
										<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
											<FaLinkedinIn />
										</div>
										<div className=" shadow-lg text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
											<FaGithub />
										</div>
										<div className=" shadow-lg text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
											<AiOutlineMail />
										</div>
										<div className=" shadow-lg text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
											<BsFillPersonLinesFill />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
