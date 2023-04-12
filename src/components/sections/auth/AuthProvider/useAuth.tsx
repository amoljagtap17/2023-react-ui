import { createContext, useContext } from "react";

interface UserContextStateType {
  user: any;
}

interface UserContextUpdaterType {
  signin: (user: any, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const UserContextState = createContext<UserContextStateType>(null!);
export const UserContextUpdater = createContext<UserContextUpdaterType>(null!);

export const useUserContextState = () => {
  const context = useContext(UserContextState);

  if (context === undefined) {
    throw new Error("useUserContextState was used outside of its Provider");
  }

  return context;
};

export const useUserContextUpdater = () => {
  const context = useContext(UserContextUpdater);

  if (context === undefined) {
    throw new Error("useUserContextUpdater was used outside of its Provider");
  }

  return context;
};
