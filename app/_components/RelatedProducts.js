import Image from "next/image";
import Button from "./Button";
import { getProductByName } from "../_lib/data-services";

function RelatedProducts({ product }) {
  const { others } = product;
  return (
    <div className="mb-40">
      <h1 className="uppercase  font-bold text-2xl text-secondary-100 text-center my-12">
        you may also like
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {others.map((item, i) => (
          <RelatedProductItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

async function RelatedProductItem({ item }) {
  const { image } = item;

  const product = await getProductByName(item.name);

  const { id, category } = product;
  console.log(item);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="relative h-[400px]  w-full md:flex justify-center sm:max-w-[400px]  md:max-w-[500px] lg:w-full  rounded-sm ">
        <Image
          src={image.desktop}
          fill
          className="object-cover lg:flex hidden object-top"
          alt="speaker"
          // placeholder="blur"
        />
        <Image
          src={image.tablet}
          fill
          className="object-cover lg:hidden  md:flex hidden object-top"
          alt="speaker"
          // placeholder="blur"
        />{" "}
        <Image
          src={image.mobile}
          fill
          className="object-cover flex md:hidden object-top"
          alt="speaker"
          // placeholder="blur"
        />
      </div>
      <h1 className="uppercase text-2xl font-bold text-secondary-100 text-center my-12">
        {item.name}
      </h1>
      <Button type="primary" href={`/${category}/${id}`}>
        See product
      </Button>
    </div>
  );
}

export default RelatedProducts;
