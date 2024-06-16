"use client";

import { useState } from "react";
import CartSummary from "./CartSummary";
import CheckoutForm from "./CheckoutForm";
import Modal from "./Modal";
import OrderComplete from "./OrderComplete";
import { getFormData } from "../_lib/action";
import { useCart } from "../_contsxt/CartContext";

function SummaryForm({ session }) {
  const [openModal, setOpenModal] = useState(false);
  const { setCart, cart } = useCart();

  function handleOpenModal() {
    setOpenModal(true);
  }

  const createOrder = getFormData.bind(null, cart);

  async function handleFormSubmit(formData) {
    await createOrder(formData);

    handleOpenModal();
    // setCart([]);
  }

  return (
    <form
      className="flex flex-col lg:grid lg:grid-cols-[1fr,1fr] gap-8 relative"
      action={handleFormSubmit}
    >
      <CheckoutForm session={session} />
      <Modal isOpen={openModal}>
        <OrderComplete />
      </Modal>
      <CartSummary />
    </form>
  );
}

export default SummaryForm;
