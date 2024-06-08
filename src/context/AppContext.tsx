import { FormEvent, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AppContextType {
  children?: React.ReactNode;
}

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider: React.FC<AppContextType> = ({ children }) => {
  const navigate = useNavigate();

  const [loggedin, setLoggedin] = useState(false);

  const startHandler = (event: FormEvent) => {
    event.preventDefault();
    setLoggedin(true);
    navigate("/test");
  };

  const logout = () => {
    setLoggedin(false);
  };

  const value = {
    loggedin,
    startHandler,
    logout,
  };

  return (
    <AppContext.Provider value={value as AppContextType}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
