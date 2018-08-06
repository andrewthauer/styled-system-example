import system from 'system-components'
import { variant } from 'styled-system'
import Box from './Box'

// prettier-ignore
export const cardStyle = variant({
  prop: 'cardStyle',
  key: 'cardStyles'
})

export const Card = system(
  { is: Box, border: 1, p: 3 },
  { display: 'flex' },
  'space',
  'color',
  'borders',
  cardStyle,
)

Card.displayName = 'Card'

export default Card
