import styled from 'styled-components';

export const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 369px);
  grid-column-gap: 30px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  height: 426px;
  border-radius: 5px;
  margin-bottom: 25px;
  border: 1px solid #E5E6EE;
  overflow: hidden;
`;

export const SocialMediaTag = styled.a`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const SocialMediaTagImage = styled.img`
`;

export const CardInfoWrapper = styled.div`
  padding: 20px;
  flex: 1 1 auto;
`;

export const CardInfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardDate = styled.p`
  color: #ACACAC;
  font-size: 14px;
`;

export const CardActionsWrapper = styled.div`
`;

export const CardActionIcon = styled.img`
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;

export const CardDescription = styled.p`
  margin-block: 15px;
  color: #ACACAC;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 240px;
`;

export const SocialMediaInteractionIcons = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const SocialMediaInteractionIcon = styled.img`
  margin-right: 25px;
`;

export const SocialMediaInteractionCount = styled.span`
  /* margin-right: 25px; */
`;