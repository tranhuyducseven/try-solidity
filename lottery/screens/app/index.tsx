import { DashboardLayout } from "@layouts/DashboardLayout";

import styles from "./styles.module.scss";

export const AppScreen: IComponent = () => {
  return (
    <main className="grow w-full h-full flex flex-col justify-center p-8 relative">
      <DashboardLayout>
        <div className="w-full min-h-[80vh] flex items-center justify-center">
          <h1 className="font-bold text-3xl">Hello world!</h1>
        </div>
        <ul className={styles.items}>
          {Array(10)
            .fill("")
            .map((_, idx) => {
              return <li key={idx} />;
            })}
        </ul>
      </DashboardLayout>
    </main>
  );
};
