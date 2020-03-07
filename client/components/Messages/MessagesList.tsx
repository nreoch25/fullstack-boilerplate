import { Fragment } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import MESSAGES_QUERY from "../../graphql/messages.query";
import NEW_MESSAGE_SUBSCRIPTION from "../../graphql/new-message.subscription";

const MessagesList = ({ me }) => {
  const { data, loading, error } = useQuery(MESSAGES_QUERY, {
    variables: { user: me.name }
  });
  useSubscription(NEW_MESSAGE_SUBSCRIPTION, {
    variables: { user: me.name },
    shouldResubscribe: false,
    onSubscriptionData: ({ client, subscriptionData }) => {
      const { messages } = client.readQuery({
        query: MESSAGES_QUERY,
        variables: { user: me.name }
      });
      client.writeQuery({
        query: MESSAGES_QUERY,
        variables: { user: me.name },
        data: { messages: [...messages, subscriptionData.data.newMessage] }
      });
    }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error.message)}</p>;
  }

  console.log("DATA", data);
  return (
    <Fragment>
      <h4 className="mb-3 mt-3">Messages</h4>
      <ListGroup>
        {!data.messages.length && (
          <ListGroupItem>You do not have any messages</ListGroupItem>
        )}
        {data.messages.map((message, i) => {
          return (
            <ListGroupItem key={i}>
              <span className="font-weight-bold">{message.sender}</span>
              {"  to  "}
              <span className="font-weight-bold">{message.receiver}</span>
              {" - "}
              <span className="font-weight-light">{message.text}</span>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Fragment>
  );
};

export default MessagesList;
