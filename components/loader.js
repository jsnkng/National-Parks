import styled from 'styled-components'

const Loader = () => (
  <Loader__Container />
)

export default Loader

const Loader__Container = styled.div`
  border: 1rem solid ${({ theme }) => theme.colors.color_two};
  border-top: 1rem solid ${({ theme }) => theme.colors.color_one};
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  animation: spin 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12rem;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`