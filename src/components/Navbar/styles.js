import styled from 'styled-components';
import { Item as ItemComponent } from './Item';

export const NavBar = styled.nav`
    background-color: blue;
}`;

export const Item = styled(ItemComponent)`
    background-color: red;
`;