import styled from 'styled-components'

export const ShowButton = styled.div`
    display: ${props => (props.display?'flex':'none')}
 
`
export const Button = styled.input.attrs({
    type: 'button'
})`
    display: flex;
        justify-content: center;
    align-items: center;
    font-weight: 800;
    color: black;
    background-color: white;
    border-radius: 5%;
    min-width: 120px;
    height: 35px;
    margin: 50px;
    cursor: pointer;
`