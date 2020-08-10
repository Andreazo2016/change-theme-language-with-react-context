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
