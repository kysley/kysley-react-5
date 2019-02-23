import React from 'react'

import Works, { Other } from '../utils/works'

import {
  Work,
  WorkName,
  WorkDesc,
} from 'Styled/Works'
import {
  Section,
  Header,
  Title,
  Meta,
} from 'Styled/Home'

const Home = () => (
  <>
    <Section>
      <Header>About.</Header>
      <Title>Currently;</Title>
      <Meta>
        Front End Eng &rarr;
        <a href="https://adparlor.com/" target="_blank" rel="noopener noreferrer"> AdParlor</a>
      </Meta>
      <Title>Other;</Title>
      <Meta>
        Working on &rarr;
        <a href="https://github.com/withscribe/scribe" target="_blank" rel="noopener noreferrer"> Scribe</a>
      </Meta>
      <Meta>Another secret project &rarr; ?</Meta>
    </Section>
    <Section>
      <Header>Projects.</Header>
      {Works.map(work => (
        <Work key={work.order}>
          <WorkName href={work.link}>{work.name}</WorkName>
          <WorkDesc>
            &rarr;&nbsp;
            {work.desc}
          </WorkDesc>
        </Work>
      ))}
    </Section>
    <Section>
      <Header>More.</Header>
      {Other.map(work => (
        <Work key={work.order}>
          <WorkName href={work.link}>{work.name}</WorkName>
          <WorkDesc>
            &rarr;&nbsp;
            {work.desc}
          </WorkDesc>
        </Work>
      ))}
    </Section>
  </>
)

export default Home
