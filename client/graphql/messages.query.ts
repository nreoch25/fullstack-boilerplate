import gql from "graphql-tag";

const MESSAGES_QUERY = gql`
  query MESSAGES_QUERY($user: String!) {
    messages(user: $user) {
      _id
      sender
      receiver
      text
    }
  }
`;
export default MESSAGES_QUERY;
