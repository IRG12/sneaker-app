import React from "react";
import styled from "styled-components";
import cart from "../images/icon-cart.svg";
import { useState } from "react";
const Body = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Main>
        <LeftContent>
          <ImageDisplay></ImageDisplay>
          <ImageSelect></ImageSelect>
        </LeftContent>
        <RightContent>
          <ProductContent>
            <Company>SNEAKER COMPANY</Company>
            <Name>Fall Limited Edition Sneakers</Name>
            <Description>
              These low-profile sneaker are your perfect caual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </Description>
            <DiscountPrice>
              <PriceDiscount>
                <Price>$125.00</Price>
                <Discount>50%</Discount>
              </PriceDiscount>
              <OriganalPrice>
                <PriceBeforeSavings>
                  <strike>$250.00</strike>
                </PriceBeforeSavings>
              </OriganalPrice>
            </DiscountPrice>
          </ProductContent>
          <ProductPurchase>
            <Quantity>
              <Decrease onClick={() => setCount(count - 1)}>-</Decrease>
              <Volume>{count}</Volume>
              <Increase onClick={() => setCount(count + 1)}>+</Increase>
            </Quantity>
            <AddToCart>
              <Logo src={cart}></Logo>
              <CartText>Add to cart</CartText>
            </AddToCart>
          </ProductPurchase>
        </RightContent>
      </Main>
    </div>
  );
};

export default Body;

const Main = styled.div`
  height: 80vh;
  width: 80vw;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftContent = styled.div`
  height: 70vh;
  width: 40vw;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ImageDisplay = styled.img`
  height: 50vh;
  width: 35vw;
  /* background-color: purple; */
`;

const ImageSelect = styled.img`
  height: 20vh;
  width: 35vw;
  /* background-color: orange; */
`;

const RightContent = styled.div`
  height: 70vh;
  width: 40vw;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductContent = styled.div`
  height: 40vh;
  width: 35vw;
  /* background-color: purple; */
`;

const Company = styled.div`
  height: 5vh;
  width: 10vw;
  /* background-color: yellow; */
  border: 1px solid black;
`;

const Name = styled.h1`
  width: 25vw;
  /* background-color: yellow; */
  border: 1px solid black;
`;

const Description = styled.div`
  height: 10vh;
  width: 25vw;
  /* background-color: yellow; */
  border: 1px solid black;
`;

const DiscountPrice = styled.div`
  height: 15vh;
  width: 35vw;
  /* background-color: yellow; */
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const PriceDiscount = styled.div`
  height: 15vh;
  width: 35vw;
  /* background-color: yellow; */
  border: 1px solid black;
  display: flex;
`;

const Price = styled.h1`
  /* background-color: yellow; */
  border: 1px solid black;
`;

const Discount = styled.div`
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

const OriganalPrice = styled.div`
  height: 15vh;
  width: 35vw;
  /* background-color: yellow; */
  border: 1px solid black;
  display: flex;
`;

const PriceBeforeSavings = styled.div`
  /* background-color: yellow; */
  border: 1px solid black;
`;

const ProductPurchase = styled.div`
  height: 10vh;
  width: 35vw;
  /* background-color: orange; */
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

const Quantity = styled.div`
  height: 40px;
  width: 10vw;
  padding: 2px;
  /* background-color: yellow; */
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
`;

const Decrease = styled.div`
  /* background-color: yellow; */
  padding: 2px;
  border: 1px solid black;
`;

const Volume = styled.div`
  /* background-color: yellow; */
  padding: 2px;
  border: 1px solid black;
`;

const Increase = styled.div`
  /* background-color: yellow; */
  padding: 2px;
  border: 1px solid black;
`;

const AddToCart = styled.div`
  /* background-color: yellow; */
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  height: 40px;
  width: 15vw;
  padding: 2px;
`;

const Logo = styled.img`
  /* background-color: yellow; */
  border: 1px solid black;
`;

const CartText = styled.div`
  /* background-color: yellow; */

  border: 1px solid black;
`;
