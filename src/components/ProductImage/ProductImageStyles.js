import styled from 'styled-components';
import { Link as LinkComponent } from 'react-router-dom';

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: white;
    width: 100%;
    margin-bottom: 10px;
`;

export const Product = styled.li`
    display: flex;
    background-color: black;
    height: 60px;
    padding: 10px;
    border-radius: 5px;
    background-color: #33464F;
    align-items: center;
    font-size: 18px;
`;

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 120px;
`;

export const Img = styled.img`
    object-fit: contain;
`;