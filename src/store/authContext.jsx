import { createContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  handleLogin: () => {},
});
export function AuthContextProvider({ children }) {
  const authContext = {
    isAuthenticated: false,
    handleLogin,
  };
  const [isLogin, setIsLogin] = useState(authContext.isAuthenticated);
  function handleLogin() {
    setIsLogin(!isLogin);
  }
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}
export default AuthContext;
