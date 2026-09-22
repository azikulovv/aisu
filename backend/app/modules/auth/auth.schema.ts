import * as v from "valibot";

export const signInSchema = v.object({
  email: v.pipe(v.string("Email обязателен"), v.email("Некорректный email")),

  password: v.pipe(
    v.string("Пароль обязателен"),
    v.minLength(8, "Пароль должен содержать минимум 8 символов"),
  ),
});

export const signUpSchema = v.object({
  email: v.pipe(v.string("Email обязателен"), v.email("Некорректный email")),
  first_name: v.pipe(
    v.string("Имя обязательно"),
    v.minLength(2, "Имя должно содержать минимум 2 символа"),
  ),
  last_name: v.pipe(
    v.string("Фамилия обязательна"),
    v.minLength(2, "Фамилия должна содержать минимум 2 символа"),
  ),
  password: v.pipe(
    v.string("Пароль обязателен"),
    v.minLength(8, "Пароль должен содержать минимум 8 символов"),
  ),
});
