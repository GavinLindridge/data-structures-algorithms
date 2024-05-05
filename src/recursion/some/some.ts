export function some<T>(vals: T[], callback: (val: T) => boolean): boolean {
  if (vals.length === 0) return false
  if (callback(vals[0])) return true
  return some(vals.slice(1), callback)
}
