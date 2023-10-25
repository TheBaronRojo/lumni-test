export function localStringDateToIsoStringDate(value: string): string {
  const [year, month, day] = value.split("-").map(x => +x);
  const expiresAt = new Date(year, month - 1, day);
  expiresAt.setDate(expiresAt.getDate() + 1);
  return expiresAt.toISOString();
}
