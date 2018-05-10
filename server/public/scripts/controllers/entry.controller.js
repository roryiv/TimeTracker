app.controller('EntryController', ['ProjectService', function(ProjectService) {
    var self = this;
    self.hello = ProjectService.hello;
    self.hello();
    console.log('entrycontroller');
}]);