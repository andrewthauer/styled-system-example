import { style, compose } from 'styled-system'
import {
  // flexbox
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  justifySelf,
  order,
  // grid
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
} from 'styled-system'
import { compositeStyle } from './util'

// === Flexbox ===

export const flexbox = compose(
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  justifySelf,
  order,
)

// === Grid ===

export const gridArea = style({
  prop: 'gridArea',
  transformValue: (n) => `${n}`,
})

export const gridTemplateAreas = style({
  prop: 'gridTemplateAreas',
  transformValue: (n) => `${n}`,
})

export const cssGrid = compose(
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
  // custom
  gridArea,
  gridTemplateAreas,
)

// === Borders ===

const borderRadiusStyle = (corner) =>
  style({
    prop: `border${corner}Radius`,
    key: 'radii',
    transformValue: (n) => `${n}px`,
  })

export const borderTopLeftRadius = borderRadiusStyle('TopLeft')
export const borderTopRightRadius = borderRadiusStyle('TopRight')
export const borderBottomLeftRadius = borderRadiusStyle('BottomLeft')
export const borderBottomRightRadius = borderRadiusStyle('BottomRight')

export const borderRadiusTop = compositeStyle({
  prop: 'borderRadiusTop',
  styles: { borderTopLeftRadius, borderTopRightRadius },
})

export const borderRadiusBottom = compositeStyle({
  prop: 'borderRadiusBottom',
  styles: { borderTopLeftRadius, borderTopRightRadius },
})

export const borderRadiusLeft = compositeStyle({
  prop: 'borderRadiusBottom',
  styles: { borderTopLeftRadius, borderBottomLeftRadius },
})

export const borderRadiusRight = compositeStyle({
  prop: 'borderRadiusBottom',
  styles: { borderTopLeftRadius, borderTopRightRadius },
})

export const borderRadii = compose(
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomRightRadius,
  // composites
  borderRadiusTop,
  borderRadiusLeft,
  borderRadiusBottom,
  borderRadiusRight,
)
