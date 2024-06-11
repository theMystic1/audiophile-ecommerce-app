import Image from "next/image";
// import headSet from "@/public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import Button from "./Button";
function CategoryItem({ product }) {
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
        <div className="flex justify-center lg:justify-start">
          <Button type="primary" href={`/${category}/${id}`}>
            See product
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
