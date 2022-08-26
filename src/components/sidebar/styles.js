import styled from 'styled-components';

export const Container = styled.nav`
  min-height: 100vh;
  background: #2A2F33;
	top: 0;
	left: 0;
  font-family: 'Raleway', sans-serif;
`;

export const ProductLogoWrapper = styled.div`
  display: flex; 
  justify-content: center;
  border-bottom: 1px solid #393D42;
  padding-block: 10px;
`;

export const ProductLogoImage = styled.img``;

export const PageLogo = styled.div`
  position: relative;
`;

export const PageLogoImage = styled.img``;

export const PageLogoMask = styled.span`
  position: absolute;
  background-color: #2A2F33;
  z-index: 1;
  inset: 0;
  opacity: 0.8;
`;

export const ActivePageBorder = styled.div`
  position: absolute;
  background-color: #F55661;
  z-index: 1;
  top: 6px;
  left: -29px;
  width: 20px;
  height: 40px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const PageWrapper = styled.div`
  display: flex;
  padding-top: 3px;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 66px;
  border-right: 1px solid #393D42;
  img {
    margin-block: 5px;
    width: 40px;
  }
`;

export const RightColumn = styled.div`
  width: 208px;
`;

export const PageLogoNotificationCount = styled.span`
  position: absolute;
  right: -5px;
  border-radius: 50%;
  padding: 2px;
  color: #fff;
  background-color: #3AC1A9;
  font-size: 10px;
  z-index: 2;
`;