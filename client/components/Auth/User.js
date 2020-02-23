import { useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import ME_QUERY from "../../graphql/me.query";
import { Fragment } from "react";

const User = props => {
  const { data, loading, error } = useQuery(ME_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error.message)}</p>;
  }

  return <Fragment>{props.children(data.me)}</Fragment>;
};

User.propTypes = {
  children: PropTypes.func.isRequired
};

export default User;
