import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/abeezee";
import { Global, css } from "@emotion/react";

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
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
