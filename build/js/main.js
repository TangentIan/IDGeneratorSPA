require.config({
	paths:{
		'jquery': '../lib/jquery.min',
		'angular': '../lib/angular.min',
		'uiRouter': '../lib/angular-ui-router.min',
        'uiBootstrap': '../lib/ui-bootstrap.min'
	},
	shim:{

		 'bootstrap-min':['jquery'],
		 'angular': {
            exports: 'angular'
        },
        'uiRouter':{
            deps: ['angular']
        },
        'uiBootstrap':{
            deps: ['angular']
        }

	}
});

define(['require','angular',  'app'],
    function(require,angular){
        'use strict';

        require(['jquery'], function ($) {
            $(function(){
                angular.bootstrap(document, ['app']);
            });

        });

    });