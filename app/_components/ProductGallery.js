import Image from "next/image";

function ProductGallery({ product }) {
  const { gallery } = product;

  const { first, second, third } = gallery;

  return (
    <div className=" hidden md:flex  justify-center w-full flex-col md:flex-row max-w-full  min-h-[600px] mt-12 gap-4 md:min-w-[600px]">
      <div className="flex flex-col gap-4 h-[600px] w-[600px]">
        <div className="relative md:h-[654px] h-[400px] md:flex justify-center sm:max-w-[400px]  md:max-w-[500px] w-full lg:w-full lg:h-[600px] rounded-sm ">
          <Image
            src={first.desktop}
            fill
            className="object-cover lg:flex hidden object-top"
            alt="speaker"
            // placeholder="blur"
          />
          <Image
            src={first.tablet}
            fill
            className="object-cover lg:hidden  md:flex hidden object-top"
            alt="speaker"
            // placeholder="blur"
          />{" "}
          <Image
            src={first.mobile}
            fill
            className="object-cover flex md:hidden object-top"
            alt="speaker"
            // placeholder="blur"
          />
        </div>

        <div className="relative md:h-[654px] min-h-[400px]  w-[400px] md:flex justify-center sm:max-w-[400px]  md:max-w-[500px] lg:w-full lg:h-[600px] rounded-sm ">
          <Image
            src={second.desktop}
            fill
            className="object-cover lg:flex hidden object-top"
            alt="speaker"
            // placeholder="blur"
          />
          <Image
            src={second.tablet}
            fill
            className="object-cover lg:hidden  md:flex hidden object-top"
            alt="speaker"
            // placeholder="blur"
          />{" "}
          <Image
            src={second.mobile}
            fill
            className="object-cover flex md:hidden object-top"
            alt="speaker"
            // placeholder="blur"
          />
        </div>
      </div>
      <div className="relative md:h-[654px] min-h-[400px]  w-[400px] md:flex justify-center sm:max-w-[400px]  md:max-w-[500px] lg:w-full lg:h-[600px] rounded-sm ">
        <Image
          src={third.desktop}
          fill
          className="object-cover lg:flex hidden object-top"
          alt="speaker"
          // placeholder="blur"
        />
        <Image
          src={third.tablet}
          fill
          className="object-cover lg:hidden  md:flex hidden object-top"
          alt="speaker"
          // placeholder="blur"
        />{" "}
        <Image
          src={third.mobile}
          fill
          className="object-cover flex md:hidden object-top"
          alt="speaker"
          // placeholder="blur"
        />
      </div>{" "}
    </div>
  );
}

export default ProductGallery;
