import styled from 'styled-components'

export const ShowButton = styled.div`
    display: ${props => (props.display?'normal':'none')}
`