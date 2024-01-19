import Head from "next/head";
import { Fragment, memo, useContext } from "react";
import { Context } from "../context/context";
import Preloader from "./Preloader";

const Layout = ({ children }) => {
  const { color } = useContext(Context);
  return (
    <Fragment>
      <title>Ben Visintainer</title>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Preloader />
      <div className="wrapper">{children}</div>
    </Fragment>
  );
};
export default memo(Layout);
