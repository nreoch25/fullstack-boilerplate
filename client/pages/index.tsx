import Layout from "../components/Layout";
import Index from "../components/Index";
import Private from "../components/Auth/Private";

const IndexPage = () => {
  return (
    <Layout>
      <Private>
        <Index />
      </Private>
    </Layout>
  );
};

export default IndexPage;
