// import Spinner from "./_components/Spinner";

import Spinner from "@/app/_components/Spinner";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Spinner />
      <p className="text-sm font-bold"> Loading product</p>
    </div>
  );
}

export default Loading;
