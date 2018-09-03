// eslint-disable react/prop-types */

import React from 'react'
import { Box, Button, Heading, Lead, Text, Title } from '../design-system'
import { FlowList } from '../components'

const Article = (props) => <Box is="article" {...props} my={4} />
const ArticleHeading = (props) => (
  <Heading {...props} color="white" bg="blue" mt={4} mb={2} p={1} />
)

export const Home = () => (
  <React.Fragment>
    <Title>Home</Title>

    <Article>
      <ArticleHeading>Headings</ArticleHeading>

      <Heading.h1>h1. Heading 1</Heading.h1>
      <Heading.h2>h2. Heading 2</Heading.h2>
      <Heading.h3>h3. Heading 3</Heading.h3>
      <Heading.h4>h4. Heading 4</Heading.h4>
      <Heading.h5>h5. Heading 5</Heading.h5>
      <Heading.h6>h6. Heading 6</Heading.h6>

      <ArticleHeading>Variants</ArticleHeading>

      <Heading.h4 textStyle="caps">
        Heading with `textStyle: caps` Variant
      </Heading.h4>
      <Heading.h4 textStyle="smallcaps">
        Heading with `textStyle: smallcaps` Variant
      </Heading.h4>
      <Heading.h4 colors="warning">
        Heading with `colors: warning` Variant
      </Heading.h4>
      <Heading.h4 textStyle="caps" colors="warning">
        Heading with `textStyle` & `colors` Variants
      </Heading.h4>
    </Article>

    <Article>
      <ArticleHeading>Copy</ArticleHeading>

      <Text>
        Normal text - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Architecto dignissimos sequi quas cumque rem rerum optio libero fuga
        nihil beatae pariatur temporibus molestias ullam in, amet natus.
        Explicabo, eos enim!
      </Text>

      <Text textStyle="warning">
        Text with textStyle warning - Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Architecto dignissimos sequi quas cumque rem rerum
        optio libero fuga nihil beatae pariatur temporibus molestias ullam in,
        amet natus. Explicabo, eos enim!
      </Text>

      <Lead>
        Lead text - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Architecto dignissimos sequi quas cumque rem rerum optio libero fuga
        nihil beatae pariatur temporibus molestias ullam in, amet natus.
        Explicabo, eos enim!
      </Lead>

      <Lead colors="warning">
        Lead text with colorStyle warning - Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Architecto dignissimos sequi quas cumque
        rem rerum optio libero fuga nihil beatae pariatur temporibus molestias
        ullam in, amet natus. Explicabo, eos enim!
      </Lead>
    </Article>

    <Article>
      <ArticleHeading>Buttons</ArticleHeading>

      <Button borderRadiusTop={0}>Button</Button>
    </Article>

    <Heading>Flow List</Heading>
    <FlowList fontSize="0">
      <Box display="inline-table" bg="purple" width={2 / 3} minHeight={200} />
      <Box display="inline-table" bg="red" width={1 / 3} minHeight={200} />
      <Box display="inline-table" bg="blue" width={2 / 3} minHeight={200} />
      <Box display="inline-table" bg="yellow" width={1 / 3} minHeight={200} />
    </FlowList>
  </React.Fragment>
)

Home.displayName = 'Home'

export default Home
