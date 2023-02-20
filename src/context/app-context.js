import * as React from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isMenu, setIsMenu] = React.useState(false);

  React.useEffect(() => {
    if (isLoading) {
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  return (
    <AppContext.Provider value={{ isLoading, setIsLoading, isMenu, setIsMenu }}>
      {children}
    </AppContext.Provider>
  );
};
