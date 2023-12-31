import styled from 'styled-components';

export const Button = styled.button`
    appearance: button;
    min-width: 10rem;
    background-color: ${(props)=>props.theme.colors.primaryBg} ;//#1899D6;
    border: solid transparent;
    border-radius: 1rem;
    border-width: 0 0 0.25rem;
    box-sizing: border-box;
    color: ${(props)=>props.theme.colors.white}; //#FFFFFF;
    cursor: pointer;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 0.5rem 0.75rem;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter .2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    transition: all .6s ease;
    &:after {
        background-clip: padding-box;
        background-color: ${(props)=>props.theme.colors.secondaryBg}; //#1CB0F6;
        border: solid transparent;
        border-radius: 1rem;
        border-width: 0 0 0.25rem;
        bottom: -0.25rem;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
    }
    &:focus{
        user-select: auto;
    }
    &:hover{
        letter-spacing: 1px;
    } 
    &:hover:not(:disabled) {
        filter: brightness(1.1);
        -webkit-filter: brightness(1.1);
    }
    &:disabled {
        cursor: auto;
    }
    @media  (max-width: 920px) {
        min-width: 15.5rem;
    }    
`;