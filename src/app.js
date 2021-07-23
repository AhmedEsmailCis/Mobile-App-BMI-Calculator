import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootNavigator from "./navigation/RootNavigator";
import Reducers from "./redux/reducers";

export default function App() {
  return (
    <Provider store={createStore(Reducers)}>
      <RootNavigator />
    </Provider>
  );
}
