import styled from 'styled-components'

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
background-color: ${({theme})=>theme.background};
border-top: 1px solid slategray;
box-shadow: 0 10px 20px 0 rgba(33,33,33,.9);
`
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

export const ResponseArea = styled.div`
position: absolute;
bottom:0px;
width: 100%;
height: 100px;
background-color: ${({theme})=>theme.background};
border-top: 1px solid slategray;
box-shadow: 0 10px 20px 0 rgba(33,33,33,.9);
display: flex;
justify-content: center;
aliggn-items: center;
`

export const ButtonsAreaImg = styled.div`
position: absolute;
bottom:0px;
width: 100%;
height: 100px;
background-color: rgb(123, 140, 158);
border-top: 1px solid slategray;
box-shadow: 0 10px 20px 0 rgba(33,33,33,.9);
display: flex;
justify-content: center;
align-items: center;
`
export const TemplateQuestion = styled.div`
background-color: ${({theme})=>theme.background};
`