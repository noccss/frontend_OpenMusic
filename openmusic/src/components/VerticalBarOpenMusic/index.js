import styled from 'styled-components';

export const VerticalBarOpenMusic = styled.div`
    width: 300px;
    height: 100vh;
    background: var(--color-principal);
    display: absolute;

    @media (max-width: 900px){
        &{
            display: none;
        }
    }
`;

export const UlOpenMusic = styled.ul`
    margin-top: 40px;
    width: 100%;
    height: 300px;
`;

export const ListOpenMusic = styled.li`
    position: relative;
    right: 30px;
    background: var(--color-itens-null);
    border-radius: 25px;
    font-size: 22px;
    list-style-type: none;
    padding: 0 10px;
    height: 35px;
    margin-bottom: 20px;
`;