angular.module('app.controllers', [])
  
.controller('meusClientesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('novoClienteCtrl', ['$scope', '$http', '$ionicModal', 


// function ($scope, $cordovaCamera, $ionicLoading, $localstorage, $ionicModal) {

function ($scope, $http, $ionicModal,) { 

	$scope.customers = [];
	$scope.error;
	$scope.customer;
 
	$scope.init = function() {
        $http({
            url: 'http://192.168.10.11/api/api/customers',
            method: "GET",
        }).success(function(customers, status, headers, config) {
            $scope.customers = customers.data;
        });
    };

    $scope.addCustomer = function(customer) {
 
      console.log("add customer: ",customer);
 
        $http.post('http://192.168.10.11/api/api/customers', {
            body: customer,
        }).success(function(response) {
            $scope.customers.unshift(response.data);
            console.log($scope.customers);
            $scope.customer = '';
            console.log("Customer Created Successfully");
        }).error(function(){
          console.log("error");
        });

    };
 
    $scope.init();

  $scope.addresses = [];


  $scope.addAddress = function(address) {
 
      console.log("add address: ",address);
 
        $http.post('http://192.168.10.11/api/api/addresses', {
            body: address,
        }).success(function(response) {
            $scope.addresses.unshift(response.data);
            console.log($scope.addresses);
            $scope.address = '';
            console.log("Address Created Successfully");
        }).error(function(){
          console.log("error");
        });
        
    };


  $ionicModal.fromTemplateUrl('../templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.createAddress = function(address) {        
    $scope.addresses.push({ name: address.name });
    $scope.modal.hide();
    address.cep = ""
    address.name = ""
    address.complement = ""
    address.number = ""
    address.city = "";
    address.state = "";
  };

  


	// 
 //    $scope.uploadPicture = function() {
	// 	$ionicLoading.show({template: 'Sto inviando la foto...'});
	// 	var fileURL = $scope.picData;
	// 	var options = new FileUploadOptions();
	// 	options.fileKey = "file";
	// 	options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
	// 	options.mimeType = "image/jpeg";
	// 	options.chunkedMode = true;

	// 	var params = {};
	// 	params.value1 = "someparams";
 //        params.value2 = "otherparams";

	// 	options.params = params;

	// 	var ft = new FileTransfer();
	// 	ft.upload(fileURL, encodeURI("../templates/parts/upload.php"), viewUploadedPictures, function(error) {$ionicLoading.show({template: 'Errore di connessione...'});
	// 	$ionicLoading.hide();}, options);
 //    }

	// var viewUploadedPictures = function() {
	// 	$ionicLoading.show({template: 'Sto cercando le tue foto...'});
 //        server = "http://www.yourdomain.com/upload.php";
 //        if (server) {
 //            var xmlhttp = new XMLHttpRequest();
 //            xmlhttp.onreadystatechange=function(){
 //            if(xmlhttp.readyState === 4){
 //                    if (xmlhttp.status === 200) {					 
 //                document.getElementById('server_images').innerHTML = xmlhttp.responseText;
 //                    }
 //                    else { $ionicLoading.show({template: 'Errore durante il caricamento...', duration: 1000});
	// 				return false;
 //                    }
 //                }
 //            };
 //            xmlhttp.open("GET", server , true);
 //            xmlhttp.send()}	;
	// 	$ionicLoading.hide();
 //    }

	// $scope.viewPictures = function() {
	// 	$ionicLoading.show({template: 'Sto cercando le tue foto...'});
 //        server = "http://www.yourdomain.com/upload.php";
 //        if (server) {
 //            var xmlhttp = new XMLHttpRequest();
 //            xmlhttp.onreadystatechange=function(){
 //            if(xmlhttp.readyState === 4){
 //                    if (xmlhttp.status === 200) {					 
 //                document.getElementById('server_images').innerHTML = xmlhttp.responseText;
 //                    }
 //                    else { $ionicLoading.show({template: 'Errore durante il caricamento...', duration: 1000});
	// 				return false;
 //                    }
 //                }
 //            };
 //            xmlhttp.open("GET", server , true);
 //            xmlhttp.send()}	;
	// 	$ionicLoading.hide();
 //    }
}])
      
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('confirmacaoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('detalheClienteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	

}])
 