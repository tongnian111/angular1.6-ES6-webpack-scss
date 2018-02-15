import angular from 'angular';
import routing from './copyTemp.route';
import component from './copyTemp.component';
import service from './copyTemp.service';
/* @ngInject */
angular
  .module('copyTemp', [])
  .component('copyTemp', component)
  .factory('copyTempService', service)
//.config(routing);
