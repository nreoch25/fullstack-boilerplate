import gql from "graphql-tag";

const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription($user: String!) {
    newMessage(user: $user) {
      _id
      sender
      receiver
      text
    }
  }
`;

export default NEW_MESSAGE_SUBSCRIPTION;
