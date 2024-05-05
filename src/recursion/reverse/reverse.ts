export function reverse(str: string): string {
  if (str.length === 0) return ''

  return str[str.length - 1] + reverse(str.slice(0, -1))
}