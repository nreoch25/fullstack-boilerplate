import { Fragment } from "react";
import MessagesList from "./MessagesList";
import CreateMessage from "./CreateMessage";

const Messages = () => {
  return (
    <Fragment>
      <MessagesList />
      <CreateMessage />
    </Fragment>
  );
};

export default Messages;
