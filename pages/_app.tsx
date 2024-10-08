import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Fone_garage</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
        as="font" 
        rel="preload"
  href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap"
 
/>
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
  as="font" 
        rel="preload"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
  as="font" 
  rel="preload"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400&display=swap"
  as="font" 
  rel="preload"
/>

      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
