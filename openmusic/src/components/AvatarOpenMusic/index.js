import styled from 'styled-components';
import Avatar from '../../assets/img/avatar.svg';

const AvatarOpenMusic = styled.img.attrs({src: Avatar, alt:'User image'})`
    height: 80px;
    width: 80px;
    border-radius: 50%;

    margin-left: 20px;
    margin-top: 10px;

    @media (max-width: 900px){
        display: none;   
    }
`;

export default AvatarOpenMusic;