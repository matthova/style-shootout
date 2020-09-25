import React from "react";
import { DesignSystemProvider } from "./design-system";

const App: React.FC = () => {
  return <div>Hello World</div>;
};
const AppWithContexts: React.FC = () => (
  <DesignSystemProvider>
    <App />
  </DesignSystemProvider>
);

export default AppWithContexts;
