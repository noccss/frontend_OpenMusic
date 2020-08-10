import styled from 'styled-components';

export const HeaderOpenMusic = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-principal);

    padding: 20px 0px;
    min-width: 100px;

    @media (max-width: 900px){
        padding: 40px;   
    }
`;

export const CheckboxOpenMusic = styled.input.attrs({ type: 'checkbox'})`
    display: none;
    @media (max-width: 900px){
        &{
            display: block;
        }
    }
`;