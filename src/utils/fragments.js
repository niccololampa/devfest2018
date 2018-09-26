const fragments = {
  '/': () => import('../pages/page-home/index.js'),
  '/speakers': () => import('../pages/page-speakers/index.js'),
  '/speakers/:speakerId': () => import('../pages/page-speaker/index.js'),
  'no-page': () => import('../pages/page-not-found/index.js')
};
export { fragments };
