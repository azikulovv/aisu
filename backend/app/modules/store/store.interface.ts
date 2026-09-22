export interface IStore {
  user_id: string;
  id: string;
  name: string;
  location: string;
  updated_at: string;
  created_at: string;
}

export type ICreateStoreDto = Omit<IStore, "id" | "created_at" | "updated_at">;
