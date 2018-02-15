import homeHtml from './home.html';

/* @ngInject */
let exampleComponent = {
  template: homeHtml,
  controllerAs: 'home',
  controller: function($state,$stateParams,homeService) {
    const vm = this;
    vm.title = homeService.title();
    console.log($stateParams)
  }

}
export default exampleComponent;
