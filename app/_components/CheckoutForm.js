"use client";
import { useState } from "react";
import HThree from "./CheckoutH3";

import cashImg from "@/public/assets/checkout/icon-cash-on-delivery.svg";
import Image from "next/image";

function CheckoutForm({ session }) {
  const [payMethod, setPayMethod] = useState("cash");

  const { name, email } = session.user;

  // console.log(session.user.name);
  function handlePaymentMethod(type) {
    setPayMethod(type);
  }

  return (
    <form className="p-8   bg-primary-50 rounded-lg">
      <h1 className="text-2xl uppercase text-secondary-100 my-8">checkout</h1>
      <HThree>billing details</HThree>

      <FlexDiv>
        <div>
          <Input
            placeholder={"Enter name"}
            label={"Name"}
            defaultValue={name}
          />

          <Input
            placeholder={"email"}
            label={"Email address"}
            defaultValue={email}
          />
        </div>

        <Input placeholder={"Phone Number"} label={"Phone Number"} />
      </FlexDiv>

      <HThree>shipping info</HThree>

      <FlexDiv>
        <Input placeholder="Enter shipping address" label="Address" />
      </FlexDiv>

      <HThree>payment details</HThree>

      <FlexDiv>
        <div>
          <Input placeholder={"Zip code"} label={"Zip Code"} />

          <Input placeholder={"City"} label={"City"} />
        </div>

        <Input placeholder={"Country"} label={"Country"} />
      </FlexDiv>

      <HThree>payment details</HThree>
      <div className="flex gap-4 flex-col md:flex-row justify-between">
        <h1 className="font-bold text-xl capitalize">payment method</h1>

        <div>
          <PayType
            className={`${
              payMethod === "e-money"
                ? "border-accent-100"
                : "border-primary-300"
            }`}
            onClick={() => handlePaymentMethod("e-money")}
          >
            <Check>
              {payMethod === "e-money" ? (
                <div className={`h-4 w-4 rounded-full bg-accent-100`}></div>
              ) : null}
            </Check>
            <p className="text-secondary-100 font-bold">e-Money</p>
          </PayType>

          <PayType
            className={`${
              payMethod === "cash" ? "border-accent-100" : "border-primary-300"
            }`}
            onClick={() => handlePaymentMethod("cash")}
          >
            <Check>
              {payMethod === "cash" ? (
                <div className={`h-4 w-4 rounded-full bg-accent-100`}></div>
              ) : null}
            </Check>
            <p className="text-secondary-100 font-bold">Cash on Delivery</p>
          </PayType>
        </div>
      </div>

      {payMethod === "e-money" ? (
        <FlexDiv>
          <Input
            placeholder={"e-Money"}
            type="number"
            label={"e-Money Number"}
          />

          <Input
            placeholder={"e-Money Pin"}
            type="number"
            label={"e-Money Pin"}
          />
        </FlexDiv>
      ) : (
        <CashMessage />
      )}
    </form>
  );
}

function CashMessage() {
  return (
    <div className="flex flex-col items-center md:flex-row gap-8">
      <div className="relative h-12 w-20">
        <Image
          src={cashImg}
          fill
          className="object-top object-cover rounded-md"
          alt="img"
        />
      </div>

      <p className="text-primary-300">
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </div>
  );
}

function Input({ type = "text", placeholder, label, defaultValue }) {
  return (
    <div className="flex flex-col gap-2 w-full mb-8">
      <label className="text-secondary-100">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className="rounded-md px-8 py-4 border border-primary-300 "
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}

function Check({ children }) {
  return (
    <div className="h-8 w-8 rounded-full border flex items-center justify-center">
      {children}
    </div>
  );
}

function PayType({ children, className, onClick }) {
  return (
    <div
      className={`rounded-md  px-8 py-4 border ${className}  flex gap-4 items-center mb-8 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function FlexDiv({ children }) {
  return <div className="flex flex-col md:flex-row gap-4">{children}</div>;
}

export default CheckoutForm;
