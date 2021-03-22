import "../styles/globals.css";
import { APIProvider } from "../context/APIData";

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.spacex.land/graphql/"
  }),
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <APIProvider>
        <Component {...pageProps} />
      </APIProvider>
    </ApolloProvider>
  );
}

export default MyApp;
