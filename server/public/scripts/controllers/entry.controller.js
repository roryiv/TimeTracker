app.controller('EntryController', ['ProjectService', function(ProjectService) {
    var self = this;
    self.hello = ProjectService.hello;
    self.hello();
    self.startTime;
    self.endTime;
    console.log('entrycontroller');

    self.timer = function() {
        console.log(self.startTime);
        console.log(self.endTime);
    }
    
}]);