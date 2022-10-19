import styled from 'styled-components'

export type BackgroundVariant =
  | 'yellow-dark'
  | 'base-text'
  | 'yellow'
  | 'purple-dark'

interface BackgroundProps {
  variant: BackgroundVariant
}

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 5.875rem auto;
  width: 100%;
`

export const CircleIcon = styled.div<BackgroundProps>`
  display: flex;
  padding: 0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 1000px;
  align-items: center;

  ${(props) => {
    return `background-color: ${props.theme[props.variant]}`
  }}
`

export const PresentationContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 3.5rem;
  width: 100%;

  aside {
    gap: 4.125rem;
    display: flex;
    flex-direction: column;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      line-height: 1.3;
      font-weight: 800;
      text-align: left;

      color: ${(props) => props.theme['base-title']};

      border: 1px solid red;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 26px;
      font-weight: 400;
      text-align: left;
      margin-top: 1rem;

      color: ${(props) => props.theme['base-subtitle']};
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      list-style-type: none;

      width: 100%;
      gap: 2.5rem;

      border: 1px solid red;

      li {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 1rem;
        line-height: 20px;
      }
    }
  }
`
