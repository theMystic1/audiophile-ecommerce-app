import SignOutButton from "../_components/SignoutBtn";
import SummaryForm from "../_components/SummaryForm";
import { auth } from "../_lib/auth";

async function page() {
  const session = await auth();

  return (
    <div className="py-20 px-10 xl:px-20 bg-primary-200 min-h-screen">
      <SignOutButton />
      <SummaryForm session={session} />
    </div>
  );
}

export default page;
