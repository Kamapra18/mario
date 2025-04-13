import Button from "./atom/button";
import SectionTitle from "./atom/title";

export default function Footer() {
    return (
        <footer className="bg-white py-10 px-4 md:px-10">
        <div className="container mx-auto">
            {/* Bagian Newsletter */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
                <SectionTitle>
                    Join Our <span className="text-[#F03328]">Newsletter</span>
                </SectionTitle>
                <p className="text-gray-600 mt-2">
                    Be the first to know about our latest updates, exclusive offers, and more.
                </p>
            </div>
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
            </div>

            {/* Garis*/}
            <div className="h-px my-5 bg-gray-200 w-full" />

            {/* Bagian Navigasi Footer */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-gray-700">
            <div>
                <h3 className="font-semibold mb-2">Product & Service</h3>
                <ul className="space-y-1">
                <li>Products</li>
                <li>Services</li>
                <li>Appliances</li>
                <li>Storage</li>
                <li>Lifestyle</li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Shop Now</h3>
                <ul className="space-y-1">
                <li>Offers</li>
                <li>Promos</li>
                <li>Online Shop FAQ</li>
                <li>Business Offer</li>
                <li>Student Offer</li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Support</h3>
                <ul className="space-y-1">
                <li>Contact</li>
                <li>Email Support</li>
                <li>Live Chat</li>
                <li>Phone Support</li>
                <li>Community</li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-2">Account</h3>
                <ul className="space-y-1">
                <li>My Products</li>
                <li>Orders</li>
                <li>Wishlist</li>
                <li>Service</li>
                <li>Rewards</li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-2">More</h3>
                <ul className="space-y-1">
                <li>About Us</li>
                <li>Careers</li>
                <li>Brand Guidelines</li>
                <li>Investors</li>
                <li>Legal</li>
                </ul>
            </div>
            </div>

            {/* Garis */}
            <div className="h-px my-5 bg-gray-200 w-full" />

            {/* Bagian Copyright */}
            <div className="flex flex-col md:flex-row items-center text-sm text-gray-500 mt-6">
            <div className="flex flex-1 justify-center md:justify-start gap-4 mb-4 md:mb-0">
                <span>English</span>
                <span>Privacy</span>
                <span>Legal</span>
            </div>
            <div className="text-center md:text-right w-full md:w-auto">
                &copy; 2023 Coded. All Rights Reserved. <span>Mario Prayoga</span>
            </div>
            </div>
        </div>
        </footer>
    );
}
