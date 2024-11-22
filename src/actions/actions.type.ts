export interface LoginResponse {
  status: number;
  data: {
    accessToken: string;
  };
}

export interface StoreObject {
  cep: string;
  city: string;
  id: number;
  name: string;
  neighborhood: string;
  ownerId: string;
  role: string;
  state: string;
  street: string;
}

export interface GetStoreResponse {
  data: StoreObject[];
  status: number;
}
