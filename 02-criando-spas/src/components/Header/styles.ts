import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;

    div {
      width: 9rem;
      height: 2.375rem;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};

      border-radius: 0.375rem;

      font-size: 0.875rem;
      line-height: 1.8;

      &:hover {
        background: ${(props) => props.theme['purple-dark']};
        color: ${(props) => props.theme.white};
      }
    }

    button {
      width: 2.375rem;
      height: 2.375rem;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      border: 3px solid transparent;
      border-radius: 0.375rem;

      &:hover {
        background: ${(props) => props.theme.yellow};
        color: ${(props) => props.theme.white};
      }
    }
  }
`
