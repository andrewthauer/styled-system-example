import React from 'react'
import { range } from 'ramda'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Panel,
  Text,
  Title,
} from './system'

const lorem = `
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam aut,
  corrupti ut officiis eaque quo voluptate eligendi omnis, exercitationem
  voluptas sed tempore reprehenderit atque dolorum corporis nihil at
  accusantium odit!
`

const HomeBox = (props) => <Box {...props} my={3} p={3} />
const HomeBoxHeader = (props) => <Heading {...props} is="header" />

export const Home = (props) => (
  <Container bg="blacks.9" p={4} m={2}>
    <Title>Page Title</Title>

    <HomeBox bg="blue" color="whites.1">
      <HomeBoxHeader>Box (full width)</HomeBoxHeader>
      <Text>{lorem}</Text>
    </HomeBox>

    <HomeBox width={1 / 2} bg="navy" color="whites.1">
      <HomeBoxHeader color="whites.1">Box (half width)</HomeBoxHeader>
      <Text>{lorem}</Text>
      <Flex flexWrap="wrap" my={3}>
        {range(1, 11).map((i) => (
          <Box bg="red" m={1} p={3} width={60} textAlign="center">
            Box {i}
          </Box>
        ))}
      </Flex>
    </HomeBox>

    <HomeBox width={1 / 3} bg="orange" color="whites.1">
      <HomeBoxHeader>Box (third width)</HomeBoxHeader>
      <Box p={3}>
        <Button primary>Click Me</Button>
      </Box>
    </HomeBox>

    <Panel bg="white">
      <Panel.Header>Panel</Panel.Header>
      <Box p={3}>
        <Text>{lorem}</Text>
      </Box>
    </Panel>
  </Container>
)

export default Home
