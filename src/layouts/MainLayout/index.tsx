import React, { useState } from "react";
import { Layout } from "antd";
import { Header, Link, LogoIGG } from "@/src/components";
import { CloseButton, CustomSider, SiderContentWrapper } from "./styles";
import { MainLayoutProps } from "./types";
import { paths } from "@/paths";

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CustomSider
        collapsed={!showSidebar}
        trigger={null}
        collapsedWidth={0}
        collapsible
        width={"70%"}
      >
        <SiderContentWrapper>
          <CloseButton onClick={() => setShowSidebar(false)} />
          <div>
            <LogoIGG />
          </div>
          <Link href={paths.requirements.pathname}>REQUIREMENTS</Link>
          <Link href={paths.repository.pathname}>REPOSITORY</Link>
        </SiderContentWrapper>
      </CustomSider>

      <Layout>
        <Header showSidebar={() => setShowSidebar((prev) => !prev)} />
        {children}
      </Layout>
    </Layout>
  );
};
