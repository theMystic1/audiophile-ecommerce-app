"use server";

import { signIn, signOut } from "./auth";
import { createOrder } from "./data-services";

export async function signInAction() {
  await signIn("google", { redirectTo: "/checkout" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function getFormData(cart, formData) {
  const dataObject = Object.fromEntries(formData.entries());

  const newObj = {
    ...dataObject,
    cart: cart,
  };

  await new Promise((res) => setTimeout(res, 2000));
}
