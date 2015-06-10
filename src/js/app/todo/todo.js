
app.factory('todoStorage', function () {
    var STORAGE_ID = 'todos';

    return {
        get: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        put: function (todos) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
        }
    };
});

app.controller('TodoCtrl', ['$scope', '$location', '$filter', 'todoStorage', function($scope, $location, $filter, todoStorage) {
    var todos = $scope.todos = todoStorage.get();

    $scope.newTodo = '';
    $scope.remainingCount = $filter('filter')(todos, {completed: false}).length;


    if ($location.path() === '') {
        $location.path('/');
    }

    $scope.location = $location;

    $scope.$watch('location.path()', function (path) {
        console.log(path);
        $scope.statusFilter = { '/app/todo/active': {completed: false}, '/app/todo/completed': {completed: true} }[path];
    });

    $scope.$watch('remainingCount == 0', function (val) {
        $scope.allChecked = val;
    });

    $scope.addTodo = function () {
        var newTodo = $scope.newTodo.trim();
        if (newTodo.length === 0) {
            return;
        }

        todos.push({
            title: newTodo,
            completed: false
        });
        todoStorage.put(todos);

        $scope.newTodo = '';
        $scope.remainingCount++;
    };

    $scope.editTodo = function (todo) {
        todo.editedTodo = true;
        // Clone the original todo to restore it on demand.
        $scope.originalTodo = angular.extend({}, todo);
    };

    $scope.doneEditing = function (todo) {
        todo.editedTodo = false;
        todo.title = todo.title.trim();

        if (!todo.title) {
            $scope.removeTodo(todo);
        }

        todoStorage.put(todos);
    };

    $scope.revertEditing = function (todo) {
        todos[todos.indexOf(todo)] = $scope.originalTodo;
        $scope.doneEditing($scope.originalTodo);
    };

    $scope.removeTodo = function (todo) {
        $scope.remainingCount -= todo.completed ? 0 : 1;
        todos.splice(todos.indexOf(todo), 1);
        todoStorage.put(todos);
    };

    $scope.todoCompleted = function (todo) {
        $scope.remainingCount += todo.completed ? -1 : 1;
        todoStorage.put(todos);
    };

    $scope.clearCompletedTodos = function () {
        $scope.todos = todos = todos.filter(function (val) {
            return !val.completed;
        });
        todoStorage.put(todos);
    };

    $scope.markAll = function (completed) {
        todos.forEach(function (todo) {
            todo.completed = completed;
        });
        $scope.remainingCount = !completed ? todos.length : 0;
        todoStorage.put(todos);
    };
}]);

