import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Mandy Studio',
  subTitle: 'Art & Technology',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Mandy Gonzalez portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* My name is Mandy. I’m a student majoring in Art and Technology, passionate about photography, film, and music.",
        "* I’m happy to have you visit my webpage, but it’s clear that this isn’t just my effort alone.",
        "* I love traveling, making new friends, and remembering lots of funny jokes. Sometimes I can be a bit nonsensical — maybe you’ll see my abstract side later on.",
        "* I just hope you can get to know me a little better.",
      ], 
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://docs.google.com/document/d/1k6ogUOLfoE0quCgNtW233mOWyk8brehM/edit?usp=sharing&ouid=107495351656140896639&rtpof=true&sd=true',
          },
        ],
      },
    },
    {
      scale: 15, // 页面整体缩小，让相机靠近显示
      displayAt: displayAt('Movie'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN*1, 0], // 上移一点，避免太远
      imageList: {
        rows: 1,
        separation: 0.2,     // 图片间距适中
        leftPadding: -8,
        topPadding: 0.3,
        scale: 3,          // 图片本身放大约3倍
        items: [
          {
            url: 'websites-preview/Walking English Class - 1-哔哩哔哩.jpg',
            websiteURL: 'https://b23.tv/jIUL7eZ',
          },
          {
            url: 'websites-preview/Walking English Class - 2-哔哩哔哩.jpg',
            websiteURL: 'https://b23.tv/atda4G5',
          },
          {
            url: 'websites-preview/Walking English Class - 3-哔哩哔哩.jpg',
            websiteURL: 'https://b23.tv/c5HPLv2',
          },
          {
            url: 'websites-preview/Walking English Class - 4-哔哩哔哩.jpg',
            websiteURL: 'https://b23.tv/2lMnGO2',
          },
        ],
      },
    }
    ,
    
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/BliBli.PNG',
            websiteURL: 'https://space.bilibili.com/1322978371?spm_id_from=333.1007.0.0',
          },
          {
            url: 'icons/Tiktalk.PNG',
            websiteURL:
              'https://www.douyin.com/?recommend=1',
          },
          {
            url: 'icons/Redbook.PNG',
            websiteURL: 'https://www.xiaohongshu.com/user/profile/62b916a8000000001b02b74f',
          },
          {
            url: 'icons/Weibo.PNG',
            websiteURL: 'https://weibo.com/u/7650497947',
          },
        ],
      },
    },
  ],
};

export default configs;
