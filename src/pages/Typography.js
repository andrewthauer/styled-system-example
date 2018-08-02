import React from 'react'
import { range } from 'ramda'
import {
  Box,
  Button,
  Flex,
  Heading,
  Panel,
  Text,
  Title,
} from '../design-system'

const lorem = `
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam aut,
  corrupti ut officiis eaque quo voluptate eligendi omnis, exercitationem
  voluptas sed tempore reprehenderit atque dolorum corporis nihil at
  accusantium odit!
`

const CustomBox = (props) => <Box {...props} my={3} p={3} />
const CustomBoxHeader = (props) => <Heading {...props} is="header" />

export const Typography = (props) => (
  <Box bg="blacks.9" p={4} m={2}>
    <Title>Typography</Title>

    <CustomBox bg="blue" color="whites.1">
      <CustomBoxHeader>Box (full width)</CustomBoxHeader>
      <Text>{lorem}</Text>
    </CustomBox>

    <CustomBox width={1 / 2} bg="navy" color="whites.1">
      <CustomBoxHeader color="whites.1">Box (half width)</CustomBoxHeader>
      <Text>{lorem}</Text>
      <Flex flexWrap="wrap" my={3}>
        {range(1, 11).map((i) => (
          <Box bg="red" m={1} p={3} width={60} textAlign="center">
            Box {i}
          </Box>
        ))}
      </Flex>
    </CustomBox>

    <CustomBox width={1 / 3} bg="orange" color="whites.1">
      <CustomBoxHeader>Box (third width)</CustomBoxHeader>
      <Box p={3}>
        <Button primary>Click Me</Button>
      </Box>
    </CustomBox>

    <Panel bg="white">
      <Panel.Header>Panel</Panel.Header>
      <Box p={3}>
        <Text>{lorem}</Text>
      </Box>
    </Panel>
  </Box>
)

export default Typography
