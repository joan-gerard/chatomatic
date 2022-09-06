import React from "react";
import { useQuery } from "@apollo/client";
import { Container } from "shards-react";

import { GET_MESSAGES } from "../graphql/queries";
import Message from "./Message";

const Messages: React.FC<MessagesProps> = ({ myself }) => {
  const { data, loading, error } = useQuery(GET_MESSAGES);
  const { getMessages } = data || {};

  // if (!loading && !error) {
  //   console.log('messages', data.getMessages );
  // }

  return (
    <>
      {getMessages && !loading && !error && (
        <div className="messages-container">
          {getMessages.map((message: Message) => (
            <Message myself={myself} message={message} key={message.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Messages;
