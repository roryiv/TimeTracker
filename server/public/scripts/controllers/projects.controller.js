app.controller('ProjectsController', ['ProjectService', function(ProjectService) {
    var self = this;
    self.hello = ProjectService.hello;
    self.hello();
    console.log('projectscontroller');
}]);