import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MainPages from "./components/MainPage";
import "./index.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainPages />
    </Provider>
  );
};

export default App;
