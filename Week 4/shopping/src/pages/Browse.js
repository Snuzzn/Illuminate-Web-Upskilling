import React from "react";
import styled from "styled-components";
import { items } from "../data";

function Browse() {
  return (
    <div>
      <h2>Catalog</h2>
      <Grid>
        {items.map((item) => (
          <GridItem>
            <ImgWrapper>
              <img
                src={`${process.env.PUBLIC_URL}/images/${item.image}.png`}
                alt="preview of item"
              />
            </ImgWrapper>
            <ItemDetails>
              <p>{item.name}</p>
              <PriceTag>${item.price}</PriceTag>
            </ItemDetails>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}

export default Browse;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 20px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: 20px;
`;

const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceTag = styled.div`
  background-color: #4e44e4;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
`;
