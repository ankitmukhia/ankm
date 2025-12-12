import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

export const { query } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${process.env.LITERAL_BASE_URL}`,
      headers: {
        Authorization: `Bearer ${process.env.LITERAL_TOKEN}`,
      },
    }),
  });
});
