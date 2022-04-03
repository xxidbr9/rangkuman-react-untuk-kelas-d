import React from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistore } from "./reduxtoolkit-store";
import HomePage from "./pages/home_ReduxToolkit";

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
