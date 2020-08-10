import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:928px;
    background:${props => props.theme.secundary};
    
    h1 {
        color:${props => props.theme.color};
    }
`;
