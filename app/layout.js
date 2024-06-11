import { Manrope, Roboto } from "next/font/google";
import "./_styles/globals.css";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

const manRope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s /  Audiophile e-commerce",
    default: "Welcome / Audiophile e-commerce ",
  },
  description: "A nice place for your headphones and home theater",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manRope.className}`}>
        <Nav />
        <div className="">
          <main className=" mx-auto w-full min-h-[1000px]">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
