type GradientTextProps = {
  children: React.ReactNode;
};

export default function HeadGradient({ children }: GradientTextProps) {
  return (
    <span className="inline-block bg-gradient-to-r from-[#FF9E0C] to-[#D58000] text-white px-4 py-1 rounded-full rotate-[-10deg] capitalize text-3xl md:text-5xl font-semibold">
      {children}
    </span>
  );
}
