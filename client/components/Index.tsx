import { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import ME_QUERY from "../graphql/me.query";

const Index = () => {
  const { data, loading, error } = useQuery(ME_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error.message)}</p>;
  }
  return (
    <Fragment>
      <h1>Index Page</h1>
      <pre>{JSON.stringify(data.me)}</pre>
    </Fragment>
  );
};

export default Index;
