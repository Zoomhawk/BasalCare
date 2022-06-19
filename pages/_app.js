import "../styles/globals.css";
import MainLayout from "../components/Layout/MainLayout";
import { AuthProvider } from "../components/context/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
