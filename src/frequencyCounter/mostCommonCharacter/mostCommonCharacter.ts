const calcFrequencyMap = (arr: any[]) => {
  return arr.reduce<Record<string, number>>((acc, curr) => {
    acc[curr] = curr in acc ? acc[curr] + 1 : 1
    return acc
  }, {})
}

type CharMax = {
  char: string
  count: number
}

export function mostCommonCharacter(str: string): CharMax {
  const charMap = calcFrequencyMap(str.split(''))

  return Object.entries(charMap).reduce<CharMax>(
    (prev, [char, count]) => (count > prev.count ? { char, count } : prev),
    { char: '', count: 0 },
  )
}
