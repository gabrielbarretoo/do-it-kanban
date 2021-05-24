export default function trimString(title: string, chars: number): string {
  if (title.length >= chars) {
    const index = title.substring(0, chars).lastIndexOf(' ');
    const newTitle = `${title.substring(0, index)}...`;
    return newTitle;
  }
  return title;
}
