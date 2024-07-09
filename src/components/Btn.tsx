import React from "react";

export default function Btn({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<button
			className={`rounded-lg py-2 px-4 border-pry border capitalize min-w-24 ${className}`}>
			{children}
		</button>
	);
}
