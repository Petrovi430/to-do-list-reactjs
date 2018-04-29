var React = require('react');
var NewTask = require('./NewTask.jsx');
var TaskList = require('./TaskList.jsx');

require('./TasksApp.css');

var TasksApp = React.createClass({
    getInitialState: function() {
        return {
            tasks: [],
            status: 1
        }
    },
    handleTaskAdd: function(newTask) {
        var newTasks = this.state.tasks.slice();
        newTasks.unshift(newTask);
        this.setState({ tasks: newTasks });
    },
    handleTaskCompleted: function(taskCompleted) {
        var taskId = taskCompleted.id;
        var newTasks = this.state.tasks.map(function(task) {
            if(taskId == task.id){
                task.completed = !task.completed;
            }
            return task;
        });
        this.setState({ tasks: newTasks });
    },
    handleTaskDelete: function(taskDel) {
        var taskId = taskDel.id;
        var newTasks = this.state.tasks.filter(function(task) {
            return task.id !== taskId;
        });
        this.setState({ tasks: newTasks });
    },
    handleChangeStatus: function(event) {
        switch(event.target.innerText.toLowerCase()){
            case "all": this.setState({ status: 1 }); break;
            case "new": this.setState({ status: 2 }); break;
            case "completed": this.setState({ status: 3 }); break;
        }
    },
    componentDidMount: function() {
        var localTasks = JSON.parse(localStorage.getItem('tasks'));
        if (localTasks) {
            this.setState({ tasks: localTasks });
        }
    },
    componentDidUpdate: function() {
        this._updateLocalStorage();
    },
    _updateLocalStorage: function() {
        var tasks = JSON.stringify(this.state.tasks);
        localStorage.setItem('tasks', tasks);
    },
    render: function() {
        var status = this.state.status;
        var styleBold = {
            fontWeight: 'bold'
        };
        return (
            <div className="notes-app">
                <NewTask onTaskAdd={this.handleTaskAdd}/>
                <TaskList 
                    tasks={this.state.tasks} 
                    status={this.state.status} 
                    onTaskCompleted={this.handleTaskCompleted}
                    onTaskDelete={this.handleTaskDelete} />
                <div>
                    <ul>
                        <li style={(status == 1 ? styleBold : {})} onClick={this.handleChangeStatus}>All</li>
                        <li style={(status == 2 ? styleBold : {})} onClick={this.handleChangeStatus}>New</li>
                        <li style={(status == 3 ? styleBold : {})} onClick={this.handleChangeStatus}>Completed</li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = TasksApp;
