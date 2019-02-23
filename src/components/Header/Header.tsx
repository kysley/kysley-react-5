import React from 'react'

import {
  Wrapper,
  Title,
  List,
  ListItem,
} from './styles'

const Header = () => (
  <Wrapper>
    <Title>Evan Kysley</Title>
    <List>
      <ListItem href="https:/github.com/kysley" target="_blank">Github</ListItem>
      <ListItem href="https://linkedin.com/in/evankysley" target="_blank">LinkedIn</ListItem>
      <ListItem href="http://evan.works" target="_blank">evan.works</ListItem>
    </List>
  </Wrapper>
)

export default Header
