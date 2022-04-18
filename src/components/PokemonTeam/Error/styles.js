import styled from 'styled-components';

export const ErrorBox = styled.div`
    display: flex;
    align-items: center;
    gap: .6rem;
    padding: 1rem;
    background: var(--light-red); 
`
export const ErrorBar = styled.div`
    animation: timerBar 4s forwards;
    height: 6px;
    background: var(--blue);
    @keyframes timerBar{
        from{
            width: 100%
        } to {
            width: 0%;
        }
    }   
`