import React from 'react'
import system from 'system-components'

export const Heading = system(
  {
    is: 'h2',
    fontSize: 5,
    fontWeight: 'bold',
    // lineHeight: 1.25,
    m: 0,
    px: 2,
  },
  'color',
  'fontFamily',
  'fontSize',
  'lineHeight',
  'textAlign',
)

Heading.displayName = 'Heading'

Heading.h1 = (props) => (
  <Heading {...props} is="h1" mt={4} mb={2} fontSize={6} />
)
Heading.h1.displayName = 'Heading.h1'

Heading.h2 = (props) => (
  <Heading {...props} is="h2" mt={4} mb={2} fontSize={5} />
)
Heading.h2.displayName = 'Heading.h2'

Heading.h3 = (props) => (
  <Heading {...props} is="h3" mt={3} mb={2} fontSize={4} />
)
Heading.h3.displayName = 'Heading.h3'

Heading.h4 = (props) => (
  <Heading {...props} is="h4" mt={0} mb={0} fontSize={3} />
)
Heading.h4.displayName = 'Heading.h4'

Heading.h5 = (props) => (
  <Heading {...props} is="h5" mt={0} mb={0} fontSize={2} />
)
Heading.h5.displayName = 'Heading.h5'

Heading.h6 = (props) => (
  <Heading {...props} is="h6" mt={0} mb={0} fontSize={1} />
)
Heading.h6.displayName = 'Heading.h6'

export default Heading
