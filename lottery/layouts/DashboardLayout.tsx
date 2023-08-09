import { SidebarComponent } from "@components/SidebarComponent";

export const DashboardLayout: IComponent = ({ children }) => {
  return (
    <div className="grow dashboard w-full h-full relative flex">
      <SidebarComponent />
      <div className="grow h-full flex flex-col">{children}</div>
    </div>
  );
};
