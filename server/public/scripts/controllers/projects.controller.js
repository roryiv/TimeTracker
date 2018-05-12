app.controller('ProjectsController', ['ProjectService', function(ProjectService) {
    var self = this;
    self.projects = ProjectService.projects;
    self.newProject = ProjectService.newProject;

    self.getProjects = ProjectService.getProjects;
    self.addProject = ProjectService.addProject;
    self.deleteProject = ProjectService.deleteProject;

    self.getProjects();
}]);