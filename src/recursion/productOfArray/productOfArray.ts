export function productOfArray(nums: number[]): number {
  if (nums.length === 0) return 1
  return nums[0] * productOfArray(nums.slice(1))
}
