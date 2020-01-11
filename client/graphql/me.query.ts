import gql from "graphql-tag";

const ME_QUERY = gql`
  query me {
    me {
      name
      email
    }
  }
`;

export default ME_QUERY;
