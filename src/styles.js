import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    margin-top: 2rem;
    max-width: 1024px;
    padding: 2rem;
    background: var(--white);
    @media (max-width: 900px){
        padding: 2rem 0;
    }
`;