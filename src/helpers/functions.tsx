export function truncateText(text: string) {
  const words = text.split(" ");

  if (words.length > 30) {
    return words.slice(0, 30).join(" ") + "...";
  }

  return text;
}
