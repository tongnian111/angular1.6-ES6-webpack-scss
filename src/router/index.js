//routing.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
//$locationProvider
function routing($stateProvider, $urlRouterProvider) {
//	$locationProvider.html5Mode(true);
	$urlRouterProvider.when('', '/home');
	$urlRouterProvider.when('/', '/home');
	$stateProvider
    .state('example', {
      url: '/example',
      component: 'example'
    })
    .state('home', {
      url: '/home',
      component: 'home'
    });
}

/* @ngInject */
export default routing;
