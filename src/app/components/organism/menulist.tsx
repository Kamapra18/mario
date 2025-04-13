import Image from 'next/image';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Button from '../atom/button';

type MenuItem = {
    src: string;
    name: string;
    price: string;
    rating: number;
};

type MenuListProps = {
    menuItems: MenuItem[];
};

const MenuList = ({ menuItems }: MenuListProps) => {
    return (
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 justify-center">
            {menuItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                    <Image
                        src={item.src}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="w-full rounded-lg object-cover"
                    />
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
                        <Button>Buy Now</Button>
                    </div>
                </div>
            ))}
        </main>
    );
};

export default MenuList;
