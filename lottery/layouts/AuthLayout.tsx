export const AuthLayout: IComponent = ({ children }) => {
  return (
    <div className="relative bg-cover bg-auth bg-center max-w-screen min-w-screen min-h-screen flex flex-col">
      {children}
    </div>
  );
};
