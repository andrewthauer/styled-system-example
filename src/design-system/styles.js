import { style, compose } from 'styled-system'

// Grid

export const gridArea = style({
  prop: 'gridArea',
  transformValue: (n) => `${n}`,
})

export const gridTemplateAreas = style({
  prop: 'gridTemplateAreas',
  transformValue: (n) => `${n}`,
})

// Border

const borderRadiusStyle = (corner) => {
  const prop = `border${corner}Radius`
  return style({
    prop,
    key: 'radii',
    transformValue: (n) => `${n}px`,
  })
}

export const borderTopLeftRadius = borderRadiusStyle('TopLeft')
export const borderTopRightRadius = borderRadiusStyle('TopRight')
export const borderBottomLeftRadius = borderRadiusStyle('BottomLeft')
export const borderBottomRightRadius = borderRadiusStyle('BottomRight')

export const borderRadii = compose(
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomRightRadius,
)
