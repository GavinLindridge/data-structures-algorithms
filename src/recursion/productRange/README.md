## Example recursive flow for productRange(6)

```typescript
productRange(6)
// => 6 + productRange(5)
// => 6 + 5 + productRange(4)
// => 6 + 5 + 4 + productRange(3)
// => 6 + 5 + 4 + 3 + productRange(2)
// => 6 + 5 + 4 + 3 + 2 + productRange(1)
// => 6 + 5 + 4 + 3 + 2 + 1 = 21
```

## Complexity

The time complexity of the `productRange` function is O(n), where `n` is the `num` parameter. This is because the function recursively calls itself `num` times, each time decrementing `num` by 1 until it reaches the base case of 1.
