import system from 'system-components'
import { Heading } from './Heading'

export const Title = system({
  is: Heading.h1,
  fontSize: 7,
  fontFamily: 'serif',
  mb: 4,
  borderBottom: 2,
  textStyle: 'smallcaps',
})

Title.displayName = 'Title'

export default Title
