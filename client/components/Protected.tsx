import { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import PROTECTED_QUERY from "../graphql/protected.query";

const Protected = () => {
  const { loading, error, data } = useQuery(PROTECTED_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error.message)}</p>;
  }
  return (
    <Fragment>
      <p>Message: {data.protected.message}</p>
    </Fragment>
  );
};

export default Protected;
