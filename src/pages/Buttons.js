import React from 'react'
import { Box, Button, Flex, Title } from '../design-system'

const style = {
  my: 2,
}

export const Buttons = () => (
  <Box>
    <Title>Buttons</Title>

    <Flex flexDirection="column" alignItems="start">
      <Button {...style} py={1}>
        Simple Button
      </Button>

      <Button {...style} primary>
        Primary Prop Button
      </Button>

      <Button {...style} variant="primary">
        Primary Variant Button
      </Button>

      <Button.Small {...style}>Small Button</Button.Small>

      <Button.Large {...style}>Large Button</Button.Large>

      <Button.Large {...style} primary>
        Large Button
      </Button.Large>

      <Button {...style} large primary>
        Large Primary
      </Button>
    </Flex>
  </Box>
)

Buttons.displayName = 'Buttons'

export default Buttons
