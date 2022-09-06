import React from "react";

const Message: React.FC<MessageProps> = ({ myself, message }) => {
  function capitalizeUser(word: string) {
    const twoLetters = word.substring(0, 2);
    const capitalized =
      twoLetters.charAt(0).toUpperCase() + twoLetters.slice(1);
    return capitalized;
  }

  return (
    <div>
      {message.user === myself ? (
        <div className="myMessages">
          <div>
            <p>{message.body}</p>
            <span className="myMessages-initials">
              {capitalizeUser(message.user)}
            </span>
          </div>
        </div>
      ) : (
        <div className="othersMessages">
          <div>
            <span className="othersMessages-initials">
              {capitalizeUser(message.user)}
            </span>
            <p>{message.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
