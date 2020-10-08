import styled from 'styled-components'

export const GameTemplate = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;

background-color: ${({theme})=> theme.background};

box-shadow: 0 10px 20px 0 rgba(255, 255, 255, 0.9);
`
export const ResponseArea = styled.div`
background-color: ${({theme})=> theme.background};

`