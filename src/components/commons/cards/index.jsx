import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Card from './card';

import { CardsWrapper, PostPublishDate } from './styles';

const Cards = ({ records }) => {
  const sortedRecordsForPublishDate = records && Object.entries(records).sort((a, b) => a[0] - b[0]).reverse();

  return (
    <CardsWrapper>
      {sortedRecordsForPublishDate?.map((item, index) => {
        const postPublishDate = item[0];
        const postInfo = item[1];
        return (
          <div key={index}>
            <PostPublishDate>{moment(postPublishDate).format('DD MMMM YYYY')}</PostPublishDate>
            <Card postInfo={postInfo} />
          </div>
        );
      })}
    </CardsWrapper>
  );
};

Cards.propTypes = {
  records: PropTypes.shape,
};

Cards.defaultProps = {
  records: {},
};

export default Cards;
