import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Messages from "./components/Messages";
import Form from "./components/Form";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   cache: new InMemoryCache(),
// });

const Chatomatic = () => {
  return (
    <div className="chatomatic">
      <Messages myself="joe" />
      <Form />
    </div>
  );
};

export default Chatomatic;
