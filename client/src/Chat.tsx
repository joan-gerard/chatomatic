import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://flyby-gateway.herokuapp.com/",
  cache: new InMemoryCache(),
});

function Chat() {
  return <div>Chat</div>;
}

export default () => {
  return (
    <ApolloProvider client={client}>
      <Chat />
    </ApolloProvider>
  );
};
