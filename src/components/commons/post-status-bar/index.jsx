import React from 'react';

import postStatusBarItems from '../../../mock/post-status-bar';
import {
  PostStatusBarWrapper,
  PostStatusBarItem,
  PostStatusBarIcon,
  PostStatusBarText,
} from './styles';

const PostStatusBar = () => (
  <PostStatusBarWrapper>
    {Object.keys(postStatusBarItems).map((item, index) => (
      <PostStatusBarItem key={index}>
        <PostStatusBarIcon color={postStatusBarItems[item]} />
        <PostStatusBarText>{item}</PostStatusBarText>
      </PostStatusBarItem>
    ))}
  </PostStatusBarWrapper>
);

export default PostStatusBar;
