import styled from 'styled-components'

export const VideoDetailsViewsContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin: 60px 0px 60px 0px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin: 0px 0px 0px 250px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
