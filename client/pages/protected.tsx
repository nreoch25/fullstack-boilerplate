import Layout from "../components/Layout";
import Private from "../components/Auth/Private";
import Protected from "../components/Protected";

const ProtectedPage = () => {
  return (
    <Layout>
      <Private>
        <Protected />
      </Private>
    </Layout>
  );
};

export default ProtectedPage;
