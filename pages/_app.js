import "../styles/globals.css";
import MainLayout from "../components/Layout/MainLayout";
import { AuthProvider } from "../components/context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  );
}

export default MyApp;
