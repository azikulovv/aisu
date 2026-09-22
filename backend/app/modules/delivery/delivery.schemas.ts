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
  quantity: v.pipe(
    v.number("Количество обязательно"),
    v.integer("Количество должно быть целым числом"),
    v.minValue(1, "Количество должно быть не меньше 1"),
  ),
  isPaid: v.boolean(),
});

export const updateDeliveryPaymentSchema = v.object({
  isPaid: v.boolean(),
});
