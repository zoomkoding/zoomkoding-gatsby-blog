module.exports = {
  title: `zoomkoding.com`,
  description: `줌코딩의 개발일기`,
  author: `zoomkoding`,
  siteUrl: `https://www.zoomkoding.com`,
  ogImage: `https://raw.githubusercontent.com/zoomKoding/zoomkoding-gatsby-blog/master/src/assets/og-image.png`,
  social: {
    github: `https://github.com/zoomKoding`,
    linkedIn: `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
    email: `zoomkoding@gmail.com`,
  },
  comments: {
    utterances: {
      repo: `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'UA-134826755-2', // Google Analytics Tracking ID

  // metadata for bio
  bio: {
    language: `ko`, // 'en', 'ko'
    name: '정진혁',
    description: ['변하지 않는 가치를 추구하는', '주체적으로 일하는', '이로운 것을 만드는'],
  },

  // metadata for About Page
  about: {
    timestamps: [
      {
        date: '2018.07 ~ 2018.12',
        activity: '자존감 랩실(X-ray 그리드 라인 제거 개선 기법 연구)',
      },

      {
        date: '2018.11.22',
        activity: '2018 교내 인공지능(육목) 경진대회 우승',
      },

      {
        date: '2019.06 ~ 2019.12',
        activity: '알고리즘 휴학',
        links: {
          post: '/how-to-algo',
        },
      },

      {
        date: '2019.11.17',
        activity: '코드포스 블루',
        links: {
          post: '/codeforces-round-600',
        },
      },

      {
        date: '2019.12 ~ 2020.06',
        activity: '스타트업 인턴 진행 및 Picky 앱 개발',
        links: {
          post: '/start-up-app-development',
          googlePlay: 'https://play.google.com/store/apps/details?id=care.jivaka.picky',
          appStore: 'https://apps.apple.com/app/picky-skincare-made-smarter/id1504197356',
        },
      },

      {
        date: '2020.07 ~ 2020.08',
        activity: '2020 우아한테크캠프 참여',
        links: {
          post: '/woowa-tech-camp-final',
          github: 'https://github.com/woowa-techcamp-2020/bmart-6',
        },
      },

      {
        date: '2021.01 ~ 2021.02',
        activity: '대학시간(대학교 수강신청 보조 웹 앱) 개발 및 서비스',
        links: {
          post: '/college-timetablee-development',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'https://www.timetable.college',
        },
      },
      {
        date: '2021.02 ~ 2021.03',
        activity: '개인 블로그 디자인 및 개발',
        links: {
          post: '/zoomkoding-gatsby-blog-introduction',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'https://gatsby-starter-zoomkoding.netlify.app',
        },
      },
      {
        date: '2021.03 ~ ',
        activity: '우아한 형제들에서 일하는 중🚀',
      },
    ],

    projects: [
      {
        title: 'Picky(글로벌 스킨케어 제품 분석 모바일 앱) 개발',
        description:
          '구글 출신 분들이 창업한 스타트업에 인턴십을 하던 중 피버팅을 하게 되면서 저는 1인 개발자로 신규 사업에 참여하게 되었습니다. 5명의 경험이 많은 팀원들과 힘을 합쳐 Picky라는 앱을 개발하고 지속적으로 서비스를 확장해나갔습니다. 이 과정을 통해 실제 서비스의 시작과 성장하는 과정을 경험해볼 수 있었습니다.',
        techStack: ['flutter', 'nodejs'],
        thumbnailUrl:
          'https://media-exp1.licdn.com/dms/image/C560BAQGc18OyGfmPZQ/company-logo_200_200/0/1603042283518?e=1633564800&v=beta&t=Ksxpku6DrCW0RygAnYwyvE2Ezx10lZLQDn0Rr4e-3Ww',
        links: {
          post: '/start-up-app-development',
          googlePlay: 'https://play.google.com/store/apps/details?id=care.jivaka.picky',
          appStore: 'https://apps.apple.com/app/picky-skincare-made-smarter/id1504197356',
        },
      },
      {
        title: '개발 블로그 테마 개발',
        description:
          '간단한 테마를 활용하여 개발 블로그를 만들고 운영하다 보니 점점 블로그를 내가 원하는 형태로 만들고 싶게 되었습니다. 입사 전 시기를 활용해서 원하는 기능과 디자인이 있는 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl:
          'https://github.com/zoomKoding/zoomKoding.github.io/blob/source/zoomkoding.png?raw=true',
        links: {
          post: '/why-dev-blog',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'https://gatsby-starter-zoomkoding.netlify.app',
        },
      },
      {
        title: '2020 우아한테크캠프 참여',
        description:
          '스타트업에서 앱 개발을 하면서 좋은 개발에 대한 갈증이 매우 크던 중에 좋은 기회를 잡게 되어 참여하게 되었습니다. 2달 간 몰입해서 좋은 사람들과 웹 개발을 경험하며, 많이 배우고 성장할 수 있었던 시간이었습니다.',
        techStack: ['react', 'nodejs'],
        thumbnailUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYxT7-ADQQo72P5qbwJjwySPY8p1C1a3L0w&usqp=CAU',
        links: {
          post: '/woowa-tech-camp-final',
          github: 'https://github.com/woowa-techcamp-2020/bmart-6',
        },
      },
      {
        title: '대학시간(대학교 수강신청 보조 웹 앱) 개발',
        description:
          '학생들이 예비 수강 신청 과정에서 겪게 되는 불편함을 개선할 수 있는 웹 서비스를 개발하였습니다. 첫 서비스를 진행한 2021년 1학기에만 전체 학생의 절반 가량이 서비스를 경험했고, 사용한 학생들로부터 고맙다는 이야기를 여러 경로로 전달 받게 되었습니다. 개발이 줄 수 있는 좋은 영향력를 많이 느꼈던 프로젝트였습니다.',
        techStack: ['react', 'nodejs'],
        thumbnailUrl: 'https://www.timetable.college/timetable.png',
        links: {
          post: '/college-timetable-development',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'http://www.timetable.college',
        },
      },
    ],
  },
};
