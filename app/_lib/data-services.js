import { notFound } from "next/navigation";
import { supabase } from "./supabase";

export async function getProducts() {
  await new Promise((res) => setTimeout(res, 1000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data.json`);

  const data = await res.json();

  return data;
}

export async function getCategoryProduct(category) {
  const products = await getProducts();
  const allCategories = products.map((prod) => prod.category);

  const isValidCategory = allCategories.some((cat) => cat === category);

  if (!isValidCategory) {
    // throw new Error("Invalid url");
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return categoryProducts;
}

export async function getProductById(productId) {
  const products = await getProducts();

  const allId = products.map((prod) => prod.id);

  const isValidId = allId.some((id) => id === Number(productId));

  if (!isValidId) {
    // throw new Error("Invalid url");
    notFound();
  }

  const product = products.find((prod) => prod.id === productId);

  return product;
}

export async function getProductByName(name) {
  const products = await getProducts();

  const product = products.find((prod) =>
    prod.name.toLowerCase().includes(name.toLowerCase())
  );

  return product;
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}

export async function getGuest(email) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function createOrder(newOrder) {
  const { data, error } = await supabase.from("orders").insert([newOrder]);

  if (error) {
    console.error(error);
    throw new Error("Unable to create order");
  }

  return data;
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export const navInfo = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "headphones",
    href: "/headphones",
  },
  {
    name: "speakers",
    href: "/speakers",
  },
  {
    name: "earphones",
    href: "/earphones",
  },
];
