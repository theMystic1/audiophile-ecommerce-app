"use client";

import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import menuIcon from "@/public/assets/shared/tablet/icon-hamburger.svg";
import { navInfo } from "../_lib/data-services";
import { useState } from "react";
import Cart from "./Cart";
import { usePathname } from "next/navigation";
import NavMenu from "./NavMenu";

function Nav() {
  const params = usePathname();

  function getBeforeSecondSlash(path) {
    // Split the string by the slash
    const parts = path.split("/");

    // Join the parts up to the second slash
    if (parts.length > 2) {
      return parts.slice(0, 2).join("/");
    } else {
      return path;
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleOpen() {
    setIsOpen((iso) => !iso);
  }

  function handleOpenMenu() {
    setIsOpenMenu((iso) => !iso);
  }
  return (
    <nav className="md:px-20 px-10 bg-secondary-50 py-8">
      <div className="flex h-5 justify-between  items-center relative">
        <button
          className="relative h-8 w-8 flex md:hidden rounded-sm "
          onClick={handleOpenMenu}
        >
          <Image src={menuIcon} className="" fill alt="hamburger-menu" />
        </button>
        <span className="flex gap-8 items-center">
          <Logo />
        </span>
        <ul className=" gap-4 md:flex hidden ">
          {navInfo.map((nav, i) => (
            <Link href={`${nav.href}`} key={i + 1000} className="">
              <li
                className={`list-none text-xl font-bold uppercase ${
                  getBeforeSecondSlash(params) === nav.href
                    ? "text-accent-100"
                    : "text-primary-50"
                } hover:text-accent-50`}
              >
                {nav.name}
              </li>
            </Link>
          ))}
        </ul>

        <button className="bg-transparent" onClick={handleOpen}>
          <Image
            width="16"
            height="16"
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart"
          />
        </button>
      </div>
      {/* <Cart /> */}

      <NavMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />

      {isOpen ? <Cart setIsOpen={setIsOpen} /> : null}
    </nav>
  );
}

export default Nav;
