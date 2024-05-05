export function capitalizeFirst(strs: string[]): string[] {
  if (strs.length === 0) return []

  const firstCapitalized = strs[0].charAt(0).toUpperCase() + strs[0].slice(1)
  const rest = strs.slice(1)

  return [firstCapitalized].concat(...capitalizeFirst(rest))
}
