import styled from 'styled-components';



export const AlbumOpenMusic = styled.div`
    height: 300px;
    width: 300px;
    background: var(--color-itens-null);
    display: inline-block;
    margin-right: 30px;



`;

export const SpaceOpenMusic = styled.div`
    overflow: hidden;
    height: 300px;
    width: 100%;

    @media (max-width: 960px){
        & > ${AlbumOpenMusic}{
            width: 270px;
            height: 300px;
        }
    }

    @media (max-width: 900px){
        & > ${AlbumOpenMusic}{
        }
    }
`;