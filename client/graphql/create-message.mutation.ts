import gql from "graphql-tag";

const CREATE_MESSAGE_MUTATION = gql`
  mutation CREATE_MESSAGE_MUTATION(
    $sender: String!
    $receiver: String!
    $text: String!
  ) {
    createMessage(
      input: { sender: $sender, receiver: $receiver, text: $text }
    ) {
      _id
      sender
      receiver
      text
    }
  }
`;

export default CREATE_MESSAGE_MUTATION;
