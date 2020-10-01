import styled from 'styled-components'

export const Image = styled.div`
width: 530px;
height: 300px;
 background-image: url(${props => props.img});
background-repeat: no-repeat;
background-position: center;
`
export const ShowButtonTranslate = styled.div`
    display: ${props => (props.display?'flex':'none')}


`
export const ButtonsWrapper = styled.div`
display:flex;
    flex-direction: row;
    width: 1500px;
    justify-content: center;
    align-items: center;
    `
export const ButtonsArea = styled.div`
display: flex;
justify-content: center;
position: absolute;
bottom:0px;
width: 100%;
height: 100px;
background-color: rgb(123, 140, 158);
border-top: 1px solid slategray;
box-shadow: 0 10px 20px 0 rgba(33,33,33,.9);
    `
