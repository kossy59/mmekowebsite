export interface UserData {
  userID: string;
  [key: string]: any;
}

export const useAuth = (): UserData | null => {
  if (typeof window === "undefined") return null;
  const userData = localStorage.getItem("login");

  try {
    return userData ? JSON.parse(userData) : null;
  } catch {
    return null;
  }
};
