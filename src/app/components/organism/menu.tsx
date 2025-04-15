import SectionTitle from "../atom/title";
import MenuList from "../organism/menulist";

const MenuSection = () => {
  const menuItems = [
    { src: "/menu1.png", name: "Breakfast Food", price: "$230", rating: 4.5 },
    { src: "/menu2.png", name: "Health Breakfast", price: "$230", rating: 5 },
    { src: "/menu3.png", name: "Breakfast Food", price: "$230", rating: 4.5 },
    { src: "/menu4.png", name: "Pancake Delight", price: "$250", rating: 5 },
    { src: "/menu5.png", name: "Omelette Special", price: "$220", rating: 4 },
    { src: "/menu6.png", name: "French Toast", price: "$240", rating: 4.5 },
  ];

  return (
    <section className="flex flex-col item-center bg-gradient-to-b from-white to-bg-[#FFF7E5]">
      <div className="flex flex-col p-10">
        <SectionTitle className="text-center">
          our best seller dishes
        </SectionTitle>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
          reiciendis nisi similique odio consequuntur error. <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
          fugiat?
        </p>
      </div>
      <MenuList menuItems={menuItems} />
    </section>
  );
};

export default MenuSection;
