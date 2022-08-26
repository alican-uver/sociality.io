import styled from 'styled-components';

export const DropdownWrapper = styled.div``;

export const DropdownLink = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  height: 53px;
  display: flex;
  align-items: center;
  padding-inline: 10px;
  background-color: ${(props) => (props.isOpen && '#F55661')};
  &:after {
		display: ${(props) => (!props.isOpen && 'none')};
		content: '';
		position: absolute;
		width: 10px;
		height: 10px;
		transform-origin: 50% 50%;
		transform: rotate(45deg) translateX(-50%);
		background-color: #F55661;
    left: 20px;
		bottom: -8px;
  }
  a {
    text-transform: uppercase;
    color: #fff;
    font-size: 15px;
    &:hover {
      border-bottom: 2px solid #F55661;
    }
  }
`;

export const DropdownLinkIcon = styled.img`
  margin-right: 10px;
`;
export const DropdownOnandEndIcon = styled.img`
  position: absolute;
  right: 15px;
  width: 25px;
`;
export const DropdownButton = styled.a``;

export const SubCategoryItems = styled.ul`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: relative;
  flex-direction: column;
  margin: 10px;
`;

export const SubCategoryItem = styled.li`
  margin: 5px 0;
  text-transform: capitalize;
  color: #F55661;
  a {
    font-size: 14px;
    color: #fff;
    &:hover {
      border-bottom: 2px solid #F55661;
    }
  }
`;

export const NotificationCountBadge = styled.span`
  margin-left: 8px;
  padding-inline: 6px;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 3px;
  font-size: 11px;
`;
