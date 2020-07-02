import { ApolloClient } from 'apollo-client';
import { SchemaLink } from 'apollo-link-schema';
import { InMemoryCache } from 'apollo-cache-inmemory';

// import bindSchema from '@valueflows/vf-graphql-holochain';  // :TODO: update to latest
import schema from '@valueflows/vf-graphql-holochain';

async function initGraphQL() {
  // const schema = bindSchema(/* modules, DNA id bindings */)

  return new ApolloClient({
    // ssrMode: true,
    cache: new InMemoryCache(),
    link: new SchemaLink({ schema })
  });
}

export default initGraphQL;
