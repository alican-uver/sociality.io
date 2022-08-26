import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../../redux/slices/posts/posts';

import Loader from '../../../components/commons/loader';
import Cards from '../../../components/commons/cards';
import PostStatusBar from '../../../components/commons/post-status-bar';

import {
  FeedContainer,
} from './styles';

const Feed = () => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <FeedContainer>
      {status === 'loading' ? (
        <Loader />
      ) : (
        <>
          <PostStatusBar />
          <Cards records={posts?.record?.posts_by_date} />
        </>
      )}
    </FeedContainer>
  );
};

export default Feed;
