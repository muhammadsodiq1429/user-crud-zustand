export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export type InitialState = Omit<IUser, "id">;
