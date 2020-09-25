import styled from 'styled-components'

export const Image = styled.div`
width: 530px;
height: 300px;
 background-image: url(${props => props.img});
background-repeat: no-repeat;
background-position: center;
`
