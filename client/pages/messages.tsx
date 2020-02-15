import Layout from "../components/Layout";
import Private from "../components/Auth/Private";
import Messages from "../components/Messages";

const MessagesPage = () => {
  return (
    <Layout>
      <Private>
        <Messages />
      </Private>
    </Layout>
  );
};

export default MessagesPage;
