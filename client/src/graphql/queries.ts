import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
  query {
    getMessages {
      id
      user
      body
    }
  }
`;
