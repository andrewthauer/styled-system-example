/* eslint-disable no-undef */

import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs'

import {
  Box,
  Button,
  // Container,
  // Flex,
  // Heading,
  // Link,
  // NavLink,
  // Panel,
  // Text,
  // Title,
} from '../design-system'

storiesOf('Welcome', module).add('to Storybook', () => (
  <div>Hello Storyboard!</div>
))

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .add('with fill', () => (
    <Box width={200} height={200} bg={'gray'}>
      Box!
    </Box>
  ))

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button onClick={action('clicked')}>{text('Label', 'Button')}</Button>
  ))
  .add('with primary', () => (
    <Button pimary onClick={action('clicked')}>
      {text('Label', 'Button')}
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
