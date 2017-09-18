

angular.module('app')
  .controller('ACtrl', function ($state,$cookies) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $state.go('ca.child',{},[]);
    $cookies.put('code','hello');
  });