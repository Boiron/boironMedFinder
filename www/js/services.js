angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('TubeService', [function($scope, $stateParams){
    $scope.tubeItem = {
        'id': '1',
        'img': "img/E2QvdwZxQlC1McdTowPd_bluetubes.png"
    }
}]);
