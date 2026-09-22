import axios from "axios";

type ApiErrorResponse = {
  error?: {
    message?: string;
  };
};

export const getAuthErrorMessage = (
  error: unknown,
  fallback = "Не удалось выполнить запрос. Попробуйте ещё раз",
): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.error?.message ?? fallback;
  }

  return fallback;
};
