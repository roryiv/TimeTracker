app.controller('EntryController', ['ProjectService', function (ProjectService) {
    var self = this;

    self.entries = ProjectService.entries;
    self.projects = ProjectService.projects;
    self.newEntry = ProjectService.newEntry;
    self.dates = ProjectService.dates;

    self.getEntries = ProjectService.getEntries;
    self.getProjects = ProjectService.getProjects;
    self.addEntry = ProjectService.addEntry;
    self.deleteEntry = ProjectService.deleteEntry;

    self.displayDate = function (milliseconds) {
        var date = new Date(milliseconds);
        return (date.getMonth() + 1) + '/' + date.getDate() +
            '/' + date.getFullYear();
    }

    self.fetchProject = function(id) {
        for (let project of self.projects.list) {
            if (project.id == id) {
                return project.name;
            }
        }
    }

    self.dates.startDate.setSeconds(0);
    self.dates.startDate.setMilliseconds(0);
    self.dates.endDate.setSeconds(0);
    self.dates.endDate.setMilliseconds(0);

    self.getEntries();
    self.getProjects();
}]);