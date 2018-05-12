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

    self.displayDate = function (date) {
        return (date.getMonth() + 1) + '/' + date.getDate() +
            '/' + date.getFullYear();
    }

    self.getEntries();
    self.getProjects();
}]);