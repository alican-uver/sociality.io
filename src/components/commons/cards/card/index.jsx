import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  socialMediaIconEquals,
  socialMediaInteractionIcons,
  cardActionIcons,
  postStatusColorEquals,
} from '../../../../mock/card';

import {
  CardLayout,
  CardWrapper,
  SocialMediaTag,
  SocialMediaTagImage,
  CardInfoWrapper,
  CardInfoTop,
  CardDate,
  CardActionsWrapper,
  CardActionIcon,
  CardDescription,
  CardImage,
  SocialMediaInteractionIcons,
  SocialMediaInteractionIcon,
  SocialMediaInteractionCount,
} from './styles';

const Card = ({ postInfo }) => {
  const onImageError = (event) => {
    if (event) {
      event.target.src = '/static/images/no-post-image.png';
    }
  };

  return (
    <CardLayout>
      {postInfo.map((item, index) => {
        const {
          published_at: publishedAt,
          status,
          entry,
          account,
        } = item || {};
        return (
          <CardWrapper key={index}>
            <SocialMediaTag href={account?.link} target="_blank" backgroundColor={postStatusColorEquals[status]}>
              <SocialMediaTagImage src={socialMediaIconEquals[account.channel]} />
            </SocialMediaTag>
            <CardInfoWrapper>
              <CardInfoTop>
                <CardDate>
                  {moment(publishedAt).format('DD MMMM YYYY - h:mm')}
                </CardDate>
                <CardActionsWrapper>
                  {Object.values(cardActionIcons).map((cardActionIcon) => (
                    <CardActionIcon key={index} src={cardActionIcon} alt={cardActionIcon} />
                  ))}
                </CardActionsWrapper>
              </CardInfoTop>
              <CardDescription>
                {entry.message}
              </CardDescription>
              <CardImage onError={onImageError} src={entry.image[0]} alt={entry.image[0]} />
              <SocialMediaInteractionIcons>
                {Object.values(socialMediaInteractionIcons[account.channel === 'instagrambusiness'
                  ? 'facebook' : account.channel])
                  .map((socialMediaInteraction) => (
                    <>
                      <SocialMediaInteractionIcon
                        key={index}
                        src={socialMediaInteraction}
                        alt={socialMediaInteraction}
                      />
                      <SocialMediaInteractionCount />
                    </>
                  ))}
              </SocialMediaInteractionIcons>
            </CardInfoWrapper>
          </CardWrapper>
        );
      })}
    </CardLayout>
  );
};

Card.propTypes = {
  postInfo: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default Card;
