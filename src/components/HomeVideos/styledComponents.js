import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  height: 70vh;
`
export const NoVideosImage = styled.img`
  display: flex;
  align-self: center;
  width: 50px;
  height: 100px;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 200px;
  }
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
`

export const NoVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.noteColor};
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #fff;
  padding: 5px 10px 5px 10px;
  font-family: 'Roboto';
  font-size: 15px;
`
export const VideosCardList = styled.ul`
  list-style-type: none;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
