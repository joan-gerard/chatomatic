import { useQuery } from "@apollo/client";
import React from "react";
import { GET_MESSAGES } from "../graphql/queries";
import Message from "./Message";

const Messages = () => {
  const { data, loading, error } = useQuery(GET_MESSAGES);

  // if (!loading && !error) {
  //   console.log('messages', data.getMessages );
  // }

  const { getMessages } = data || {};

  return (
    <>
      {getMessages && !loading && !error && (
        <>
          {getMessages.map((message: Message) => (
            <Message message={message} key={message.id} />
          ))}
        </>
      )}
    </>
  );
};

export default Messages;
