"use client";

import Button from "./Button";

import Image from "next/image";
import { useFormStatus } from "react-dom";

import { useCart } from "../_contsxt/CartContext";
import { formatCurrency } from "../_lib/data-services";
// import { CartItem } from "./Cart";

function CartSummary() {
  const { cart } = useCart();
  const { pending } = useFormStatus();

  const total = cart
    .map((ct) => ct.price * ct.numItem)
    .reduce((acc, cur) => acc + cur, 0);

  const shippingFee = 50;

  const VAT = total * 0.2;
  const grandTotal = total + shippingFee + VAT;

  return (
    <div className="p-8  bg-primary-50 max-h-[600px] rounded-lg flex flex-col ">
      {" "}
      <h1 className="text-2xl uppercase text-secondary-100 my-8">Summary</h1>
      <div>
        {cart.map((ct) => (
          <CartItem ct={ct} key={ct.id} />
        ))}
      </div>
      <Pricing tag="total" price={formatCurrency(total)} />
      <Pricing tag="shipping" price={formatCurrency(shippingFee)} />
      <Pricing tag="vat (included)" price={formatCurrency(VAT)} />
      <div className="my-8">
        <Pricing
          tag="grand total"
          price={formatCurrency(grandTotal)}
          type="grand"
        />
      </div>
      <Button type="primary" category="btn">
        {pending ? "Authorizing payment..." : "        continue & pay"}
      </Button>
    </div>
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
        {price}
      </p>
    </div>
  );
}

function CartItem({ ct }) {
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

      <p className="text-primary-300 font-bold">x{ct.numItem}</p>
    </div>
  );
}

export default CartSummary;
