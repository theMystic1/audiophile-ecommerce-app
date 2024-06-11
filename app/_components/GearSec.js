import Image from "next/image";

import listener from "@/public/assets/shared/desktop/image-best-gear.jpg";
import listenerTab from "@/public/assets/shared/tablet/image-best-gear.jpg";

import listenerMob from "@/public/assets/shared/mobile/image-best-gear.jpg";

function GearSec() {
  return (
    <div className="md:grid  flex flex-col-reverse items-center md:grid-cols-2 gap-10 min-h-[600px] mt-40">
      <div className="flex flex-col gap-8 justify-center h-full md:max-w-[400px]">
        <h1 className="uppercase text-2xl font-bold text-secondary-50  text-center md:text-left">
          Bringing you the <span className="text-accent-100">best</span> audio
          gear Located at the heart of New York
        </h1>
        <p className="text-primary-300 font-bold text-[14px] mb-4 md:text-left text-center">
          City, Audiophile is the premier store for high end headphones,
          earphones, speakers, and audio accessories. We have a large showroom
          and luxury demonstration rooms available for you to browse and
          experience a wide range of our products. Stop by our store to meet
          some of the fantastic people who make Audiophile the best place to buy
          your portable audio equipment.
        </p>
      </div>
      <div className="relative h-[400px] md:w-full w-full rounded-sm ">
        <Image
          src={listener}
          fill
          className="object-cover hidden lg:flex object-top"
          alt="speaker"
          placeholder="blur"
        />
        <Image
          src={listenerTab}
          fill
          className="object-cover hidden md:flex object-top"
          alt="speaker"
          placeholder="blur"
        />{" "}
        <Image
          src={listenerMob}
          fill
          className="object-cover md:hidden object-top"
          alt="speaker"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default GearSec;
