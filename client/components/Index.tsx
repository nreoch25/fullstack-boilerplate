import { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import TEST_QUERY from "../graphql/test.query";

const Index = () => {
  const { data, loading, error } = useQuery(TEST_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <Fragment>
      <h1>Index Page: {data.test}</h1>
    </Fragment>
  );
};

export default Index;
