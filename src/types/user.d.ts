type Address = {
  street: string;
  city: string;
  country: string;
};

export type User = {
  _id: string;
  authProviderId: string;
  name: string | undefined;
  email: string | undefined;
  address: Address | undefined;
  createdAt: Date;
  updatedAt: Date;
  _v: number;
};
