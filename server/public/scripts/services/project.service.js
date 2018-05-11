app.service('ProjectService', ['$http', function ($http) {
    var self = this;
    self.entries = { list: [] };
    self.projects = { list: [] };
    self.newEntry = {
        action: '',
        start: '',
        end: '',
        duration: 0,
        project_id: 0
    };
    self.newProject = {
        name: ''
    };
    self.startDate = new Date();
    self.endDate = new Date();

    self.getEntries = function () {
        $http({
            method: 'GET',
            url: '/time'
        })
            .then(function (response) {
                console.log('server response to get entries', response.statusText);
                self.entries.list = response.data;
            })
            .catch(function (error) {
                console.log('entries get error', error);
            });
    }

    self.getProjects = function () {
        $http({
            method: 'GET',
            url: '/project'
        })
            .then(function (response) {
                console.log('server response to get projects', response.statusText);
                self.projects.list = response.data;
            })
            .catch(function (error) {
                console.log('projects get error', error);
            });
    }

    self.addEntry = function () {
        self.newEntry.duration = self.calculateDuration(self.startDate, self.endDate);
        self.newEntry.start = self.makeDateString(self.startDate);
        self.newEntry.end = self.makeDateString(self.endDate);

            $http({
                method: 'POST',
                url: '/time',
                data: self.newEntry
            })
                .then(function (response) {
                    console.log('server response to entry post', response.statusText);
                    alert('Entry recorded!');
                    self.getEntries();
                    self.resetForm();
                })
                .catch(function (error) {
                    console.log('entry post error', error);
                });
    }

    self.addProject = function () {
        $http({
            method: 'POST',
            url: '/project',
            data: self.newProject
        })
            .then(function (response) {
                console.log('server response to project post', response.statusText);
                alert('Project added!');
                self.getProjects();
                self.resetForm();
            })
            .catch(function (error) {
                console.log('project post error', error);
            });
    }

    self.deleteEntry = function (unwantedEntry) {
        $http({
            method: 'DELETE',
            url: '/time',
            params: unwantedEntry
        })
            .then(function (response) {
                console.log('server response to entry delete', response.statusText);
                self.getEntries();
            })
            .catch(function (error) {
                console.log('error on entry delete', error);
            })
    }

    self.deleteProject = function (unwantedProject) {
        $http({
            method: 'DELETE',
            url: '/project',
            params: unwantedProject
        })
            .then(function (response) {
                console.log('server response to project delete', response.statusText);
                self.getProjects();
            })
            .catch(function (error) {
                console.log('error on project delete', error);
            })
    }

    self.calculateDuration = function (start, end) {
        return (end.getTime() - start.getTime()) / 3600000;
    }

    self.makeDateString = function (date) {
        return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' +
            date.getHours() + ':' + date.getMinutes;
    }


    self.resetForm = function () {
        self.newEntry.action = '';
        self.newEntry.start = '';
        self.newEntry.end = '';
        self.newEntry.duration = 0;
        self.newEntry.project_id = 0;
        self.newProject.name = '';
    }
}]);