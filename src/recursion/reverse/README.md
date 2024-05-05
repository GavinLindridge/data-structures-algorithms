## Example recursive flow for reverse('hello')

```typescript
reverse('hello')
// => 'o' + reverse('hell')
// => 'ol' + reverse('hel')
// => 'oll' + reverse('he')
// => 'olle' + reverse('h')
// => 'olleh' + reverse('')
// => 'olleh'
```

## Time Complexity

The time complexity of the reverse function is O(n), where n is the length of the str parameter. This is because the function recursively calls itself once for each character in the string length
