"use client";

import { useState } from "react";
import Logo from "../atom/logo";
import BtnLogin from "../atom/btnLogin";
import NavMenu from "../molecule/navMenu";
import MobileMenu from "../molecule/mobileMenu";
import ToggleIcon from "../atom/toggleIcon";

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-20">
      <Logo />
      <NavMenu />
      <div className="hidden md:block">
        <BtnLogin />
      </div>
      <ToggleIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <MobileMenu />}
    </header>
  );
}
