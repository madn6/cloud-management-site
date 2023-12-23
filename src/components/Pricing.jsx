import React from "react";
import { FaCheck } from "react-icons/fa";
import { PiCurrencyInrBold } from "react-icons/pi";

export default function Pricing() {
	return (
		<div name="pricing" className=" w-full text-white my-24">
			<div className=" w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

			<div className=" max-w-[1240px] mx-auto py-12">
				<div className=" text-center py-8 text-slate-300">
					<h2 className=" text-3xl uppercase"></h2>
					<h3 className=" text-3xl md:text-5xl font-bold text-white py-8 capitalize">
						The right price for your research
					</h3>
					<p className=" text-xl md:text-3xl font-sans">
						Choose from a range of customised plans that suit your digital
						storage needs.
					</p>
				</div>

				<div className=" grid md:grid-cols-2">
					<div className=" bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
						<span className="  uppercase px-3 py-1 bg-yellow-400 font-bold rounded-2xl text-sm">
							Standard
						</span>
						<div className="">
							<p className="flex items-center md:text-6xl text-4xl font-bold py-4">
								<PiCurrencyInrBold className=" md:text-6xl font-bold text-4xl -mr-2" />
								999
								<div>
									<span className=" text-xl text-slate-500 ">/mo</span>
								</div>
							</p>
						</div>
						<p className=" md:text-2xl md:py-8 py-4 text-xl  text-slate-500 font-sans">
							GROWING BUSINESS
						</p>
						<div className="md:text-2xl text-xl ">
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								10 GB max file size limit
							</p>
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								SSL Security{" "}
							</p>
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								Access: Anytime, Anywhere{" "}
							</p>
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								Admin console
							</p>
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								Real time collaboration
							</p>
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								Priority email support{" "}
							</p>
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								Ability to set file share expiry{" "}
							</p>
							<button className=" w-full py-4 my-4">Get Started</button>
						</div>
					</div>

					<div className=" bg-white text-red-600 m-4 p-8 rounded-xl shadow-2xl relative">
						<span className="  uppercase px-3 py-1 bg-red-400 font-bold text-black rounded-2xl text-sm">
							Premium
						</span>
						<div className="">
							<p className="flex items-center md:text-6xl text-4xl font-bold py-4">
								<PiCurrencyInrBold className=" md:text-6xl font-bold text-4xl -mr-1" />
								1299
								<div>
									<span className=" text-xl text-slate-500 ">/mo</span>
								</div>
							</p>
						</div>
						<p className=" md:text-2xl md:py-8 py-4 text-xl  text-slate-500 font-sans">
							ENTERPRISE CUSTOMIZED
						</p>
						<div className="md:text-2xl text-xl ">
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								No file size limit{" "}
							</p>
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								Access: Anytime, Anywhere
							</p>
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								Desktop App Access
							</p>
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								Ability to set file share expiry
							</p>
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								Centralized biling
							</p>
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								Live chat support
							</p>
							<p className="flex py-4">
								<FaCheck className=" w-8 mr-5 text-green-500" />
								On-prem. Installation (Optional){" "}
							</p>
							<button className=" w-full py-4 my-4">Get Started</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
