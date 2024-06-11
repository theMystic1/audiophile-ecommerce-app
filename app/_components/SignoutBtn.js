import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/action";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:text-secondary-100 bg-secondary-50 hover:bg-primary-100 border-secondary-50 hover:border-secondary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200  mb-8 w-40">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
