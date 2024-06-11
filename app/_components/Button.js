import Link from "next/link";

function Button({ children, onClick, type = "", href, category = "link" }) {
  if (category === "btn")
    return (
      <button
        className={`${
          type === "primary"
            ? "bg-accent-100 hover:bg-accent-50 text-primary-50"
            : type === "secondary"
            ? "bg-transparent border border-secondary-100 hover:text-primary-50 hover:bg-secondary-100 text-secondary-100"
            : "bg-secondary-50 text-primary-50 hover:border border-secondary-100 hover:bg-primary-50 hover:text-secondary-50"
        } px-8 py-4  uppercase font-bold`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  return (
    <Link
      href={href}
      className={`${
        type === "primary"
          ? "bg-accent-100 hover:bg-accent-50 text-primary-50"
          : type === "secondary"
          ? "bg-transparent border border-secondary-100 hover:text-primary-50 hover:bg-secondary-100 text-secondary-100"
          : "bg-secondary-50 text-primary-50 hover:border border-secondary-100 hover:bg-primary-50 hover:text-secondary-50"
      } px-8 py-4  uppercase font-bold text-center`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default Button;
