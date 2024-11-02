export function validateAndFormatPhoneNumber(value: string) {
  value = value.replace(/\D/g, "");

  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
}
