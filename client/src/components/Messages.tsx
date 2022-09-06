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
  function capitalizeUser(word: string) {
    const twoLetters = word.substring(0, 2);
    const capitalized =
      twoLetters.charAt(0).toUpperCase() + twoLetters.slice(1);
    return capitalized;
  }
  return (
    <div className="chat-body">
      {getMessages && !loading && !error && (
        <div className="messages-container">
          {getMessages.map((message: Message) =>
            message.user === myself ? (
              <div className="myMessages" key={message.id}>
                <div>
                  <p>{message.body}</p>
                  <span className="myMessages-initials">
                    {capitalizeUser(message.user)}
                  </span>
                </div>
              </div>
            ) : (
              <div className="othersMessages" key={message.id}>
                <div>
                  <span className="othersMessages-initials">
                    {capitalizeUser(message.user)}
                  </span>
                  <p>{message.body}</p>
                </div>
              </div>
            )

            // <Message myself={myself} message={message} key={message.id} />
          )}
        </div>
      )}
    </div>
  );
};

export default Messages;
