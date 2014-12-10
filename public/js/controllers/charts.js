'use strict';
app.controller('historicController', ['$scope', 'indicadoresService', function ($scope, indicadoresService) {

  indicadoresService.getIndicadores('history-all', 'general').then(function (results) {
    $scope.data = results.data;
  }, function (error) {
    console.log('Error.');
  });

}]);

app.controller('ponderadoController', ['$scope', 'indicadoresService', function ($scope, indicadoresService) {

  indicadoresService.getIndicadores('history', 'general').then(function (results) {
    $scope.data = results.data;
  }, function (error) {
    console.log('Error.');
  });

}]);


app.controller('allusController', ['$scope', 'indicadoresService', function ($scope, indicadoresService) {

  indicadoresService.getIndicadores('history', 'allus').then(function (results) {
    $scope.data = results.data;
  }, function (error) {
    console.log('Error.');
  });

}]);

app.controller('eccController', ['$scope', 'indicadoresService', function ($scope, indicadoresService) {

  indicadoresService.getIndicadores('history', 'ecc').then(function (results) {
    $scope.data = results.data;
  }, function (error) {
    console.log('Error.');
  });

}]);

app.controller('sccpController', ['$scope', 'indicadoresService', function ($scope, indicadoresService) {

  indicadoresService.getIndicadores('history', 'sccp').then(function (results) {
    $scope.data = results.data;
  }, function (error) {
    console.log('Error.');
  });

}]);



app.directive('metrics', function($http) {
  return {
    restrict: 'E',
    scope: {
      data: '=',
      height: '=',
      width: '=',
      hasxaxis: '=',
      format: '=',
      extendedticks: '='
    },
    link: function(scope, element) {

      $(function(){

        var data = convert_dates(scope.data, 'Mes', '%Y-%m-%d');
        data_graphic({
          data: data,
          height: scope.height,
          width: scope.width,
          target: element[0],
          x_accessor: 'Mes',
          y_accessor: 'Ponderado',
          animate_on_load: true,
          interpolate: 'basic',
          min_y_from_data: true,
          area: false,
          x_axis: scope.hasxaxis,
          format: scope.format,
          decimals: 2,
          x_extended_ticks: scope.extendedticks
        });
      });
    }
  };
});

app.directive('metricsgeneral', function() {
  return {
    restrict: 'E',
    scope: {
      height: '=',
      width: '='
    },
    link: function(scope, element) {

      d3.json('entel/ponderado-general.json', function(data)  {
        for(var i=0;i<data.length;i++) {
          data[i] = convert_dates(data[i], 'fecha');
        }

        data_graphic({
          data: data,
          height: scope.height,
          width: scope.width,
          target: element[0],
          x_accessor: 'fecha',
          y_accessor: 'value',
          animate_on_load: true,
          linked: true,
          min_y_from_data: true,
          legend: ['Ponderado','EPA','Atención', 'Servicio'],
          legend_target: '.legend',
          decimals: 2,
          format: 'percentage',
          xax_tick: 0,
        });
      });
    }
  };
});

app.directive('metricsallus', function() {
  return {
    restrict: 'E',
    scope: {
      height: '=',
      width: '='
    },
    link: function(scope, element) {

      d3.json('entel/ponderado-allus.json', function(data)  {
        for(var i=0;i<data.length;i++) {
          data[i] = convert_dates(data[i], 'fecha');
        }

        data_graphic({
          data: data,
          height: scope.height,
          width: scope.width,
          target: element[0],
          x_accessor: 'fecha',
          y_accessor: 'value',
          animate_on_load: true,
          linked: true,
          min_y_from_data: true,
          legend: ['Ponderado','EPA','Atención', 'Servicio'],
          legend_target: '.legend',
          decimals: 2,
          format: 'percentage'
        });
      });
    }
  };
});

app.directive('metricsecc', function() {
  return {
    restrict: 'E',
    scope: {
      height: '=',
      width: '='
    },
    link: function(scope, element) {

      d3.json('entel/ponderado-ecc.json', function(data)  {
        for(var i=0;i<data.length;i++) {
          data[i] = convert_dates(data[i], 'fecha');
        }

        data_graphic({
          data: data,
          height: scope.height,
          width: scope.width,
          target: element[0],
          x_accessor: 'fecha',
          y_accessor: 'value',
          animate_on_load: true,
          linked: true,
          min_y_from_data: true,
          legend: ['Ponderado','EPA','Atención', 'Servicio'],
          legend_target: '.legend',
          decimals: 2,
          format: 'percentage'
        });
      });
    }
  };
});


app.directive('metricssccp', function() {
  return {
    restrict: 'E',
    scope: {
      height: '=',
      width: '='
    },
    link: function(scope, element) {

      d3.json('entel/ponderado-sccp.json', function(data)  {
        for(var i=0;i<data.length;i++) {
          data[i] = convert_dates(data[i], 'fecha');
        }

        data_graphic({
          data: data,
          height: scope.height,
          width: scope.width,
          target: element[0],
          x_accessor: 'fecha',
          y_accessor: 'value',
          animate_on_load: true,
          linked: true,
          min_y_from_data: true,
          legend: ['Ponderado','EPA','Atención', 'Servicio'],
          legend_target: '.legend',
          decimals: 2,
          format: 'percentage'
        });
      });
    }
  };
});

app.controller('PopoverDemoCtrl', function ($scope) {
  $scope.dynamicPopover = 'Hello, World!';
  $scope.dynamicPopoverTitle = 'Title';
});

app.controller('radialPlotCtrl', function($scope) {
  $scope.dataset_a =  [ 
  { id: 0 , name: "Servicio" , value: 30 },
  { id: 1 , name: "Atención" , value: 50 },
  { id: 2 , name: "CROSS" , value: 20 },
  { id: 3 , name: "TMO" , value: 15 },
  { id: 4 , name: "EPA" , value: 55 }
  ];

  $scope.dataset_b =  [ 
  { id: 0 , name: "Servicio" , value: 85 },
  { id: 1 , name: "Atención" , value: 95 },
  { id: 2 , name: "CROSS" , value: 100 },
  { id: 3 , name: "TMO" , value: 50 },
  { id: 4 , name: "EPA" , value: 65 }
  ];
});

app.controller('ProgressDemoCtrl', function ($scope) {
  $scope.max = 100;
});