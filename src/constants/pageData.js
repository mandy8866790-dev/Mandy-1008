/* 
  There are some weird things happening with the offset and the camera 
  movement because of the implementation of the smooth stop of the camera.

  My solution is to define two diferent positions.
  position is relative to the scrollComponent, that's for the nav bar, 
  displayPosition is the offset of the default camara position when facing the cube.
*/

export const PAGE_DEPH_MARGIN = 15;

export const EXPERIENCE = {
  rows: 2,
  separation: 3,
  leftPadding: -0.32,
  topPadding: 0.22,
  scale: 0.2,
  //optionally show the websiteURL inside of the cube in an Iframe
  webViewer: {
    position: [0, 0, -15],
    rotation: [Math.PI, Math.PI, Math.PI],
    height: 720,
    width: 1024,
  },
  items: [
    {
      url: 'websites-preview/penhailigen.png',
      websiteURL: 'https://www.spatial.io/s/Penhaligons-Story-67f69d087096556e2726a2b8?share=8307231098053039486',
    },
    {
      url: 'websites-preview/hetuxinyu.png',
      websiteURL: 'https://www.artsteps.com/view/681954ff9ce8ad25f31c1bae',
    },
    {
      url: 'websites-preview/walking English class.PNG',
      websiteURL:
        'https://weibo.com/1960086960/Op0rI4iFY', //optional open url in new tab
    },
    {
      url: 'websites-preview/AR card.png',
      websiteURL:
        'pages/kivicube/scene?scene-id=22S2SSO26b5PAZnEHgIq4BrPHoOjg927',
    },
  ],
};

export const SKILLS_LIST = {
  rows: 4,
  separation: 2.4,
  leftPadding: -0.4,
  topPadding: 0.33,
  scale: 0.15,
  items: [
    { url: 'icons/FCP.png', websiteURL: null },
    { url: 'icons/2.png', websiteURL: null },
    { url: 'icons/AI.png', websiteURL: null },
    { url: 'icons/13.png', websiteURL: null },
    { url: 'icons/Arduino.png', websiteURL: null },
    { url: 'icons/Github.png', websiteURL: null },
    { url: 'icons/VC.png', websiteURL: null },
    { url: 'icons/TD.png', websiteURL: null },
    { url: 'icons/ME.png', websiteURL: null },
    { url: 'icons/Picgo.png', websiteURL: null },
    { url: 'icons/Ae.png', websiteURL: null },
    { url: 'icons/C4D.png', websiteURL: null },
  ],
};

export const STOPS = [
  { displayPosition: 0, position: 0, name: 'Title' },
  {
    position: 0.13,
    displayPosition: 0.13,
    displayPositionOffset: -0.04,
    displayPositionOffsetEnd: -0.02,
    name: 'About',
  },
  {
    position: 0.2137,
    displayPosition: 0.2007,
    displayPositionOffset: -0.03,
    displayPositionOffsetEnd: -0.07,
    name: 'Experience',
  },
  {
    position: 0.2982,
    displayPosition: 0.232,
    displayPositionOffset: 0.05,
    displayPositionOffsetEnd: -0.12,
    name: 'Skills',
  },
  {
    position: 0.3899,
    displayPosition: 0.3009,
    displayPositionOffset: 0.08,
    displayPositionOffsetEnd: -0.17,
    name: 'Download CV',
  },
  {
    position: 0.48,
    displayPosition: 0.29,
    displayPositionOffset: 0.18,
    displayPositionOffsetEnd: -0.15,
    name: 'Personal Projects',
  },
  {
    position: 0.592,
    displayPosition: 0.28,
    displayPositionOffset: 0.3,
    displayPositionOffsetEnd: -0.1,
    name: 'Get In Touch',
  },
  {
    position: 1,
    displayPosition: 1,
    displayPositionOffset: 0.03,
    displayPositionOffsetEnd: 0,
    name: 'Profile Picture',
  },
];

export const displayAt = (stopName) =>
  STOPS.find((stop) => stop.name === stopName);
