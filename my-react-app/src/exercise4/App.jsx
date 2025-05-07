import React from "react";
import DataFetcher from "./DataFetcher";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div>
      <h1>Post Viewer</h1>
      <ErrorBoundary>
        <DataFetcher />
      </ErrorBoundary>
    </div>
  );
}

export default App;
