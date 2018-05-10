app.service('ProjectService', ['$http', function($http) {
    var self = this;
    var newEntry = {
        action: '',
        projectID: 0,
        start: new Date(),
        end: new Date()
    }
    self.hello = function() {
        console.log('i am the property service');
    }
}]);