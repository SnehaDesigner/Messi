import { createContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  isLogin: false,
  handleLogin: () => {},
});
export function AuthContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  function handleLogin() {
    setIsLogin((login) => !login);
  }
  const authContext = {
    isAuthenticated: false,
    isLogin,
    handleLogin,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}
export default AuthContext;
