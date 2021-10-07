import styled from 'styled-components';
import { Panel } from '../Panel/PanelStyles';

export const Main = styled.main`
    justify-content: space-between;
`;

export const LeftPanel = styled.div`
    width: 25%;
`;

export const PrincipalPanel = styled(Panel)`
    flex-grow: 1;
    max-height: calc(100vh - 140px);
    overflow-y: auto;
`
export const RightPanel = styled(Panel)`
    width: 25%;
`;

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    list-style: none;
`;

export const Li = styled.li`
    display: flex;
    flex-direction: row;
`;