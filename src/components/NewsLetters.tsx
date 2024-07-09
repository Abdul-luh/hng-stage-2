import React from "react";
import Btn from "./Btn";

export default function NewsLetters() {
	return (
		<section className="relative flex flex-col justify-center items-center md:items-start  gap-10 bg-black/20 px-4 py-12 max-w-[1200px] w-full mx-auto md:p-12  min-h-[70vh]">
			{/* BACKGROUND IMAGE */}
			<div className="absolute bg-[url(/newsletter.png)] object-fit bg-cover bg-no-repeat top-0 left-0 w-full h-full bg-black/60 z-[-1] " />
			{/* BACKGROUND IMAGE */}

			<h2 className="text-3xl font-extrabold text-white">
				Subscribe Our Newsletter
			</h2>
			<p className="text-base md:text-xl max-w-[450px] text-white">
				Sign up for our newsletter to receive the latest product market updates,
				and fashion tips straight to your inbox.
			</p>
			<div className="rounded-3xl bg-white w-fit ">
				<input
					type="text"
					className="p-2 rounded-2xl outline-none text-black"
					placeholder="enter your email"
				/>
				<Btn className="blue-face rounded-full font-bold">Subscribe</Btn>
			</div>
		</section>
	);
}
