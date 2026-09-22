import * as v from "valibot";

export const createDeliverySchema = v.object({
  storeId: v.pipe(
    v.string("Магазин обязателен"),
    v.minLength(1, "Выберите магазин"),
  ),
  productName: v.pipe(
    v.string("Название продукта обязательно"),
    v.minLength(2, "Название продукта должно содержать минимум 2 символа"),
    v.maxLength(
      255,
      "Название продукта должно содержать максимум 255 символов",
    ),
  ),
  isPaid: v.boolean(),
});
