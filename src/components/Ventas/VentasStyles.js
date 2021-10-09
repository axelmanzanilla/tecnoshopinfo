import styled from 'styled-components';

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    list-style: none;
`;

export const BigPanel = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
`;

export const TopProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #445760;
    color: whitesmoke;
    margin: 15px;
    padding: 15px;
    border-radius: 10px;
    width: 50%;
    height: fit-content;
`;
