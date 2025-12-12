import { gql, TypedDocumentNode } from "@apollo/client";
import { MyReadingStatesQuery } from "./types";

// TypedDocumentNode provide types for GraphQL
export const MY_READING_STATES: TypedDocumentNode<MyReadingStatesQuery> = gql`
  query MyReadingStates {
    myReadingStates {
      status
      createdAt
      book {
        title
        slug
        authors {
          name
        }
      }
    }
  }
`;
