import { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import USERS_QUERY from "../../graphql/users.query";

const Receivers = ({ me }) => {
  const { data, loading, error } = useQuery(USERS_QUERY);
  if (!me) {
    return null;
  }
  if (loading) {
    return null;
  }
  if (error) {
    return null;
  }

  const users = data.users.filter(user => user.name !== me.name);
  return (
    <Fragment>
      <option value="--  Please select a user --">
        -- Please select a user --
      </option>
      {users.map((user, i) => (
        <option value={user.name} key={i}>
          {user.name}
        </option>
      ))}
    </Fragment>
  );
};

export default Receivers;
