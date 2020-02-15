import gql from "graphql-tag";

const MESSAGES_QUERY = gql`
  query {
    messages {
      _id
      sender
      receiver
      text
    }
  }
`;
export default MESSAGES_QUERY;
