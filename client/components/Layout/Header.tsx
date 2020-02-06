import { useState, Fragment } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Router from "next/router";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import ME_QUERY from "../../graphql/me.query";
import LOGOUT_MUTATION from "../../graphql/logout.mutation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, error, data } = useQuery(ME_QUERY);
  const [logout] = useMutation(LOGOUT_MUTATION, {
    onCompleted: () => Router.push("/login"),
    refetchQueries: [{ query: ME_QUERY }]
  });

  const toggle = () => setIsOpen(!isOpen);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error.message)}</p>;
  }

  return (
    <Fragment>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink
            style={{ cursor: "pointer", fontSize: "20px" }}
            className="font-weight-bold"
          >
            NextJS GraphQL
          </NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/protected">
                <NavLink href="/">Protected</NavLink>
              </Link>
            </NavItem>
            {!data.me && (
              <Fragment>
                <NavItem>
                  <Link href="/register">
                    <NavLink href="/">Register</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/login">
                    <NavLink href="/login">Login</NavLink>
                  </Link>
                </NavItem>
              </Fragment>
            )}

            {data.me && (
              <Fragment>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {data.me.name}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem
                      onClick={() => {
                        localStorage.removeItem("fsb-token");
                        logout();
                      }}
                    >
                      Logout
                    </DropdownItem>
                    {/* <DropdownItem divider /> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Fragment>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Header;
