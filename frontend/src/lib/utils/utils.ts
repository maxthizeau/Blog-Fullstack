export function excerpt(content: string, length = 100): string {
  return `${content.substring(0, length)}[...]`
}
