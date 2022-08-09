export enum Roles {
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
  USER = 'USER',
  GEISHA = 'GEISHA',
}

export interface User {
  name: string;
  email: string;
  password: string;
  recoveryCode?: string;
  createdAt?: string;
  role?: Roles;
  placesLimit?: number;
  geishaId?: string;
}

export interface userParams {

}

export interface SharedUser {
  _id: string;
  name: string;
}