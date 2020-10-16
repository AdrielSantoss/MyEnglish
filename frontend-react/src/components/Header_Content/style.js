import styled from 'styled-components'

export const TemplateLogin = styled.div`
margin-right: 20px;
margin-top: 30px;
text-align: center;
color: ${({theme})=>theme.color};


button.button {
    background-color: ${({theme})=>theme.backgroundContent};
    border: 0px;
    padding: 10px;
    border-radius: 3px;
    color: ${({theme})=>theme.color};
    width: 500px;
    font-size: 15pt;
    transition: 0.2s;

}

`
export const TemplateLogin2 = styled.div`
margin-right: 220px;
margin-top: 30px;
text-align: center;
color: ${({theme})=>theme.color};


`