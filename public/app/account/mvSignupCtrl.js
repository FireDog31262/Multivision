angular.module('app').controller('mvSignupCtrl', function($scope, mvUser, mvNotifier, $location, mvAuth){

    $scope.signup = function(){
        var newUserData = {
            userName: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        mvAuth.createUser(newUserData).then(function(){
            mvNotifier.notify('Usser account created!');
            $location.path('/');
        }, function(reason){
            mvNotifier.error(reason);
        })
    }
});