import copyTempHtml from './copyTemp.html';

/* @ngInject */
let copyTempComponent = {
  template: copyTempHtml,
  controllerAs: 'copyTemp',
  controller: function($state,$stateParams,copyTempService) {
    const vm = this;
    vm.title = copyTempService.title();
  }
}
export default copyTempComponent;
