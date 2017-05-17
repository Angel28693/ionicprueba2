angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});





function login(){
	
	
	
	usuario=document.getElementById("username").value;
	contrasena=document.getElementById("pass").value;
	
	if(usuario!="" && contrasena!=""){
		

$.ajax({
    data: {
  "serviceData": "",
  "userAvailability": "",
  "sessionTokenBck": "",
  "firstName": "",
  "lastName": "",
  "email": +usuario,
  "active": false,
  "passwordHash": +contrasena,
  "sessionTokenWeb": "",
  "phoneNumber": "",
  "agreedToTermsOfUse": false,
  "whereKnownUs": "",
  "lastLogin": "",
  "sessionTokenCli": "",
  "sessionTokenPro": "",
  "funds": 0,
  "tokenFacebook": "",
  "tokenGoogle": "",
  "tokensIonic": "",
  "photoPath": "",
  "photoExt": "",
  "userRole": {
    "userRole": "",
    "description": "",
    "fatherUserRole": "",
    "domain": "",
    "defaultNamespace": "",
    "_persistence_shouldRefreshFetchGroup": false
  },
  "sync": 0,
  "usedCodeList": "",
  "referrer": "",
  "rut": "",
  "domain": "",
  "tutenSubRole": "",
  "userId": 0,
  "appVersion": "",
  "_persistence_shouldRefreshFetchGroup": false
},
    type: "GET",
    dataType: "json",
    url: "https://dev.tuten.cl:443/TutenREST/rest/user/",

            success: function(data) {
				alert(data)
			}
})



			
			
			
			

		

		
	}else{
	alert('Complete todos los campos')	
	}
}


