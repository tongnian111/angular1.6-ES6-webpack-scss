function exampleRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('example', {
      url: '/example',
      component: 'example'
    })
}
/* @ngInject */
export default exampleRoutes;
