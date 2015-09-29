var freelancer = angular.module('Freelancer', ['ui.router']);

freelancer.config(function($stateProvider) {
  $stateProvider.state('home', {
    url:"",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/home.html',
      },
    }
  })
})
