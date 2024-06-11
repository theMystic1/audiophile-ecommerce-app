import Image from "next/image";
import Link from "next/link";

import audiophile from "@/public/assets/home/desktop/audiophile.png";

function Logo() {
  return (
    <Link href="/" className="relative h-4 w-[100px]">
      <Image src={audiophile} fill alt="logo" />
    </Link>
  );
}

export default Logo;
