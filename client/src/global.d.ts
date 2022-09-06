type Message = {
  id: number;
  user: string;
  body: string;
  myself: string;
};
type MessagesProps = {
  myself: string;
};

type MessageProps = {
  message: Message;
  myself: string;
};

declare module "shards-react";
