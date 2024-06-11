import speakerBig from "@/public/assets/home/desktop/image-speaker-zx9.png";
import speakerTab from "@/public/assets/home/tablet/image-speaker-zx9.png";
import speakermob from "@/public/assets/home/mobile/image-speaker-zx9.png";

import halfSpkBig from "@/public/assets/home/desktop/image-speaker-zx7.jpg";
import halfSpkTab from "@/public/assets/home/tablet/image-speaker-zx7.jpg";
import halfSpkmob from "@/public/assets/home/mobile/image-speaker-zx7.jpg";

import earPhoneBig from "@/public/assets/home/desktop/image-earphones-yx1.jpg";
import earPhoneTab from "@/public/assets/home/tablet/image-earphones-yx1.jpg";
import earPhonemob from "@/public/assets/home/mobile/image-earphones-yx1.jpg";
import Image from "next/image";
import Button from "./Button";
import { getProductByName } from "../_lib/data-services";

async function ProductsSample() {
  const product1 = await getProductByName("ZX9 speaker");

  const product2 = await getProductByName("ZX7 speaker");
  const product3 = await getProductByName("Yx1 WIRELESS earphones");

  return (
    <div className=" justify-center  gap-4  w-full min-h-[50rem] mt-20 ">
      <div className="flex flex-col md:flex-row justify-between items-center  gap-10 relative md:h-[450px] min-h-[450px] w-full bg-accent-100 z-50 md:px-20 pt-10 rounded-sm">
        <div className="relative w-[20rem] h-60  md:h-[100%] ">
          <Image
            src={speakerBig}
            fill
            className="object-contain object-top md:bottom-[-2px] md:object-bottom"
            alt="speaker"
            placeholder="blur"
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start  w-full p-8">
          <h1 className="uppercase md:text-left text-center text-4xl font-bold text-primary-50">
            ZX9 <br /> speaker
          </h1>
          <p className="text-primary-200 my-4 md:text-left font-bold text-[14px] text-center">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound. See product
          </p>
          <Button href={`/${product1.category}/${product1.id}`}>
            SEE Product
          </Button>
        </div>
      </div>

      <div className="relative h-[300px] w-full my-8 rounded-sm px-8 md:px-20">
        <Image
          src={halfSpkBig}
          fill
          className="object-cover hidden lg:flex object-top"
          alt="speaker"
          placeholder="blur"
        />

        <Image
          src={halfSpkTab}
          fill
          className="object-cover hidden md:flex object-top"
          alt="speaker"
          placeholder="blur"
        />

        <Image
          src={halfSpkmob}
          fill
          className="object-cover flex md:hidden object-top"
          alt="speaker"
          placeholder="blur"
        />

        <div className="z-10 relative flex flex-col items-start justify-center gap-4 h-full">
          <h1 className="uppercase text-4xl font-bold text-secondary-50">
            ZX7 speaker
          </h1>

          <Button
            href={`/${product2.category}/${product2.id}`}
            type="secondary"
          >
            SEE Product
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 md:h-[300px]">
        <div className="relative h-[400px] md:h-full w-full rounded-sm ">
          <Image
            src={earPhoneBig}
            fill
            className="object-cover object-top"
            alt="speaker"
            placeholder="blur"
          />
        </div>
        <div className="z-10 relative flex flex-col items-start justify-center gap-4 h-[400px] md:h-full bg-primary-200 px-8 md:px-16">
          <h1 className="uppercase text-3xl md:text-4xl font-bold text-secondary-50">
            YX1 earphones
          </h1>

          <Button
            href={`/${product3?.category}/${product3?.id}`}
            type="secondary"
          >
            SEE Product
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductsSample;
