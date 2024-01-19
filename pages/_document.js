import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700,900&display=optional"
          rel="stylesheet"
        />
        {/* update existing v5 CSS to use v6 icons and assets */}
        <link href="../public/css/fontawesome/v6/v5-font-face.css" rel="stylesheet"></link>        
      </Head>
      <body className="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
