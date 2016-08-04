angular.module('CustomApp.directives', [])

.directive('printThis', [function () {
	return {
		restrict: 'AEC',
		scope: {
			'text' : '@text'
		},
		template: '<input type="text" ng-model="text"> {{text}}',
		link: function (s, e, a) {
			console.log(s, e, 
				a);
		}
	};
}])