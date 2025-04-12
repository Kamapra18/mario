"use client";
import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavbarSection() {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ label: "home", href: "#home", active: true },
		{ label: "our menu", href: "#menu" },
		{ label: "foods", href: "#food" },
		{ label: "about us", href: "#about" },
		{ label: "contact us", href: "#contact" },
	];

	return (
		<header className="flex justify-between items-center py-4 px-6 md:px-20">
		<div className="flex items-center">
			<Image src="/logo.png" alt="Foodie logo" width={30} height={20} />
			<a href="#" className="text-[#F03328] font-bold text-2xl ml-2">
			Foo<span className="text-[#FF9E0C]">die</span>
			</a>
		</div>

		<nav className="hidden md:flex space-x-8">
			{menuItems.map((item) => (
			<a
				key={item.href}
				href={item.href}
				className={`group text-[1.1rem] capitalize ${
				item.active ? "text-[#F03328]" : "text-[#3a3a3a] hover:text-[#F03328]"
				} font-medium`}
			>
				{item.label}
				<span
				className={`block w-8 h-0.5 mt-1 mx-auto transition-all duration-300 ${
					item.active
					? "bg-[#F03328] opacity-100 scale-x-100 group-hover:scale-x-0 group-hover:opacity-0"
					: "bg-[#F03328] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
				}`}
				></span>
			</a>
			))}
		</nav>

		<div className="hidden md:block">
			<a
			href="#"
			className="border-2 border-[#F03328] px-5 py-1.5 rounded-2xl font-bold text-sm text-[#F03328] capitalize transition-all duration-300 ease-in-out hover:bg-[#F03328] hover:text-white"
			>
			login
			</a>
		</div>

		{/* Mobile Menu Button */}
		<button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
			{isOpen ? (
			<FiX size={28} className="text-[#F03328]" />
			) : (
			<FiMenu size={28} className="text-[#F03328]" />
			)}
		</button>

		{/* Mobile Menu */}
		{isOpen && (
			<div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden z-[100]">
				{menuItems.map((item) => (
				<a
					key={item.href}
					href={item.href}
					className={`text-[1.2rem] capitalize font-medium transition-colors duration-300 ${
					item.active ? "text-[#F03328]" : "text-[#3a3a3a] hover:text-[#F03328]"
					}`}
				>
					{item.label}
				</a>
				))}
				<a
				href="#"
				className="border-2 border-[#F03328] px-6 py-2 rounded-2xl font-bold text-[#F03328] capitalize transition-all duration-300 ease-in-out hover:bg-[#F03328] hover:text-white"
				>
				login
				</a>
			</div>
			)}
		</header>
	);
}
