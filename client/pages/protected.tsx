import Layout from "../components/Layout";
import Private from "../components/Auth/Private";

const ProtectedPage = () => {
  return (
    <Layout>
      <Private>
        <h1>Protected</h1>
      </Private>
    </Layout>
  );
};

export default ProtectedPage;
