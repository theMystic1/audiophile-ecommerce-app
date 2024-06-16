import speaker from "@/public/assets/shared/tablet/speaker.png";

import headphone from "@/public/assets/shared/tablet/headphone.png";

import earphone from "@/public/assets/shared/tablet/earphone.png";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    imgurl: headphone,
    productName: "headphones",
    href: "/headphones",
  },
  {
    imgurl: speaker,
    productName: "speakers",
    href: "/speakers",
  },
  {
    imgurl: earphone,
    productName: "earphones",
    href: "/earphones",
  },
];

function Products({ handleCloseMenu }) {
  return (
    <div className="relative grid md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductList
          key={product.href}
          product={product}
          handleCloseMenu={handleCloseMenu}
        />
      ))}
    </div>
  );
}

function ProductList({ product, handleCloseMenu }) {
  return (
    <div className="bg-primary-200 relative mb-20 md:mb-0 h-40 min-w-40 flex justify-center rounded-sm">
      <div className="absolute h-32 w-32 top-[-60px] py-4">
        <Image
          src={product.imgurl}
          className="object-cover object-top"
          fill
          alt="product-image"
        />
      </div>

      <span className="absolute bottom-2">
        <h1 className="uppercase font-bold mb-2">{product.productName}</h1>
        <div onClick={handleCloseMenu}>
          <Link
            href={product.href}
            className="text-primary-300 items-center  flex justify-center gap-2 uppercase"
          >
            <span>Shop</span>
            <span className="w-4 relative h-4">
              <Image
                src="/assets/shared/desktop/icon-arrow-right.svg"
                fill
                alt="icon-right"
              />
            </span>
          </Link>
        </div>
      </span>
    </div>
  );
}

export default Products;
