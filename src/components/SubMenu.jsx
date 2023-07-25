import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';


const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    heigth: 60px;

    &:hover {
        background-color: #252831;
        border-left: 4px solid #632ce4;
        cursor: point;
    }
`;

const DropdownLink = styled(Link)`
    color: #f5f5f5;
    background-color: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;

    &:hover{ 
        background: #632ce4;
        cursor: ponter;
    }

`;



const SidebarLabel = styled.span`
    margin-left: 16px;
`;

export default function SubMenu({ item, title }) {
const [subnav, setSubnav] = useState(false);

    const showSubnav =() => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
            {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </div>
      </SidebarLink>
      <div>
        {subnav && item.subNav.map((item, index) =>{
            return (
                <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            )
        })}
      </div>
    </>
  );
}
