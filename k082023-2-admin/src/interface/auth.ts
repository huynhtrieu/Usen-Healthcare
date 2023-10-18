export interface loginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse {
  status: number;
  errors: any[];
  result: {
    access_token: string;
    token_type: string;
  };
}
