import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:30px;
    background:${props => props.theme.primary};
    
    h1 {
        color:${props => props.theme.color};
    }
`;
export const BtnContainer = styled.div`
    display:flex;
    width:300px;
    align-items:center;
    justify-content:space-between;

    button{
        padding:10px;
        font-weight:bold;
        width:100px;
        background-color:${props => props.theme.background};
        color: ${props => props.theme.color};
    }
`
