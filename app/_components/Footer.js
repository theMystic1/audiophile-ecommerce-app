import Link from "next/link";
import Logo from "./Logo";

import facebookIcon from "@/public/assets/shared/desktop/icon-facebook.svg";

import twitterIcon from "@/public/assets/shared/desktop/icon-twitter.svg";

import instagramIcon from "@/public/assets/shared/desktop/icon-instagram.svg";
import Image from "next/image";
import { navInfo } from "../_lib/data-services";

const icons = [
  {
    iconUrl: facebookIcon,
    path: "/",
  },
  {
    iconUrl: twitterIcon,
    path: "/",
  },
  {
    iconUrl: instagramIcon,
    path: "/",
  },
];

function Footer() {
  /*

   */
  return (
    <footer className="md:px-20 px-10 py-10 bg-secondary-100">
      <div className="flex  flex-col md:flex-row md:h-20 justify-between items-center ">
        <Logo />
        <ul className="flex mt-20 md:mt-0 items-center flex-col md:flex-row  gap-4 ">
          {navInfo.map((nav, i) => (
            <Link href={`${nav.href}`} key={i + 0.5} className="">
              <li className="list-none text-xl font-bold uppercase text-primary-50">
                {nav.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex justify-between gap-4 flex-col md:flex-row items-center mt-12">
        <span className="max-w-[500px]">
          <p className="text-primary-300 md:text-left text-center text-[14px] mb-4">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>

          <p className="text-primary-300 md:text-left text-center text-[14px]">
            Copyright 2021. All Rights Reserved
          </p>
        </span>

        <div className="flex gap-2 items-center ">
          {icons.map((icon, i) => (
            <Link href={icon.path} key={i * 0.01} className="relative w-4 h-4">
              <Image fill src={icon.iconUrl} alt={icon.iconUrl} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
