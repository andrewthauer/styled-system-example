import React from 'react'
import { Box, Column, Flex, Heading, Row, Title } from '../design-system'

export const Responsive = () => (
  <Box>
    <Title>Responsive</Title>

    <Heading.h2>Flex Grid (Wrapped)</Heading.h2>

    <Flex flexWrap="wrap" color={'white'}>
      <Box width={[1, 1 / 2]} my={[2, 0]}>
        <Box p={2} m={[0, 2]} bg={'blue'}>
          Column A
        </Box>
      </Box>
      <Box width={[1, 1 / 2]} my={[2, 0]}>
        <Box p={2} m={[0, 2]} bg={'blue'}>
          Column B
        </Box>
      </Box>
    </Flex>

    <Heading.h2>Row / Column</Heading.h2>

    <Row flexWrap="wrap">
      <Column px={2}>Column A</Column>
      <Column px={2}>Column B</Column>
    </Row>

    <Heading.h2>Responsive Margins</Heading.h2>

    <Box
      m={[1, 2, 3, 4]}
      p={[1, 2, 3, 4]}
      fontSize={[4, 5, 6, 7]}
      bg={'red'}
      color={'white'}
    >
      Box
    </Box>
  </Box>
)

Responsive.displayName = 'Responsive'

export default Responsive
