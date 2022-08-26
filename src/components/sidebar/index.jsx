import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuItems, { pageLogos } from '../../mock/menu';

import Dropdown from '../commons/dropdown';

import {
  Container,
  ProductLogoWrapper,
  PageLogo,
  PageWrapper,
  LeftColumn,
  RightColumn,
  PageLogoMask,
  ActivePageBorder,
  PageLogoImage,
  ProductLogoImage,
  PageLogoNotificationCount,
} from './styles';

const Sidebar = () => {
  const [activePage, setActivePage] = useState('publish');

  const selectActiveLogo = (logoKey) => {
    setActivePage(logoKey);
  };

  return (
    <Container>
      <ProductLogoWrapper>
        <Link to="/">
          <ProductLogoImage src="/static/logos/Sociality-logo.png" alt="Sociality-logo.jpg" />
        </Link>
      </ProductLogoWrapper>
      <PageWrapper>
        <LeftColumn>
          {pageLogos.map((item, index) => (
            <PageLogo key={index}>
              <PageLogoImage src={item.img} alt={item.img} />
              {activePage !== item.key ? (
                <PageLogoMask />
              ) : (
                <ActivePageBorder />
              )}
              {item?.notificationCount && (
                <PageLogoNotificationCount>
                  {item.notificationCount}
                </PageLogoNotificationCount>
              )}
            </PageLogo>
          ))}
        </LeftColumn>
        <RightColumn>
          {menuItems.map((item, index) => {
            const {
              name,
              link,
              icon,
              subCategories,
              notificationCount,
            } = item;
            return (
              <Dropdown
                key={index}
                link={link}
                name={name}
                pageIcon={icon}
                subCategories={subCategories}
                isHaveDropdownItems={!subCategories}
                selectActiveLogo={selectActiveLogo}
                notificationCount={notificationCount}
              />
            );
          })}
        </RightColumn>
      </PageWrapper>
    </Container>
  );
};

export default Sidebar;
