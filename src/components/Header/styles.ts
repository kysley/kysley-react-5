import styled from '@emotion/styled'

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: [title] 1fr [links] 1fr;
  width: 100%;
  margin-bottom: 2em;
`

const Title = styled.h1`
  font-family: Theinhardt-Bold;
  color: #000;
  margin: 0;
  grid-column: title;

  @media (max-width: 768px) {
    grid-column: title/-1;
  }
`

const List = styled.nav`
  grid-column: links;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    grid-column: links/1;
    justify-content: flex-start;
  }
`

const ListItem = styled.a`
  text-decoration: underline;
  color: #7e00ff;
  cursor: pointer;

  :not(:last-of-type) {
    margin-right: 1em;
  }

  :hover {
    text-decoration: none;
  }
`

export {
  Wrapper,
  Title,
  List,
  ListItem,
}
