import Button from "./Button";

import cartImage from "@/public/assets/cart/image-xx59-headphones.jpg";

import cartImage2 from "@/public/assets/cart/image-yx1-earphones.jpg";
import Image from "next/image";
import Overlay from "./Overlay";

const imgs = [cartImage, cartImage2];

function Cart({ setIsOpen }) {
  return (
    <Overlay>
      <form className="px-4 pb-8 min-w-[350px] bg-primary-50 md:absolute md:min-w-[400px] rounded-lg flex  flex-col top-4 md:right-8 right-0 z-50 ">
        {" "}
        <div className="flex justify-between">
          <h1 className="text-2xl uppercase text-secondary-100 my-8">
            cart (3)
          </h1>

          <button className="text-primary-300 bg-transparent">
            Remove all
          </button>
        </div>
        <div>
          {imgs.map((img, i) => (
            <CartItem img={img} key={i} />
          ))}
        </div>
        <Pricing tag="total" price="5,234" />
        <Button
          type="primary"
          href="/checkout"
          onClick={() => setIsOpen(false)}
        >
          Checkout
        </Button>
      </form>
    </Overlay>
  );
}

function Pricing({ tag, price, type = "" }) {
  return (
    <div className="flex justify-between  items-center">
      <p className="text-primary-300 uppercase mb-8">{tag}</p>
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
      <span className="bg-primary-200 justify-between  px-4 py-2 flex items-center gap-4">
        <button className="font-bold text-primary-300">&#8722;</button>
        <span>{1}</span>
        <button className="font-bold text-primary-300">&#43;</button>
      </span>
    </div>
  );
}

export default Cart;
