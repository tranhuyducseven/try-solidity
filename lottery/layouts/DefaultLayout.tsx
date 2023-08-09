export const DefaultLayout: IComponent = ({ children }) => {
  return (
    <div className="relative min-w-screen min-h-screen flex flex-col">
      {children}
    </div>
  );
};
