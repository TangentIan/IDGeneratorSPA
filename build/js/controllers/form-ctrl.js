/**
 * Created by Francis Nana on 7/26/2015.
 */
define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('app.controllers.form', ['$scope', 'IDGenerator',
         function ($scope, generator) {

            var empty = {};
             $scope.generatedID = null;

             $scope.submit = function(user) {
                 $scope.errorMsg = null;
                 user.dateOfBirth= formatDate($scope.dt);

                generator.createIDFrom(user)
                    .success(function(res, status, headers, config) {
                        if(res.id){
                            $scope.generatedID = res.id;
                        }
                        else{
                            $scope.errorMsg = res.message;
                            $scope.generatedID = null;
                        }

                    })
                    .error(function(data, status, headers, config) {
                        $scope.errorMsg = "We were not able to reach the server this time";
                        $scope.generatedID = null;
                    });
             };
             $scope.dateOptions = {
                 formatYear: 'yy',
                 startingDay: 1
             };
             $scope.open = function($event) {
                 $event.preventDefault();
                 $event.stopPropagation();
                 $scope.opened = true;
             };

             $scope.reset = function() {
                 $scope.user = angular.copy(empty);
                 $scope.dt = null;
                 $scope.errorMsg = null;
             };

             function formatDate(d)
             {
               var day = d.getDate(), month = d.getMonth(),  year = d.getFullYear();

                 year = year.toString().substr(2,2);
                 month = month + 1 + "" ;
                 if (month.length == 1)
                 {
                     month = "0" + month;
                 }
                 day = day + "";
                 if (day.length == 1)
                 {
                     day = "0" + day;
                 }
                 return year + month + day;
             }

             $scope.reset();
        }]);
});
