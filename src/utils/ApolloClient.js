import {WebSocketLink} from "apollo-link-ws";
import {HttpLink} from "apollo-link-http";
import {split} from "apollo-link";
import {getMainDefinition} from "apollo-utilities";
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/graphql`,
    options: {
        reconnect: true,
    },
});

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
});

const link = split(
    // split based on an operation type
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});