import { Manrope, Roboto } from "next/font/google";
import "./_styles/globals.css";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import { ContextProvider } from "./_contsxt/CartContext";
import { Toaster } from "react-hot-toast";

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
        <ContextProvider>
          <Nav />
          <div className="">
            <main className=" mx-auto w-full min-h-[1000px]">{children}</main>
          </div>
          <Footer />

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "#ffff",
                color: "#000",
              },
            }}
          />
        </ContextProvider>
      </body>
    </html>
  );
}
