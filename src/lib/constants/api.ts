export const API = {
  BASE_URL: import.meta.env?.VITE_API_BASE_URL ?? "http://localhost:3000",
  ENDPOINTS: {
    AUTH: {
      SEND_OTP: "/auth/send-otp",
      VERIFY_OTP: "/auth/verify-otp",
      LOGIN: "/auth/login",
      REGISTER: "/auth/register",
      LOGOUT: "/auth/logout",
    },
  },
} as const;