import styled from 'styled-components';
import { Link as LinkComponent } from 'react-router-dom';

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: white;
    width: 100%;
    margin-bottom: 10px;
`;

export const Product = styled.li`
    background-color: black;
    height: 25px;
    padding: 10px;
    border-radius: 5px;
    background-color: #33464F;
`;
