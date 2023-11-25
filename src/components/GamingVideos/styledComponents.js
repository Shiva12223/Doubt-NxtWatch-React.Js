import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin: 50px 0px 60px 0px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin: 50px 0px 0px 250px;
  }
`
export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  background-color: ${props => props.titleIconBgColor};
`

export const GamingTitleIconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 80px;
  margin: 0px 10px 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const GamingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const GamingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
