export const formatPrice = (pence: number): string => {
  const pounds = pence / 100;
  return `£${pounds.toFixed(2)}`;
};

export const penceToPounds = (pence: number): number => {
  return pence / 100;
};
