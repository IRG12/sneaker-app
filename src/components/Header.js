import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
function Header() {
  return (
    <Container>
      <LeftHeader>
        <Logo src={logo}></Logo>
        <Menu>
          <MenuItem>Collections</MenuItem>
          <MenuItem>Men</MenuItem>
          <MenuItem>Women</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </LeftHeader>
      <RightHeader>
        <ShoppingCart src={cart}></ShoppingCart>
        <Avatar src={avatar}></Avatar>
      </RightHeader>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 30px;
`;

const LeftHeader = styled.div`
  display: flex;
  gap: 100px;
`;

const Logo = styled.img``;

const Menu = styled.div`
  display: flex;
  gap: 25px;
`;

const MenuItem = styled.div``;

const RightHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ShoppingCart = styled.img``;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
`;
