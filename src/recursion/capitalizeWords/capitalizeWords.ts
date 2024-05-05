export function capitalizeWords(strs: string[]): string[] {
  if (strs.length === 0) return []

  return [strs[0].toUpperCase()].concat(capitalizeWords(strs.slice(1)))
}
