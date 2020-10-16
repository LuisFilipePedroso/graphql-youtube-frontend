import { gql } from '@apollo/client';

export const TweetsQuery = gql`
  query GetTweets($page: Float!, $pageSize: Float!) {
    tweets(page: $page, pageSize: $pageSize) {
      tweets {
        _id
        author
        description
        createdAt
      }
      totalPages
    }
  }
`;

export const TweetsFragment = gql`
  fragment NewTweet on Tweet {
    tweets {
      _id
      author
      description
      createdAt
    }
    totalPages
  }
`;
