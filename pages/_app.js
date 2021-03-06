import "../styles/globals.css";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/abeezee";
import { Global, css } from "@emotion/react";
import Head from "next/head";
import { useEffect } from "react";

function ForceLightMode({ children }) {
  // force light mode b/c of ChakraUI bug
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") return;
    toggleColorMode();
  }, [colorMode]);

  return children;
}

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #fafaff;
          }
          #landing-box {
            background: rgb(198, 220, 240);
            background: linear-gradient(
              180deg,
              rgba(198, 220, 240, 1) 0%,
              rgba(250, 250, 255, 1) 67%
            );
          }
          #navbar {
            background-color: rgb(198, 220, 240);
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link
          rel="icon"
          sizes="16x16 32x32 64x64"
          href="/favicons/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/favicons/favicon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="160x160"
          href="/favicons/favicon-160.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicons/favicon-64.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16.png"
        />
        <link rel="apple-touch-icon" href="/favicons/favicon-57.png" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/favicon-114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/favicon-72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/favicon-144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/favicon-60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/favicon-120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/favicon-76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/favicon-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/favicon-180.png"
        />
      </Head>
      <GlobalStyle>
        <ForceLightMode>
          <Component {...pageProps} />
        </ForceLightMode>
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
