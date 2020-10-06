import styled from 'styled-components'

export const IntroWrapper = styled.div`
    display: ${props => (props.display)}

`
export const ShowProgressBar = styled.div`
    display: ${props => (props.display)}
`
export const ShowInfos = styled.div`
    display: ${props => (props.display?'flex':'none')}
`
export const FinishWrapper = styled.div`
    display: ${props => (props.display)}
`
export const Icons = styled.div`
    background-color: ${({theme})=>theme.background};
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 20px 0 rgba(33,33,33,.9);

    height: 100vh;
    padding: 10px;
    border-left: 1px solid black;

    div{
        margin-bottom: 55px;
    }
`