import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  border-bottom: 1px solid #d3d3d3;
  margin: auto;
  width: inherit;
`;

export const Wrapper = styled.div`
  /* padding: 20px; */
`;

export const NavItem = styled.div`
  margin: 20px 10px;
  color: #4e4e4e;
  text-decoration: none;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;
