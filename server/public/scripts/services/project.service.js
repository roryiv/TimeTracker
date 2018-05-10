app.service('ProjectService', ['$http', function($http) {
    var self = this;
    self.hello = function() {
        console.log('i am the property service');
    }
}]);