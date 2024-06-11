import ProductDetails from "@/app/_components/ProductDetails";

export async function generateMetadata({ params }) {
  return {
    title: `${params.category.toUpperCase()}`,
  };
}

function page({ params }) {
  return (
    <div className="py-20 px-10 md:px-20">
      <ProductDetails params={params} />
    </div>
  );
}

export default page;
