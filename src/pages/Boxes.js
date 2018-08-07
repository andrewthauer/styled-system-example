import React from 'react'
import { range } from 'ramda'
import {
  Box,
  Button,
  Card,
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

export const Boxes = () => (
  <Box bg="lightGray" p={4} m={2}>
    <Title>Boxes</Title>

    <CustomBox bg="blue" color="white">
      <CustomBoxHeader>Box (full width)</CustomBoxHeader>
      <Text>{lorem}</Text>
    </CustomBox>

    <CustomBox width={1 / 2} bg="blue" color="white">
      <CustomBoxHeader color="white">Box (half width)</CustomBoxHeader>
      <Text>{lorem}</Text>
      <Flex flexWrap="wrap" my={3}>
        {range(1, 11).map((i) => (
          <Box key={i} bg="red" m={1} p={3} width={60} textAlign="center">
            Box {i}
          </Box>
        ))}
      </Flex>
    </CustomBox>

    <CustomBox width={1 / 3} bg="orange" color="whites">
      <CustomBoxHeader>Box (third width)</CustomBoxHeader>
      <Box p={3}>
        <Button primary>Click Me</Button>
      </Box>
    </CustomBox>

    <Panel border={1} borderColor="white" mt={2} p={2}>
      <Heading.h3>Cards</Heading.h3>
      <Flex flexWrap="wrap">
        {range(1, 10).map((i) => (
          <Box key={1} width={1 / 3} p={1}>
            <Card key={i} cardStyle={i % 2 === 0 && 'selected'}>
              Card {i}
            </Card>
          </Box>
        ))}
      </Flex>
    </Panel>

    <Panel bg="white" mt={2}>
      <Panel.Header>Panel</Panel.Header>
      <Box p={3}>
        <Text>{lorem}</Text>
      </Box>
    </Panel>
  </Box>
)

Boxes.displayName = 'Boxes'

export default Boxes
