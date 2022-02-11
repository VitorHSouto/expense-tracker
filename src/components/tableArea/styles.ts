import styled from "styled-components";


export const Table = styled.table`
    width: 100%;
    background-color: #13192b;
    /*box-shadow: 0px 0px 0.5px #ccc;
    border: 2px solid #8e99ee65;*/
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto' };
    padding: 8px 0;
    text-align: left;
`;