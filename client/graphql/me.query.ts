import gql from "graphql-tag";

const ME_QUERY = gql`
  query {
    me {
      _id
      name
      email
    }
  }
`;

export default ME_QUERY;
