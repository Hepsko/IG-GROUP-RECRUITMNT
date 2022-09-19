import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

type HeaderProps = {
  showSidebar: () => void;
};

const Hamburger = styled(MenuOutlined)`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  @media (min-width: 600px) {
    display: none;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  position: sticky;
  width: 100%;
  height: 96px;
  background-color: #001529;
  padding-left: 25px;
  padding-right: 25px;
  @media (max-width: 600px) {
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0px 5px 30px #0000000f;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

const MenuMobile = styled.div`
  display: none;
  gap: 28px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    display: flex;
  }
`;

export const Header: React.FC<HeaderProps> = ({ showSidebar }) => {
  return (
    <HeaderWrapper>
      <Hamburger onClick={showSidebar} />
      <Menu></Menu>
      <MenuMobile></MenuMobile>
    </HeaderWrapper>
  );
};
