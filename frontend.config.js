const app = {
  title: 'GDG Philippines Devfest 2018',
  shortName: 'GDGPh Devfest 2018', // 12 characters max
  description: 'GDG Philippines Devfest 2018',
  sentry: '',
  baseHref: '/',
  startUrl: '/',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  twitter: '@gdgphilippines',
  twitterCreator: '@tjmonsi',
  image: ''
};

const theme = {
  themeColor: '#000',
  backgroundColor: '#000',
  favicon: '',
  webApp: {
    capable: 'yes',
    statusBarStyle: 'black-translucent',
    tapHighlight: 'no'
  },
  icons: []
};

const fragments = {
  'page-home': 'src/pages/page-home/index.js',
  'page-not-found': 'src/pages/page-not-found/index.js'
};

const routes = [
  {
    route: '/',
    page: 'page-home'
  },
  {
    route: 'no-page',
    page: 'page-not-found'
  }
];

module.exports = { app, theme, fragments, routes };
