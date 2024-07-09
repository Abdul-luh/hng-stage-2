import React from "react";
import Btn from "./Btn";
import Image from "next/image";
import { HiOutlineCheckCircle } from "react-icons/hi";
import CardList from "./CardList";

export default function Products() {
	return (
		<section className="p-8 flex flex-col w-full">
			<div className="flex flex-col md:flex-row justify-between max-w-[1200px] w-full mx-auto">
				<div className="flex justify-center md:justify-between items-center gap-12">
					<p className="font-bold text-xl">52,082+ Iteams </p>
					<p className="text-xl hidden md:block">
						Showing <span className="text-lyt  ">1-24 Results</span>
					</p>
				</div>
				<div className="flex  justify-center items-center md:justify-between gap-12">
					<Btn className="blue-face flex items-center">
						<HiOutlineCheckCircle /> Available Product
					</Btn>
					<Btn className="">Filter</Btn>
				</div>
			</div>

			{/* <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 py-4">
			</div> */}
			<CardList />
		</section>
	);
}
