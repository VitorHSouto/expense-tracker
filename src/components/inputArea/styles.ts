import styled from "styled-components";

export const Container = styled.div`
    border-radius: 10px;
    background-color: #13192b;
    padding: 20px;
    display: flex;
    align-items: center;
    border: 2px solid #585c91;
    margin-top: 20px;
`;

export const InputArea = styled.label`
    display: box;
    align-items: center;
    flex: 2;
`;

export const InputTitle = styled.p`
    text-align: left;
    font-weight: bold;
    color: #fff;
    margin-bottom: 5px;
`;

export const Input = styled.div`
    text-align: left;
    color: #fff;
    margin-left: 0px;
    color-scheme: dark;

    select, input{
        width: 70%;
        padding: 12px 12px;
        border-radius: 4px;
        border: 1px solid #585c91;
        background-color: #101727;
        color: #fff;
    };

    input:hover{ background-color: #111829;}
    select:hover{ background-color: #111829;}
`;

export const InputSubmit = styled.div`
    button{
        background-color: #13192b;
        color: none;
        border: none;
    };

    svg{
        width: 2rem;
        height: 2rem;
        color: #fff;
        margin-right: 15px;
        margin-left: -8px;
    };

    svg:hover{
        color: #BEC2C3;
    }
`;