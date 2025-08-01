"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useReducer,
} from "react";
import { usePathname, useRouter } from "next/navigation";

// Define the Session interface
export interface Session {
  _id?: string;
  email: string;
  token?: string;
  isAdmin?: boolean;
  fullName: string;
}

// Define the AuthContext type
interface AuthContextType {
  session: Session | null;
  login: (userData: Session) => void;
  signOut: () => void;
  isOpen: boolean;
  toggle: () => void;
}

type ReducerAction<T = any> = {
  type: string;
  payload?: T;
};

type ReducerState<T = any> = T;

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: ReducerState<any> = {};

function reducer(state: ReducerState, action: ReducerAction){

  switch(action.type){
    case "" :
      return {
        ...state,

      }
      default:
            throw new Error("unknown action")
    }
}

// AuthProvider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [{}, dispatch] = useReducer(reducer, initialState)

  const router = useRouter();
  const pathName = usePathname();

  // Load session from localStorage on initial render
  //   useEffect(() => {
  //     const storedSession = localStorage.getItem("session");
  //     if (storedSession) {
  //       setSession(JSON.parse(storedSession));
  //     }
  //     setLoading(false);
  //   }, [router, pathName]);

  //   useEffect(() => {
  //     if (!loading && !session) {
  //       if (pathName?.includes("/dashboard") || pathName?.includes("/admin"))
  //         router.push("/");
  //     }
  //   }, [loading, session, router, pathName]);

  //   useEffect(() => {
  //     if (session && !session.isAdmin) {
  //       if (pathName?.includes("/admin")) router.push("/dashboard");
  //     }
  //   }, [loading, session, router, pathName]);
  const toggle = () => setIsOpen((prev) => !prev);
  const login = (userData: Session) => {
    setSession(userData);
    localStorage.setItem("session", JSON.stringify(userData));
    router.push(userData.isAdmin ? "/admin" : "/dashboard");
  };

  // Sign out function
  const signOut = () => {
    setSession(null);
    localStorage.removeItem("session");
    router.push("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        toggle,
        session,
        login,
        signOut,
        isOpen,
      }}
    >
      {/* {loading ? null : children} */}
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
