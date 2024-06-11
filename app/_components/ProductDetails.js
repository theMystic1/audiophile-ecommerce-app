// "use client";

import { getProductById, getProducts } from "../_lib/data-services";
import BackBtn from "./BackBtn";
import GearSec from "./GearSec";
import ProductDetailHero from "./ProductDetailHero";
import ProductFeatures from "./ProductFeatures";
import ProductGallery from "./ProductGallery";
import Products from "./Products";
import RelatedProducts from "./RelatedProducts";

async function ProductDetails({ params }) {
  const { productId } = params;
  const product = await getProductById(Number(productId));

  return (
    <div>
      <BackBtn />

      <ProductDetailHero product={product} />
      <ProductFeatures product={product} />
      <ProductGallery product={product} />
      <RelatedProducts product={product} />
      <Products />
      <GearSec />
    </div>
  );
}

export default ProductDetails;
