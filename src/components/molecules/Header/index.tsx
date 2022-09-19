import React from "react";
import { HeaderWrapper, Hamburger, Menu } from "./styles";
import { HeaderProps } from "./types";
import { LogoIGG, Link } from "@/src/components";
import { paths } from "@/paths";

export const Header: React.FC<HeaderProps> = ({ showSidebar }) => {
  return (
    <HeaderWrapper>
      <Hamburger onClick={showSidebar} />
      <LogoIGG />
      <Menu>
        <Link href={paths.requirements.pathname}>REQUIREMENTS</Link>
        <Link href={paths.repository.pathname}>REPOSITORY</Link>
      </Menu>
    </HeaderWrapper>
  );
};
