'use client';
interface ButtonProps {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
    type?: "button" | "submit";
}
    
export default function Button({
    onClick,
    className = "",
    children,
    type = "button",
}: ButtonProps) {
    return (
    <button
        type={type}
        onClick={onClick}
        className={`inline-block bg-[#F03328] px-5 py-3 text-white rounded-2xl capitalize hover:bg-red-700 transition-colors duration-300 ${className}`}
    >
        {children}
    </button>
    );
}
