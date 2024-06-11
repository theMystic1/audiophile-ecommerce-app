function ProductFeatures({ product }) {
  const { features, includes } = product;

  const text = features.split(/\n\n/);
  return (
    <div className="grid  gap-10 md:grid-cols-[1.5fr,1fr]  mt-12">
      <div className="">
        <h1 className="text-2xl text-secondary-100 font-bold mb-8 uppercase">
          features
        </h1>

        {text.map((txt, i) => (
          <p className="text-primary-300 mb-8" key={i}>
            {txt}
          </p>
        ))}
      </div>
      <div className="px-8  md:justify-start">
        <h1 className="text-2xl text-secondary-100 font-bold mb-8 uppercase">
          in the box
        </h1>

        <ul>
          {includes.map((feature, i) => (
            <FeatureList feature={feature} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function FeatureList({ feature }) {
  return (
    <li className="flex  gap-4 items-center mb-2">
      <span className="text-accent-100">{feature.quantity + "x"}</span>
      <span className="text-primary-300">{feature.item}</span>
    </li>
  );
}

export default ProductFeatures;
