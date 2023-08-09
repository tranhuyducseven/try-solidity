import "@styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

import { LoadingComponent } from "@components/LoadingComponent";
import { MainLayout } from "@layouts/MainLayout";
import { TransitionLayout as TransitionLayoutStatic } from "@layouts/TransitionLayout";
import { ThemeProvider as ThemeProviderStatic } from "@material-tailwind/react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ToastContainer as ToastContainerStatic } from "react-toastify";

/**
 * Default layout for page component
 */

const DefaultLayout: IComponent = ({ children }) => <>{children}</>;
const ThemeProvider = dynamic<React.ComponentProps<typeof ThemeProviderStatic>>(
  () =>
    import("@material-tailwind/react/context/theme").then(
      (data) => data.ThemeProvider
    )
);

const TransitionLayout = dynamic<
  React.ComponentProps<typeof TransitionLayoutStatic>
>(() => import("@layouts/MainLayout").then((data) => data.MainLayout), {
  loading: () => (
    <main className="w-screen h-screen flex items-center justify-center">
      <LoadingComponent />
    </main>
  ),
});

const ToastContainer = dynamic<
  React.ComponentProps<typeof ToastContainerStatic>
>(() => import("react-toastify").then((data) => data.ToastContainer), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as IPageComponent).getLayout ||
    ((children) => <DefaultLayout>{children}</DefaultLayout>);

  const PageContent = Component as IPageComponent;

  return (
    <ThemeProvider value={undefined}>
      <MainLayout>
        <script src="/zk/snarkjs.min.js" async />
        <TransitionLayout>
          {getLayout(<PageContent {...pageProps} />)}
        </TransitionLayout>
      </MainLayout>
      <ToastContainer position="bottom-right" autoClose={3000} pauseOnHover />
    </ThemeProvider>
  );
}

export default MyApp;
