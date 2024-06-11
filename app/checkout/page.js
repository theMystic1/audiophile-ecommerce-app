import BackBtn from "../_components/BackBtn";
import CartSummary from "../_components/CartSummary";
import CheckoutForm from "../_components/CheckoutForm";
import SignOutButton from "../_components/SignoutBtn";
import { auth } from "../_lib/auth";

async function page() {
  const session = await auth();

  console.log(session);
  return (
    <div className="py-20 px-10 xl:px-20 bg-primary-200 min-h-screen">
      <SignOutButton />

      <div className="flex flex-col lg:grid lg:grid-cols-[1fr,1fr] gap-8">
        <CheckoutForm session={session} />
        <CartSummary />
      </div>
    </div>
  );
}

export default page;
