import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";

export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState, headers }) => {
    const authLink = new ApolloLink((operation: any, forward: any) => {
      const token = process.browser ? localStorage.getItem("fsb-token") : null;
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token}` : ""
        }
      });
      return forward(operation);
    });

    const httpLink = createHttpLink({
      uri: "http://localhost:8000/graphql"
    });

    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {})
    });
  }
);
