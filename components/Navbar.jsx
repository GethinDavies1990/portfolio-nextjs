import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("bg - slate - 950");
	const [linkColor, setLinkColor] = useState("text - white");
	const router = useRouter();

	useEffect(() => {
		if (
			(router.pathname === "/binge-reviews",
			router.pathname === "/ducks-taproom",
			router.pathname === "/lovesports",
			router.pathname === "/taco-y-tequila")
		) {
			setNavBg("bg-white");
			setLinkColor("text-purple-600");
		} else {
			setNavBg("bg-slate-950");
			setLinkColor("text-white");
		}
	}, [router]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener(`scroll`, handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? "fixed w-full h-20 bg-slate-950 opacity- z-[100]"
					: "fixed w-full h-20 z-[100]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<div>
					<ul style={{ color: `${linkColor}` }} className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">Home</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase hover:border-b">About</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-sm uppercase hover:border-b">
								Projects
							</li>
						</Link>
						<Link href="/#contact">
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
							<div
								onClick={handleNav}
								className=" shadow-lg text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							>
								<AiOutlineClose size={25} />
							</div>
						</div>
						<div>
							<div className="py-4 flex flex-col">
								<ul className="uppercase">
									<Link href="/">
										<li onClick={() => setNav(false)} className="py-4 text-sm">
											Home
										</li>
									</Link>
									<Link href="/#about">
										<li onClick={() => setNav(false)} className="py-4 text-sm">
											About
										</li>
									</Link>
									<Link href="/#skills">
										<li onClick={() => setNav(false)} className="py-4 text-sm">
											Skills
										</li>
									</Link>
									<Link href="/#projects">
										<li onClick={() => setNav(false)} className="py-4 text-sm">
											Projects
										</li>
									</Link>
									<Link href="/#contact">
										<li onClick={() => setNav(false)} className="py-4 text-sm">
											Contact
										</li>
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
