import { style } from 'styled-system'

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
