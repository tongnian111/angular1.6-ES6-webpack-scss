import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import example from './views/example/example.module';
import home from './views/home/home.module';
import customConf from '../config';
import './app.scss';
import router from './router';
angular.module('app', [
  uirouter,
  'example',
  'home'
])
.config(router)
.value('config',customConf)
