import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ItemImage = styled.div`
  max-width: 130px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Price = styled.div`
  color: grey;
  font-size: smaller;
`;

export const CountContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CountBtn = styled.button`
  color: #b5b5b5;
  background: none;
  border: 0;
  &:hover {
    background: none;
    color: #727272;
    cursor: pointer;
  }
`;
