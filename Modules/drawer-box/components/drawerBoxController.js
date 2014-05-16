angular.module('drawerBoxModule').controller('drawerBoxCtrl', ['$scope', function ($scope) {

   // $http.get().then(function (data) {

      //  $scope.items = data.r.productArray;

   // });

      $scope.objects = products;


      $scope.items = [];
      while ($scope.objects.length) {
          $scope.items.push($scope.objects.splice(0, 3))

      }

      $scope.drawerContentURL = 'partials/item.html';
      $scope.currentItem = null;
      //$scope.rowIndex = 0;
     // $scope.displayIndex = null;



      $scope.setCurrentItem = function (item) { 
        
        $scope.currentItem = item;
      };

      $scope.closeDrawerBox = function() { 
        $scope.currentItem = null;
       // $scope.displayIndex = null;
      };
}]);