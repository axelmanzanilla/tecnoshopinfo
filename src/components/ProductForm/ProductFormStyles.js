import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #445760;
    color: whitesmoke;
    margin-top: 20px;
    padding: 20px 0 20px 0;
    border-radius: 10px;
    height: 50%;
`;

export const Img = styled.img`
    height: 150px;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    height: 35px;
    border-radius: 10px;
    border: none;
`;

export const TextArea = styled.textarea`
    height: 80px;
    border-radius: 10px;
    border: none;
`;

export const Select = styled.select`
    height: 35px;
    border-radius: 10px;
    border: none;
`;

export const Button = styled.button`
    height: 30px;
    width: 120px;
    font-size: 18px;
    margin: 10px 0 0 200px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #151515;
`;

export const FormBorrar = styled.form`
    width: 50%;
    background-color: red;
    display: flex;
    justify-content: center;
`;

export const ButtonBorrar = styled(Button)`
    margin: -50px 200px 0 0;
`;
