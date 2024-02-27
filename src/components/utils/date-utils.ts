export function format(date: Date | null, formatString: string) {
  if (!date) return;

  const parts = {
    yyyy: date.getFullYear(),
    MM: date.getMonth() + 1,
    dd: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
  } as const;

  let formattedDate = formatString;
  Object.keys(parts).forEach((part) => {
    formattedDate = formattedDate.replace(
      part,
      String(parts[part as keyof typeof parts]).padStart(part.length, "0")
    );
  });

  return formattedDate;
}
