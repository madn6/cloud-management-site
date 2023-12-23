import React from "react";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { FaMicrochip } from "react-icons/fa6";

import supportImg from "../assets/support.jpg";

export default function Support() {
	return (
		<div name="support" className=" w-full mt-24">
			<div className=" w-full h-[700px] bg-gray-900/90 absolute">
				<img
					className=" w-full h-full object-cover mix-blend-overlay"
					src={supportImg}
					alt="support image"
				/>
			</div>
			<div className=" max-w-[1240px] mx-auto text-white relative">
				<div className=" px-4 py-12">
					<h2 className=" text-3xl pt8 text-slate-300 uppercase text-center">
						Support
					</h2>
					<h3 className=" text-3xl md:text-5xl font-bold py-6 text-center capitalize">
						Finding the right team
					</h3>
					<p className=" py-4 md:text-3xl text-xl text-slate-300 capitalize font-sans ">
						We’re here to support you at every stage of your journey to
						success. From implementation to ongoing training and support,
						you can count on us to help you achieve the ROI you expect.We
						want to make onboarding and implementation of your Flexera
						solution fast, clean and efficient.
					</p>
				</div>

				<div className=" grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
					<div className=" bg-indigo-100 rounded-xl  shadow-md ">
						<div className=" p-8">
							<FaPhoneAlt className="  w-14 p-2 md:h-14 h-12 md:p-4 text-white bg-indigo-600 rounded-lg mt-[-3.5rem]" />
							<h3 className=" font-bold text-2xl my-6">Sales</h3>
							<p className=" text-gray-900 text-xl capitalize font-sans">
								Calculating the cost of a single service might require
								gathering details across accounts, regions, and other
								cloud-based tools and services.
							</p>
						</div>
						<div className=" bg-white pl-8 py-4">
							<p className=" flex items-center text-indigo-600 cursor-pointer">
								Contact Us <FaArrowRight className=" ml-1 " />
							</p>
						</div>
					</div>

					<div className=" bg-indigo-100 rounded-xl shadow-md">
						<div className=" p-8">
							<MdOutlineSupport className=" w-14 p-2 md:h-14 h-12 md:p-4 text-white bg-indigo-600 rounded-lg mt-[-3.5rem]" />
							<h3 className=" font-bold text-2xl my-6">
								Technical Support
							</h3>
							<p className=" text-gray-900 text-xl capitalize font-sans">
								Any individual at Licensee who wishes to access
								Community must register on the Community site only
								registered contacts may submit support requests.
							</p>
						</div>
						<div className=" bg-white pl-8 py-4">
							<p className=" flex items-center text-indigo-600 cursor-pointer">
								Contact Us <FaArrowRight className=" ml-1" />
							</p>
						</div>
					</div>

					<div className=" bg-indigo-100 rounded-xl shadow-md">
						<div className=" p-8">
							<FaMicrochip className=" w-14 p-2 md:h-14 h-12 md:p-4 text-white bg-indigo-600 rounded-lg mt-[-3.5rem]" />
							<h3 className=" font-bold text-2xl my-6">
								Media Inquiries
							</h3>
							<p className=" text-gray-900 text-xl capitalize font-sans">
								Get insights and updates specifically for reporters and
								other media members when you sign up for this exclusive
								newsletter.
							</p>
						</div>
						<div className=" bg-white pl-8 py-4">
							<p className=" flex items-center text-indigo-600 cursor-pointer">
								Contact Us <FaArrowRight className=" ml-1" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
