import * as v from "valibot";

export const createStoreSchema = v.object({
  name: v.pipe(
    v.string("Имя обязательно"),
    v.minLength(2, "Имя должно содержать минимум 2 символа"),
    v.maxLength(255, "Имя должно содержать максимум 255 символа"),
  ),
  location: v.pipe(
    v.string("Имя обязательно"),
    v.minLength(2, "Имя должно содержать минимум 2 символа"),
    v.maxLength(255, "Имя должно содержать максимум 255 символа"),
  ),
});
