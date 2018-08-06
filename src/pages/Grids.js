import React from 'react'
import { Box, Grid, Title } from '../design-system'

const gridStyle = {
  gridTemplateColumns: '1fr 2fr 2fr',
  gridGap: 5,
  gridTemplateAreas: `
    'header  header  header'
    'sidebar content content'
    'footer  footer  footer'
  `,
}

export const Grids = () => (
  <Box>
    <Title>Grid</Title>
    <Grid width={1} bg="blue" color="white" {...gridStyle}>
      <Box gridArea="header">Header</Box>
      <Box gridArea="sidebar">Sidebar</Box>
      <Box gridArea="content">Content</Box>
      <Box gridArea="footer">Footer</Box>
    </Grid>
    <br />
    <br />
    <Box gridArea="header" width={1} bg="red">
      Header
    </Box>
  </Box>
)

Grids.displayName = 'Grids'

export default Grids
