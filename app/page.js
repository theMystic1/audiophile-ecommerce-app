import GearSec from "./_components/GearSec";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import ProductsSample from "./_components/ProductsSample";

export default async function pages() {
  return (
    <div>
      <Hero />
      <div className="md:px-20 px-10 py-20">
        <Products />
        <ProductsSample />
        <GearSec />
      </div>
    </div>
  );
}
