import Button from "./Button";

import cartImage from "@/public/assets/cart/image-xx59-headphones.jpg";

import cartImage2 from "@/public/assets/cart/image-yx1-earphones.jpg";
import Image from "next/image";

const imgs = [cartImage, cartImage2];

function CartSummary() {
  return (
    <form className="p-8  bg-primary-50 max-h-[600px] rounded-lg flex flex-col ">
      {" "}
      <h1 className="text-2xl uppercase text-secondary-100 my-8">Summary</h1>
      <div>
        {imgs.map((img, i) => (
          <CartItem img={img} key={i} />
        ))}
      </div>
      <Pricing tag="total" price="5,234" />
      <Pricing tag="shipping" price="50" />
      <Pricing tag="vat (included)" price="1,079" />
      <div className="my-8">
        <Pricing tag="grand total" price="5,234" type="grand" />
      </div>
      <Button type="primary" category="btn">
        continue & pay
      </Button>
    </form>
  );
}

function Pricing({ tag, price, type = "" }) {
  return (
    <div className="flex justify-between  items-center">
      <p className="text-primary-300 uppercase">{tag}</p>
      <p
        className={`${
          type === "grand" ? "text-accent-100" : "text-secondary-100"
        } font-bold`}
      >
        ${price}
      </p>
    </div>
  );
}

function CartItem({ img }) {
  return (
    <div className="flex justify-between mb-8">
      <div className="flex gap-4">
        <div className="relative h-16 w-16">
          <Image
            src={img}
            fill
            className="object-top object-cover rounded-md"
            alt="img"
          />
        </div>

        <span>
          <h1 className="text-secondary-100 mb-2 font-bold text-xl">
            xx59 MK 11
          </h1>
          <p className="text-primary-300 font-bold">$2,999</p>
        </span>
      </div>

      <p className="text-primary-300 font-bold">x1</p>
    </div>
  );
}

export default CartSummary;
