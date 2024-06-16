"use client";

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { useCart } from "../_contsxt/CartContext";
import toast from "react-hot-toast";

function ProductDetailHero({ product }) {
  const { image, name, description, id, category } = product;

  // console.log(product);
  const [count, setCount] = useState(1);
  const { cart, setCart } = useCart();

  function addToCart(e) {
    e.preventDefault();

    // Check if the product is already in the cart
    const alreadyInCart = cart.find((ct) => ct.id === product.id);

    if (alreadyInCart) {
      // Update the quantity of the existing product
      setCart(
        cart.map((ct) =>
          ct.id === product.id ? { ...ct, numItem: ct.numItem + count } : ct
        )
      );
    } else {
      // Add the new product to the cart
      const cartProduct = { ...product, numItem: count };
      setCart([...cart, cartProduct]);
    }
    setCount(1);
    toast.success(`${count} ${name} added to cart`);
  }

  function handleCount(e, type) {
    e.preventDefault();

    if (count === 1 && type === "sub") {
      return count;
    } else if (count > 1 && type === "sub") {
      setCount((c) => c - 1);
    }

    if (type === "add") setCount((c) => c + 1);
  }

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
            <button
              className="font-bold text-primary-300"
              onClick={(e) => handleCount(e, "sub")}
            >
              &#8722;
            </button>
            <span>{count}</span>
            <button
              className="font-bold text-primary-300"
              onClick={(e) => handleCount(e, "add")}
            >
              &#43;
            </button>
          </span>
          <Button type="primary" category="btn" onClick={addToCart}>
            add to cart
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ProductDetailHero;
