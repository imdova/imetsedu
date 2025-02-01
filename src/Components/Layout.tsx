import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="mb-28">{children}</div>
      <Footer />
    </>
  );
}
