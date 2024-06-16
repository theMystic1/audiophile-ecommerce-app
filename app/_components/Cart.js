"use client";

import Button from "./Button";

import Image from "next/image";
import Overlay from "./Overlay";
import { useCart } from "../_contsxt/CartContext";
import { formatCurrency } from "../_lib/data-services";

function Cart({ setIsOpen }) {
  const { cart, setCart } = useCart();

  const total = cart
    .map((ct) => ct.price * ct.numItem)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <Overlay>
      <form className="px-4 pb-8 min-w-[350px] min-h-[250px] bg-primary-50 md:absolute md:min-w-[400px] rounded-lg flex  flex-col top-4 md:right-8 right-0 z-50">
        {" "}
        {cart.length ? (
          <>
            <div className="flex justify-between">
              <h1 className="text-2xl uppercase text-secondary-100 my-8">
                cart ({cart.length})
              </h1>

              <button
                className="text-primary-300 bg-transparent"
                onClick={(e) => {
                  e.preventDefault();
                  setCart([]);
                }}
              >
                Remove all
              </button>
            </div>
            <div>
              {cart.map((ct) => (
                <CartItem ct={ct} key={ct.id} />
              ))}
            </div>
            <Pricing tag="total" price={formatCurrency(total)} />
            <Button
              type="primary"
              href="/checkout"
              onClick={() => setIsOpen(false)}
            >
              Checkout
            </Button>
          </>
        ) : (
          <span className="flex items-center justify-center w-full h-full p-8">
            <p className="text-center">
              Cart is Empty kindly add items to your cart
            </p>
          </span>
        )}
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
        {price}
      </p>
    </div>
  );
}

export function CartItem({ ct }) {
  const { cart, setCart } = useCart();

  function handleCartItemQty(e, type, id) {
    e.preventDefault();

    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id
              ? {
                  ...item,
                  numItem: type === "add" ? item.numItem + 1 : item.numItem - 1,
                }
              : item
          )
          .filter((item) => item.numItem > 0) // Filter out items with numItem <= 0
    );
  }
  return (
    <div className="flex justify-between mb-8">
      <div className="flex gap-4">
        <div className="relative h-16 w-16">
          <Image
            src={ct.image.mobile}
            fill
            className="object-top object-cover rounded-md"
            alt="img"
          />
        </div>

        <span>
          <h1 className="text-secondary-100 mb-2 font-bold text-xl">
            {ct.name}
          </h1>
          <p className="text-primary-300 font-bold">
            {formatCurrency(ct.price)}
          </p>
        </span>
      </div>
      <span className="bg-primary-200 justify-between  px-4 py-2 flex items-center gap-4">
        <button
          className="font-bold text-primary-300"
          onClick={(e) => handleCartItemQty(e, "sub", ct.id)}
        >
          &#8722;
        </button>
        <span>{ct.numItem}</span>
        <button
          className="font-bold text-primary-300"
          onClick={(e) => handleCartItemQty(e, "add", ct.id)}
        >
          &#43;
        </button>
      </span>
    </div>
  );
}

export default Cart;
