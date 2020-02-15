import { Fragment } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import MESSAGES_QUERY from "../../graphql/messages.query";

const MessagesList = () => {
  const { data, loading, error } = useQuery(MESSAGES_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error.message)}</p>;
  }

  console.log("DATA", data);
  return (
    <ListGroup>
      {data.messages.map((message, i) => {
        return (
          <ListGroupItem key={i}>
            <span className="font-weight-bold">{message.sender}</span>
            {" - "}
            <span className="font-weight-light">{message.text}</span>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default MessagesList;
