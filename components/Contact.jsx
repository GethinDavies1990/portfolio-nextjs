import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import ContactImg from "../public/assets/images/ContactImg.jpg";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Contact
				</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* left */}
					<div
						className="col-span-3 lg:col-span-2 w-full h-full rounded-xl p-4
						border
						border-purple-600"
					>
						<div className="lg:p-4 h-full ">
							<div>
								<Image
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src={ContactImg}
									alt="/"
								/>
							</div>
							<div>
								<h2 className="py-2">Gethin Davies</h2>
								<p>Full Stack Developer</p>
								<p className="py-4">
									I am available for freelance positions. Contact me and
									let&apos;s talk.
								</p>
							</div>
							<div>
								<p className="uppercase pt-8">Connect With Me</p>
								<div className="flex items-center justify-between py-4">
									<a
										href="https://www.linkedin.com/in/gethin-davies-59301b86/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-4 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
											<FaLinkedinIn />
										</div>
									</a>
									<a
										href="https://github.com/GethinDavies1990"
										target="_blank"
										rel="noreferrer"
									>
										<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-4 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
											<FaGithub />
										</div>
									</a>
									<a
										href="mailto:gethindavies1990@gmail.com"
										target="on_blank"
										rel="noreferrer"
									>
										<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-4 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
											<AiOutlineMail />
										</div>
									</a>
									{/* <Link href="/resume">
										<a>
											<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-4 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
												<BsFillPersonLinesFill />
											</div>
										</a>
									</Link> */}
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className="col-span-3 w-full h-auto border border-purple-600 lg:p-4 rounded-xl">
						<div className="p-4">
							<form
								action="https://getform.io/f/e1f30380-b799-48e2-9f5e-ac565f9f5f53"
								method="POST"
								encType="multipart/form-data"
							>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2" for="name">
											Name
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-purple-600 bg-slate-950"
											type="text"
											name="name"
											id="name"
										/>
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">
											Phone Number
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-purple-600 bg-slate-950"
											type="text"
											name="phone"
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Email</label>
									<input
										className="border-2 rounded-lg p-3 flex border-purple-600 bg-slate-950"
										type="email"
										name="email"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Subject</label>
									<input
										className="border-2 rounded-lg p-3 flex border-purple-600 bg-slate-950"
										type="text"
										name="subject"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Message</label>
									<textarea
										className="border-2 rounded-lg p-3 border-purple-600 bg-slate-950"
										rows="10"
										name="message"
									></textarea>
								</div>
								<button className="w-full p-4 mt-4">Send Message</button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<div className="text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-600 font-bold uppercase p-4 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300">
							<HiOutlineChevronDoubleUp size={30} className="m-auto" />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
