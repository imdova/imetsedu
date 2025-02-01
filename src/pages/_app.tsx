import Layout from "@/Components/Layout";
import "@/styles/globals.css";
import "@/styles/output.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wraps the main component with a layout to provide consistent structure across pages
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
