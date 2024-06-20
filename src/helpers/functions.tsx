export function truncateText(text: string) {
  const words = text.split(" ");

  if (words.length > 25) {
    return words.slice(0, 25).join(" ") + "...";
  }

  return text;
}
