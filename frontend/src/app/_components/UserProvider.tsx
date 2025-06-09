"use client";
import {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";

type UserData = {
  userId: string;
};

type AuthContextType = {
  user: UserData | null;
};

export const AuthContext = createContext<AuthContextType>({ user: null });

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext<AuthContextType>(AuthContext);
