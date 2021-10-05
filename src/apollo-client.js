import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";

import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://miniprojectreactkampusmerdeka.hasura.app/v1/graphql",
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": "msbPE1Pj9WLOZ6vwzaiYssIKMoukR2oXOn9CYKpsVCkKqnRL02ccYxyGLEgb5vZi",
  },
});

const wsLink = new WebSocketLink({
  uri: "ws://miniprojectreactkampusmerdeka.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": "msbPE1Pj9WLOZ6vwzaiYssIKMoukR2oXOn9CYKpsVCkKqnRL02ccYxyGLEgb5vZi",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": "msbPE1Pj9WLOZ6vwzaiYssIKMoukR2oXOn9CYKpsVCkKqnRL02ccYxyGLEgb5vZi",
  },
});

export default client;
