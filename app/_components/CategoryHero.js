function CategoryHero({ params }) {
  const { category } = params;

  return (
    <div className="bg-secondary-50 h-40 py-20 px-10 md:px-20 flex items-center justify-center">
      <h1 className="text-primary-50 text-3xl font-bold uppercase">
        {category}
      </h1>
    </div>
  );
}

export default CategoryHero;
