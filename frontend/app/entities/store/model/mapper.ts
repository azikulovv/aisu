import type {
  ICreateStoreResponse,
  ICreateStoreResponseDto,
} from "../composables/api/types";

export const mapCreateStore = (
  data: ICreateStoreResponseDto,
): ICreateStoreResponse => {
  return {
    message: data.message,
    store: {
      ...data.store,
      createdAt: data.store.created_at,
      updatedAt: data.store.updated_at,
    },
  };
};
