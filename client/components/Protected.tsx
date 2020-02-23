import { Fragment, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import Router from "next/router";
import PROTECTED_QUERY from "../graphql/protected.query";

const Protected = ({ me }) => {
  if (process.browser && !me) {
    Router.push("/login");
    return null;
  }
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
