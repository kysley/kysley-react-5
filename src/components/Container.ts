import styled from '@emotion/styled'

const Container = styled.main`
  width: 40vw;
  display: flex;
  margin-top: 5vh;
  flex-direction: column;

  @media (max-width: 996px) {
    width: 60vw;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`

export {
  Container,
  Wrapper,
}
