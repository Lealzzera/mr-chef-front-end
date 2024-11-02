export function removeDashAndDots(value: string) {
  const cleanValue = value.replace(/[() .-]/g, "");
  return cleanValue;
}
