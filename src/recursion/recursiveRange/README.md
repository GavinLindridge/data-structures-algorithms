## Example recursive flow for recursiveRange(6)

```typescript
recursiveRange(6)
// => 6 + recursiveRange(5)
// => 6 + 5 + recursiveRange(4)
// => 6 + 5 + 4 + recursiveRange(3)
// => 6 + 5 + 4 + 3 + recursiveRange(2)
// => 6 + 5 + 4 + 3 + 2 + recursiveRange(1)
// => 6 + 5 + 4 + 3 + 2 + 1 = 21
```

## Time Complexity

The time complexity of the `recursiveRange` function is O(n), where `n` is the `num` parameter. This is because the function recursively calls itself `num` times, each time decrementing `num` by 1 until it reaches the base case of 1.
