import * as fcl from "@onflow/fcl";
import {
  useCallback,
  useContext,
  useState,
  createContext,
  useEffect,
  useMemo,
} from "react";
import "flow/config";

type IFclContext = {
  currentUser: fcl.CurrentUserObject | null | undefined;
  connect: () => void;
  logout: () => void;
};

const FclContext = createContext<IFclContext | null>(null);

const FclContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<fcl.CurrentUserObject | null>(
    null
  );

  const connect = useCallback(() => {
    fcl.authenticate();
  }, []);

  const logout = useCallback(async () => {
    await fcl.unauthenticate();
  }, []);

  useEffect(() => fcl.currentUser.subscribe(setCurrentUser), []);

  const memoizedValue = useMemo(
    () => ({
      currentUser,
      connect,
      logout,
    }),
    [currentUser, connect, logout]
  );

  return (
    <FclContext.Provider value={memoizedValue}>{children}</FclContext.Provider>
  );
};

export default FclContextProvider;

export const useFclContext = () => {
  const context = useContext(FclContext);
  if (context === undefined || context === null) {
    throw new Error("useFclContext must be used within a FclContextProvider");
  }
  return context;
};
