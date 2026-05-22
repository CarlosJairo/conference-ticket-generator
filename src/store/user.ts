import { create } from "zustand";
interface UserData {
  fullName: string;
  email: string;
  githubUser: string;
  url: string;
}
interface User extends UserData {
  setUser: (user: UserData) => void;
}

export const useUserStore = create<User>()((set) => ({
  fullName: "",
  email: "",
  githubUser: "",
  url: "",
  setUser: (user: UserData) =>
    set(() => ({
      fullName: user.fullName,
      email: user.email,
      githubUser: user.githubUser,
      url: user.url,
    })),
}));
