angular.module(
	'app', [
		'ngResource', 'ui.router', "oc.lazyLoad",
		'ui.bootstrap'
	]).config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	$stateProvider.state('ca', {
			url: '/ca',
			templateUrl: 'views/controllerA.html',
			controller: 'ACtrl',
			controllerAs: 'aCtrl',
			resolve: {
				ACtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('ACtrl');
				}]
			}
		})
		.state('ca.child', {
			url: '/achild',
			templateUrl: 'views/ca/ca-child.html',
		})
		.state('cb', {
			url: '/cb',
			templateUrl: 'views/controllerB.html',
			controller: 'BCtrl',
			controllerAs: 'bCtrl',
			resolve: {
				BCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('BCtrl');
				}]
			}
		}).state('cb.child', {
			url: '/bchild',
			templateUrl: 'views/cb/cb-child.html',
		})

	$urlRouterProvider.otherwise('ca');
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});