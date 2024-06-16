import Image from "next/image";
import heroImg from "@/public/assets/home/desktop/image-hero.jpg";
import heroImgTab from "@/public/assets/home/tablet/image-header.jpg";
import heroImgMob from "@/public/assets/home/mobile/image-header.jpg";

import Button from "./Button";
import { getProductByName } from "../_lib/data-services";

async function Hero() {
  const prooduct = await getProductByName("xx99 mark ii headphones");

  const { category, id } = prooduct;

  return (
    <main className=" w-full h-screen mb-10 relative px-10  md:px-[80px] grid items-center z-40">
      <Image
        src={heroImg}
        fill
        alt="hero-img"
        className="object-cover  object-top hidden lg:grid"
        placeholder="blur"
        key={1}
      />
      <Image
        src={heroImgTab}
        fill
        alt="hero-img"
        className="object-cover hidden sm:grid  lg:hidden object-top"
        placeholder="blur"
        key={2}
      />

      <Image
        src={heroImgMob}
        fill
        alt="hero-img"
        className="object-cover sm:hidden  object-top"
        placeholder="blur"
        key={3}
      />
      <div className="relative z-20 mx-auto lg:mx-0 lg:max-w-[400px] grid items-center justify-center gap-4 rounded-sm">
        <h3
          className="text-primary-300 lg:text-left text-center tracking-[1em] text-lg uppercase
        "
        >
          new product
        </h3>

        <h1 className="uppercase text-center lg:text-left text-[40px] md:text-[56px] font-bold text-primary-50">
          xx99 mark ii headphones
        </h1>
        <p className="text-primary-300 font-bold lgtext-[14px] text-[16px] mb-4 lg:text-left text-center">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button type="primary" href={`/${category}/${id}`}>
            see product
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
