import { ApolloProvider } from "@apollo/react-hooks";
import App from "next/app";
import withApollo from "../lib/withApollo";

interface AppProps {
  apollo: any;
  Component: any;
  pageProps: any;
}

class MyApp extends App<AppProps> {
  public render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}
export default withApollo(MyApp);
