import { Fragment, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { UncontrolledAlert, Button, Form, FormGroup, Input } from "reactstrap";
import LOGIN_MUTATION from "../../graphql/login.mutation";
import ME_QUERY from "../../graphql/me.query";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    message: ""
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    onCompleted: data => {
      if (!data.login.success) {
        setValues({ ...values, error: data.login.error, message: "" });
      } else {
        localStorage.setItem("fsb-token", data.login.token);
        setValues({
          email: "",
          password: "",
          error: "",
          message: "successfully logged in"
        });
      }
    },
    refetchQueries: [{ query: ME_QUERY }]
  });

  const handleChange = (name: string) => (evt: any) => {
    setValues({ ...values, [name]: evt.target.value });
  };
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    login({
      variables: {
        email: values.email,
        password: values.password
      }
    });
  };
  return (
    <Fragment>
      <Form onSubmit={handleSubmit} className="mb-3">
        <FormGroup>
          <Input
            type="email"
            value={values.email}
            placeholder="Type your email"
            onChange={handleChange("email")}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            value={values.password}
            placeholder="Type your password"
            onChange={handleChange("password")}
          />
        </FormGroup>
        <Button type="submit" color="primary" block>
          Login
        </Button>
      </Form>
      {values.error && (
        <UncontrolledAlert color="danger">{values.error}</UncontrolledAlert>
      )}
      {values.message && (
        <UncontrolledAlert color="success">{values.message}</UncontrolledAlert>
      )}
    </Fragment>
  );
};

export default Login;
