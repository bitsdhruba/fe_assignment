import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

export interface Login {
  loggedin: boolean;
  setLoggedin: Dispatch<SetStateAction<boolean>>;
}

export interface AppContextProvider {
  children: ReactNode;
}

export const AppContext = createContext<Partial<Login>>({});

const AppContextProvider: React.FC<AppContextProvider> = ({ children }) => {
  const navigate = useNavigate();

  const [loggedin, setLoggedin] = useState(false);

  const startHandler = () => {
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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
