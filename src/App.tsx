import React from "react";
import { DesignSystemProvider } from "./design-system";
import { IsolatedCSS } from "./IsolatedCSS";
import { IsolatedCSSWithBox } from "./IsolatedCSSWithBox";
import { AddStacks } from "./AddStacks";
import { LayoutProps } from "./LayoutProps";

const AppWithContexts: React.FC = () => (
  <DesignSystemProvider>
    {/* <IsolatedCSS /> */}
    {/* <IsolatedCSSWithBox /> */}
    {/* <AddStacks /> */}
    <LayoutProps />
  </DesignSystemProvider>
);

export default AppWithContexts;
