import Image from "next/image";
import Button from "./Button";

function ProductDetailHero({ product }) {
  const { image, name, description, id, category } = product;

  const { desktop, tablet, mobile } = image;
  return (
    <div className="grid lg:grid-cols-2 place-items-center items-center gap-10 md:flex-row mb-12 justify-center">
      <div className="relative md:h-[654px] h-[400px]  w-full md:flex justify-center sm:max-w-[400px]  md:max-w-[500px] lg:w-full lg:h-[600px] rounded-sm ">
        <Image
          src={desktop}
          fill
          className="object-cover lg:flex hidden object-top"
          alt="speaker"
          // placeholder="blur"
        />
        <Image
          src={tablet}
          fill
          className="object-cover lg:hidden  md:flex hidden object-top"
          alt="speaker"
          // placeholder="blur"
        />{" "}
        <Image
          src={mobile}
          fill
          className="object-cover flex md:hidden object-top"
          alt="speaker"
          // placeholder="blur"
        />
      </div>
      <div className=" h-[400px] lg:flex lg:flex-col lg:justify-center  lg:h-full">
        {product.new ? (
          <h3
            className="text-accent-100 lg:text-left text-center tracking-widest md:tracking-[1em] text-lg uppercase
        "
          >
            new product
          </h3>
        ) : null}
        <h1 className="uppercase text-center lg:text-left text-[30px] md:text-[56px] font-bold text-secondary-50">
          {name}
        </h1>
        <p className="text-primary-300 font-bold lg:text-[14px] text-[13px]  lg:text-left text-center mb-10">
          {description}
        </p>
        <form className="flex justify-center  lg:justify-start gap-6 flex-col sm:flex-row">
          <span className="bg-primary-200 justify-between  px-8 py-4 flex items-center gap-8">
            <button className="font-bold text-primary-300">&#8722;</button>
            <span>{1}</span>
            <button className="font-bold text-primary-300">&#43;</button>
          </span>
          <Button type="primary" category="btn">
            add to cart
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ProductDetailHero;
