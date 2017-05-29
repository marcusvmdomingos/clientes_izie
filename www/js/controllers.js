angular.module('app.controllers', [])
  
.controller('meusClientesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.doRefresh = function(){
      $scope.init();
      $scope.$broadcast('scroll.refreshComplete');
    }

}])
   
.controller('novoClienteCtrl', ['$scope', '$http', '$ionicModal', 


// function ($scope, $cordovaCamera, $ionicLoading, $localstorage, $ionicModal) {

function ($scope, $http, $ionicModal,) { 

	$scope.customers = [];
	$scope.error;
	$scope.customer;
 
  $scope.lastpage=1;
  $scope.init = function() {
    $scope.lastpage=1;
        $http({
            url: 'http://clientesIzieAPI.app/api/api/customers',
            method: "GET",
            params: {page: $scope.lastpage}
        }).success(function(customers, status, headers, config) {
            $scope.customers = customers.data;
            $scope.currentpage = customers.current_page;
        });
    };
  $scope.noMoreItemsAvailable = false;
  $scope.loadMore = function(limit) {
    console.log("Load More Called");
                if(!limit){
                  limit = 5;
                }
 
                $scope.lastpage +=1;
                $http({
                    url: 'http://clientesIzieAPI.app/api/api/customers',
                    method: "GET",
                    params: {limit: limit, page:  $scope.lastpage}
                }).success(function (customers, status, headers, config) {
                    console.log(customers);
 
                    if (customers.next_page_url == null){
                         $scope.noMoreItemsAvailable = true;
                     }
 
                    $scope.customers = $scope.customers.concat(customers.data);
 
 
                });
                $scope.$broadcast('scroll.infiniteScrollComplete');
            };

  $scope.addresses = [];


  $scope.addAddress = function(address) {
 
      console.log("add address: ",address);
 
        $http.post('http://clientesIzieAPI.app/api/api/addresses', {
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
    address.client_id = "";
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
 