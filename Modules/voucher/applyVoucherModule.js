// define angular module/app
var voucherApp = angular.module('voucherApp', []);

// create angular controller and pass in $scope and $http
function voucherAppController($scope, $http) {

	// create a blank object to hold our form information
	// $scope will allow this to pass between controller and view
	$scope.items = prods;
	$scope.couponNumber = null;
	$scope.prodId = $scope.items.product.id;
	$scope.prodQuantity = 0;
	$scope.message = null;

	// process the form
	$scope.processForm = function(ajaxUrl) {

		var params = $scope.prodId + '/' + $scope.couponNumber + '/' + $scope.prodQuantity;

		$http.get( ajaxUrl + params)
	        .success(function(data) {
	            console.log(data);

	            if (!data.success) {
	            	// if not successful, bind errors to error variables
	                 $scope.message = data.errorMessage;

	            } else {
	            	// if successful, bind success message to message
	            	$scope.message = null;
	                $scope.price = data.price;
	            }
	        });

	};

	$scope.updateProdId = function( prodId , price ) {
		$scope.price = price;
		$scope.prodId = prodId;
	};

	$scope.updateQuantity = function(prodId) {

		if ($scope.prodId == prodId) {

			$scope.prodQuantity = document.getElementById("prod"+prodId+"Quantity").value;
		}
	}

}