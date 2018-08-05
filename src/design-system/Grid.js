import system from 'system-components'
import { gridTemplateAreas } from './styles'

export const Grid = system(
  {
    is: 'div',
    display: 'grid',
    gridGap: 2,
  },
  'width',
  'space',
  'color',
  'gridGap',
  'gridRowGap',
  'gridColumnGap',
  'gridColumn',
  'gridRow',
  'gridAutoFlow',
  'gridAutoRows',
  'gridAutoColumns',
  'gridTemplateRows',
  'gridTemplateColumns',
  gridTemplateAreas,
)

Grid.displayName = 'Grid'

export default Grid
