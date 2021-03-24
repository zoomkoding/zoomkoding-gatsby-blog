module.exports = {
  title: `zoomkoding.com`,
  description: `줌코딩의 개발일기`,
  author: `zoomkoding`,
  siteUrl: `https://www.zoomkoding.com`,
  social: {
    github: `https://github.com/zoomKoding`,
    linkedIn: `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
    email: `zoomkoding@gmail.com`,
  },
  comments: {
    utterances: {
      repo: `zoomkoding/zoomkoding.com`,
    },
  },
  ga: 'UA-134826755-2', // Google Analytics Tracking ID

  // metadata for bio
  bio: {
    language: `ko`, // 'en', 'ko'
    name: '정진혁',
    description: ['이로운 것을 만드는', '배움을 좋아하는', 'UI/UX에 관심있는', '글로 나누길 좋아하는'],
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
          post: 'https://zoomkoding.github.io/codeforces/2019/11/17/codeforces-600.html',
        },
      },

      {
        date: '2019.11.18',
        activity: '2019 교내 인공지능(육목) 경진대회 우승',
      },

      {
        date: '2019.11.21',
        activity: '네이버 캠퍼스 핵데이 참여',
        links: {
          post: '/2019-naver-hack-day'
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
        activity: 'Gatsby로 개인 블로그 디자인 및 개발',
        links: {
          post:'/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'https://gatsby-starter-zoomkoding.netlify.app',
        },
      },
    ],

    projects: [
      {
        title: 'Picky(글로벌 스킨케어 제품 분석 모바일 앱) 개발',
        description:
          '스타트업에서 구글 출신 CEO님과 CTO님을 포함한 훌륭하신 4분과 함께 앱 개발 사업을 진행했습니다. 저는 초기에 1인 개발자로 v1.0 개발과 이후 유지보수를 담당했습니다. 약 한달 반의 개발 기간을 거쳐 2020년 4월에 v1.0을 배포했고 2021년 3월 현재 4만명 넘는 유저를 보유하고 있습니다.',
        techStack: ['flutter', 'nodejs'],
        thumbnailUrl:
          'https://media-exp1.licdn.com/dms/image/C560BAQGc18OyGfmPZQ/company-logo_200_200/0/1603042283518?e=1622678400&v=beta&t=brvRul711R43vMtIGR96EX7ZEPSTbemrbyzlhC6Dhm4',
        links: {
          post: '/start-up-app-development',
          googlePlay: 'https://play.google.com/store/apps/details?id=care.jivaka.picky',
          appStore: 'https://apps.apple.com/app/picky-skincare-made-smarter/id1504197356',
        },
      },
      {
        title: 'Gatsby로 개인 블로그 테마 개발',
        description:
          '정 때문에 떠나지 못하던 Jekyll로 만든 블로그를 떠나, 제가 좋아하는 스타일로 블로그를 디자인하고 개발해보고 싶은 마음에 이 프로젝트를 시작하게 되었습니다. 많은 분들이 쓰실 수 있도록 피드백을 반영해서 꾸준히 발전시켜나갈 예정입니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png',
        links: {
          post:'/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'https://gatsby-starter-zoomkoding.netlify.app',
        },
      },
      {
        title: '2020 웹 중심 우아한테크캠프 참여',
        description:
          '웹 프론트엔드 개발 경험을 키워보고자 지원하여 2달간 우아한 형제들에서 주관하는 우아한테크캠프를 진행했습니다. 캠프 기간 동안 저와 비슷한 열정을 가진 사람들과 함께 성장할 수 있었던 유익한 시간이었습니다.',
        techStack: ['react', 'nodejs'],
        thumbnailUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYxT7-ADQQo72P5qbwJjwySPY8p1C1a3L0w&usqp=CAU',
        links: {
          post:'/woowa-tech-camp-final',
          github: 'https://github.com/woowa-techcamp-2020/bmart-6',
        },
      },
      {
        title: '대학시간(대학교 수강신청 보조 웹 앱) 개발',
        description:
          '입사일을 앞두고 뭐를 할까 고민하던 중에 수강신청 준비 과정의 어려움을 해소할 수 있는 웹사이트를 개발하게 되었습니다. 이번 프로젝트는 조금 특별하게 기획, 디자인, 홍보, 개발 모두 직접 도전하게 되었고 약 한달의 시간 끝에 배포했습니다. 21년도 1학기 재학생 중 1600명 정도가 이 서비스를 사용했습니다.',
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
