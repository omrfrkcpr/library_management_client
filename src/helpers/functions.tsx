export function truncateText(text: string, length: number) {
  const words = text.split(" ");

  if (words.length > length) {
    return words.slice(0, length).join(" ");
  }

  return text;
}

export const getTruncateLength = (width: number) => {
  if (width >= 1024) return 45; // lg
  if (width >= 768) return 35; // md
  return 32; // default
};

export function extractBookId(url: string) {
  const match = url.match(/book\/(\d+)$/);
  return match ? parseInt(match[1], 10) : null;
}
