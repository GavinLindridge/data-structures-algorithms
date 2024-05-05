## Example recursive flow for productOfArray([1, 2, 3, 10])

```typescript
productOfArray([1, 2, 3, 10])
// => 1 * productOfArray([2, 3, 10])
// => 1 * 2 * productOfArray([3, 10])
// => 1 * 2 * 3 * productOfArray([10])
// => 1 * 2 * 3 * 10 * productOfArray([])
// => 1 * 2 * 3 * 10 * 1 = 60
```

## Complexity

The time complexity of the productOfArray function is O(n), where n is the length of the nums array. This is because the function recursively calls itself nums.length times.
