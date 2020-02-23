import Layout from "../components/Layout";
import User from "../components/Auth/User";
import Messages from "../components/Messages";

const MessagesPage = () => {
  return (
    <Layout>
      <User>{me => <Messages me={me} />}</User>
    </Layout>
  );
};

export default MessagesPage;
