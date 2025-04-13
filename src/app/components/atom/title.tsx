interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}
    
export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
    return (
        <h2 className={`capitalize font-bold text-2xl md:text-3xl mb-4 ${className}`}>
            {children}
        </h2>
    );
}  