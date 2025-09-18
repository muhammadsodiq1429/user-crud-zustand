import { create } from "zustand";
import type { InitialState, IUser } from "../types";

type UserStore = {
  users: IUser[];
  updatingUser: IUser | null;
  setUpdatingUser: (user: IUser | null) => void;
  addUser: (user: IUser) => void;
  updateUserById: (id: number, user: InitialState) => void;
  deleteUserById: (id: number) => void;
};

export const useUser = create<UserStore>()((set) => ({
  users: [],
  updatingUser: null,
  setUpdatingUser: (user) => set(() => ({ updatingUser: user })),
  addUser: (user) => {
    return set((state) => {
      return { users: [...state.users, user] };
    });
  },
  updateUserById: (id, user) =>
    set(({ users }) => ({
      users: users.map((item) =>
        id === item.id ? { ...item, ...user } : item
      ),
    })),
  deleteUserById: (id) =>
    set(({ users }) => ({ users: users.filter((user) => user.id !== id) })),
}));
