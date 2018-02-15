import exampleHtml from './example.html';

/* @ngInject */
let exampleComponent = {
  template: exampleHtml,
  controllerAs: 'example',
  controller: function($scope,$rootScope,$state,$stateParams,$location,exampleService) {
    const vm = this;
    vm.title = exampleService.title();
    $scope.list = exampleService.list;
    $scope.eventbus = function(e){
    	console.log(e);
    	//$rootScope.$emit('aaa');
    }
    $scope.jump = function(){
    	$state.go('home',{
    		price:100,
    		name:'xiu'
    	})
    }
//  console.log($location.path())
  }

}
export default exampleComponent;
