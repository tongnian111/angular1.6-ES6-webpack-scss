function copyTempRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('copyTemp', {
      url: '/copyTemp',
      component: 'copyTemp'
    })
}
/* @ngInject */
export default copyTempRoutes;
