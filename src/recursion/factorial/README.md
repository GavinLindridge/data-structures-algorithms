## Example recursive flow for factorial(7)

```typescript
factorial(7)
// => 7 * factorial(6)
// => 7 * 6 * factorial(5)
// => 7 * 6 * 5 * factorial(4)
// => 7 * 6 * 5 * 4 * factorial(3)
// => 7 * 6 * 5 * 4 * 3 * factorial(2)
// => 7 * 6 * 5 * 4 * 3 * 2 * factorial(1)
// => 7 * 6 * 5 * 4 * 3 * 2 * 1 * factorial(0)
// => 7 * 6 * 5 * 4 * 3 * 2 * 1 * 1 = 5040
```

## Complexity

The time complexity of the factorial function is O(n), where n is the input number. This is because the function recursively calls itself num times.
