import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  height: 100vh;

  margin: 2rem auto;
  padding: 2rem 10rem;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`
