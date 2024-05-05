## Example recursive flow for sum(7)

```typescript
sum([1, 3, 5, 7])
// => 1 + sum([3,5,7])
// => 1 + 3 + sum([5,7])
// => 1 + 3 + 5 + sum([7])
// => 1 + 3 + 5 + 7 + sum([])
// => 1 + 3 + 5 + 7 + 0 = 16
```

## Time Complexity

The time complexity of the sum function is O(n), where n is the length of numbers parameter. This is because the function recursively calls itself once for each of the numbers after removing the first value in the array.
