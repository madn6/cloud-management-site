import React from "react";
import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaTwitch,
	FaTwitter,
} from "react-icons/fa";

export default function Footer() {
	return (
		<div name='footer' className=" w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2">
			<div className=" max-w-[1240px] mx-auto grid  grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
				<div>
					<h6 className="font-bold uppercase pt-2">Solution</h6>

					<ul>
						<li className="py-1">Marketing</li>
						<li className="py-1">Analytics</li>
						<li className="py-1">Commerce</li>
						<li className="py-1">Date</li>
						<li className="py-1">Cloud</li>
					</ul>
				</div>

				<div>
					<h6 className="font-bold uppercase pt-2">Support</h6>

					<ul>
						<li className="py-1">Pricing</li>
						<li className="py-1">Documentation</li>
						<li className="py-1">Guides</li>
						<li className="py-1">API Status</li>
					</ul>
				</div>

				<div>
					<h6 className="font-bold uppercase pt-2">Company</h6>

					<ul>
						<li className="py-1">About</li>
						<li className="py-1">Blog</li>
						<li className="py-1">Jobs</li>
						<li className="py-1">Press</li>
						<li className="py-1">Partners</li>
					</ul>
				</div>

				<div>
					<h6 className="font-bold uppercase pt-2">Leagul</h6>

					<ul>
						<li className="py-1">Claims</li>
						<li className="py-1">Privacy</li>
						<li className="py-1">Terms</li>
						<li className="py-1">Policies</li>
						<li className="py-1">Conditions</li>
					</ul>
				</div>

				<div className=" col-span-2 pt-8 md:pt-2">
					<p className="font-bold uppercase">
						Subscribe to our newsletter
					</p>
					<p className="py-4">
						The latest news, articles, and resources sent to your inbox
						weekly.
					</p>
					<form className="flex flex-col sm:flex-row">
						<input
							type="email"
							placeholder="Enter email"
							className=" w-full p-2 mr-4 rounded-md mb-4 text-black"
						/>
						<button className=" p-2 mb-4">Subscribe</button>
					</form>
				</div>
			</div>

			<div className="flex max-w-[1240px] px-2 py-2 m-auto pt-4 items-center justify-between sm:flex text-center text-gray-500">
				<div>
					<a href="https://github.com/madn6" target="_blank" className="">
						{" "}
						&copy;2024{" "}
						<span className=" hover:text-indigo-600 font-bold ">
							Madn6.
						</span>
					</a>
				</div>
				<div className="flex mt-0 justify-between sm:w-[250px] pt-0 text-2xl gap-1">
					<FaFacebook className=" cursor-pointer" />
					<FaInstagram className=" cursor-pointer" />
					<FaTwitter className=" cursor-pointer" />
					<FaTwitch className=" cursor-pointer" />
					<FaGithub className=" cursor-pointer" />
				</div>
			</div>
		</div>
	);
}
