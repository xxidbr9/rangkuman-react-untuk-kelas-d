import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./components/Home";

const client = new ApolloClient({
  uri: "https://valid-hermit-25.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "RejjDoies53iYFvdo70BdnNe4QvYupsvCVk84bx3HMD5422Ld2X3xe9YNwfg9717"
  }
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
