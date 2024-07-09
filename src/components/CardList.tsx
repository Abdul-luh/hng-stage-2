import React from "react";
import data from "@/components/data.json";
import Card from "./Card";

export default function CardList() {
	const { cards } = data;

	return (
		<div className="grid grid-cols-2 lg:grid-cols-6 gap-10 py-4 max-w-[1200px] mx-auto">
			{cards.map((card, i) => (
				<Card key={i} {...card} />
			))}
		</div>
	);
}
