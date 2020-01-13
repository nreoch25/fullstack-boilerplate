import { Fragment, useEffect } from "react";
import Router from "next/router";
import { useQuery } from "@apollo/react-hooks";
import ME_QUERY from "../../graphql/me.query";

const Private = ({ children }) => {
  const { data, loading, error } = useQuery(ME_QUERY);

  useEffect(() => {
    if (data && !data.me) {
      Router.push("/login");
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error.message)}</p>;
  }

  return <Fragment>{children}</Fragment>;
};

export default Private;
