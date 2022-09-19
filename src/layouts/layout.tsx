import React, { useState } from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import Sider from "antd/lib/layout/Sider";
import styled from "@emotion/styled";
import { Header } from "../components/molecules/Header";

const CustomSider = styled(Sider)`
  position: fixed;
  z-index: 20;
  width: 100%;
  top: 0;
  height: 100%;
  box-shadow: 0px 5px 30px #0000000f;
`;

const CloseButton = styled(CloseCircleOutlined)`
  position: absolute;
  cursor: pointer;
  top: 15px;
  font-size: 25px;
  right: 15px;
  color: #fff;
`;

const SiderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 40px 10px 20px 10px;
`;

export const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CustomSider
        collapsed={!showSidebar}
        trigger={null}
        collapsedWidth={0}
        collapsible
      >
        <SiderContentWrapper>
          <CloseButton onClick={() => setShowSidebar(false)} />
        </SiderContentWrapper>
      </CustomSider>

      <Layout>
        <Header showSidebar={() => setShowSidebar((prev) => !prev)} />
        {children}
      </Layout>
    </Layout>
  );
};
