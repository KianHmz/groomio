export const isValidPhoneNumber = (phone: string): boolean => {
  const pattern = /^9\d{9}$/;
  return pattern.test(phone);
};

export const extractDigits = (value: string): string => {
  return value.replace(/\D/g, "");
};