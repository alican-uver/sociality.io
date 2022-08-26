import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  DropdownWrapper,
  DropdownButton,
  SubCategoryItems,
  SubCategoryItem,
  DropdownLink,
  DropdownLinkIcon,
  DropdownOnandEndIcon,
  NotificationCountBadge,
} from './styles';

const Dropdown = ({
  name,
  link,
  pageIcon,
  subCategories = null,
  selectActiveLogo,
  notificationCount,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const isMultipleDropdown = subCategories?.length;
  const openAndEndIconSource = `/static/icons/sidebar/${isOpen ? 'minus' : 'plus'}_empty_icon.svg`;

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (!dropdownRef?.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside);
    return () => {
      window.removeEventListener('mouseup', handleClickOutside);
    };
  });

  return (
    <DropdownWrapper
      ref={dropdownRef}
      onClick={handleOpenModal}
      isOpen={isOpen}
    >
      <DropdownLink isOpen={isOpen} onClick={() => selectActiveLogo(name)}>
        <DropdownLinkIcon src={pageIcon} alt={pageIcon} />
        {isMultipleDropdown ? (
          <>
            <DropdownButton href={void (0)}>{name}</DropdownButton>
            <DropdownOnandEndIcon src={openAndEndIconSource} alt={openAndEndIconSource} />
          </>
        ) : (
          <NavLink to={link}>{name}</NavLink>
        )}
        {notificationCount && (
          <NotificationCountBadge>
            {notificationCount}
          </NotificationCountBadge>
        )}
      </DropdownLink>
      <SubCategoryItems isOpen={isOpen && isMultipleDropdown}>
        {isMultipleDropdown ? subCategories?.map((item, index) => (
          <SubCategoryItem key={index}>
            <NavLink to={item.link}>{item.name}</NavLink>
          </SubCategoryItem>
        )) : null}
      </SubCategoryItems>
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  pageIcon: PropTypes.string,
  subCategories: PropTypes.array,
  selectActiveLogo: PropTypes.func,
  notificationCount: PropTypes.number,
};

export default Dropdown;
