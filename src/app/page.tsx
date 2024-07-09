import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NewsLetters from "@/components/NewsLetters";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
	return (
		<main className="">
			<Nav />
			<Hero />
			<Products />
			<NewsLetters />
			<Footer />
		</main>
	);
}
