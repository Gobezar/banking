import { BrowserRouter } from "react-router-dom";
import { ReduxProvider } from "./store/provider";
import AppRouter from "./AppRouter";
import Header from "./components/Header/UI/Header";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ReduxProvider>
          <Header />
          <AppRouter />
        </ReduxProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
