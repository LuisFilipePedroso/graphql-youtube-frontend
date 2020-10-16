import { gql } from '@apollo/client';

const CreateTweetMutation = gql`
  mutation createTweet($author: String!, $description: String!) {
    createTweets(author: $author, description: $description) {
      _id
      author
      description
      createdAt
    }
  }
`;

export { CreateTweetMutation };
