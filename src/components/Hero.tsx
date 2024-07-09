import React from "react";
import Btn from "./Btn";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="relative flex flex-col justify-center  bg-black/20 p-4 md:p-12 min-h-screen ">
			{/* BACKGROUND IMAGE */}
			<div className="absolute bg-[url(/hero-bg.png)] object-fit bg-cover bg-no-repeat top-0 left-0 w-full h-full bg-black/60 z-[-1]" />
			{/* BACKGROUND IMAGE */}

			<div className="text-white text-center items-center md:items-start md:text-left flex flex-col justify-center gap-10 max-w-[1200px] w-full mx-auto">
				<p className="font-bold text-base md:text-xl">
					“20% OFF <br />
					Limited Time Offer!”
				</p>
				<h1 className="uppercase text-6xl font-extrabold">NEW COLLECTION</h1>
				<p className="text-base md:text-xl">
					Discover Your Style with Our Exclusive <br />
					Clothing Sale!
				</p>
				<Btn className="blue-face">Shop Now</Btn>
			</div>
		</section>
	);
}
