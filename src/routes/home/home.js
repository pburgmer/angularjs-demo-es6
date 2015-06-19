import 'angular-ui-router';

import {app} from 'module';

app.config(function homeRoute($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    template: 'Hello <span ng-bind="home.name"></span>',
    controller: 'HomeCtrl as home'
  });
});

class HomeCtrl {
  constructor($scope) {
    this.name = "World";
  }
}

app.controller('HomeCtrl', HomeCtrl);
