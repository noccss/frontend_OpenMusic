import styled from 'styled-components';

const SearchOpenMusic = styled.input`
    width: 50%;
    height: 30px;

    border-radius: 15px;
    margin-right: 200px;
    min-width: 200px;

    border: 1px solid var(--color-text);

    outline: none;
    padding: 0 20px;
    font-size: 16px;

    @media (max-width: 1200px){
        &{
            margin-right: 90px;
        }
    }
`;

export default SearchOpenMusic;