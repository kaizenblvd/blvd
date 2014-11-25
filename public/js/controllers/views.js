'use strict';

angular.module('kaizen-concepto.controllers-views', [])

.controller('inicioController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {

    $scope.logOut = function () {
        authService.logOut();
        $location.path('/acceder');
    }

    $scope.authentication = authService.authentication;
}])

.controller('indicadoresController', ['$scope', 'indicadoresService', function ($scope, indicadoresService) {

	$scope.indicadores = [];

	indicadoresService.getIndicadores().then(function (results) {
		$scope.indicadores = results.data;

	}, function (error) {

	});
}]);


