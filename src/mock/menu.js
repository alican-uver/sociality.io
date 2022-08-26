const menuItems = [
  {
    name: 'notifications',
    link: '/notifications',
    icon: '/static/icons/sidebar/notifications-icon.png',
    subCategories: null,
    notificationCount: 29,
  },
  {
    name: 'summary',
    link: '/summary',
    icon: '/static/icons/sidebar/summary-icon.png',
    subCategories: [
      {
        name: 'lorem ipsum',
        link: 'summary/blabla',
      },
    ],
  },
  {
    name: 'publish',
    link: '/publish',
    icon: '/static/icons/sidebar/publish-icon.png',
    subCategories: [
      {
        name: 'compose',
        link: 'publish/compose',
      },
      {
        name: 'feed',
        link: 'publish/feed',
      },
    ],
  },
  {
    name: 'engage',
    link: '/engage',
    icon: '/static/icons/sidebar/engage-icon.png',
    subCategories: [
      {
        name: 'lorem ipsum',
        link: 'engage/blabla',
      },
    ],
  },
  {
    name: 'listen',
    link: '/listen',
    icon: '/static/icons/sidebar/listen-icon.png',
    subCategories: [
      {
        name: 'lorem ipsum',
        link: 'listen/blabla',
      },
    ],
  },
  {
    name: 'report',
    link: '/report',
    icon: '/static/icons/sidebar/report-icon.png',
    subCategories: [
      {
        name: 'lorem ipsum',
        link: 'report/blabla',
      },
    ],
  },
];

export const pageLogos = [
  {
    key: 'notifications',
    img: '/static/logos/logo1.png',
  },
  {
    key: 'summary',
    img: '/static/logos/logo2.png',
    notificationCount: 99,
  },
  {
    key: 'publish',
    img: '/static/logos/logo3.png',
  },
  {
    key: 'engage',
    img: '/static/logos/logo4.png',
  },
  {
    key: 'listen',
    img: '/static/logos/logo5.png',
  },
  {
    key: 'report',
    img: '/static/logos/logo6.png',
  },
];

export default menuItems;