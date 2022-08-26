import styled from 'styled-components';

export const PostStatusBarWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const PostStatusBarItem = styled.div`
  display: flex;
  align-items: baseline;
  &:not(:last-of-type) {
    margin-right: 30px;
  }
`;

export const PostStatusBarIcon = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
`;

export const PostStatusBarText = styled.span`
  font-size: 15px;
`;
