import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("customer_auth")
    );

    if (saved) {
      setCustomer(saved);
    }
  }, []);

  // LOGIN
  const login = (data) => {
    localStorage.setItem(
      "customer_auth",
      JSON.stringify(data)
    );

    setCustomer(data);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("customer_auth");

    setCustomer(null);
  };

  return (
    <AuthContext.Provider
      value={{
        customer,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);