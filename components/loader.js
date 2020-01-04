import styled from 'styled-components'

const Loader = () => (
  <Loader__Container />
)

export default Loader

const Loader__Container = styled.div`
  border: 1em solid ${({ theme }) => theme.color_two};
  border-top: 1em solid ${({ theme }) => theme.color_one};
  border-radius: 50%;
  width: 6em;
  height: 6em;
  animation: spin 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12em;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`