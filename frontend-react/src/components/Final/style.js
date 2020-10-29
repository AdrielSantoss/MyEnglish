import styled from 'styled-components'

export const FinalTemplate = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
box-shadow: 0 10px 20px 0 rgba(255, 255, 255, 0.9);
    background-color: ${({theme})=>theme.background}

`
export const Recomended = styled.div`
display: ${props => (props.display?'flex':'none')}


`
export const Score = styled.div`
display: ${props => (props.display?'flex':'none')}


`