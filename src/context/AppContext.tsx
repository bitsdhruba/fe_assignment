import { FormEvent, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const navigate = useNavigate();

  const [loggedin, setLoggedin] = useState<boolean>(false);

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
    setLoggedin,
    startHandler,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
