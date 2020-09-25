import React from "react";
import { DesignSystemProvider } from "./design-system";
// import { IsolatedCSS } from "./IsolatedCSS";
import { AddStacks } from "./AddStacks";

const AppWithContexts: React.FC = () => (
  <DesignSystemProvider>
    <AddStacks />
  </DesignSystemProvider>
);

export default AppWithContexts;
