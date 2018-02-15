import angular from 'angular';
import routing from './example.route';
import component from './example.component';
import service from './example.service';
import test from './components/test';
import './example.style.scss';
/* @ngInject */
angular
  .module('example', [])
  .component('example', component)
  .component('test', test)
  .factory('exampleService', service)
//.config(routing);
