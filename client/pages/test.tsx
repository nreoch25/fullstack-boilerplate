import User from "../components/Auth/User";
import Test from "../components/Test";

const TestPage = () => {
  return <User>{data => <Test data={data} />}</User>;
};

export default TestPage;
