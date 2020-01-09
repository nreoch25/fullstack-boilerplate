import gql from "graphql-tag";

const REGISTER_MUTATION = gql`
  mutation REGISTER_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    register(input: { name: $name, email: $email, password: $password }) {
      token
      success
      error
    }
  }
`;

export default REGISTER_MUTATION;
