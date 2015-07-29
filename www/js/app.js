
  define([
      'angular',
      'uiRouter',
      'uiBootstrap',
      './controllers/index',
      './services/index'
  ], function (angular) {
      'use strict';

      var appModule = angular.module('app', [
          'ui.router','ui.bootstrap.datepicker','app.controllers','app.services'
      ]);


     appModule.config(
    [          '$stateProvider', '$urlRouterProvider', '$httpProvider',
      function ($stateProvider,   $urlRouterProvider) {

         $urlRouterProvider
          .otherwise('/');

         $stateProvider

          .state("home", {

            url: "/",
            controller: "app.controllers.form",
            templateUrl: 'template/views/form.html'
          })
      }
    ]
  );
      return appModule;
  });


