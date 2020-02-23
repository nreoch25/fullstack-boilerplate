import { Fragment } from "react";
import Router from "next/router";
import MessagesList from "./MessagesList";
import CreateMessage from "./CreateMessage";

const Messages = ({ me }) => {
  if (process.browser && !me) {
    Router.push("/login");
    return null;
  }
  return (
    <Fragment>
      <MessagesList me={me} />
      <CreateMessage me={me} />
    </Fragment>
  );
};

export default Messages;
