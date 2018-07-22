import React from 'react'
import system from 'system-components'

export const Heading = system(
  {
    is: 'h2',
    fontSize: 5,
    fontWeight: 'bold',
    lineHeight: 'title',
    m: 0,
    px: 2,
  },
  'fontSize',
  'fontFamily',
  'color',
  'textAlign',
)

Heading.displayName = 'Heading'

Heading.h1 = (props) => <Heading {...props} is="h1" fontSize={6} />
Heading.h2 = (props) => <Heading {...props} is="h2" fontSize={5} />
Heading.h3 = (props) => <Heading {...props} is="h3" fontSise={4} />
Heading.h4 = (props) => <Heading {...props} is="h4" fontSise={3} />
Heading.h5 = (props) => <Heading {...props} is="h5" fontSise={2} />
Heading.h6 = (props) => <Heading {...props} is="h6" fontSise={1} />

export default Heading
