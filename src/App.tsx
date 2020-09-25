import React from "react";
import { DesignSystemProvider } from "./design-system";
import { IsolatedCSS } from "./IsolatedCSS";

const AppWithContexts: React.FC = () => (
  <DesignSystemProvider>
    <IsolatedCSS />
  </DesignSystemProvider>
);

export default AppWithContexts;
