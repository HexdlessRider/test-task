import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MainPages from "./components/MainPage";
import "./index.css";
import { HashRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <MainPages />
      </Provider>
    </HashRouter>
  );
};

export default App;
