import { createContext, useCallback, useContext, useState } from "react";

interface UserContextType {
  name: string;
  userId: string;
  userStores: {}[];
  handleChangeName: (name: string) => void;
  handleChangeUserId: (userId: string) => void;
  handleChangeUserStores: (userStores: {}[]) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [userStores, setUserStores] = useState<{}[]>([]);

  const handleChangeName = useCallback((name: string) => {
    setName(name);
  }, []);

  const handleChangeUserId = useCallback((userId: string) => {
    setUserId(userId);
    localStorage.setItem("userId", JSON.stringify(userId));
  }, []);

  const handleChangeUserStores = useCallback((userStores: {}[]) => {
    setUserStores(userStores);
    localStorage.setItem("userStores", JSON.stringify(userStores));
  }, []);

  return (
    <UserContext.Provider
      value={{
        name,
        userId,
        userStores,
        handleChangeName,
        handleChangeUserId,
        handleChangeUserStores,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
