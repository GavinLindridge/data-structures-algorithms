const calcFrequencyMap = (arr: number[]) => {
  return arr.reduce((acc: Record<string, number>, curr) => {
    acc[curr] = curr in acc ? acc[curr] + 1 : 1
    return acc
  }, {})
}

const square = (num: number) => num * num

export const sameSquared = (arr1: number[], arr2: number[]) => {
  if (arr1.length !== arr2.length) return false

  const arr1Frequency = calcFrequencyMap(arr1.map(square))
  const arr2Frequency = calcFrequencyMap(arr2)

  return Object.entries(arr1Frequency).every(
    ([key, value]) => arr2Frequency[key] === value,
  )
}
