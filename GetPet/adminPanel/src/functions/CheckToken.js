export function isInThePast(date) {
  const today = new Date();
  return Date.parse(date) < Date.parse(today);
}
