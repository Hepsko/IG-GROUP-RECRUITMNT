import React, { ReactNode } from "react";
export const siteTitle = "Next.js Sample Website";

interface LayoutProps {
  home?: boolean;
  pageTitle?: string;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  home,
  pageTitle,
}) => {
  return <>{children}</>;
};
