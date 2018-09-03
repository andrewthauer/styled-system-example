# TOOO

- Usage of `mixed`
- Figure out patterns for custom styles
  - variants vs extending vs custom props
  - some utility function to comb
  - When should a variant be used an not used
  - Style merging
- Theme switcher
- Ability to get theme transformed value (e.g. space.getValue)
- Use mixed

# CSS Style Mapper

```js
export const itemMarginStyle = cssStyle({
  prop: itemMarginStyle,
  key: 'space',
  transformValue: (n) => `${n}px`,
  css: (value) => {
    '> *': {
      margin: value,
    }
  }
}
```
