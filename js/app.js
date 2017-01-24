var app = angular.module('BookingApp',['ui.bootstrap']);
app.controller('BookingCtrl', function($scope, $uibModal, $controller){
   $scope.records = [{
       id:1,
       name:"9:00 AM",
       selected:"false",
       style : "blackText",
       custname : "",
       phonenumber : ""
   },{
       id:2,
       name:"10:00 AM",
       selected:"false",
       style : "blackText",
       custname : "",
       phonenumber : ""
   },{
       id:3,
       name:"11:00 AM",
       selected:"false",
       style : "blackText",
       custname : "",
       phonenumber : ""
   },{
       id:4,
       name:"12:00 AM",
       selected:"false",
       style : "blackText",
       custname : "",
       phonenumber : ""
   },{
       id:5,
       name:"1:00 PM",
       selected:"false",
       style : "blackText",
       custname : "",
       phonenumber : ""
   },{
       id:6,
       name:"2:00 PM",
       selected:"false",
       style : "blackText",
       custname : "",
       phonenumber : ""
   },{
       id:7,
       name:"3:00 PM",
       selected:"false",
       style : "blackText",
       custname : "",
       phonenumber : ""
   },{
       id:8,
       name:"4:00 PM",
       selected:"false",
       style : "blackText",
       custname : "",
       phonenumber : ""
   },{
       id:9,
       name:"5:00 PM",
       selected:"false",
       style : "blackText",
       custname : "",
       phonenumber : ""
   }];
    
    $scope.user = {name : "", phone : ""};
      
    $scope.open = function(){
        var slot = $scope.selectedSlot;
    var modalInstance = $uibModal.open({
        scope : $scope,
          templateUrl : 'myModalContent.html',
          controller : 'ModalInstanceCtrl',          
          className : 'ngdialog-theme-default',
          appendClassName : 'dialogforpopup',
          resolve : {
              items : function(){
                  $scope.getUserRecord();
                  return $scope.user;
              }
          }
      });  
        
      modalInstance.result.then(function (data){
          if(data.name.length > 0)
          {
            $scope.user = data;
            $scope.registerUser();
          }
          else
          {
              alert("Slot not registered. Username is required to register");
          }
         
      },function(){
      });   
    }; 
    
    $scope.getUserRecord = function(){
       var slot = $scope.selectedSlot; 
        $scope.records.forEach(function(rec){
        if(rec.name == slot) 
           {
               $scope.user.name = rec.custname;
               $scope.user.phone = rec.phonenumber;
               return $scope.user;
           }
        });
    };         
    
    $scope.registerUser = function(){ 
        var slot = $scope.selectedSlot;
        $scope.records.forEach(function(rec){
        if(rec.name == slot) 
        {
           var currentRecord = $scope.records[rec.id-1];
           currentRecord.custname = $scope.user.name;
           currentRecord.phonenumber = $scope.user.phone;                                    
           $scope.records[rec.id-1].style = "redText";
        }
        });
    };
});

app.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, items){
    $scope.ok = function(){
        $uibModalInstance.close($scope.user);
    };
    
    $scope.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    };
});