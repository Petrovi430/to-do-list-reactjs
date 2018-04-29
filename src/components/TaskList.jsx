var React = require('react');
var ItemTask = require('./ItemTask.jsx');

require('./TaskList.css');

var TaskList = React.createClass({
    render: function() {
        var onTaskDelete = this.props.onTaskDelete;
        var onTaskCompleted = this.props.onTaskCompleted;
        var status = this.props.status;
        var rezult = this.props.tasks.filter(function(task) {
            if(status == 1){
                return true;
            }
            if(status == 2){
                return !task.completed;
            }
            if(status == 3){
                return task.completed;
            }
        });
        return (
            <div className="task-list">
                {
                    rezult.map(function(task) {
                        return (
                            <ItemTask 
                                key={task.id} 
                                completed={task.completed}
                                onCompleted={onTaskCompleted.bind(null, task)}
                                onDelete={onTaskDelete.bind(null, task)}>
                                {task.task}
                            </ItemTask>
                        )
                    })
                }
            </div>
        );
    }
});

module.exports = TaskList;
