"use client";
import React, { useState } from "react";
import data from "@/components/data.json";
import Image from "next/image";
import { TbHeart, TbHeartFilled } from "react-icons/tb";
import { FaCartShopping, FaStar } from "react-icons/fa6";

export default function Card({
	name,
	img,
	isLiked,
	price,
	newPrice,
	discount,
	rate,
}: {
	name: string;
	img: string;
	isLiked: boolean;
	price: string;
	newPrice: string;
	discount: string;
	rate: string;
}) {
	const [isMarked, setIsMarked] = useState(isLiked);
	return (
		<div className="relative flex flex-col justify-between">
			{/* <div className={`bg-[${img}] rounded-xl bg-black max-h-40`} /> */}
			<div>
				<Image
					src={img}
					alt={img}
					width={300}
					height={200}
					className="object-fit w-full"
				/>
			</div>
			{/* like button */}
			<p
				className="absolute top-2 right-4"
				onClick={() => setIsMarked(!isMarked)}>
				{!isMarked ? <TbHeart /> : <TbHeartFilled />}
			</p>

			<p className="font-semibold">{name}</p>
			<p>{newPrice}</p>
			<div className="flex justify-between">
				<p className=" line-through text-lyt">{price}</p>
				<p className="text-red-600">{discount}</p>
			</div>
			<div className="flex justify-between">
				<p className="flex items-center">
					{" "}
					<FaStar /> {rate}
				</p>
				<p>
					<FaCartShopping />
				</p>
			</div>
		</div>
	);
}
