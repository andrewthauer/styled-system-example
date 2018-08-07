import React from 'react'
import { FlowList } from '../components'
import { Box, Button, Title } from '../design-system'

export const Buttons = () => (
  <Box>
    <Title>Buttons</Title>

    <FlowList itemMargin={2}>
      <Button buttonType="primary">Primary</Button>
      <Button buttonType="secondary">Secondary</Button>
      <Button buttonType="success">Success</Button>
      <Button buttonType="danger">Danger</Button>
      <Button buttonType="warning">Warning</Button>
      <Button buttonType="info">Info</Button>
      <Button buttonType="light">Light Button</Button>
      <Button buttonType="dark">Dark Button</Button>
    </FlowList>

    <FlowList itemMargin={2}>
      <Button buttonType="primary" buttonStyle="outline">
        Primary
      </Button>
      <Button buttonType="secondary" buttonStyle="outline">
        Secondary
      </Button>
      <Button buttonType="success" buttonStyle="outline">
        Success
      </Button>
      <Button buttonType="danger" buttonStyle="outline">
        Danger
      </Button>
      <Button buttonType="warning" buttonStyle="outline">
        Warning
      </Button>
      <Button buttonType="info" buttonStyle="outline">
        Info
      </Button>
      <Button buttonType="light" buttonStyle="outline">
        Light Button
      </Button>
      <Button buttonType="dark" buttonStyle="outline">
        Dark Button
      </Button>
    </FlowList>

    <FlowList itemMargin={2}>
      <Button.Small>Small</Button.Small>
      <Button>Default</Button>
      <Button.Large>Large</Button.Large>
    </FlowList>

    <FlowList itemMargin={2}>
      <Button disabled buttonType="primary">
        Primary
      </Button>
      <Button disabled buttonType="secondary">
        Secondary
      </Button>
      <Button disabled buttonType="success">
        Success
      </Button>
      <Button disabled buttonType="danger">
        Danger
      </Button>
      <Button disabled buttonType="warning">
        Warning
      </Button>
      <Button disabled buttonType="info">
        Info
      </Button>
      <Button disabled buttonType="light">
        Light Button
      </Button>
      <Button disabled buttonType="dark">
        Dark Button
      </Button>
    </FlowList>
  </Box>
)

Buttons.displayName = 'Buttons'

export default Buttons
