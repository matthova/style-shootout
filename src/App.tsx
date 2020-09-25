import React from "react";
import { DesignSystemProvider } from "./design-system";
// import { IsolatedCSS } from "./IsolatedCSS";
// import { AddStacks } from "./AddStacks";
import { LayoutProps } from "./LayoutProps";

const AppWithContexts: React.FC = () => (
  <DesignSystemProvider>
    <LayoutProps />
  </DesignSystemProvider>
);

export default AppWithContexts;
