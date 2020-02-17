import Layout from "../components/Layout";
import Private from "../components/Auth/Private";
import Messages from "../components/Messages";
import CreateMessage from "../components/Messages/CreateMessage";

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
