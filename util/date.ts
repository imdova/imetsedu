export function createDateFromInput(dateString: string): Date {
  // Split the input string by the hyphen (-)
  const [year, month, day] = dateString
    .split("-")
    .map((part) => parseInt(part, 10));

  // Note: JavaScript's Date object expects the month to be 0-indexed (0 = January, 11 = December)
  return new Date(year, month - 1, day);
}
