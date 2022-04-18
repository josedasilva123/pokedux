import styled from "styled-components";

export const SearchFormBox = styled.div`
    position: relative;
    z-index: 3;
    label{
        display: block;
        position: relative;
        margin-bottom: 1rem;
    }
    input{
        height: 48px;
        width: 100%;
        border-radius: 0;
        padding: .6rem 1rem .6rem 3rem;
        border: 1px solid rgba(0,0,0,.3);
       
    }
    input:focus{
        outline-color: var(--red);
    }
    span{
        position: absolute;
        left: 1rem;
        top: 13.5px;
        color: var(--light-red);        
    }
    & > div{
        position: absolute;
        top: 45px;
        left: 0;
        background: var(--white);
        width: 100%;
        max-width: 300px;
    }
`