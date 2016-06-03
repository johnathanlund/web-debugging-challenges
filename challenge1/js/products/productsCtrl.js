angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams){
    var productType = $stateParams.id;

    if(productType === "shoes"){
        $scope.productData = productService.shoeData;
    } else {
        $scope.productData = productService.sockData;
    }
});//console log showed a SyntaxError here on this line.
//Found that it was missing a closing Curly bracket for the controller function.
