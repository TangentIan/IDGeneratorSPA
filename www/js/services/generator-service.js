	define(['./module', '../global-config'], function(services, config){
      'use strict';
        services.factory('IDGenerator',['$rootScope','$http', function($rootScope,$http){


            var factory = {}, path = config.getBaseUrl() + config.getIDGeneratorAPI();

            factory.createIDFrom = function (data) {
                //return $http.get( path);
               return $http({method: 'POST', url: path, data: data});
            };
            return factory;



        }]);


	});