import gql from "graphql-tag";

const USERS_QUERY = gql`
  query {
    users {
      _id
      name
      email
    }
  }
`;

export default USERS_QUERY;
