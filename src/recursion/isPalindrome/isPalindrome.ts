export function isPalindrome(str: string): boolean {
  if (str.length <= 1) return true
  if (str.charAt(0) !== str.charAt(str.length - 1)) return false
  return isPalindrome(str.slice(1, -1))
}
