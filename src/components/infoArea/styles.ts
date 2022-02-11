import styled from "styled-components";

export const Container = styled.div`
    border-radius: 10px;
    background-color: #13192b;
    padding: 20px;
    display: flex;
    align-items: center;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthArrow = styled.div`
    width: 30px;
    text-align: center;
    font-size: 25px;
    color: #fff;
    cursor: pointer;

    &:hover {
    color: #BEC2C3;
    }

`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
    font-weight: bold;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
`;