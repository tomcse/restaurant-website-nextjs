import Head from "next/head";
import Image from "next/image";
import Featured from "@/components/Featured";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buy plants NOW!</title>
        <meta name="description" content="For PowerUp Project" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList />
    </>
  );
}
