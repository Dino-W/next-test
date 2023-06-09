import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="author" content="Dino" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
