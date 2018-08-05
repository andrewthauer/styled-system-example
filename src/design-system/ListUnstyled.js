import system from 'system-components'
import { List } from './List'

export const ListUnstyled = system(
  {
    is: List,
  },
  { listStyleType: 'none' },
)

ListUnstyled.displayName = 'ListUnstyled'

export default ListUnstyled
