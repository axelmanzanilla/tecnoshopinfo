import styled from 'styled-components';
import { Item as ItemComponent } from './Item';

export const NavBar = styled.nav`
    height: 70px;
    display: flex;
    justify-content: center;
    background-color: black;
}`;

export const Item = styled(ItemComponent)`
    display: flex;
    align-items: center;
    margin: 0 100px 0 100px;
    color: white;
    text-decoration: none;
    font-size: 26px;
`;
