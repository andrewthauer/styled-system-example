import { style } from 'styled-system'

export const borderTopLeftRadius = style({
  prop: 'borderTopLeftRadius',
  cssProperty: 'borderTopLeftRadius',
  key: 'radii',
  transformValue: (v) => `${v}px`,
})

export const borderTopRightRadius = style({
  prop: 'borderTopRightRadius',
  cssProperty: 'borderTopRightRadius',
  key: 'radii',
  transformValue: (v) => `${v}px`,
})
