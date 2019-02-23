import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'Pages/Home'
import { Container, Wrapper } from 'Components/Container'
import Header from 'Components/Header/Header'

const Routes = () => (
  <Wrapper>
    <Container>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  </Wrapper>
)

export default Routes
