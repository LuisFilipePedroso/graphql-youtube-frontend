import React, {
  FormEvent,
  useCallback,
  useEffect, useMemo,
  useState,
} from 'react';

import { FiChevronLeft, FiChevronRight, FiSend } from 'react-icons/fi';

import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { useMutation, useQuery } from '@apollo/client';
import { QueryData, Tweet } from '../../queries/models/Tweet';
import { TweetsQuery, CreateTweetMutation, TweetsFragment } from '../../queries/modules/tweets';

import {
  Container,
  Left,
  Right,
  InputContainer,
  Input,
  ProfileList,
  Profile,
  Content,
  ButtonsContainer,
} from './styles';

type UpdatePageParams = {
  page: -1 | 1;
}

const AUTH_USER = 'Luis Filipe Pedroso';

const Home = () => {
  const [data, setData] = useState<Tweet[]>([]);
  const [tweet, setTweet] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const { data: apolloData, refetch } = useQuery(TweetsQuery, {
    variables: {
      page: currentPage,
      pageSize: 4,
    },
  });

  const [createTweet] = useMutation(CreateTweetMutation, {
    update(cache, { data: { createTweets } }) {
      cache.modify({
        fields: {
          tweets(existingTweets = []) {
            const newTweetRef = cache.writeFragment({
              data: createTweets,
              fragment: TweetsFragment,
            });

            return {
              ...existingTweets,
              tweets: [
                newTweetRef,
                ...existingTweets.tweets,
              ],
            };
          },
        },
      });
    },
  });

  useEffect(() => {
    const formattedTweets = apolloData?.tweets?.tweets?.map((t: Tweet) => ({
      ...t,
      formattedDate: `à ${formatDistance(
        new Date(t.createdAt),
        new Date(),
        { locale: ptBR },
      )}`,
    })) as Tweet[];

    setData(formattedTweets);
  }, [apolloData]);

  useEffect(() => {
    async function fetchData() {
      await refetch({
        page: currentPage,
      });
    }

    fetchData();
  }, [currentPage, refetch]);

  const handleUpdatePage = useCallback(({ page }: UpdatePageParams) => {
    const newPage = currentPage + page;
    setCurrentPage(newPage);
  }, [currentPage]);

  const showNextButton = useMemo(() => {
    if (apolloData?.tweets?.totalPages !== undefined) {
      if (currentPage + 1 < apolloData?.tweets?.totalPages) {
        return true;
      }

      return false;
    }

    return false;
  }, [apolloData?.tweets?.totalPages, currentPage]);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    await createTweet({
      variables: {
        author: AUTH_USER,
        description: tweet,
      },
    });

    setTweet('');
  }, [createTweet, tweet]);

  return (
    <Container>
      <Left>
        <h1>TweetsQl</h1>
        <h3>
          The new and the fast way to
          <br />
          {' '}
          tweet using Apollo & GraphQl
        </h3>
      </Left>
      <Right>
        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <InputContainer>
            <Input
              placeholder="What's happening?"
              onChange={(e) => setTweet(e.target.value)}
              value={tweet}
            />
            <button type="submit">
              <FiSend size={22} color="#fff" />
              Tweet
            </button>
          </InputContainer>
        </form>

        <ProfileList>
          { data?.map((t) => (
            <Profile key={t._id}>
              <Content>
                <h2>{t.description}</h2>
                <p>{t.author}</p>
                <p>{t.formattedDate}</p>
              </Content>
            </Profile>
          )) }
        </ProfileList>

        <ButtonsContainer>
          <button
            type="button"
            onClick={() => handleUpdatePage({ page: -1 })}
            style={{ display: currentPage <= 0 ? 'none' : 'flex' }}
          >
            <FiChevronLeft size={25} color="#55409C" />
            Previous
          </button>
          <button
            type="button"
            onClick={() => handleUpdatePage({ page: 1 })}
            style={{ display: showNextButton ? 'flex' : 'none' }}
          >
            Next
            <FiChevronRight size={25} color="#55409C" />
          </button>
        </ButtonsContainer>
      </Right>
    </Container>
  );
};

export default Home;
