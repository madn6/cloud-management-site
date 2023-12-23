import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	const handleClose = () => setNav(!nav);
	return (
		<div className=" w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
			<div className=" px-2 flex justify-between items-center w-full h-full">
				<div className=" flex items-center ">
					<h1 className=" text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
					<ul className="hidden md:flex">
						<li className="font-bold hover:text-indigo-600">
							<Link to="home" smooth={true} duration={500}>
								Home
							</Link>
						</li>
						<li className="font-bold hover:text-indigo-600">
							<Link
								to="about"
								smooth={true}
								offset={-200}
								duration={500}
							>
								About
							</Link>
						</li>
						<li className="font-bold hover:text-indigo-600">
							<Link
								to="support"
								smooth={true}
								offset={-50}
								duration={500}
							>
								Support
							</Link>
						</li>
						<li className="font-bold hover:text-indigo-600">
							<Link
								to="platform"
								smooth={true}
								offset={-100}
								duration={500}
							>
								Platforms
							</Link>
						</li>
						<li className="font-bold hover:text-indigo-600">
							<Link
								to="pricing"
								smooth={true}
								offset={-50}
								duration={500}
							>
								Pricing
							</Link>
						</li>
					</ul>
				</div>
				<div className=" hidden md:flex pr-4">
					<button className="border-none bg-transparent text-black mr-4">
						Sign In
					</button>
					<button className=" px-8 py-3">Sign Up</button>
				</div>
				<div className=" md:hidden " onClick={handleClick}>
					{!nav ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							data-slot="icon"
							className="w-6 h-6 mr-3 cursor-pointer"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							data-slot="icon"
							className="w-6 h-6 mr-3 cursor-pointer"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18 18 6M6 6l12 12"
							/>
						</svg>
					)}
				</div>
			</div>

			<ul
				className={
					!nav ? "hidden" : " md:hidden absolute bg-zinc-200 w-full px-8"
				}
			>
				<li className="font-bold border-b-2 border-zinc-300 w-full hover:text-indigo-600">
					<Link
						onClick={handleClose}
						to="home"
						smooth={true}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className="font-bold border-b-2 border-zinc-300 w-full hover:text-indigo-600">
					<Link
						onClick={handleClose}
						to="about"
						smooth={true}
						offset={-200}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className="font-bold border-b-2 border-zinc-300 w-full hover:text-indigo-600">
					<Link
						onClick={handleClose}
						to="support"
						smooth={true}
						offset={-50}
						duration={500}
					>
						Support
					</Link>
				</li>
				<li className="font-bold border-b-2 border-zinc-300 w-full hover:text-indigo-600">
					<Link
						onClick={handleClose}
						to="platform"
						smooth={true}
						offset={-100}
						duration={500}
					>
						Platforms
					</Link>
				</li>
				<li className="font-bold border-b-2 border-zinc-300 w-full hover:text-indigo-600">
					<Link
						onClick={handleClose}
						to="pricing"
						smooth={true}
						offset={-50}
						duration={500}
					>
						Pricing
					</Link>
				</li>
				<div className="flex flex-col my-4">
					<button className="border bg-transparent text-indigo-600 px-8 py-3 mb-4">
						Sign In
					</button>
					<button className=" px-8 py-3">Sign Up</button>
				</div>
			</ul>
		</div>
	);
}
