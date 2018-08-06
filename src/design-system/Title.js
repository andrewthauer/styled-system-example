import system from 'system-components'
import { Heading } from './Heading'

export const Title = system(
  {
    is: Heading.h1,
    fontSize: 6,
    fontFamily: 'serif',
    borderBottom: 2,
    mb: 4,
    lineHeight: 'title',
    textStyle: 'smallcaps',
  },
  'borders',
)

Title.displayName = 'Title'

export default Title
