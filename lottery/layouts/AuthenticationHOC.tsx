import { LoadingComponent } from "@components/LoadingComponent";

export const AuthenticationHOC: IComponent = ({ children }) => {
  const loading = false;
  return (
    <>
      {loading && (
        <div className="xyz-in w-full h-screen flex justify-center items-center gap-3">
          <LoadingComponent />
        </div>
      )}
      {!loading && (
        <div className="xyz-in absolute top-0 left-0 w-full h-full">
          {children}
        </div>
      )}
    </>
  );
};
