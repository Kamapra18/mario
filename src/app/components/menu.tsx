import Image from 'next/image';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const MenuSection = () => {
    const menuItems = [
        { src: "/menu1.png", name: "Breakfast Food", price: "$230", rating: 4.5 },
        { src: "/menu2.png", name: "Health Breakfast", price: "$230", rating: 5 },
        { src: "/menu3.png", name: "Breakfast Food", price: "$230", rating: 4.5 },
        { src: "/menu4.png", name: "Pancake Delight", price: "$250", rating: 5 },
        { src: "/menu5.png", name: "Omelette Special", price: "$220", rating: 4 },
        { src: "/menu6.png", name: "French Toast", price: "$240", rating: 4.5 }
    ];

    return (
        <section className=" flex flex-col item-center bg-gradient-to-b from-white to-bg-[#FFF7E5]">
            <div className="flex flex-col p-10">
                <h2 className="capitalize font-bold text-3xl text-center">
                    our best seller dishes
                </h2>
                <p className="text-center ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, reiciendis nisi similique odio consequuntur error. <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, fugiat?
                </p>
            </div>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 justify-center">
                {menuItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                        <Image src={item.src} alt={item.name} width={300} height={300} className="w-full rounded-lg object-cover " />
                        <h3 className="font-bold text-lg mt-2">{item.name}</h3>
                        <div className="flex items-center gap-1 text-yellow-500 mt-1">
                        {[...Array(5)].map((_, i) => (
                            i < Math.floor(item.rating) ? (
                            <FaStar key={i} />
                            ) : i < item.rating ? (
                            <FaStarHalfAlt key={i} />
                            ) : null
                        ))}
                        </div>
                        <div className="flex justify-between items-center mt-3">
                        <span className="font-bold text-xl">{item.price}</span>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600">
                            Buy Now
                        </button>
                        </div>
                    </div>
                ))}
            </main>
        </section>
    );
};

export default MenuSection;
