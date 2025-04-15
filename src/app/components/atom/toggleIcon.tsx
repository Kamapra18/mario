import { FiMenu, FiX } from "react-icons/fi";

type ToggleIconProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function ToggleIcon({ isOpen, onClick }: ToggleIconProps) {
  const Icon = isOpen ? FiX : FiMenu;

  return (
    <button className="md:hidden" onClick={onClick}>
      <Icon size={28} className="text-[#F03328]" />
    </button>
  );
}
