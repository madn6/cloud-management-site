import React from "react";

export default function About() {
	return (
		<div name="about" className=" w-full my-32">
			<div className=" max-w-[1240px] mx-auto">
				<div className=" text-center">
					<h2 className=" text-3xl md:text-5xl font-bold capitalize">
						Trusted by developers across the world
					</h2>
					<p className=" text-1xl md:text-3xl py-6 text-gray-500 capitalize font-sans">
						Among the industry’s leading cloud management platform tools,
						Flexera’s comprehensive Cloud Management Platform (CMP)
						provides a rich set of capabilities for discovery,
						template-based provisioning, orchestration and automation!
					</p>

					<div className=" grid md:grid-cols-3 gap-3 px-2 text-center">
						<div className=" border py-8 rounded-xl shadow-xl">
							<p className=" text-4xl md:text-6xl font-bold text-indigo-600">
								100%
							</p>
							<p className=" text-gray-400 mt-2">Completion</p>
						</div>
						<div className=" border py-8 rounded-xl shadow-xl">
							<p className=" text-4xl md:text-6xl font-bold text-indigo-600">
								24/7
							</p>
							<p className=" text-gray-400 mt-2">Delivery</p>
						</div>
						<div className=" border py-8 rounded-xl shadow-xl">
							<p className="text-4xl  md:text-6xl font-bold text-indigo-600">
								100K
							</p>
							<p className=" text-gray-400 mt-2"> Transaction</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
