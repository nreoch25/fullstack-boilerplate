import { Row, Col } from "reactstrap";
import Layout from "../components/Layout";
import Login from "../components/Auth/Login";

const LoginPage = () => {
  return (
    <Layout>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <h1 className="text-center">Login</h1>
          <Login />
        </Col>
      </Row>
    </Layout>
  );
};

export default LoginPage;
