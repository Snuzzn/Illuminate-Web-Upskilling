import React from "react";
import CartItem from "../components/CartItem";
import { FiShoppingCart } from "react-icons/fi";
import { items } from "../data";
import styled from "styled-components";
import { Btn } from "../components/Btn.styled";

function Cart() {
  const [cartItems, setCartItems] = React.useState(items);

  return (
    <CartContainer>
      <h2>My Cart</h2>
      <CartWrapper>
        {cartItems.map((item) => (
          <CartItem item={item} />
        ))}
      </CartWrapper>
      <Btn>
        <FiShoppingCart />
        <p>Checkout</p>
      </Btn>
    </CartContainer>
  );
}

export default Cart;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CartContainer = styled.div`
  padding: 15px;
`;
