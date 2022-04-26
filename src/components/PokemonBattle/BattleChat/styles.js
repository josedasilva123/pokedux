import styled from 'styled-components';

export const ChatBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    border-radius: 8px;
    border: 12px solid #D2B145;
    padding: 1rem 1rem;
    background: #1D4B62;
    max-width: 450px;
    p{
        color: #fff;
        margin: 0;
        padding: 0;
        z-index: 2;
    }
    button{
        color: #D2B145;
        background: transparent;
        border: 3px solid #D2B145;
        border-radius: 4px;
        width: 100%;
        margin: 0 auto;
        max-width: 300px;
        z-index: 2;
    }
    &:before{
        content: '';
        position: absolute;
        z-index: 1;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 4px;
        border: 4px solid #fff;
    }
`