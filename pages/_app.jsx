import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pic Lab | Home</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cloud.typography.com/6929016/7418832/css/fonts.css"
        />
        <link rel="stylesheet" type="text/css" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Script src="https://kit.fontawesome.com/117bcfe378.js"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
