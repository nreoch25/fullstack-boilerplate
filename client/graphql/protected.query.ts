import gql from "graphql-tag";

const PROTECTED_QUERY = gql`
  query {
    protected {
      message
    }
  }
`;

export default PROTECTED_QUERY;
