import Layout from "../components/Layout";
import User from "../components/Auth/User";
import Protected from "../components/Protected";

const ProtectedPage = () => {
  return (
    <Layout>
      <User>{me => <Protected me={me} />}</User>
    </Layout>
  );
};

export default ProtectedPage;
