/* eslint-disable react/prop-types */
import { wrapper } from "../store";
import "../styles/global.css";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
