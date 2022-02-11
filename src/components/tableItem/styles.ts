import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.th`
    font-weight: 300;
    padding: 2px 0;
    text-align: left;
`;

export const Category = styled.div<{color: string}> `
    display: inline-block;
    padding: 4px 8px;
    margin: 2px 0px;
    border-radius: 10px;
    background-color: ${props => props.color};
`;

export const Value = styled.div<{color: string}>`
    color: ${props => props.color};
`;