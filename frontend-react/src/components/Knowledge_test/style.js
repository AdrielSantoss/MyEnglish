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

    padding: 10px;

    div{
        color: ${({theme})=>theme.icons};
        margin-bottom: 55px;
    }
`