import styled from '@emotion/styled'

const Section = styled.section``

const Header = styled.h2`
  font-family: Theinhardt-Bold;
  font-size: 2rem;
  background: #000000;
  color: #ffffff;
  padding-left: 0.5em;
`

const Title = styled.h3`
  font-family: Theinhardt-Bold;
  padding-right: 1em;
  display: inline;
`

const Meta = styled.span`
  color: #000000;
  font-family: Theinhardt;
  display: block;
  margin: 0.25em;

  text-decoration: ${props => props.highlight ? 'underline' : 'none'};

  > a {
    /* text-decoration: underline; */
    color: #7e00ff;

    :hover {
      text-decoration: none;
    }
  }
`


export {
  Section,
  Header,
  Title,
  Meta,
}
