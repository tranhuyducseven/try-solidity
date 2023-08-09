import { LoadingComponent } from "@components/LoadingComponent";
import { DefaultLayout } from "@layouts/DefaultLayout";
import dynamic from "next/dynamic";

const AppScreen = dynamic(
  () => import("@screens/app").then((data) => data.AppScreen),
  {
    ssr: false,
    loading: () => (
      <main className="w-screen h-screen flex items-center justify-center">
        <LoadingComponent />
      </main>
    ),
  }
);

const Home: IPageComponent = () => <AppScreen />;

Home.getLayout = (screen) => <DefaultLayout>{screen}</DefaultLayout>;

export default Home;
