import { keyframes } from 'styled-components'
import styled from 'styled-components'

export const MainImage = (props) => {
  // const imgContainer = {
  //   height: '90vh',
  //   width: '100%',
  //   backgroundColor: '#EDEEF1',
  //   display: 'inline-flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: '2rem',
  // }

  // const mainTitle = {
  //   fontSize: '3rem',
  //   letterSpacing: '0.4rem',
  //   marginBottom: '4rem',
  //   textAlign: 'center',
  // }

  // const mainNote = {
  //   fontSize: '1.25rem',
  //   letterSpacing: '0.1rem',
  //   marginBottom: '0.5rem',
  // }

  return (
    <AnimBox>
      <h2>{props.title}</h2>
      <span>{props.subtitle1}</span>
      <span>×</span>
      <span>{props.subtitle2}</span>
    </AnimBox>
  )
}

//アニメーションの定義文。最初と最後を定義する
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const AnimBox = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #edeef1;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  h2 {
    animation: ${fadeIn} 1.25s ease-in-out;
    font-size: 3rem;
    letter-spacing: 0.4rem;
    margin-bottom: 4rem;
    text-align: center;
  }
  span {
    animation: ${fadeIn} 1.25s ease-in-out;
    font-size: 1.25rem;
    letter-spacing: 0.1rem;
    margin-bottom: 0.5rem;
  }
`
