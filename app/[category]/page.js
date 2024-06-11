import CategoryHero from "../_components/CategoryHero";
import CategoryItem from "../_components/CategoryItem";
import Products from "../_components/Products";
import { getCategoryProduct } from "../_lib/data-services";

export async function generateMetadata({ params }) {
  return {
    title: `${params.category.toUpperCase()}`,
  };
}

async function page({ params }) {
  const products = await getCategoryProduct(params.category);

  return (
    <div className="">
      <CategoryHero params={params} />
      <main className="py-20 px-10 md:px-20 mb-12">
        <div>
          {products.map((product, i) => (
            <CategoryItem product={product} key={product.id + i} />
          ))}
        </div>

        <div className="mt-40">
          <Products />
        </div>
      </main>
    </div>
  );
}

export default page;
