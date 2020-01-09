import { Fragment, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Alert, Button, Form, FormGroup, Input } from "reactstrap";
import REGISTER_MUTATION from "../../graphql/register.mutation";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    message: ""
  });

  const [register] = useMutation(REGISTER_MUTATION, {
    onCompleted: data => {
      if (!data.register.success) {
        setValues({ ...values, error: data.register.error, message: "" });
      } else {
        setValues({ ...values, error: "", message: "successfully registered" });
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
        name: values.name,
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
            type="text"
            value={values.name}
            placeholder="Type your name"
            onChange={handleChange("name")}
          />
        </FormGroup>
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

export default Register;
