"use client";

import Image from "next/image";

import confirmImg from "@/public/assets/checkout/icon-order-confirmation.svg";
import { useCart } from "../_contsxt/CartContext";
import { formatCurrency } from "../_lib/data-services";
import Button from "./Button";

function OrderComplete() {
  const { cart } = useCart();

  const total = cart
    .map((ct) => ct.price * ct.numItem)
    .reduce((acc, cur) => acc + cur, 0);

  const shippingFee = 50;

  const VAT = total * 0.2;
  const grandTotal = total + shippingFee + VAT;

  return (
    <div className="bg-primary-50 flex p-8 gap-8 flex-col ">
      <div className="relative h-16 w-16">
        <Image
          src={confirmImg}
          alt="confirm image"
          className="object-cover object-top"
        />
      </div>

      <h1 className="text-2xl text-secondary-100 font-normal uppercase">
        tHANK YOU <br /> FOR YOUR ORDER
      </h1>

      <p className="text-primary-300 ">
        You will receive an email confirmation shortly
      </p>

      <div className="grid md:grid-cols-2 w-full">
        <div className="bg-primary-200 text-secondary-100 p-4 md:rounded-tl-md rounded-t-md md:rounded-t-none md:rounded-bl-md">
          <div className=" border-b-primary-200">
            <OrderItem ct={cart[0]} />
          </div>
          {cart.length > 1 ? (
            <p className="text-primary-300 text-center">
              and {cart.length - 1} other item(s)
            </p>
          ) : null}
        </div>
        <div className="flex justify-center flex-col gap-4 bg-secondary-100 p-4 pl-8 rounded-b-md md:rounded-b-none md:rounded-tr-md md:rounded-br-md">
          <h1 className="uppercase text-primary-300 font-normal ">
            grand total
          </h1>

          <h1 className="text-primary-50 font-bold">
            {formatCurrency(grandTotal)}
          </h1>
        </div>
      </div>
      <Button href="/" type="primary">
        Back home
      </Button>
    </div>
  );
}

function OrderItem({ ct }) {
  return (
    <div className=" justify-between flex w-full">
      <div className="flex gap-4">
        <div className="relative h-10 w-10">
          <Image
            src={ct.image.mobile}
            fill
            className="object-top object-cover rounded-md"
            alt="img"
          />
        </div>

        <span>
          <h1 className="text-secondary-100 mb-2 font-bold text-[16px]">
            {ct.name}
          </h1>
          <p className="text-primary-300 text-[14px] font-bold">
            {formatCurrency(ct.price)}
          </p>
        </span>
      </div>

      <p className="text-primary-300 font-bold">x{ct.numItem}</p>
    </div>
  );
}

export default OrderComplete;
