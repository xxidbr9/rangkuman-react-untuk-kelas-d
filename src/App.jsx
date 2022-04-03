import React from "react";

import HomePage from "./pages/home";
import store, { persistore } from "./redux-store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore} loading={"Ini loading"}>
        <HomePage />
      </PersistGate>
    </Provider>
  );
};

export default App;
