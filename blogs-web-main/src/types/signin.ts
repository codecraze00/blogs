export type SigninPayload = {
  email: string;
  password: string;
};

export type SigninResponse = {
  payload: {
    authtoken: string;
  };
};
