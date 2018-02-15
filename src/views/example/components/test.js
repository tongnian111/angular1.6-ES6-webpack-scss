import test from './test.html';
/* @ngInject */
let testComponent = {
	template: test,
	controllerAs: 'test',
	controller: function($scope, $rootScope, $state, $location, $http, $q, exampleService, config) {
		var con = 0;
		$scope.testList = [con];
		$scope.num = 0;
		$rootScope.$on('aaa', function() {
			$scope.num++
		});
		$scope.add = function() {
			con++;
			$scope.testList.push(con);
			console.log($state)
		}
		$scope.sendget = function() {
			$http.get(`${config.baseUrl}/testget`).then(res => {
				console.log(res)
			})
		}
		$scope.sendpost = function() {
			$http.post(`${config.baseUrl}/testpost`, {
				price: 100
			}).then(res => {
				console.log(res);

				$scope.testList = res.data.data;
			})
		}
		$scope.sendput = function() {
			$http.put(`${config.baseUrl}/testput`, {
				name: 'xiu'
			}).then(res => {
				console.log(res)
			})
		}
	}

}
export default testComponent;