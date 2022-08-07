export interface LoginResponse {
  access_token: string;
  user: User;
}

export interface User {
  name: string;
  email: string;
}
