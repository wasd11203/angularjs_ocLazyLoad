angular.module(
	'app').config(function($ocLazyLoadProvider) {
	$ocLazyLoadProvider.config({
		debug: true,
		events: true,
		modules: [{
			name: 'BCtrl',
			files: ['js/controller/cb.js']
		},{
			name: 'ACtrl',
			files: ['js/controller/ca.js','js/bower_components/angular-cookies/angular-cookies.min.js']
		}]
	});
});