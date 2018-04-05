export class UserModel {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  sex: number;
  birthday: string;
  address: string;
  token: string;

  constructor(fields?: {
    id?: string;
    full_name?: string;
    email?: string;
    phone?: string;
    sex?: number;
    birthday?: string;
    address?: string;
    token?: string;
  }) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}

export interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}
