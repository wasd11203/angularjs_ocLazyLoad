
angular.module('app')
  .controller('BCtrl', function ($state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $state.go('cb.child',{},[]);
  });