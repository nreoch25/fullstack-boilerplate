import gql from "graphql-tag";

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      success
      error
    }
  }
`;

export default LOGIN_MUTATION;
