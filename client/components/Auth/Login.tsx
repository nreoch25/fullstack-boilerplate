import { Fragment, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Alert, Button, Form, FormGroup, Input } from "reactstrap";
import LOGIN_MUTATION from "../../graphql/login.mutation";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    message: ""
  });

  const [register] = useMutation(LOGIN_MUTATION, {
    onCompleted: data => {
      if (!data.login.success) {
        setValues({ ...values, error: data.login.error, message: "" });
      } else {
        localStorage.setItem("fsb-token", `Bearer ${data.login.token}`);
        setValues({ ...values, error: "", message: "successfully logged in" });
      }
    }
  });

  const handleChange = (name: string) => (evt: any) => {
    setValues({ ...values, [name]: evt.target.value });
  };
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    register({
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
          Signup
        </Button>
      </Form>
      {values.error && <Alert color="danger">{values.error}</Alert>}
      {values.message && <Alert color="success">{values.message}</Alert>}
    </Fragment>
  );
};

export default Login;
