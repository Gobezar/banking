import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ReduxProvider } from "./store/provider";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ReduxProvider>
          <AppRouter />
        </ReduxProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
