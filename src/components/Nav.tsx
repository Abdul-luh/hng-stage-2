"use client";
import Link from "next/link";
import React from "react";
import data from "@/components/data.json";
import Btn from "./Btn";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Nav() {
	const path = usePathname();
	console.log(path);
	const { navList } = data;
	return (
		<nav className="p-4 ">
			<div className="flex justify-between items-center max-w-[1200px] w-full mx-auto">
				<div className="flex">
					<h1 className="text-pry text-4xl font-extrabold">Shopit</h1>
				</div>
				<ul className="hidden lg:flex justify-between items-center gap-5">
					{navList.map((item) => (
						<li
							className={`capitalize rounded-lg hover:bg-pry hover:text-white p-2  ${
								path === item.link ? "blue-face" : ""
							} `}
							key={item.name}>
							<Link href={item.link}>{item.name}</Link>
						</li>
					))}
				</ul>

				<div className="hidden lg:flex justify-between items-center gap-5">
					<Btn className="blue-face">Login</Btn>
					<Btn>Register</Btn>
				</div>
				<div className="flex justify-between items-center gap-5">
					<Image
						src={"/search-normal.svg"}
						alt="seach"
						width={20}
						height={20}
					/>
					<Image src={"/heart.svg"} alt="seach" width={20} height={20} />
					<Image
						src={"/shopping-cart.svg"}
						alt="seach"
						width={20}
						height={20}
					/>
				</div>
				<div className="block lg:hidden">
					<Image
						src={"/menu.svg"}
						// className="w-8 h-8"
						alt="menu"
						width={40}
						height={40}
					/>
				</div>
			</div>
		</nav>
	);
}
