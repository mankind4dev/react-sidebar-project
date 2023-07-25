import React from 'react';
import * as FaIcons  from 'react-icons/fa';
import * as AiIcons  from 'react-icons/ai';
import * as IoIcons  from 'react-icons/io';
import * as RiIcons  from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Overview',
    path: '/overview',
    icons: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icons: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icons: <IoIcons.IoIosPaper />,
      },
    ]
  },

  {
    title: 'Reports',
    path: '/reports',
    icons: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icons: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Report 2',
        path: '/reports/reports2',
        icons: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Report 3',
        path: '/reports/reports3',
        icons: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoMdPaper />, 
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoMdPaper />,
      },
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: 'Contact Us',
    path: '/contactUs',
    icon: <IoIcons.IoMdPeople />,
  }
]
