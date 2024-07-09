import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

export default function Footer() {
	return (
		<footer className="flex flex-col p-12 md:blue-face">
			<div className="flex flex-col md:flex-row  justify-between">
				<ul className="py-4">
					<h3 className="font-bold text-2xl text-pry md:text-white">Shopit</h3>
					<li className="py-2 underline">
						<Link href={"/"} className="flex items-center gap-2">
							<FaLocationDot /> 165 Main Street Lekki
						</Link>
					</li>
					<li className="py-2 underline">
						<Link href={"/"} className="flex items-center gap-2">
							<IoMdMail /> Info@shopit.com
						</Link>
					</li>
					<li className="py-2 underline">
						<Link href={"/"} className="flex items-center gap-2">
							<FaPhoneAlt /> +234 9075643219
						</Link>
					</li>
				</ul>

				<ul className="py-4">
					<h3 className="underline md:text-center  py-2">Links</h3>
					<li>
						<Link href={"/"}>Home</Link>
					</li>
					<li>
						<Link href={"/"}>About Us</Link>
					</li>
					<li>
						<Link href={"/"}>Listings</Link>
					</li>
					<li>
						<Link href={"/"}>Services</Link>
					</li>
					<li>
						<Link href={"/"}>Products</Link>
					</li>
					<li>
						<Link href={"/"}>FAQs</Link>
					</li>
				</ul>

				<div className="py-4">
					<h3 className="underline md:text-center py-2">Follow Us On</h3>

					<ul className="flex gap-5">
						<li>
							<Link href={"/"}>
								{" "}
								<Image src={"/facebook.svg"} height={30} width={30} alt="" />
							</Link>
						</li>
						<li>
							<Link href={"/"}>
								{" "}
								<Image src={"/x.svg"} height={30} width={30} alt="" />
							</Link>
						</li>
						<li>
							<Link href={"/"}>
								{" "}
								<Image src={"/insta.svg"} height={30} width={30} alt="" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="py-4 flex md:justify-end">
				<p className="flex items-center gap-2">
					<CiGlobe /> Nigeria
				</p>
			</div>
		</footer>
	);
}
