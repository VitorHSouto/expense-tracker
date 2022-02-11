import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
`;

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 8px;
`;

export const Value = styled.div <{color?: string}>`
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
    color: ${props => props.color ?? '#fff'}
`;