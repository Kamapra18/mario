import Button from "../atom/button";

export default function NewsletterForm() {
  return (
    <form className="flex items-center space-x-2">
      <input
        type="email"
        placeholder="Enter your email address"
        className="relative z-10 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F03328] w-64"
      />
      <Button className="relative z-10 bg-[#F03328] text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center gap-2 transition-colors duration-300">
        Subscribe
      </Button>
    </form>
  );
}
